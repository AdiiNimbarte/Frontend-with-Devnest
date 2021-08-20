import React from "react";
const Blog = () => {
  
  return (
    <div>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Ashton John</h1>
      <p class="mb-8 leading-relaxed">Hello!! I am a software developer. Learning React with Devsnest.
      This my first website using tailwind.
      Thank you for Reading.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Click Here </button>
        <button onClick="https://tailblocks.cc/" class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Github Link</button>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
export default Blog;