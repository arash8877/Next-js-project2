//If user wants to access to a route which we don't have in the app,
//Next.js automatically redirect to the  "not-found" page under the hood.
//This page is for if we want to have a CUSTOM appearance not-found page
//keep in mid that the name of the file should be not-found.

export default function NotFound() {
  return (
    <>
      <h1>Company Arash IT</h1>
      <h2>The page is not found</h2>
      <p>Could not found requested resource</p>
    </>
  );
}


//if you want to 'programmatically' render a not-found page, based on a 
//certain condition, we can use 'notFound function' from "next/navigation"
//refer to folder product --> [productId] --> review --> [reviewId]