import React from "react";
import { TextFieldFormElement } from "./fields/TextField";

export type ElementType = "TextField";

export type FormElement = {
  type: ElementType;

  // the id will be added later
  construct: (id: string) => FormElementInstance;

  designerBtnElement: {
    icon: React.ElementType;
    label: string;
  };

  //component -> designer for each element
  designerComponent: React.FC<{
    elementInstance: FormElementInstance;
  }>;
  //component -> form preview or for submit page
  formComponent: React.FC<{
    elementInstance: FormElementInstance;
  }>;
  //properties of the form
  propertiesComponent: React.FC<{
    elementInstance: FormElementInstance;
  }>;
};

export type FormElementInstance = {
  id: string;
  type: ElementType;
  extraAttributes?: Record<string, any>;
};

type FormElementType = {
  [key in ElementType]: FormElement;
};

export const FormElements: FormElementType = {
  TextField: TextFieldFormElement,
};
