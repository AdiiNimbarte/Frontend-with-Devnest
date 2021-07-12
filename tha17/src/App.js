import React  from 'react';
import './App.css';
import Card from './card';
import './card.css'
function App(props) {
  return(
   <div className="body">
     <Card dish="Pizza"  calorie="56"/>
     <Card dish="Burger" calorie="69"/>
     <Card dish="Coke" calorie="500"/>
     <Card dish="Brownie" calorie="180"/>
     <Card dish="Fried Rice" calorie="90"/>
     <Card dish="Lassania" calorie="200"/>
     <Card dish="Pani Puri" calorie="10"/>
     </div>
  );
   
}

export default App;