import * as React from "react";
import * as memoizee from "memoizee";
import { GetServerSideProps } from "next";

import Shoes from "../components/Shoes";
import Sizes from "../components/Sizes";
import { getAbcmartShoes } from "../services/providers/abcmart";
import useRouterLoading from "../hooks/useRouterLoading";

import { shoes as SampleShoes } from "../services/providers/abcmart/__fixtures__/shoes";

/* eslint-disable react/react-in-jsx-scope */
const Home = ({ shoes, size }) => {
  const isLoading = useRouterLoading();

  return (
    <div className='section'>
      <Sizes size={size}></Sizes>
      {isLoading && (
        <progress
          className='progress is-small is-primary is-light'
          max='100'
          style={{ marginTop: "150px" }}
        >
          15%
        </progress>
      )}
      {!isLoading && <Shoes shoes={shoes} size={size} />}
    </div>
  );
};

const memoizedShoes = memoizee(getAbcmartShoes, {
  promise: true,
  maxAge: 30 * 60 * 60 * 1000 // in milliseconds
});

export const getServerSideProps: GetServerSideProps = async ctx => {
  const size = Number(ctx?.query?.size) || 250;
  console.log(size);
  const shoes = await memoizedShoes(size);
  // const shoes = SampleShoes;

  return {
    props: {
      shoes,
      size
    }
  };
};

export default Home;
