"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import TableContent from "./tableContent";

const AccordionTable = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";

  return (
    <>
      <div className="justify-start">
        <Accordion variant="splitted" selectionMode="multiple">
          <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            <TableContent />
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default AccordionTable;
