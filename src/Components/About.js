import React from "react";

const About = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 p-3 gap-3" >
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/011/998/173/small_2x/youtube-icon-free-vector.jpg"
            alt="youtube"
          />
          {/* <img
            src="https://lh3.googleusercontent.com/pw/ADCreHcwmJzKuG4CS93Bi6Ehmu-nyAVRW_fD9XFV65GNSY97TXsH0N_P1CNpTMNaNw3Rt2akHnCgFW5IlFjjDj0aquKPaYb0lpZpkN6AqAqUybQdpI28wdfNfOPc9xI3qW4ux5F9g1MxhWF_ARKDaG0q4RVl=w483-h516-s-no-gm?authuser=0"
            alt="profilepic" className="rounded-full border border-gray-500"
          /> */}
        </div>
        <div className="md:col-span-2 font-medium text-xl">
          <div>
            This is{" "}
            <span className="font-bold text-2xl text-red-700">YouTube</span>{" "}
            Clone. It is made up with tech-stack like 
            <div className="my-2">
              <ol>
                <li className="py-1">React- It consists overall UI development logic .</li>
                <li className="py-1">
                  TailWind Css - It is used for styling , look and feel of app
                  and also responsive design.
                </li>
                <li className="py-1">
                  Redux - It is an external library widely used with react for
                  state management.
                </li>
              </ol>
              <div>
                The data are got from api provided by YouTube.
              </div>
            </div>
          </div>

          
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 p-3 gap-3 py-2">
        <div className="order-last mx-2">
            <img src="https://lh3.googleusercontent.com/pw/ADCreHcwmJzKuG4CS93Bi6Ehmu-nyAVRW_fD9XFV65GNSY97TXsH0N_P1CNpTMNaNw3Rt2akHnCgFW5IlFjjDj0aquKPaYb0lpZpkN6AqAqUybQdpI28wdfNfOPc9xI3qW4ux5F9g1MxhWF_ARKDaG0q4RVl=w483-h516-s-no-gm?authuser=0" alt="profilepic" className="rounded-full border border-gray-500" />
        </div>

        <div className= "md:col-span-2 font-medium text-xl">Project by - @Sachinsoumya</div>

      </div>
    </div>
  );
};

export default About;
