"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CardUI({ id, name, img, price, detail }) {
  const router = useRouter();
  return (
    <>
      <Card className="w-48">
        <CardHeader
          shadow={false}
          floated={false}
          className="h-40 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <img
            src={img}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="py-2">
          <div
            className="mb-0 cursor-pointer"
            onClick={() => router.push("product")}
          >
            <Typography
              color="blue-gray"
              className="font-medium line-clamp-2 cursor-pointer"
            >
              Apple AirPodszxcxzczxczxcxasasasasasasas000000000000000000000
            </Typography>

            <div className="flex justify-between">
              <Typography color="blue-gray" className="text-xs content-center">
                ขายแล้ว 1 พัน ชิ้น
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium text-right text-red-500"
              >
                ฿95
              </Typography>
            </div>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="py-4 px-0 bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default CardUI;
