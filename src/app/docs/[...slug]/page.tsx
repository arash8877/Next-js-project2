//Next.js feature "catch-all-segments"
//This page will match any URL that contains the "docs" segment in the path.
//consider that if we navigate to .../docs we get 404 error page. 
// to access ../docs, Next.js provide "optional catch-all-segments" feature. the only thing 
//is needed is convert folder name [...slug] ===> [[...slug]]


import { iParams } from "@/type/page";

export default function Docs({ params }: iParams) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Viewing docs for feature {params.slug[0]}</h1>;
  }

  return <h1>Docs home page</h1>;
}
