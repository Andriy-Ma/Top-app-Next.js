import React from 'react';
import { FooterProps } from './Footer.props';
import styles from './Header.module.css';


function Footer({...props}:FooterProps): JSX.Element {
    return(
        <div {...props}>
            Sidebar
        </div>
    )
}

export default Footer;