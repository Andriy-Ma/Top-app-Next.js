
import React , { ReactNode, useState , createContext } from "react";
import { MenuItem } from "../intefaces/menu.interface";
import { TopLevelCategory } from "../intefaces/toppage.interface";

export interface IAppContext {
    menu: MenuItem[];
    firstCategory:TopLevelCategory;
    setMenu?: (newMenu: MenuItem[]) => void;  
}

export const AppContext = createContext<IAppContext>({menu: [], firstCategory: TopLevelCategory.Courses});

