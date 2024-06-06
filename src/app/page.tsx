import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-2 justify-between p-24">
      <h1>Welcome Home!</h1>
      <Link href="/blog" style={{ background: "blue", color: "white" }}>
        Go to Blog
      </Link>
      <Link href="/products" style={{ background: "blue", color: "white" }}>
        Go to Products
      </Link>
    </main>
  );
}
