import { useState, useEffect } from "react";
export const NumberCount = (props) => {
  const { start, end, timing } = props;
  const [count, setCount] = useState(start);
  useEffect(() => {
    if (count === end) {
      return;
    }
    let timer = setTimeout(() => {
      setCount(count + 1);
    }, timing);
    return () => {
      clearInterval(timer);
    };
  }, [count, end, timing]);

  return <p>{count}</p>;
};
