import * as React from "react";

interface Props {
  shoes?: any;
}

const Shoes: React.FC<Props> = ({ shoes = [] }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "left"
      }}
    >
      {shoes.map(s => (
        <a
          href={`https://abcmart.a-rt.com/product/new?prdtNo=${s.PRDT_NO}`}
          target='_blank'
          className='has-text-black'
          key={s.PRDT_NO}
        >
          <div
            style={{ width: "200px", paddingRight: "10px", paddingTop: "20px" }}
          >
            <img style={{ width: "100%" }} src={s.PRDT_IMAGE_URL}></img>
            <span>
              {`${s.BRAND_NAME}::${s.PRDT_NAME}`}::{s.PRDT_DC_PRICE}
            </span>
            <br></br>
            <span className='tag is-light'>ABC마트</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Shoes;
