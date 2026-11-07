import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return <main className="min-w-0 flex-1 lg:ml-64">{children}</main>;
}
