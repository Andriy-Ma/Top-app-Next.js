import React, { useContext } from 'react';
import { AppContext } from '../../contextt/app.context';
import { FirstLevelMenuItem } from '../../intefaces/menu.interface';
import styles from './Menu.module.css';
import GraduationIcon from './icons/graduation.svg';
import CloudIcon from './icons/cloud.svg';
import BookIcon from './icons/book.svg';
import BlockIcon from './icons/block.svg';
import { TopLevelCategory } from '../../intefaces/toppage.interface';

const firstLevelMenu: FirstLevelMenuItem[] =[
    {route: 'courses' , name: 'Курсы' , icon:<GraduationIcon/> , id: TopLevelCategory.Courses  },
    {route: 'services' , name: 'Сервисы' , icon:<CloudIcon/> , id: TopLevelCategory.Services  },
    {route: 'books' , name: 'Книги' , icon:<BookIcon/> , id: TopLevelCategory.Books  },
    {route: 'products' , name: 'Продукты' , icon:<BlockIcon/> , id: TopLevelCategory.Products }
]

function Menu(): JSX.Element {

    const {menu,setMenu, firstCategory} = useContext(AppContext)

    

    return(
       <div>
           <ul>
                {menu.map(m =>(<li key={m._id.secondCategory} >{m._id.secondCategory}</li>) )}
           </ul>
       </div>
    )
}

export default Menu;