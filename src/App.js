import "./App.css";
import { Head } from "./Components/Head";
import { Body } from "./Components/Body";
import store from "./Utils/Store";
import { Provider } from "react-redux";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import Watchpage from "./Components/Watchpage";
import { LivecommentBox } from "./Components/LivecommentBox";
import CommentBox from "./Components/CommentBox";
// import CommentsContainer from "./Components/CommentsContainer";
import SearchVideos from "./Components/SearchVideos";
import Catagory from "./Components/Catagory";
import ChannelDetails from "./Components/ChannelDetails";
import PlaylistItems from "./Components/PlaylistItems";
import About from "./Components/About";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <Watchpage />,
        children: [
          {
            path: "/watch",
            element: <CommentBox />,
          },
          {
            path: "/watch/live",
            element: <LivecommentBox />,
          },
        ],
      },

      {
        path: "/results",
        element: <SearchVideos />,
      },

      {
        path:"/catagory/:id",
        element:<Catagory />
      }
      ,{
        path:"/:userName/:id" ,
        element:<ChannelDetails />
      },
      {
        path:"/playlist",
        element:<PlaylistItems />

      } ,

      {
        path:"/about",
        element:<About />
      }
    ],
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
