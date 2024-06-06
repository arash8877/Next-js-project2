import { Metadata } from "next";
import { iParams } from "@/type/page";

//-------------------------simple example------------------------------------
// export const generateMetadata = ({params}: iParams) => {
//   return {
//     title: `Product ${params.productId}`
//   }
// }
//------------------------------using async function-------------------------
export const generateMetadata = async ({ params }: iParams) => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone${params.productId}`);
    }, 100);
  });
  return {
    title: `Product - ${title}`,
  };
};


//--------------------------------------------------------------------------
export default function ProductDetails({ params }: iParams) {
  return <h1>This is the details of product {params.productId}</h1>;
}

//using dynamic metadata
