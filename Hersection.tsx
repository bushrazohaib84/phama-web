
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import Link from "next/link";
import pw from "/public/pw.png"
import { Button } from "./button";
import {ShoppingBagIcon} from "lucide-react"
async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <main className="top-4  ">

        <Image
        src={pw}
        alt="boys"
        width={450}
        height={400}
      className="boys justify-center m-12 p-1 bg-white rounded-full "
    />
  
  
  <br />
  <br />
  <br />
  <br />
  <br />

  <div className="m-12 ">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-9 space-y-4 m-6 text-blue-600 ">
       PharmaWeb Solutions <span className="text-green-500">-</span>
       <br/> <span className="text-black text-4xl"> Your Trusted Online Pharmacy...</span>
      </h1>
       <p className="leading-7 [&:not(:first-child)]:mt-9 m-6">
       Explore a wide range of prescription drugs and over-the-counter medications. 
       <br />
       Enjoy fast delivery and expert customer support.
      
       </p>
      

     <Button className="mt-11 px-8 m-4 text-white ">
       <ShoppingBagIcon className="mr-2 h-4 w-4 " /> Shop Now
     </Button>
     </div>

        
    </main>
  );
}