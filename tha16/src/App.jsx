import meme from './meme.png';
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div class="elements">
    
      <header className="meme-header">
      <img src={meme} className="meme-logo" alt="logo" />
      <p>
        <h1 >React Card</h1> 
          your main THA is to make meme cards.
        </p>
        
      </header>
      
      <div class="chessboard">
      <Card /><Card /><Card /><Card /><Card /><Card /><Card />    
      <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /> 
      <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /> 
      <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /> 
      <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /> 
      <Card /><Card /><Card /><Card /> 
      <Card /><Card /> 
      <Card /><Card /><Card /><Card /> 
        
      </div>
    </div>
  );
}

export default App;
