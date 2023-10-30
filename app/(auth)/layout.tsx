const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default AuthLayout;
