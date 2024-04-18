import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        usernameoremail: { label: "Username or Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const response = await res.json();
        console.log("response ", response);
        if (response.statuscode === 401) {
          // If the request is not successful, throw an error
          throw new Error(
            "Unauthorized. Please check your credentials and try again."
          );
        }

        //const response = await res.json();
        //console.log("res ", response.statuscode);

        //console.log("response ", response);
        if (response.statuscode === 200) {
          console.log("response ", response);
          return response.results;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    //error: "/login",
    //signOut: "http://localhost:3000/",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // กำหนดค่า user ใน token เป็นค่าที่ได้จาก response.results
        token.id = user.id;
        token.username = user.username;
        token.email = user.email;
        token.f_name = user.f_name;
        token.l_name = user.l_name;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        // กำหนดค่า user ใน session เป็นค่าจาก token
        session.user.id = token.id;
        session.user.username = token.username;
        session.user.email = token.email;
        session.user.f_name = token.f_name;
        session.user.l_name = token.l_name;
      }

      return session;
    },
    /*     async redirect({ url, baseUrl }) {
      if (url === "/login") {
        return Promise.resolve("/main");
      }
      return Promise.resolve("/");
    }, */
  },
});

export { handler as GET, handler as POST };
