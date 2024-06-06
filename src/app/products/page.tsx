import Link from "next/link";

export default function Products() {
  return (
    <div className="flex flex-col items-center gap-2 justify-between p-24">
      <Link href="/" className="bg-gray-500 p-4 text-white rounded mb-5">
        Home
      </Link>
      <h1>List of the products:</h1>
      <h2>
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/products/3" replace>Product 3</Link>
      </h2>
      <h2>.........</h2>
    </div>
  );
}


// in Link there is a property called 'replace'. when you are in this link/product 
// and click 'back', you redirect to the Home-page instead of product-list page