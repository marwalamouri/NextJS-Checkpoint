const experience = () => {
  return (
    <>
      <section class="px-20 mt-10">
        <h4 class="mb-8 text-3xl font-bold text-center md:text-left">
          Experience
        </h4>

        <div class="grid grid-cols-1 md:grid-cols-6 my-10">
          <div class="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 class="text-xl md:text-2xl  font-bold">Software Developer</h5>
            <h6 class="text-lg font-bold">Book writing application</h6>
            <p>2018</p>
          </div>
          <div class="flex flex-col col-span-4">
            <p></p>
          </div>
        </div>
      </section>
      <section class="px-20 mt-10">
        <h4 class="mb-8 text-3xl font-bold text-center md:text-left">
          Education
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-6 my-10">
          <div class="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 class="text-xl md:text-2xl  font-bold">
              Licence Fondamentale en Science de l'Informatique
            </h5>
            <h6 class="text-lg font-bold">Faculté des Science de Bizerte</h6>
            <p> 2015 - 2018</p>
          </div>
          <div class="flex flex-col col-span-4 ">
            <p></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default experience;
