interface iComplexParams {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: iComplexParams) {
  return (
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
  );
}
