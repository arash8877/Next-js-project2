"use client"; //to recover on client side by help of error-reset

import { iParams } from "@/type/page";
import { count } from "console";
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductReviews({ params }: iParams) {
  const ParamsReviewId = params.reviewId || "0"; // Default value if reviewId is undefined

  //-----------make an error--------------
  const random = getRandomInt(2);

  if (random === 1) { throw new Error("*** error in loading review ***")}

  //--------------------------------------
  if (parseInt(ParamsReviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Product {params.productId} - Review {params.reviewId}
    </h1>
  );
}

//If user wants to access to a route which we don't have in the app,
//Next.js automatically redirect to the  "not-found" page under the hood.
//if you want to 'programmatically' render a not-found page, based on a
//certain condition, we can use 'notFound function' from "next/navigation"
