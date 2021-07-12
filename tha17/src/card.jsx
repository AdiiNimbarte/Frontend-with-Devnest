import './card.css';
function Card(prop){

   
    return(
        <div className="data">
        <span className="dish">{prop.dish}</span>
        <p className="content"> you have consumed <span class="calorie">{prop.calorie} </span>cals today</p>
        </div>
    );
}

export default Card;