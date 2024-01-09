import React from "react";
import Logo from "./Logo";
import SidebarRoutes from "./sidebar-routes";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <aside className="p-6">
        <Logo />
      </aside>
      <section>
        <SidebarRoutes />
      </section>
    </div>
  );
};

export default Sidebar;
