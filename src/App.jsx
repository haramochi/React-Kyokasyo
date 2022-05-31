import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  //ボタンを押したときに実行する関数を定義
  const onClickButton = () => {
    alert();
  };

  //cssオブジェクト
  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "20px"
  // };

  // const contentPinkStyle = {
  //   color: "pink",
  //   fontSize: "20px"
  // }

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* <ColoredMessage /> */}
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
