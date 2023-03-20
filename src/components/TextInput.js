import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { textState } from "../App";

const TextInput = () => {
  const [text, setText] = useRecoilState(textState); // tuple을 리턴해주고 fist elements는 리콜 스테이트의 값입니다.

  const handleChange = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );

  return (
    <div>
      <input type={text} onChange={handleChange} />
      <br />
      Echo:{text}
    </div>
  );
};

export default TextInput;
