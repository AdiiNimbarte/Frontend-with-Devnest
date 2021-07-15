import './App.css';
import Card from './Card';

function App() {
  let chessBox=[];
  for (let i=0;i<=63;i++)
  {
    chessBox.push(
      <Card
        key={i}
        className={  (i + Math.floor(i / 8)) % 2 === 0 ? "black" : "white"}
      />
    );
  }
  return <div  className="chess">{chessBox}</div>;
}

export default App;
