import React from "react";
import Header from "./components/Header";
import Routes from "./routes";
// import api from "./services/api";
import "./styles.css";
import Main from "./pages/main";


const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
