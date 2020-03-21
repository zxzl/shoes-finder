import * as React from "react";
import Link from "next/link";

interface Props {
  start?: number;
  end?: number;
  step?: number;
  size: number;
}

const Sizes: React.FC<Props> = ({
  size,
  start = 220,
  end = 280,
  step = 10
}) => {
  let sizes = [];
  for (let i = start; i <= end; i = i + step) {
    sizes.push(i);
  }
  return (
    <div className='buttons' style={{ paddingBottom: "30px" }}>
      {sizes.map(s => (
        <Link key={s} href={`/?size=${s}`}>
          <button
            key={s}
            className={`button ${s === size ? "is-info is-light-color" : ""}`}
          >
            <span>{s}</span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Sizes;
