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
      {/* 
      <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p class="hidden text-gray-500 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div class="mt-4 md:mt-8">
              <a
                href="#"
                class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>

        <img
          alt="Student"
          src="images/ray.jpg"
          // class="h-56 w-full object-cover sm:h-full"
        />
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
