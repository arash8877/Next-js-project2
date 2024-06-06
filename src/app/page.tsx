import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-2 justify-between p-24">
      <h1>Welcome Home!</h1>
      <Link href="/blog" className="bg-gray-500 p-4 text-white rounded">
        Go to Blog
      </Link>
      <Link href="/products" className="bg-gray-500 p-4 text-white rounded">
        Go to Products
      </Link>
    </main>
  );
}
