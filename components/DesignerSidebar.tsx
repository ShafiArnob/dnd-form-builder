import React from "react";
import { FormElements } from "./FormElements";
import SideBarBtnElement from "./SideBarBtnElement";

const DesignerSidebar = () => {
  return (
    <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 p-4 border-l-2 border-muted bg-background overflow-y-auto h-full">
      Elements
      <SideBarBtnElement formElement={FormElements.TextField} />
    </aside>
  );
};

export default DesignerSidebar;
