import React from "react";
import SideBarBtnElement from "./SideBarBtnElement";
import useDesigner from "./hooks/useDesigner";
import FormElementsSidebar from "./FormElementsSidebar";
import PropertiesFormSidebar from "./PropertiesFormSidebar";

const DesignerSidebar = () => {
  const { selectedElement } = useDesigner();
  return (
    <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 p-4 border-l-2 border-muted bg-background overflow-y-auto h-full">
      {!selectedElement && <FormElementsSidebar />}
      {selectedElement && <PropertiesFormSidebar />}
    </aside>
  );
};

export default DesignerSidebar;
