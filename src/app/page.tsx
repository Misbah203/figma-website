
import Navbar from "./component/Navbar"
import Card from "./component/card";
import React from 'react';

export default function Home() {
  return (
    <div >
      <Navbar />
    
      <section className="bg-[#252B42] text-white text-center  py-20 gap-40 h-496px w-701px pt-40px pb-40px" >
        <h5 className="text-blue-400 text-base font-bold leading-[24px] tracking-[0.1px] w-77px h-24px">Welcome</h5>
        
        <h1 className=" font-bold my-4  text-[58px] leading-80px  w-77px h-160px text-[#FFFFFF] text-center  leading-[80px] tracking-[0.2px]">Selling on the <br /> internet like a pro </h1>
       

        <h4 className=" max-w-md mx-auto mb-12 mt-16 w-536px h-60px text-[20px] font-normal leading-30px tracking-0.2px text-center text-xl ">
          We know how large objects will act, but things on a small scale just do not act that way.
        </h4>

        <div className="space-x-3  gap-10px w-365px h-52px">
          <button className=" hover:bg-blue-600 w-193px h-52px py-[15px] px-[30px] pr-[40px] pl-[40px] gap-10px rounded-[5px] text-white border bg-[#23A6F0]">
            Get Quote Now
          </button>
          <button className="  w-[193px] h-[52px] py-[15px] px-[30px]  pr-[40px] pl-[40px] gap-[10px] border border-[#23A6F0] hover:bg-blue-600 hover:text-white rounded-[5px]  border-t-[#23A6F0]">
            Learn More
          </button>
        </div>
      </section>

      <Card />
      </div>

  );
}

