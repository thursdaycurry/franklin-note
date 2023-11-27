import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-center mb-6">
        Welcome to Franklin Note
      </h1>

      <section className="mb-6">
        <p className="text-lg">
          Dive into a seamless writing experience with Franklin Note, where
          every sentence leads you to become a better writer. It's the go-to
          place for writers of all stripes, scholars, and anyone eager to jazz
          up their writing with a splash of variety.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-3">Get Started in Seconds</h2>
        <p className="text-lg">
          Jump right in! Franklin Note is all about simplicity and ease. Visit
          us online and begin your writing adventure with no delays.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-3">Your Voice Matters</h2>
        <p className="text-lg">
          Got feedback? We're all ears! Send your thoughts to
          <a
            href="mailto:thursdaycurry@gmail.com"
            className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
          >
            {' '}
            thursdaycurry@gmail.com
          </a>{' '}
          and let's make Franklin Note even better, together.
        </p>
      </section>

      <footer className="text-center">
        <p className="text-lg">Happy Writing!</p>
      </footer>
    </div>
  );
};

export default AboutPage;
