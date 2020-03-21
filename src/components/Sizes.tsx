import * as React from "react";
import Link from "next/link";

import * as gtag from "../lib/gtag";

interface Props {
  start?: number;
  end?: number;
  step?: number;
  size: number;
}

const Sizes: React.FC<Props> = ({
  size,
  start = 200,
  end = 300,
  step = 10
}) => {
  let sizes = [];
  for (let i = start; i <= end; i = i + step) {
    sizes.push(i);
  }

  const handleClick = React.useCallback(size => {
    gtag.event({
      action: "change_size",
      category: "click",
      label: "size",
      value: size
    });
  }, []);

  return (
    <div className='buttons' style={{ paddingBottom: "30px" }}>
      {sizes.map(s => (
        <Link key={s} href={`/?size=${s}`}>
          <button
            key={s}
            onClick={() => handleClick(s)}
            className={`button ${s === size ? "is-info is-light" : ""}`}
          >
            <span>{s}</span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Sizes;
