import React from "react";
import { TextFieldFormElement } from "./fields/TextField";
import { TitleFieldFormElement } from "./fields/TitleField";
import { SubTitleFieldFormElement } from "./fields/SubTitleField";

export type ElementType = "TextField" | "TitleField" | "SubTitleField";

export type SubmitFunction = (key: string, value: string) => void;

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
    submitValue?: (key: string, value: string) => void;
    isInvalid?: boolean;
    defaultValue?: string;
  }>;
  //properties of the form
  propertiesComponent: React.FC<{
    elementInstance: FormElementInstance;
  }>;
  validate: (formElement: FormElementInstance, currentValue: string) => boolean;
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
  TitleField: TitleFieldFormElement,
  SubTitleField: SubTitleFieldFormElement,
};
