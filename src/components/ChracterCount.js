import React from "react";
import { useRecoilValue } from "recoil";
import { chracterCountState } from "../App";

const ChracterCount = () => {
  const count = useRecoilValue(chracterCountState);
  return <div>Chracter Count: {count}</div>;
};

export default ChracterCount;
