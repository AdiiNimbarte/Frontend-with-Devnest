
export const updatePlace=(place)=>{
    return{
        type:"UPDATE_PLACE",
        payload: place,
    };
};
export const updatePlaceData=(place)=>{
    return(dispatch)=>{
        fetch(
              `https://api.weatherapi.com/v1/forecast.json?key=6c4c90c2387e48ecb3f201218212208&q=${place}`
            )
              .then((res) => res.json())
              .then((data) => {
               dispatch(
                   {
                       type: "UPDATE_PLACE_DATA",
                       payload:data,
                   }
               )
              });};
}