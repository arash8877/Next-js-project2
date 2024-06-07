import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div className="flex flex-col relative">
        <h1>Archived Notifications</h1>
        <Link href="/complex-dashboard" className="absolute top-12 left-12 mt-12 text-xs text-red-600">
          Default
        </Link>
      </div>
    </Card>
  );
}
