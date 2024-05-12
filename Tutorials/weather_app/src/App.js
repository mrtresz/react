import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import WeatherApp from "./WeatherApp";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <WeatherApp />
      </div>

    );
  }
}
export default App;