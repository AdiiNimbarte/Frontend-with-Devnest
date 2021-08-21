import './App.css';

import { inputName, inputEmail } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const name = useSelector((state) => state.name)
  const email = useSelector((state) => state.email)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <form>
        
        <h1 style={{marginTop: "60px", marginBottom: "20px"}}>Input</h1>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="input"
            onChange={(e) =>
              dispatch(inputName(e.target.value))
            }
          />

          <input 
            type="text"
            id="email"
            placeholder="Email"
            className="input"
            onChange={(e) =>
              dispatch(inputEmail(e.target.value))
            }
          />
          <div className="data">
          <h2 style={{textAlign: "center"}}> Data </h2>
          <p>Username: <span className="display">{name}</span> </p>
          <p>Email: <span className="display">{email} </span></p>
          </div>
          
      </form>
    </div>
      );
}

      export default App;