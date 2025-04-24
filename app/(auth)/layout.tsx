import { ReactNode } from "react";
import { Toaster } from "sonner";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-center">
      {children} <Toaster position="top-right" duration={5000} />
    </div>
  );
};

export default AuthLayout;
