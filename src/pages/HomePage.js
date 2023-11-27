const HomePage = () => {
  return (
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
