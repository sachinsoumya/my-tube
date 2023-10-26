import "./App.css";
import { Head } from "./Components/Head";
import { Body } from "./Components/Body";
import store from "./Utils/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store = {store}>
    <div className="text-black-600">
     
      {/*

   * Header
   * Body 
   *Sidebar 
      *MenuItems 
   *Main container 
     *Buttonlist
     *Video container
       *Video card    

*/}
      <Head />
      <Body />
    </div>
    </Provider>
  );
}

export default App;
