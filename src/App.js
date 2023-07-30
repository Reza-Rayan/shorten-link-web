import React from "react";
import { Link } from "react-router-dom";
// import components
import Header from "./hoc/Header";
import MbHeader from "./hoc/MbHeader";
import Form from "./components/Form";
import Card from "./components/Card";
import Footer from "./hoc/Footer";

// Images
import mainSectionImg from "./assets/working-top-section.svg";
import vector1 from "./assets/icon-brand-recognition.svg"
import vector2 from "./assets/icon-detailed-records.svg"
import vector3 from "./assets/icon-fully-customizable.svg"



const App = () => {
  return (
    <div>
      <Header />
      <MbHeader />


      {/* Body */}
      <main className=" lg:mx-auto">
        <div className="bg-white lg:pt-24">
          <section className="lg:w-[80%] mx-auto grid  lg:grid-cols-2 pb-40  gap-6">
            <div className="hidden sm:inline-block pt-20 columns-1 lg:order-first sm:order-last" >
              <h1 className="lg:text-[80px]  text-xl  font-bold lg:leading-[90px] sm:leading-[48px]   text-center lg:text-left tracking-[-2px]">
                More than just shorter links
              </h1>
              <p className="flex text-[22px]  tracking-[0.15px] font-medium leading-[36px]  text-center lg:text-left text-[#9E9AA8] lg:pr-32">
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
              </p>
              <div className="pt-10 flex justify-center lg:inline-block  ">
                <Link
                  to={"#"}
                  className="mainBg  border-[#2BD0D0]  rounded-3xl font-bold px-8 py-3 text-[20px] sm:text-center 
           hover:bg-[#9AE3E3] transition-all "
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="top-page-img columns-1 lg:order-last sm:order-first">
              <img
                src={mainSectionImg}
                alt="mainSectionImg"
                className="inline-block lg:relative  "
              />
            </div>
            {/* Mobile section of text */}
            <div className="sm:hidden mx-6 inline-block mt-4 columns-1 lg:order-first sm:order-last" >
              <h1 className="lg:text-[80px] text-5xl  font-bold lg:leading-[90px] sm:leading-[48px]   text-center lg:text-left tracking-[-2px]">
                More than just shorter links
              </h1>
              <p className="flex text-[22px] md:p-3 tracking-[0.15px] font-medium leading-[36px]  text-center lg:text-left sm:p-6 text-[#9E9AA8] lg:pr-52">
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
              </p>
              <div className="mt-10 flex justify-center lg:inline-block  ">
                <Link
                  to={"#"}
                  className="mainBg  border-[#2BD0D0] rounded-full  md:rounded-3xl font-bold px-8 py-4 text-[20px] sm:text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </section>
        </div>
        <Form />


        <div className=" bg-[#EFF1F7] mt-[-70px]  ">
          <div className="text-center mt-48 w-[90%] mx-auto">
            <h2 className="text-[28px] md:text-[40px] font-bold text-[#34313D]">
              Advanced Statistics
            </h2>
            <p className="flex w-[90%] md:w-[30%] justify-center mx-auto text-[#9E9AA8] text-[18px] font-medium mt-4">
              Track how your links are performing across the web with our advanced statistics dashboard.
            </p>
          </div>

          <section className=" mb-20 container gap-8 w-[70%] relative  mx-auto">



            <div className="lg:flex h-[90%] items-center lg:gap-10 block z-10">
             <span className="bg-[#2BD0D0] 
           h-[8px] w-full hidden lg:block mt-[12%]
            absolute"></span>
            <span className="lg:hidden flex bg-[#2BD0D0] w-[8px] h-full absolute left-[50%]">

            </span>
                <Card vector={vector1} title={"Brand Recognition"} text={"Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."} />
              <Card vector={vector2} extranclass="lg:mt-40 " title={"Detailed Records"} text={"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."} />
              <Card vector={vector3} extranclass="lg:mt-64 " title={"Fully Customizable"} text={"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."} />
            </div>
          </section>
        </div>
        <Footer />
      </main>
      {/* Body */}
    </div>
  );
};

export default App;
