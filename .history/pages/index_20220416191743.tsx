import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Htag from "../components/Htag/Htag";
import Ptag from "../components/Ptag/Ptag";
import Rating from "../components/Rating/Rating";
import Tag from "../components/Tag/Tag";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {

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
