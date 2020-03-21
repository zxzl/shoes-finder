import * as memoizee from "memoizee";
import { GetServerSideProps } from "next";

import Shoes from "../components/Shoes";
import Sizes from "../components/Sizes";
import { getAbcmartShoes } from "../services/providers/abcmart";

import { shoes as SampleShoes } from "../services/providers/abcmart/__fixtures__/shoes";

/* eslint-disable react/react-in-jsx-scope */
const Home = ({ shoes, size }) => (
  <div className='section'>
    <Sizes size={size}></Sizes>
    <Shoes shoes={shoes} />
  </div>
);

const memoizedShoes = memoizee(getAbcmartShoes, {
  promise: true,
  maxAge: 30 * 60 * 1000 // in milliseconds
});

export const getServerSideProps: GetServerSideProps = async ctx => {
  const size = Number(ctx?.query?.size) || 250;
  console.log(size);
  const shoes = await memoizedShoes(size);
  return {
    props: {
      shoes,
      size
    }
  };
};

export default Home;
