import Drawer from "@/components/drawer";
import { ReactNode } from "react";

export default function DrawerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {children}
      <Drawer className="lg:hidden" />
    </div>
  );
}
