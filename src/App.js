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


  const play = (userChoice) => {
    console.log("userChoice: ", userChoice);
    setUserSelect(choice[userChoice]);
  }


  return (
    <div>
      <div className='main'>
          <Box title="You" item={userSelect}/>
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
