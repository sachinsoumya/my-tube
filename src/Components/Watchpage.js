import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { Outlet, useSearchParams } from "react-router-dom";
import VideoDes from "./VideoDes";
import { Link } from "react-router-dom";

// import CommentBox from "./CommentBox";
import { storeValue } from "../Utils/PropSlice";
import SuggestedVideos from "./SuggestedVideos";

const Watchpage = () => {
  const [searchParams] = useSearchParams();
  // const [check, setCheck] = useState(false);
  // console.log(check);
  // console.log(searchParams.get("v"));
  const query = searchParams.get("v");
  console.log(query);
  const dispatch = useDispatch();
  const videoId = useSelector((store)=>store.prop)

  useEffect(() => {
    dispatch(closeMenu());
    dispatch(storeValue(query)); 
    // setCheck(true);
    console.log("rerendering")
  }, [dispatch , query]);
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 ">
        <div className="col-span-2">
          <div className="lg:w-full lg:h-[32rem] md:h-[33rem] w-full h-60 p-2">
            <iframe
              className="w-full h-full rounded md:rounded-lg lg:rounded-lg"
              src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
              title="title"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <VideoDes videoId={searchParams.get("v")} />
          <div className="flex py-3 px-2 ">
            <Link to={`/watch?v=${searchParams.get("v")}`}>
              <div className="font-bold text-2xl hover:underline">Comments</div>
            </Link>
            <Link to={`/watch/live?v=${searchParams.get("v")}`}>
              <div className="font-bold text-2xl mx-5 hover:underline-offset-4 hover:underline">
                Live
              </div>
            </Link>
          </div>

          {query===videoId.propValue && <Outlet />}
        </div>
        <SuggestedVideos />
      </div>
      {/* <div className="flex py-3 px-2 ">
        <Link to={`/watch?v=${searchParams.get('v')}`} ><div className="font-bold text-2xl hover:underline">Comments</div></Link>
        <Link to={`/watch/live?v=${searchParams.get('v')}`}><div className="font-bold text-2xl mx-5 hover:underline-offset-4 hover:underline">Live</div></Link>
      </div>

     {check && <Outlet /> }  */}

      {/* <CommentBox videoId = {searchParams.get("v")} /> */}
    </div>
  );
};

export default Watchpage;
