"use client";

import { MdTextFields } from "react-icons/md";
import { ElementType, FormElement } from "../FormElements";

const type: ElementType = "TextField";

export const TextFieldFormElement: FormElement = {
  type: type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: "Text Field",
      helperText: "Helper text",
      required: false,
      placeholder: "Value here...",
    },
  }),
  designerBtnElement: {
    icon: MdTextFields,
    label: "Text Field",
  },
  designerComponent: () => <div>Designer Component</div>,
  formComponent: () => <div>Designer Component</div>,
  propertiesComponent: () => <div>Designer Component</div>,
};
