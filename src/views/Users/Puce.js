import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
   
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color:'rgb(17, 141, 65)',
    fontWeight:'bold'
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion style={{ backgroundColor:'transparent',border:'none'}} >
        <AccordionSummary
          expandIcon={<ArrowDropDown style={{ color:'rgb(17, 141, 65)'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Newest</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
              mon text
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}