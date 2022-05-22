import Link from "next/link";
import React from "react";

export const WasherCard = () => {
  return (
    <Link href={"/"}>
      <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto cursor-pointer ">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded-lg bg-blueGray-600 shadow-xl">
          <div>
            <img
              alt="..."
              src="/img/carwash-1.jpg"
              className="w-full align-middle rounded-t-lg"
            />
            <blockquote className="relative p-8 mb-4">
              <h4 className="text-xl font-bold text-white">
                Угаалгын газрын нэр
              </h4>
              <p className="text-md font-light mt-8 text-white">
                Мэргэжлийн авто угаалгын үйлчилгээг тохь тухтай орчинд хүргэхийг
                зорин ажилладаг. Төмөр хүлэгтээ хайртай хүн бүрт
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </Link>
    
  );
};
