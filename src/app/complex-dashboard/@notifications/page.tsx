import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div className="flex flex-col relative">
        <h1>Notifications</h1>
        <Link href="/complex-dashboard/archived" className="absolute top-12 left-12 mt-12 text-xs text-red-600">Archived</Link>
      </div>
    </Card>
  );
}
