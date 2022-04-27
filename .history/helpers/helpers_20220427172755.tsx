import GraduationIcon from './icons/graduation.svg';
import CloudIcon from './icons/cloud.svg';
import BookIcon from './icons/book.svg';
import BlockIcon from './icons/block.svg';
import { TopLevelCategory } from '../intefaces/toppage.interface';
import { FirstLevelMenuItem } from '../intefaces/menu.interface';

export const firstLevelMenu: FirstLevelMenuItem[] =[
    {route: 'courses' , name: 'Курсы' , icon:<GraduationIcon/> , id: TopLevelCategory.Courses  },
    {route: 'services' , name: 'Сервисы' , icon:<CloudIcon/> , id: TopLevelCategory.Services  },
    {route: 'books' , name: 'Книги' , icon:<BookIcon/> , id: TopLevelCategory.Books  },
    {route: 'products' , name: 'Продукты' , icon:<BlockIcon/> , id: TopLevelCategory.Products }
];

