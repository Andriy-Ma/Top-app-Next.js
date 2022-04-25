import { GetStaticProps } from "next";
import { useState } from "react";
import Button from "../components/Button/Button";
import Htag from "../components/Htag/Htag";
import Ptag from "../components/Ptag/Ptag";
import Rating from "../components/Rating/Rating";
import Tag from "../components/Tag/Tag";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../intefaces/menu.interface";


function Home({menu}: HomeProps): JSX.Element {

  const [rating , setRating] = useState<number>(4);

  return (
    <>
     <Htag tag="h2">TEXT dsdsd</Htag>
     <Button appearance="primary" arrow="right">lol</Button>
     <Button appearance="ghost" arrow="down">lolkek</Button>
     <Ptag >fdfdsfdsfdfdsdf</Ptag>
     <Tag size="m" color="red" >fdfd</Tag>
     <Rating  rating={rating} isEditable setRating={setRating} ></Rating>
     
     
     </>
    
  )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () =>{
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory});
  return {
    props:{
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string,unknown>{
  menu: MenuItem[],
  firstCategory: number
}
