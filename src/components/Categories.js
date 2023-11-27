import './Categories.scss';

const Categories = () => {
  return (
    <nav class="border-b border-gray-800">
      <div class="container mx-auto px-6 py-2 flex justify-between items-center">
        <a class="font-mono font-medium text-xl lg:text-2xl" href="/">
          Franklin Note
        </a>

        <div class=" lg:block">
          <ul class="inline-flex">
            <li>
              <a class="px-4 hover:text-gray-800" href="/note">
                Note
              </a>
            </li>
            <li>
              <a class="px-4 hover:text-gray-800" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Categories;
