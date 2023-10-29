import "./App.css";
import { Head } from "./Components/Head";
import { Body } from "./Components/Body";
import store from "./Utils/Store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import Watchpage from "./Components/Watchpage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children : [
      {
        path:"/",
        element:<MainContainer />
      },
      {
        path:"/watch" ,
        element:<Watchpage />
      }
    ]
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="text-black-600 overflow-hidden">
       
        <Head />
        <RouterProvider router={appRouter} />
        {/* <Body /> */}
      </div>
    </Provider>
  );
}

export default App;
