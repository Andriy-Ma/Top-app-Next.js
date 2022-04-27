import React from 'react';
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import Menu from '../Menu/Menu';
import Logo from '../logo.svg';

function Sidebar({...props}:SidebarProps): JSX.Element {
    return(
        <div {...props}>
        <Logo/>
         <div> search</div>
         <Menu/>
        </div>
    )
}

export default Sidebar;