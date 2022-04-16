import React from 'react';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';


function Header({...props}:HeaderProps): JSX.Element {
    return(
        <div {...props}>
            Sidebar
        </div>
    )
}

export default Header;