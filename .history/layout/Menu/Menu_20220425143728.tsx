import React, { useContext } from 'react';
import { AppContext } from '../../contextt/app.context';
import { FirstLevelMenuItem, PageItem } from '../../intefaces/menu.interface';
import styles from './Menu.module.css';
import cn from 'classnames';
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

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => {
                    <div key={m.route}>
                        <a href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: m.id == firstCategory
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </a>
                        {m.id == firstCategory && buildSecondLevel(m)}
                    </div>
                })}
            </>
        );
    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div>
                {menu.map(m => {
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>
                            {m._id.secondCategory}
                        </div>
                        <div className={cn(styles.secondLevelBlock , {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}>
                            {buildThirdLevel(m.pages , menuItem.route)}
                        </div>
                    </div>
                })}
            </div>
        )
    }; 

    const buildThirdLevel = (pages:PageItem[], route: string) => {
        return(
            pages.map(p => {
                <a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel , {
                    [styles.thirdLevelActive]: true
                })}>
                    {p.category}
                </a>
            })
        )
    };

    return(
       <div className={styles.menu}>
           {buildFirstLevel()}
           lol
       </div>
    )
}

export default Menu;