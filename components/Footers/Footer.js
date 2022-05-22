import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-BlueGray-900 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
          <div className="p-5 ">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-6">
                Zulguur.<span className="text-blue-600">mn</span>
              </p>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-xl pb-4">Zulguur.mn</p>
              <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Бидний тухай
              </li>
              <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Үйлчилгээ
              </li>
              
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-xl pb-4">Тусламж</p>
              <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Түгээмэл асуултууд
              </li>
              <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Ашиглах заавар
              </li>
              <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Угаалгын газрууд
              </li>
              
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-xl pb-4">Холбоо барих</p>
              <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Утас : 99999999
              </li>
              <li className="text-gray-500 text-sm pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Емайл хаяг : Example@zulguur.mn
              </li>
              
            </ul>
          </div>
        </div>
        
      </footer>
    </>
  );
}
