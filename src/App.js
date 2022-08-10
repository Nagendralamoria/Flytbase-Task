import "./App.css";
import { useCallback, useEffect, useState } from "react";
import Card from "./Components/Card";
import HowTo from "./Components/HowTo";
function App() {
  const [cards, setCards] = useState([]);
  const [active, setActive] = useState(-1);
  const [y, setY] = useState(10);
  const [x, setX] = useState(10);
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const pixelDistance = 5;
  const addItem = () => {
    setCards([
      ...cards,
      {
        x: 10,
        y: 150,
      },
    ]);
    console.log(cards);
  };
  function removeBox() {
    if (active !== -1) {
      var newCards = [...cards];
      newCards.splice(active, 1);
      setCards(newCards);
      setActive(-1);
    }
  }
  useEffect(() => {
    if (isActive && active!=-1) {
      let newCards = [...cards];
      if (cards[active]) {
        var curry = +cards[active].y;
        var currx = +cards[active].x;
      }
      if (up) {
        let nextvalue =
          curry - pixelDistance >= 10 ? curry - pixelDistance : 10;
        newCards[active].y = nextvalue; 
        setCards(newCards);
      } else if (left) {
        let nextPos = currx - pixelDistance >= 10 ? currx - pixelDistance : 10;
        newCards[active].x = nextPos;
        setCards(newCards);
      } else if (right) {
        let nextvalue =
          currx + pixelDistance <= 1280 ? currx + pixelDistance : 1280;
        newCards[active].x = nextvalue;
        setCards(newCards);
      } else if (down) {
        let nextvalue =
          curry + pixelDistance <= 510 ? curry + pixelDistance : 510;
        newCards[active].y = nextvalue;
        setCards(newCards);
      }
    }
  }, [up, left, right, down]);
  useEffect(() => {
    const onkeydown = (event) => {
      const key = event.key;
      if (key === "w") {
        setUp(true);
      } else if (key === "s") {
        setDown(true);
      } else if (key === "d") {
        setRight(true);
      } else if (key === "a") {
        setLeft(true);
      }
    };
    const onkeyup = (event) => {
      const key = event.key;
      if (key === "w") {
        setUp(false);
      } else if (key === "s") {
        setDown(false);
      } else if (key === "d") {
        setRight(false);
      } else if (key === "a") {
        setLeft(false);
      }
    };

    document.addEventListener("keyup", onkeyup);
    document.addEventListener("keydown", onkeydown);
    return () => {
      document.removeEventListener("keypress", onkeyup);
      document.removeEventListener("keydown", onkeydown);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={addItem}>Add Astronaut</button>
        <button onClick={removeBox}>Delete Button</button>
       

        <div className="headerkeybutton">
          <button
            style={{
              backgroundColor: isActive ? "white" : "rgb(80, 80, 80)",
              color: isActive ? "rgb(80, 80, 80)" : "white",
              fontWeight: 600
            }}
            onClick={() => setIsActive(true)}
          >
            Keyboard On
          </button>
          <button
            style={{
              backgroundColor: isActive ? "rgb(80, 80, 80)" : "white",
              color: isActive ? "white" : "rgb(80, 80, 80)",
              fontWeight: 600
            }}
            onClick={() => setIsActive(false)}
          >
            Keyboard Off
          </button>
        </div>
      </header>
      <div className="App-body">
        {cards.map((item,index) => (
          <Card key={index} id={index} active={active} setActive={setActive} top={item.x} left={item.y} />
        ))}
      </div>{" "}
      <HowTo />
    </div>
  );
}

export default App;
