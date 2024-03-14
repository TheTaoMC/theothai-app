//import { Inter, } from "next/font/google";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit_init = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-kanit',
})

import 'primeicons/primeicons.css';
//import { PrimeReactProvider } from 'primereact/api';
//import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

//const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit_init.className}>{children}</body>
    </html>
  );
}
