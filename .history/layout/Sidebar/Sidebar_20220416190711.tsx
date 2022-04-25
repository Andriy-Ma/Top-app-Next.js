import React from 'react';
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';


function Sidebar({...props}:SidebarProps): JSX.Element {
    return(
        <div {...props}>
          hui
        </div>
    )
}

export default Sidebar;