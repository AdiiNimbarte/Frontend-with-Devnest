import { useDispatch, useSelector } from "react-redux";
import { updatePlace, updatePlaceData } from "../actions";
const Form = () => {
  
  const place = useSelector((state) => state.place);
  const dispatch = useDispatch();
  return (
    <div className="container">
    
      <div className="row">
        <div className="header"> Weather App</div>
        <div className="col-12 form ">
          <input 
            type="text"
            value={place}
            placeholder="Enter city Name => eg:Mumbai"
            onChange={(e) => {
              dispatch(updatePlace(e.target.value));
            }}
          />
          <button
            className="btn btn-primary ms-2 " onClick={()=>{dispatch(updatePlaceData(place))}}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Form;
