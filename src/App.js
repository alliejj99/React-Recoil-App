import { atom, selector } from "recoil";
import ChracterCount from "./components/ChracterCount";
import TextInput from "./components/TextInput";
import "./App.css";

export const textState = atom({
  key: "textState",
  default: "",
});

export const chracterCountState = selector({
  key: "chracterCountState",
  get: ({ get }) => {
    const test = get(textState); // 위에 만든 atom의 값을 할당합니다.

    return test.length;
  },
});

function App() {
  return (
    <div className="App">
      <TextInput />
      <ChracterCount />
    </div>
  );
}

export default App;
