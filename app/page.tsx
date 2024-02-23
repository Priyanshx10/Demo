import Card from "./component/Card";
import Head from "./component/Head";
import NewsCardContainer from "./component/NewsCard";
import Product from "./component/Product";
import SecondHeader from "./component/SecondHeader";

export default function Home() {
  return (
   <div>
     <Head />
     <SecondHeader />
    <Card />
    <Product />
    <NewsCardContainer />
   </div>
  );
}
