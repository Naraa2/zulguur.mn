/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { WasherCard } from "components/WasherCard";

export default function idk() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-5xl text-blueGray-600">
                Зүгээр суухаар
              </h2>
              <h2>
                <br></br>
              </h2>
              <h2 className="font-semibold text-5xl text-blueGray-600">
                Зүлгүүлж суу
              </h2>

              <div className="mt-12 ">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank"
                  className="text-white  font-bold px-6 py-4 rounded outline-none focus:outline-none bg-blueGray-600 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Цаг захиалах
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-20 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/car-1.png"
          alt="..."
        />
      </section>
      <div
        className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-blueGray-100 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto p-4">
        <h2 className="font-semibold text-4xl text-blueGray-900">
          Угаалгын газрууд
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-start">
          <WasherCard />
          <WasherCard />
          <WasherCard />
         
        </div>
      </div>

      <section className="py-20 bg-blueGray-100 overflow-hidden"></section>

      <section className="pb-16 bg-blueGray-100 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          ></svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-blueGray-50 shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <h3 className="text-black font-semibold text-3xl">Үйлчилгээ</h3>
              <p className="text-black text-lg leading-relaxed mt-4 mb-4">
                Бид таны машиныг үргэлж цэмбэгэр байлгана
              </p>

              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Цаг захиалах алхмууд</h2>
          </div>
        </div>
        <div className="container mx-auto p-4">
          <h2 className="font-semibold text-4xl text-blueGray-900"></h2>
        </div>
        <div className="container mx-auto p-4">
          <h2 className="font-semibold text-4xl text-blueGray-900"></h2>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-100">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <Link href={"/"}>
                  <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto cursor-pointer ">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded-lg bg-blueGray-600 shadow-xl">
                      <div>
                        <blockquote className="relative p-8 mb-4">
                          <h4 className="text-xl font-bold text-white ">
                            Алхам 1
                          </h4>
                          <p className="text-md font-light mt-8 text-white">
                            <strong>Өөрийн байгаа хаягаа оруулна</strong>
                            <br></br>
                            <strong>Үйлчилүүлэх угаалгын газраа сонгоно</strong>
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href={"/"}>
                  <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto cursor-pointer ">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded-lg bg-blueGray-600 shadow-xl">
                      <div>
                        <blockquote className="relative p-8 mb-4">
                          <h4 className="text-xl font-bold text-white ">
                            Алхам 2
                          </h4>
                          <p className="text-md font-light mt-8 text-white">
                            <strong>Цаг болон өдөрөө сонгоно</strong>
                            <br></br>
                            <strong>.</strong>
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={"/"}>
                  <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto cursor-pointer ">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded-lg bg-blueGray-600 shadow-xl">
                      <div>
                        <blockquote className="relative p-8 mb-4">
                          <h4 className="text-xl font-bold text-white ">
                            Алхам 3
                          </h4>
                          <p className="text-md font-light mt-8 text-white">
                            <strong>Банкаа сонгон төлбөрөө төлнө </strong>
                            <br></br>
                            <strong>Захиалгаа баталгаажуулна</strong>
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font ">
  <div class="container px-5 py-24 mx-auton ">
    <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/2 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a class="inline-flex items-center">
            
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
              <span class="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/2 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a class="inline-flex items-center">
            
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">Alper Kamu</span>
              <span class="text-gray-500 text-sm">DESIGNER</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      <Footer />
    </>
  );
}
