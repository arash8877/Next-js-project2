// the function which is 'default' exported, will be viewed in the browser.
// if you navigate to .../dashboard route, you see the
// Dashboard function not the BarChart function

export function BarChart() {
  return <h1>Bar chart</h1>;
}

export default function Dashboard() {
  return <h1>Dashboard</h1>;
}
