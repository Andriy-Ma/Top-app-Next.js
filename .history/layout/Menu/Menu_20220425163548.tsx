import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../contextt/app.context';
import { FirstLevelMenuItem, PageItem } from '../../intefaces/menu.interface';
import styles from './Menu.module.css';
import cn from 'classnames';
import GraduationIcon from './icons/graduation.svg';
import CloudIcon from './icons/cloud.svg';
import BookIcon from './icons/book.svg';
import BlockIcon from './icons/block.svg';
import { TopLevelCategory } from '../../intefaces/toppage.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';

const firstLevelMenu: FirstLevelMenuItem[] =[
    {route: 'courses' , name: 'Курсы' , icon:<GraduationIcon/> , id: TopLevelCategory.Courses  },
    {route: 'services' , name: 'Сервисы' , icon:<CloudIcon/> , id: TopLevelCategory.Services  },
    {route: 'books' , name: 'Книги' , icon:<BookIcon/> , id: TopLevelCategory.Books  },
    {route: 'products' , name: 'Продукты' , icon:<BlockIcon/> , id: TopLevelCategory.Products }
];

export const Menu = (): JSX.Element => {

    const {menu, firstCategory} = useContext(AppContext);
    const router = useRouter();

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => {
                   return <div key={m.route}>
                       <Link href={`/${m.route}`}> 
                            <a >
                                <div className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]: m.id == firstCategory
                                })}>
                                    {m.icon}
                                    <span>{m.name}</span>
                                </div>
                            </a>
                       </Link>
                        {m.id == firstCategory && buildSecondLevel(m)}
                    </div>
                })}
            </>
        );
    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => {
                    if (m.pages.map(p => p.alias.includes(router.asPath.split('/')[2]))){
                        m.isOpened = true;
                    }
                   return ( <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>
                            {m._id.secondCategory}
                        </div>
                        <div className={cn(styles.secondLevelBlock , {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}>
                            {buildThirdLevel(m.pages , menuItem.route)}
                        </div>
                    </div>
                )})}
            </div>
        );
    }; 

    const buildThirdLevel = (pages:PageItem[], route: string) => {
        return(
            pages.map(p => {
                return <Link key={p._id}   href={`/${route}/${p.alias}`}>
                            <a className={cn(styles.thirdLevel , {
                                    [styles.thirdLevelActive]: false
                                })}>
                                    {p.category}
                            </a>
                        </Link>
                
                
            })
        )
    };
    return(
       <div className={styles.menu}>
           {buildFirstLevel()}
       </div>
    
    )
}

export default Menu;