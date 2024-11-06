

const Card = () => {
    return (
        <section className="container mx-auto py-16 px-4 ml-80">
        <div className=" flex w-[1046px] h-[292px]  gap-[30px] ">
          <div className="p-6 rounded-lg shadow-lg bg-white text-gray-800 w-[328px] h-auto pt-[35px] pr-[40px] pb-[35px] pl-[40px] gap-[20px]">
            <div className="h-10 w-10 mb-4 rounded bg-[#FFDCD1]"></div>
            <h4 className="text-xl font-semibold mb-2">Training Courses</h4>
            <div className="h-[2px]  bg-[#FFDCD1] w-[50px] my-[10px] "></div>
            <p className="text-justify-center">
              The gradual accumulation of<br /> information about atomic and <br /> small-scale behaviour...
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-white text-gray-800  w-[328px] h-auto pt-[35px] pr-[40px] pb-[35px] pl-[40px] gap-[20px]">
            <div className="mb-4 rounded bg-[#B9EAA8] w-10 p-[22px_19px]  h-10 gap-[10px] "></div>
            <h4 className="text-xl font-semibold mb-2">2,769 online courses</h4>
            <div className=" bg-[#B9EAA8] my-[10px] h-[2px]  w-[50px] "></div>
            <p className="text-justify-center">
              The gradual accumulation of <br/>information about atomic and <br /> small-scale behaviour...
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-blue-500 text-white  w-[328px] h-auto pt-[35px] pr-[40px] pb-[35px] pl-[40px] gap-[20px]">
            <div className="h-10 w-10 mb-4 rounded bg-[#FFFFFF]"></div>
            <h4 className="text-xl font-semibold mb-2">Training Courses</h4>
            <div className="h-[2px] w-[50px] my-[10px] bg-[#FFFFFF]"></div>
            <p className="text-justify-center">
              The gradual accumulation of <br /> information about atomic and <br /> small-scale behaviour...
            </p>
          </div>
        </div>
      </section>
    )

}

export default Card
