"use client";
// import "./styles.css";
import Link from "next/link";
import { usePathname } from "next/navigation"; // to determine link is active

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();
    
  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href)
        return (
          <Link href={link.href} key={link.name} className={isActive ? "font-bold text-blue-800 mr-4" : "text-blue-500 mr-4"}>
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
