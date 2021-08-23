import { useSelector } from "react-redux";
const WeatherCard=()=>{
  const placeData = useSelector(state => state.placeData)
    return(
        <div className="container">
        <div className="row">
          <div className=" weather"><div className="bg-image"></div>
            <div className="card .align-self-md-center" >
              {placeData.location ? (
                <div>
                  <img src={placeData.current.condition.icon} alt="" />
                  <div className="temp">{placeData.current.temp_c}°</div> 
                  <div className="desc">{placeData.current.condition.text}</div>                
                  <div className="place">{placeData.location.name}</div>
                  <div className="container">
                    <div className="row whp">
                      <div className="col">
                        <div className="title">Wind now</div>
                        <div className="data">{placeData.current.wind_kph}<span className="unit">KM</span></div>
                      </div>
                      <div className="col"><div className="title">Humidity</div>
                        <div className="data">{placeData.current.humidity}<span className="unit">%</span></div></div>
                      <div className="col"><div className="title">Precipitation</div>
                        <div className="data">{placeData.current.precip_in}<span className="unit">%</span></div></div>
                    </div>
                  </div>
                </div>
              ) : (
                <h2>Enter Correct City Name </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    )
}
export default WeatherCard;