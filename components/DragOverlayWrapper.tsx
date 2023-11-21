import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import React, { useState } from "react";
import { SideBarBtnElementDragOverlay } from "./SideBarBtnElement";
import { ElementType, FormElements } from "./FormElements";

const DragOverlayWrapper = () => {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);
  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragCancel: () => {
      setDraggedItem(null);
    },
    onDragEnd: () => {
      setDraggedItem(null);
    },
  });

  if (!draggedItem) return null;

  let node = <div>No Drag Overlay</div>;
  const isSidebarBtnElement = draggedItem.data?.current?.isDesignerBtnElement;

  if (isSidebarBtnElement) {
    const type = draggedItem.data?.current?.type as ElementType;
    node = <SideBarBtnElementDragOverlay formElement={FormElements[type]} />;
  }
  return <DragOverlay>{node}</DragOverlay>;
};

export default DragOverlayWrapper;
