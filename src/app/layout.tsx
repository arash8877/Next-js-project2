import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


//-------------Metadata--------------------------------
// export const metadata: Metadata = {
//   title: "Arash Website",
//   description: "Generated by Arash Company",
// };

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Arash Website",
    template: "%s | Arash"
  },
  description: "Generated by Arash Company",
};





//------------------------------------------------------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <p style={{ backgroundColor: "lightblue", padding: "5rem" }}>Header</p>
        </header>
        {children}
        <footer>
          <p style={{ backgroundColor: "pink", padding: "5rem" }}>Footer</p>
        </footer>
      </body>
    </html>
  );
}


//------------------------------- Layout -----------------------------------

// Layout is a UI that is shared between multiple pages in the app
// in route localhost:3000, the {children} refers to:         app -> page.tsx -> Home component
// in route localhost:3000/about, the {children} refers to:   app -> about -> page.tsx
// and ...



//------------------------------- Metadata -----------------------------------

// Both layout.tsx and page.tsx can export metadata. If defined in a layout
// it applies to the all pages in the layout; if defined in a page, it applies only to that page.
// for static metadata, see   --->   about/page.tsx
// for dynamic metadata, see  --->   products/[productId]/page.tsx

// title metadata: for "default" key   ---> see blog/page.tsx and navigate to route http://localhost:3000/blog
// title metadata: for "template" key  ---> see profile/page.tsx and navigate to route http://localhost:3000/profile
// title metadata: for "absolute" key  ---> see auth/login/page.tsx and navigate to route http://localhost:3000/login

//------------------------------- Active Link -----------------------------------

//see app/(auth)/layout.tsx -- check localhost:3000/register