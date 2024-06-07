interface iComplexParams {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login
}: iComplexParams) {
  const isLoggedIn = false;

  console.log('isLoggedIn:', isLoggedIn); // Debug
  console.log('login:', login); // Debug
  
  return (isLoggedIn ? (
    <div>
      <h1>{children}</h1>
      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </div>
  ) : (
    <div>{login}</div>
  ));
}



// manually change the isLoggedIn between true and false.