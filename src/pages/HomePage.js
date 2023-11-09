const HomePage = () => {
  return (
    // <div>
    //   <h2>Welcome to Franklin Note</h2>
    //   <div>Process</div>
    //   <ol>
    //     <li>
    //       <a href="/note">Note</a> Page로 간다
    //     </li>
    //     <li>마음에 드는 영어 문장의 선택하거나 추가한다</li>
    //     <li>영어 문장을 variation 한다</li>
    //     <li>여러분의 멋진 문장을 이메일로 보내면 끝!</li>
    //   </ol>
    // </div>
    <div>
      {/* Hero */}
      <section
        class="bg-cover bg-center h-screen flex items-center  bg-gradient-to-r from-indigo-500 to-white-500"
        style={{ backgroundImage: "url('../images/eva.jpg')" }}
        // style="background-image: url('path_to_your_hero_image.jpg');"
      >
        <div class="text-black text-center mx-auto">
          <h1 class="text-4xl font-bold mb-4">Writing Makes You Monster</h1>
          <p class="text-lg mb-8">
            Improve your writing with sentence variety technique
          </p>
          <a
            href="/note"
            class="bg-blue-500 text-white py-2 px-6 rounded-full font-bold text-lg hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* CTA */}

      {/* <section class="bg-gray-50">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p class="hidden text-gray-500 sm:mt-4 sm:block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              dolor officia blanditiis repellat in, vero, aperiam porro ipsum
              laboriosam consequuntur exercitationem incidunt tempora nisi?
            </p>
          </div>

          <div class="mx-auto mt-8 max-w-xl">
            <form action="#" class="sm:flex sm:gap-4">
              <div class="sm:flex-1">
                <label for="email" class="sr-only">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Email address"
                  class="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>

              <button
                type="submit"
                class="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
              >
                <span class="text-sm font-medium"> Sign Up </span>

                <svg
                  class="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section> */}

      {/* Unique selling Proposition */}
      <section class="bg-blue-500 text-white p-8">
        <div class="max-w-2xl mx-auto text-center">
          <h1 class="text-3xl font-bold mb-4">Start with 0$</h1>
          <p class="text-lg mb-8">
            Start your creative journey with Franklin note
          </p>
          <a
            href="/note"
            class="bg-white text-blue-500 py-2 px-6 rounded-full font-bold text-lg hover:bg-blue-100 hover:text-blue-700"
          >
            Write
          </a>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
