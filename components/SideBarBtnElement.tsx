import React from "react";
import { FormElement } from "./FormElements";
import { Button } from "./ui/button";
import { useDraggable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

const SideBarBtnElement = ({ formElement }: { formElement: FormElement }) => {
  const { label, icon: Icon } = formElement.designerBtnElement;
  const dragabble = useDraggable({
    id: `designer-bt-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtnElement: true,
    },
  });
  return (
    <Button
      ref={dragabble.setNodeRef}
      variant={"outline"}
      className={cn(
        "flex flex-col gap-2 h-[120px] w-[120px] cursor-grab",
        dragabble.isDragging && "ring-2 ring-primary"
      )}
      {...dragabble.listeners}
      {...dragabble.attributes}
    >
      <Icon className="h-8 w-8 text-primary cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
};

export const SideBarBtnElementDragOverlay = ({
  formElement,
}: {
  formElement: FormElement;
}) => {
  const { label, icon: Icon } = formElement.designerBtnElement;
  const dragabble = useDraggable({
    id: `designer-bt-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtnElement: true,
    },
  });
  return (
    <Button
      variant={"outline"}
      className="flex flex-col gap-2 h-[120px] w-[120px] cursor-grab"
    >
      <Icon className="h-8 w-8 text-primary cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
};

export default SideBarBtnElement;
