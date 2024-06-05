// To make a folder private, which should not be considered by the 
// routing system, prefix the folder name whit '_' underscore
// if you navigate to .../_lib route, you encounter the 'page not found'

export default function PrivateRoute() {
  return <h1>You can't view this in the browser</h1>;
}
