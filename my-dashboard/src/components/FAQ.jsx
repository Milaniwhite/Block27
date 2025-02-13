import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

const FAQ = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What is the overall income?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>The total income is $ total</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQ;
