"use client";

import { useRouter } from "next/navigation"; 

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/"); //navigate to Home page
    // router.replace("/"); navigate to Home page
    // router.back(); navigate to previous page
    // router.forward(); navigate to forward page
  };
  return (
    <>
      <h1>Order-Product Page</h1>
      <button onClick={handleClick} >
        Place order
      </button>
    </>
  );
}
