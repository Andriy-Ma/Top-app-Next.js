import Button from "../components/Button/Button";
import Htag from "../components/Htag/Htag";
import Ptag from "../components/Ptag/Ptag";
import Tag from "../components/Tag/Tag";

export default function Home(): JSX.Element {
  return (
    <>
     <Htag tag="h2">TEXT dsdsd</Htag>
     <Button appearance="primary" arrow="right">lol</Button>
     <Button appearance="ghost" arrow="down">lolkek</Button>
     <Ptag >fdfdsfdsfdfdsdf</Ptag>
     <Tag size="m" color="red" >fdfd</Tag>
    </>
  )
}
