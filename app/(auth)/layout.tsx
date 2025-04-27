import { ReactNode } from "react";
import { Toaster } from "sonner";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (isUserAuthenticated) redirect("/");
  return (
    <div className="auth-layout">
      {children} <Toaster position="top-right" duration={5000} />
    </div>
  );
};

export default AuthLayout;
