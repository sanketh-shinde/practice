import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useState } from "react";

const MuiAccordian = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (isExpanded, pannel) => {
    setExpanded(isExpanded ? pannel : false);
  };

  return (
    <>
      <Accordion
        expanded={expanded === "pannel1"}
        onChange={(_, isExpanded) => handleChange(isExpanded, "pannel1")}
      >
        <AccordionSummary id="pannel1" expandIcon={<ExpandMore />}>
          Accordian 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          consequatur incidunt, culpa laborum obcaecati expedita aut reiciendis
          est vel perspiciatis reprehenderit consequuntur quo voluptate facilis
          aperiam distinctio rerum ex temporibus.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "pannel2"}
        onChange={(_, isExpanded) => handleChange(isExpanded, "pannel2")}
      >
        <AccordionSummary id="pannel2" expandIcon={<ExpandMore />}>
          Accordian 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          consequatur incidunt, culpa laborum obcaecati expedita aut reiciendis
          est vel perspiciatis reprehenderit consequuntur quo voluptate facilis
          aperiam distinctio rerum ex temporibus.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "pannel3"}
        onChange={(_, isExpanded) => handleChange(isExpanded, "pannel3")}
      >
        <AccordionSummary id="pannel3" expandIcon={<ExpandMore />}>
          Accordian 3
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          consequatur incidunt, culpa laborum obcaecati expedita aut reiciendis
          est vel perspiciatis reprehenderit consequuntur quo voluptate facilis
          aperiam distinctio rerum ex temporibus.
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MuiAccordian;
