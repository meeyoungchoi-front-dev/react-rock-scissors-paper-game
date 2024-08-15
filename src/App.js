import { useState } from 'react';
import './App.css';
import Box from "./components/Box";

const choice = {
  rock: {
    name: "rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY24vXcxwnkJbGJi_nQWV6VNzVronsPHLtUk_dmCc_qHt-sJ9Qziuc82Yp2yOwVPNeOFM&usqp=CAU",
    desc: "바위"
  },
  scissors: {
    name: "scissors",
    img: "https://assets.katogroup.eu/i/katogroup/VT8-0919-24_02_victorinox",
    desc: "가위"
  },
  paper:{
    name: "paper",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQVTP3dHJXp9MeXJzdSTg0A1jM6ljyaDvgEw&s",
    desc: "보"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    console.log("userChoice: ", userChoice);
    setUserSelect(choice[userChoice]);
    let computerChoide = randomChoice();
    setComputerSelect(computerChoide);
    setResult(judgement(choice[userChoice], computerChoide));
    console.log("result: ", result);
  }

  const judgement = (user, computer) => {
    let myWin = "";
    console.log("user: ", user, " computer: " , computer);

    // 내가 승리하는 조건
    // 가위 : 보 , 바위 : 가위, 보 : 바위
    // 컴퓨터가 승리하는 조건
    // 보 : 가위, 가위 : 바위, 바위 : 보
    if ((user.name === "scissors" && computer.name === "paper") || (user.name === "rock" && computer.name === "scissors") || (user.name === "paper" && computer.name === "rock") ) {
        myWin = "win"
    } else if ((user.name === "rock" && computer.name === "scissors") || (user.name === "scissors" && computer.name === "rock") || (user.name === "rock" && computer.name === "paper") || (user.name === "paper" && computer.name === "scissors") ) {
        myWin = "loose";
    } 
    
    
    
    else if (user.name === computer.name) {
        myWin = "draw";
    }
    
    console.log("myWin: " , myWin);

    return myWin;
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //  객체에 키값만 뽑아서 array로 만들어주는 함수
    console.log("itemArray: ", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random value: ", randomItem);
    let final = itemArray[randomItem];
    console.log("final:", final);
    return choice[final];
  }


  return (
    <div>
      <div className='main'>
          <Box title="You" item={userSelect} result={result}/>
          <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className='main'>
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
    
  );
}

export default App;
