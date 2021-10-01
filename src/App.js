import { useEffect, useState } from "react";
import Header from "./components/header";
import Main from "./components/main";
import returnImage from "./components/images";

function App() {
  const [values, setValues] = useState({
    currentScore: 0,
    bestScore: 0,
  });
  const [cardArr, setArr] = useState([]);
  const [imagesArr, setImagesArr] = useState([]);

  function checkWinner() {
    if (values.currentScore === 8) {
      alert("YOU WON!");
      setValues({
        currentScore: 0,
        bestScore: 0,
      });
    }
  }

  function handleClick(e) {
    if (cardArr.includes(e.target.title) !== true) {
      setArr(cardArr.concat(e.target.title));
      setValues({
        ...values,
        currentScore: values.currentScore + 1,
      });
    } else {
      if (values.currentScore > values.bestScore) {
        setValues({
          currentScore: 0,
          bestScore: values.currentScore,
        });
      } else {
        setValues({
          ...values,
          currentScore: 0,
        });
      }
      setArr([]);
    }
  }

  useEffect(() => {
    setImagesArr((prev) => (prev.length = 0));
    let arr = [...returnImage()];
    let length = arr.length;
    for (let i = length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setImagesArr((prevState) => (prevState = imagesArr.concat(arr)));
    console.log(arr);
    checkWinner();
  }, [values.bestScore, values.currentScore]);

  return (
    <>
      <Header scores={values} />
      <Main handleClick={handleClick} photos={imagesArr} />
    </>
  );
}

export default App;
