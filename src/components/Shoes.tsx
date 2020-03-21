import * as React from "react";

import * as gtag from "../lib/gtag";

//@ts-ignore
import styles from "./Shoes.module.css";

interface Props {
  shoes?: any;
  size: number;
}

const Shoes: React.FC<Props> = ({ shoes = [], size }) => {
  const currencyFormatter = new Intl.NumberFormat("kr-KR", {
    style: "currency",
    currency: "KRW"
  });

  const handleClick = React.useCallback((brand, name, rank) => {
    gtag.event({
      action: "product_click",
      category: "click",
      label: String(size + ":" + brand + ":" + name),
      value: rank
    });
  }, []);

  return (
    <div
      className='columns is-mobile'
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "left"
      }}
    >
      {shoes.map((s, i) => (
        <a
          href={`https://abcmart.a-rt.com/product/new?prdtNo=${s.PRDT_NO}`}
          target='_blank'
          className='has-text-black column is-half-mobile is-4-tablet is-3-desktop is-1-fullhd'
          key={s.PRDT_NO}
          onClick={() => handleClick(s.BRAND_NAME, s.PRDT_NAME, i)}
        >
          <div className={styles.shoe__item}>
            <img style={{ width: "100%" }} src={s.PRDT_IMAGE_URL}></img>
            <span className='has-text-weight-semibold'>
              {currencyFormatter.format(s.PRDT_DC_PRICE)}
            </span>
            <br></br>
            <span>{`${s.BRAND_NAME} : ${s.PRDT_NAME}`}</span>
            <span className='tag is-light'>ABC마트</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Shoes;
