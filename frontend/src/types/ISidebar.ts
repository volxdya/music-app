import React from "react";

export interface ISidebar {
    title: string;
    component: React.ReactNode;
    handleClick?: () => void;
}