import React from "react";

const About = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 p-3 gap-3">
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
              <ol className="italic font-thin">
                <li className="py-1">
                  <span className="font-normal">React</span>- It consists
                  overall UI development logic .
                </li>
                <li className="py-1">
                  <span className="font-normal">TailWind Css</span> - It is used
                  for styling , look and feel of app and also responsive design.
                </li>
                <li className="py-1">
                  <span className="font-normal">Redux</span> - It is an external
                  library widely used with react for state management.
                </li>
              </ol>
              <div className="font-normal">
                The data are got from api provided by{" "}
                <span className="font-bold md:text-2xl  text-base text-red-700">
                  YouTube.
                </span>
              </div>
            </div>
            <div className="my-3">
              <div className="text-semibold">Features :</div>
              <ol className="italic font-thin list-disc mx-5">
                <li className="py-1">List of most popular videos</li>
                <li className="py-1">List of videos as per category.</li>
                <li className="py-1">List of videos as per search results.</li>
                <li className="py-1">Details about a video.</li>
                <li className="py-1">Comments about a video.</li>
                <li className="py-1">Suggested video list.</li>
                <li className="py-1">Details about a channel.</li>
                <li className="py-1">
                  Number of play lists and videos inside a playlist.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 p-3 gap-3 py-2">
        <div className="md:order-last order-first mx-2">
          <img
            src="https://lh3.googleusercontent.com/pw/ADCreHcHIxtQ37cyUQPghtZIUo2wnGwzBskdv8efY6E_oylZN-pkYBaIJyVKRexD3v1a0MaOxfknO_u6YFJ2h1IAtln8ihRmv-_VNig14gji1HVnAtYElXyjxzOKontkGXRnSo3moLbvYLZ_OBFA7Q07x2YivEn4RZAntrorvwlGC3IGSlzMuKzF7ShgcwZGVBgP2rplr2HYMpTZLADAhK2RolCVRAopcqUtzsXuTN37Oy5ftVki71SYuPrZ4aqdO-UdeH7W8le18wNbpM4ts34xO9uS-gHeA_PUFfCA_j0Bf_NWIlIXyd_yqq4Rp3316h-yi3gWCnGATrlBcao9mfXnf7I4tPVcmnSyWAIvZ_tvMFsqlt3ViE_H6x1sGC6efok99VWQp2ApgbHcnGQ4FR5P_0VNiK7QH1BaZK4hXUZQSG6J2F35kB8ff85PAeMlOMOX1Zy_8y-bR9dsAYUot8AsSRv_gHOg1ACqzIVNQdEcnRvzbnY93_FdAr-B9nBX-oUHe0YoJMI28Vev7CbmNMM9d5Sazq6P4Fnv_p-4XlYNdMyEVEcWnWRTgqLSjVlJDGKRr_WiM7oS5oJNCByz5QPTnDNBJ_wXJ4PWUjX93N-3k1KT_GoOXgJtH91gWlUzf15JwfYXHq0eUONB6tm3a2_1arJbH9sRaQ2fLvIpBBYAxQiVZ6fXHGvX-Xhm6QKz7KNnvflJvK7eK8nGm9hiWlXR_pKYnv4qgiC4ugGt860HnxX1J4oxwF6qiiiQ9yTlMj_moB_HFON61g6U7n3-PG4pQYRjbt2jgt2jerDuvzrNm1-eXmJwFaQUyGXE3jtspZunsvsdKAiv9TE5RA61W5WIGSaP9XhJQwvt27W9glPFWtIIYKyrCT7sH6znMZqgj5PNSYzuDA=w483-h516-s-no-gm?authuser=0"
            alt="profilepic"
            className="rounded-full border border-gray-500"
          />
        </div>

        <div className="md:col-span-2  text-xl self-center md:text-start text-center">
          <div className=" md:text-lg text-sm font-medium">Developped by - @Sachinsoumya</div>
          <div className="flex  md:w-3/6 marker:w-full  justify-between content-center py-3">
            <div className="hover:bg-slate-300 rounded-lg"><a href="https://www.instagram.com/sachinsoumya/"> <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/instagram-new--v1.png"
                alt="instagram-new--v1"
              /></a>
             
            </div>
            <div className="hover:bg-slate-300 rounded-lg">
              <a href="https://twitter.com/SoumyaSachinPa1"><img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/twitterx--v1.png"
                alt="twitterx--v1"
              /></a>
              
            </div>
            <div className="hover:bg-slate-300 rounded-lg" ><a href="https://github.com/sachinsoumya"> <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/github--v1.png"
                alt="github--v1"
              /></a>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
