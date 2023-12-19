import React from "react";
import SideBarBtnElement from "./SideBarBtnElement";
import { FormElements } from "./FormElements";
import { Separator } from "./ui/separator";

const FormElementSidebar = () => {
  return (
    <div>
      <p className="text-sm text-foreground/70">Drag and drop elements</p>
      <Separator className="my-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
        <p className="text-sm text-muted-foreground col-span-1 md:col-span-2 my-2 place-self-start">
          Layout elements
        </p>
        <SideBarBtnElement formElement={FormElements.TitleField} />
        <SideBarBtnElement formElement={FormElements.SubTitleField} />
        <SideBarBtnElement formElement={FormElements.ParagraphField} />
        <p className="text-sm text-muted-foreground col-span-1 md:col-span-2 my-2 place-self-start">
          Form elements
        </p>
        <SideBarBtnElement formElement={FormElements.TextField} />
      </div>
    </div>
  );
};

export default FormElementSidebar;
