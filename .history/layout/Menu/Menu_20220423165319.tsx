import React, { useContext } from 'react';
import { AppContext } from '../../contextt/app.context';
import styles from './Menu.module.css';


function Menu(): JSX.Element {

    const {menu,setMenu, firstCategory} = useContext(AppContext)
    console.log(menu)
    return(
       <div>
           <ul>
                {menu.map(m =>(<li key={m._id.secondCategory} >{m._id.secondCategory}</li>) )}
           </ul>
       </div>
    )
}

export default Menu;