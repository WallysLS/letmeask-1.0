import { Route, BrowserRouter } from "react-router-dom";

import {Button} from "../src/components/Button";

import {Home} from  "../src/pages/Home"
import { NewRoom } from "./pages/NewRoom";

function App() {
  return(
      <BrowserRouter>
        <Route path="/" exact component={Home}/> 
        <Route path="/rooms/new" component={NewRoom}/> 
      </BrowserRouter> 
      
  );
};

export default App;
