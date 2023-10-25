import "./App.css";
import { Head } from "./Components/Head";
import { Body } from "./Components/Body";

function App() {
  return (
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
      <Head></Head>
      <Body />
    </div>
  );
}

export default App;
