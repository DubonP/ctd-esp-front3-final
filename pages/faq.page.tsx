import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { faqsData } from "dh-marvel/components/faqs/faqsData";

type FaqProps = {
  question: string;
  answer: string;
};

function accordionData({ question, answer }: FaqProps) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = () => {
    setExpanded(expanded === false ? question : false);
  };

  return (
    <Accordion
      expanded={expanded === question}
      onChange={handleChange}
      sx={{ backgroundColor: "#1976d2" }}
    >
      <AccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ color: "white" }} />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{ color: "white" }}
      >
        <Typography sx={{ color: "white" }}>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ color: "white" }}>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default function Faqs() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ width: "100%", marginTop: "50px" }}>
        {faqsData.map((faq, index) => (
          <Box sx={{ marginTop: "3px" }} key={index}>
            {accordionData(faq)}
          </Box>
        ))}
      </Box>
    </Container>
  );
}
