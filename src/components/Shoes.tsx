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
        justifyContent: "left",
        padding: "50px"
      }}
    >
      {shoes.map(s => (
        <a
          href={`https://abcmart.a-rt.com/product/new?prdtNo=${s.PRDT_NO}`}
          target="_blank"
          className="has-text-black"
          key={s.PRDT_NO}
        >
          <div style={{ width: "200px", padding: "10px" }}>
            <img style={{ width: "100%" }} src={s.PRDT_IMAGE_URL}></img>
            <span>
              {`${s.BRAND_NAME}::${s.PRDT_NAME}`}::{s.PRDT_DC_PRICE}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Shoes;
