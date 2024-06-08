import Link from "next/link";

export default function F4() {
  return (
    <>
      <h1>F4 page</h1>
      <div className="flex flex-col gap-2 m-5 text-xs text-red-600">
        <Link href="/f1/f3">Go to F3</Link>
        <Link href="/about">Go to About</Link>
      </div>
    </>
  );
}
