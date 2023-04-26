import React from 'react';
import Headroom from 'react-headroom';
import Header3 from 'components/Header3';

function renderSection1(props) {
  return (
    <section className="flex flex-col relative grow min-h-[175px]">
      <div className="flex flex-col relative grow">
        <div className="bg-[rgb(79,236,161)] outline outline-[rgb(70,70,70)] outline-[6px] outline-offset-[-6px] relative min-h-[140px]" />
        <div className="mt-[-140px] flex flex-col relative">
          <h1 className="font-normal text-[128px] leading-[1.36] font-NunitoSans text-[rgb(70,70,70)] tracking-[0px] w-[65.97%] relative grow my-0 mx-auto">
            Team 1 Portfolio
          </h1>
        </div>
      </div>
    </section>
  );
}

function renderSection2(props) {
  return (
    <section className="flex flex-col relative grow min-h-[849px]">
      <div className="flex flex-col relative grow mt-[166px] mx-[364px] mb-[203px]">
        <div className="flex flex-col relative z-[1]">
          <div className="bg-[rgb(79,236,161)] rounded-[10px] outline outline-[rgb(70,70,70)] outline-[3px] w-[85.67%] relative grow min-h-[72px] my-0 mx-auto" />
        </div>
        <div className="mt-[-72px] flex flex-col relative z-[5]">
          <h1 className="font-normal text-[64px] leading-[1.35] font-NunitoSans text-white tracking-[0px] w-[38.2%] relative grow my-0 mx-auto">
            About Us
          </h1>
        </div>
        <div className="flex flex-col relative z-[2]">
          <div className="bg-[rgb(79,236,161)] rounded-[10px] outline outline-[rgb(70,70,70)] outline-2 outline-offset-[-2px] w-[30.9%] relative grow min-h-[100px] mt-[93px] mr-0 mb-0 ml-[69.1%]" />
        </div>
        <div className="mt-[-100px] flex flex-col relative z-[3]">
          <div className="bg-[rgb(79,236,161)] rounded-[10px] outline outline-[rgb(70,70,70)] outline-[3px] outline-offset-[-3px] w-[30.9%] relative grow min-h-[100px] mt-0 mr-[69.1%] mb-0 ml-0" />
        </div>
        <div className="mt-[-78px] flex flex-col relative z-[4]">
          <h1 className="font-normal text-[48px] leading-[1.16] font-Roboto text-[rgb(70,70,70)] tracking-[0px] relative grow my-0 mx-[25px]">
            Mitchell
          </h1>
        </div>
        <div className="mt-[-56px] flex flex-col relative z-[7]">
          <h1 className="flex justify-end font-normal text-[48px] leading-[1.16] font-Roboto text-[rgb(70,70,70)] text-right tracking-[0px] w-[83.71%] relative grow my-0 mx-auto">
            Shay
          </h1>
        </div>
        <div className="bg-[rgb(79,236,161)] rounded-[10px] outline outline-[rgb(70,70,70)] outline-[3px] outline-offset-[-3px] w-[30.9%] relative min-h-[100px] mt-[122px] mx-auto mb-0" />
        <div className="mt-[-78px] flex flex-col relative z-[6]">
          <h1 className="font-normal text-[48px] leading-[1.16] font-Roboto text-[rgb(70,70,70)] tracking-[0px] w-[22.19%] relative grow my-0 mx-auto">
            William
          </h1>
        </div>
      </div>
    </section>
  );
}

export default function Lab03Home(props) {
  return (
    <React.Fragment>
      <Headroom tag="header" className="page-header">
        <nav className="max:show">
          <Header3 />
        </nav>
      </Headroom>

      <main className="lab03home flex flex-col bg-white pt-[undefinedpx] pr-[undefinedpx] pb-[undefinedpx] pl-[undefinedpx] relative overflow-hidden">
        <div className="flex flex-col relative">{renderSection1(props)}</div>
        <div className="flex flex-col relative">{renderSection2(props)}</div>
      </main>
    </React.Fragment>
  );
}
