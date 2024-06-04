//If user wants to access to a route which we don't have in the app,
//Next.js automatically redirect to the  "not-found" page under the hood.
//if you want to 'programmatically' render a not-found page, based on a 
//certain condition, we can use 'notFound function' from "next/navigation"

export default function NotFound() {
    return (
      <>
        <h3>Company Arash IT</h3>
        <h1>Review not found</h1>
    
      </>
    );
  }