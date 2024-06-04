

import { iParams } from "@/type/page";

export default function ProductDetails({ params }: iParams) {
  return <h1>This is the details of product {params.productId}</h1>;
}
