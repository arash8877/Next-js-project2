// Rout Group - for better file organization
// to make a folder as route-groupe wrap the name by parentheses
// then your route will be localhost:3000/Login


export const metadata = {
  title: {
    absolute: "Login",
  },
};

export default function Login() {
  return <h1 className="mt-10">Login Page</h1>;
}

//// using title metadata - "absolute" key ; see rootLayout
