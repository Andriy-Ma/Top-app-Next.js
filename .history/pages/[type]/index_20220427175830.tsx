import { GetStaticProps } from "next";
import { withLayout } from "../../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../../intefaces/menu.interface";

function Type(): JSX.Element {

  return (
    <>
     lolddd
     </>
    
  )
}

export default withLayout(Type);

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
