import "./App.css";
import { Route, useLocation } from "react-router-dom";
import { Detail, Home, Form, Landing } from "./views/index";
import { Navbar } from "./components/";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/form" render={() => <Form />} />
      <Route exact path="/detail/:id" render={() => <Detail />} />
    </div>
  );
}

export default App;
