// A rout isn't publicly accessible until you name it page.tsx or page.js
// If you navigate to .../dashboard rout, you encounter page-not-found
// (if there isn't any page.tsx in the folder!)

export default function LineChart() {
  return <h1>Line Chart</h1>;
}
