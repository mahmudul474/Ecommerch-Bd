import Layout from "@/components/Layots/RootLayot";
import React from "react";

export default function About() {
  return (
    <section className="pb-24 ">
      <div className="max-w-6xl mx-auto">
        <div>
          <div className="p-4 bg-white dark:bg-gray-800">
            <nav className="flex mb-4">
              <ol className="inline-flex items-center">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-3xl text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    About-Us
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </li>
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-lg text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      About
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </li>
              </ol>
            </nav>
            <div className="border  border-gray-300 shadow-xl shadow-gray-400 p-5">
              <h2 className="text-2xl font-semibold mb-7 font-poppins dark:text-gray-300">
                About Dreamfurniturebd
              </h2>
              <div className="pt-5 pb-5 font-poppins dark:text-gray-400">
                <span className="font-bold "> Dream Furniture BD</span> is a
                trusted name in the furniture industry that offers a wide
                selection of high-quality furniture and home decor.
                <br></br>
                <br></br>
                <span className="font-bold">Dream Furniture BD</span> began its
                journey as a family-owned business in 2006. The unique design
                elements and distinctive value propositions to our clients have
                enabled.
                <br></br>
                <br></br>
                <span className="font-bold"> Dream Furniture BD </span>to become
                a premium furniture brand in Bangladesh within a short span of
                time. Dream Furniture BD are committed to providing elegant,
                comfortable, and functional pieces that will turn your dreams
                into reality. Their collection is carefully curated and every
                item is handpicked to exceed your expectations. Our website is
                user-friendly, making it easy to browse and find inspiration for
                your home. Dream Furniture offer flexible payment options, a
                hassle-free return policy, and excellent customer support.
                Whether you're furnishing a new home or looking for a statement
                piece, Dream Furniture is here to help you create a space that
                reflects your unique style.
                <br></br>
                <span className="font-bold">Dream Furniture BD </span> has
                emerged as a prominent player in the furniture industry, driven
                by our passion for exceptional design, superior quality, and
                utmost customer satisfaction. We invite you to explore our
                exquisite collection and experience the epitome of luxury and
                style for your home.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

About.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
