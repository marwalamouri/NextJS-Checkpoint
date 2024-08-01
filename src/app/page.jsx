const Home = () => {
  return (
    <div class=" text-gray-800 bg-gray-50">
      <section class="flex flex-col items-center justify-center h-screen px-8">
        <div class="flex flex-col items-center justify-center text-center h-screen-half">
          <img
            class="md:hidden object-cover w-15 h-40 rounded-full mb-5 ring-2 ring-gray-500/50 ring-offset-[10px]"
            src="https://i.ibb.co/Byd813Q/mateus-campos-felipe-Zxd-JFg-SGQBA-unsplash.jpg"
            alt="Your Name Here"
          />
          <h1 class="text-5xl sm:text-6xl lg:text-8xl">Marwa Lamouri</h1>
          <h2 class="font-light text-4xl sm:text-5xl lg:text-6xl">
            Software Developer
          </h2>
          <div>
            {" "}
            <img src="https://img.freepik.com/premium-vector/programming-writing-code-using-laptop-website-developer-coding-software-computer-screen_773186-442.jpg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
