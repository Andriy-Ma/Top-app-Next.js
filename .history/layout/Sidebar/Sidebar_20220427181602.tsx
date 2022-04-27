import React from 'react';
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import Menu from '../Menu/Menu';
import Logo from '../logo.svg';
import cn from 'classnames';

function Sidebar({className,...props}:SidebarProps): JSX.Element {
    return(
        <div {...props} className={cn(className ,styles.sidebar)}>
        <Logo/>
         <div> search</div>
         <Menu/>
        </div>
    )
}

export default Sidebar;