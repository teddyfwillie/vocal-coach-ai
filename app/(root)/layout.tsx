import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Vocal Coach AI"
            width={38}
            height={32}
            className="inline-block"
          />
          <h2 className="text-primary-100">Vocal Coach AI</h2>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
