import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form/>
      <WeatherCard/>
    </div>
  );
}

export default App;