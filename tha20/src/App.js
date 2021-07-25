import React, { useState } from "react";
import items from "./items.js";
import Card from "./card.jsx";
import './card.css'
// import './day20.css';

const App = () => {
  const [state, setState] = useState(items);

  console.log(state.length);

  return (
    <div className="body">
      <section className="curr">
        {state.length > 0 ? (
          state.map((items, id) => {
            // console.log(food);
            return (
              <Card state={state} setState={setState} items={items} key={items.id} />
            );
          })
        ) : (
          <p style={{}}>No items left</p>
        )}
      </section>
    </div>
  );
};

export default App;
