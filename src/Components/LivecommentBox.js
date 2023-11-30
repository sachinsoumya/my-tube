import { React, useEffect, useState } from "react";
import Chatmessage from "./Chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { randomMessages, generate } from "../Utils/Helper";

export const LivecommentBox = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
     
      dispatch(
        addMessage({
          name: generate(),
          message: randomMessages(20),
        })
      );

      //api polling
      // console.log("Api polling");
    }, 2000);

    return () => clearInterval(i);
    // eslint-disable-next-line
  }, []);

  return (
    <div className=" border border-slate-500 rounded-lg px-2 mx-2">
      <div className="font-bold text-2xl border-b-2 border-slate-500 p-3">
        Top chat 🔽
      </div>

      <div className=" h-96  overflow-y-scroll flex flex-col-reverse  ">
        <div className="w-full  ">
          {chatMessages &&
            chatMessages.map((chat, index) => {
              return (
                <Chatmessage
                  name={chat.name}
                  message={chat.message}
                  id={chat.name}
                />
              );
            })}

          {/* <Chatmessage name="Sachin"  message="This is youtube clone here" />
        <Chatmessage name="Sachin"  message="This is youtube clone here" />
        <Chatmessage name="Sachin"  message="This is youtube clone here" />
        <Chatmessage name="Sachin"  message="This is youtube clone here" /> */}
        </div>
      </div>

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            dispatch(
              addMessage({
                name: "Sachin",
                message: input,
              })
            );
          }}
        >
          <input
            type="text"
            className="w-[22rem] md:w-96 border border-black px-3 my-2"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="bg-slate-200 px-2 mx-2 rounded-md text-lg text-black">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
