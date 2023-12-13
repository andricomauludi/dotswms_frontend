import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import AccordionTable from "@/app/components/dashboard/accordionTable";

const AboutPage = () => {
  const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <div className="container mx-auto flex justify-center">
        <div className="max-w max-h rounded overflow-hidden shadow-lg bg-[#111633]" style={{backgroundColor:"#111633", padding:"20px"}}>
          {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Workspace</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>

          <AccordionTable />
          

       
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
