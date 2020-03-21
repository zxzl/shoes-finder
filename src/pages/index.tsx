import * as memoizee from "memoizee";

import Shoes from "../components/Shoes";
import { getAbcmartShoes } from "../services/providers/abcmart";

// import { shoes as SampleShoes } from "../services/providers/abcmart/__fixtures__/shoes";

/* eslint-disable react/react-in-jsx-scope */
const Home = ({ shoes }) => <Shoes shoes={shoes} />;

const memoizedShoes = memoizee(getAbcmartShoes, {
  promise: true,
  maxAge: 10 * 60 * 1000 // in milliseconds
});

Home.getInitialProps = async ctx => {
  const shoes = await memoizedShoes();
  return {
    shoes
  };
};

export default Home;
