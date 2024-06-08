import Link from "next/link";

export default function F1() {
  return (
    <>
      <h1>F1 page</h1>
      <div className="m-5 text-xs text-red-600">
        <Link href="/f1/f2">Go to F2</Link>
      </div>
    </>
  );
}
