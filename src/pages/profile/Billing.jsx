import React from "react";
import Navbar from "../../components/navbar/Navbar";

const Billing = () => {
  return (
    <div className="bg-grey-bg h-screen w-screen overflow-hidden">
      <Navbar />

      {/* <div className="block  col-span-1 py-4 px-8 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100"> */}
      <section class=" px-16 m-3 leading-7 text-gray-900 bg-white sm:py-12 md:py-6 border border-gray-200 rounded-lg shadow dark:border-gray-100">
        <div class="box-border mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl ">
          <div class="flex flex-col  leading-7  text-gray-900 border-0 border-gray-200">
            <h2
              id="pricing"
              class="box-border m-0 text-xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl"
            >
              Pricing
            </h2>
            <p class="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl"></p>
          </div>

          <div
            id="pricing"
            class="grid grid-cols-1  text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-2  md:gap-4 lg:grid-cols-3"
          >
            <div class="flex flex-col items-center max-w-md  mx-auto my-0 border-solid rounded-lg border-0 shadow  sm:my-0 sm:p-6  md:py-4 md:px-12">
              <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-2xl">
                Basic
              </h3>
              <p>Monthly Charge</p>

              <p class="box-border m-0 text-4xl font-semibold leading-none border-solid text-primary-blue">
                $14.99
              </p>
              <hr
                style={{ borderTop: "1px solid gray", width: "100%" }}
                className="my-4"
              />
              <ul class="flex flex-col items-center leading-7 text-gray-600 border-0 border-gray-200 gap-2">
                <li class="text-2">Free Setup</li>
                <li class=" ">Bandwidth Limit 10 GB</li>
                <li class=" ">20 User Connection</li>
                <li class="text-gray-400 ">Analytics Report</li>
                <li class="text-gray-400 ">Public API Access</li>
                <li class=" text-gray-400">Plugins Intregation</li>
                <li class="text-gray-400 ">Custom Content Management</li>
              </ul>

              <hr
                style={{ borderTop: "1px solid gray", width: "100%" }}
                className="my-4"
              />

              <a
                href="#"
                class="inline-flex justify-center w-full px-4 py-3 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-full cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg"
              >
                Get Started
              </a>
              <p className="py-3">Start Your 30 Day Free Trial</p>
            </div>

            <div class="flex flex-col items-center max-w-md  mx-auto my-0 border-solid rounded-lg border-0 shadow  sm:my-0 sm:p-6  md:py-4 md:px-8">
              <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-2xl">
                Basic
              </h3>
              <p>Monthly Charge</p>

              <p class="box-border m-0 text-4xl font-semibold leading-none border-solid text-primary-blue">
                $49.99
              </p>
              <hr
                style={{ borderTop: "1px solid gray", width: "100%" }}
                className="my-4"
              />
              <ul class="flex flex-col items-center leading-7 text-gray-600 border-0 border-gray-200 gap-2">
                <li class="text-2">Free Setup</li>
                <li class=" ">Bandwidth Limit 10 GB</li>
                <li class=" ">20 User Connection</li>
                <li class=" ">Analytics Report</li>
                <li class=" ">Public API Access</li>
                <li class=" text-gray-400">Plugins Intregation</li>
                <li class="text-gray-400 ">Custom Content Management</li>
              </ul>

              <hr
                style={{ borderTop: "1px solid gray", width: "100%" }}
                className="my-4"
              />
              <a
                href="#"
                class="inline-flex justify-center w-full px-4 py-3 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-full cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg"
              >
                Get Started
              </a>
              <p className="py-3">Start Your 30 Day Free Trial</p>
            </div>

            <div class="flex flex-col items-center max-w-md  mx-auto my-0 border-solid rounded-lg border-0 shadow  sm:my-0 sm:p-6  md:py-4 md:px-8">
              <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-2xl">
                Basic
              </h3>
              <p>Monthly Charge</p>

              <p class="box-border m-0 text-4xl font-semibold leading-none border-solid text-primary-blue">
                $89.99
              </p>
              <hr
                style={{ borderTop: "1px solid gray", width: "100%" }}
                className="my-4"
              />
              <ul class="flex flex-col items-center leading-7 text-gray-600 border-0 border-gray-200 gap-2">
                <li class="text-2">Free Setup</li>
                <li class=" ">Bandwidth Limit 10 GB</li>
                <li class=" ">20 User Connection</li>
                <li class=" ">Analytics Report</li>
                <li class=" ">Public API Access</li>
                <li class=" ">Plugins Intregation</li>
                <li class=" ">Custom Content Management</li>
              </ul>

              <hr
                style={{ borderTop: "1px solid gray", width: "100%" }}
                className="my-4"
              />

              <a
                href="#"
                class="inline-flex justify-center w-full px-4 py-3 font-sans text-sm leading-none text-center bg-blue-500 text-white no-underline bg-transparent border border-blue-600 rounded-full cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg"
              >
                Get Started
              </a>
              <p className="py-3">Start Your 30 Day Free Trial</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Billing;
