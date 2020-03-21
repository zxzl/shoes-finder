import Shoes from "../components/Shoes";
import { getAbcmartShoes } from "../services/providers/abcmart";

// import { shoes as SampleShoes } from "../services/providers/abcmart/__fixtures__/shoes";

/* eslint-disable react/react-in-jsx-scope */
const Home = ({ shoes }) => <Shoes shoes={shoes} />;

Home.getInitialProps = async ctx => {
  const shoes = await getAbcmartShoes();
  return {
    shoes
  };
};

export default Home;
