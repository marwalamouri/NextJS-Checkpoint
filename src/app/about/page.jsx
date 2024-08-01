import React from "react";

const about = () => {
  return (
    <section class="flex items-center justify-around px-8 my-20 tracking-wider">
      <div class="flex flex-col w-full md:w-1/3 space-y-12 text-center md:text-left">
        <div class="flex flex-col px-10 md:px-20">
          <h3 class="text-xl font-bold">Skills</h3>
          <br />
          <span class="text-lg">HTML</span>
          <span class="text-lg">CSS</span>
          <span class="text-lg">JavaScript</span>
          <span class="text-lg">ReactJS</span>
          <span class="text-lg">NextJS</span>
        </div>
        <div class="px-10 md:px-20">
          <h3 class="text-xl font-bold">Summary</h3>
          <br />
          <p class="w-full md:w-2/3">
            Hello, i'm Marwa i'am enrolled in the software development bootcamp
            at GoMyCode.
          </p>
        </div>
        <div class="px-10 md:px-20">
          <br />
          <h3 class="text-xl font-bold">Contact</h3>
          <a class="text-xl hover:text-blue-600" href="mailto:test@nomail.com">
            laamouri.marwa@gmail.com
          </a>
          <p>+216 55 555 555</p>
        </div>
      </div>
      {/* <!-- image --> */}
      <img
        class="hidden md:block object-cover w-1/4 h-screen rounded-full ring-2 ring-gray-500/50 ring-offset-[30px]"
        src="https://t4.ftcdn.net/jpg/06/43/68/65/360_F_643686558_Efl6HB1ITw98bx1PdAd1wy56QpUTMh47.jpg"
        alt="Your Name Here"
      />
    </section>
  );
};

export default about;
