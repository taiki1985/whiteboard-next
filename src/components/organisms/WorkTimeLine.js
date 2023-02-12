import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

// const useStyles = makeStyles({
//   timeline: {
//     transform: "rotate(90deg)"
//   },
//   timelineContentContainer: {
//     textAlign: "left"
//   },
  // timelineContent: {
  //   display: "inline-block",
  //   transform: "rotate(-90deg)",
  //   textAlign: "center",
  //   minWidth: 50
  // },
//   timelineIcon: {
//     transform: "rotate(-90deg)"
//   }
// });

export default function WorkTimeline() {

  // const classes = useStyles();

  return (
    // <Timeline sx={{ transform: "rotate(-90deg)" }} position="alternate">
    // {/* <Timeline sx={{ transform: "rotate(90deg)" }} position="alternate"> */}
    //   <TimelineItem>
    //     <TimelineOppositeContent
    //       // sx={{ m: 'auto 0',transform: "rotate(90deg) translate(100%, 100%)" }}
    //       sx={{ m: 'auto 0', position:"relative", top:"100px" }}
    //       align="center"
    //       variant="body2"
    //       color="text.secondary"
    //     >
    //       9:30 am
    //     </TimelineOppositeContent >
    //     <TimelineSeparator>
    //       <TimelineConnector />
    //       <TimelineDot sx={{ transform: "rotate(90deg)"}}>
    //       {/* <TimelineDot sx={{ transform: "rotate(90deg)", position:"relative", top:"100px"}}> */}
    //         <FastfoodIcon />
    //       </TimelineDot>
    //       <TimelineConnector />
    //     </TimelineSeparator>
    //     <TimelineContent
    //       sx={{
    //         display: "inline-block",
    //         transform: "rotate(90deg)",
    //         position:"relative",
    //         // top:"100px",
    //         // left: "-100%",
    //         left: "-90px",
    //         textAlign: "left",
    //         minWidth: 50
    //     }}>
    //       <Typography variant="h6" component="span">
    //         Eat
    //       </Typography>
    //       <Typography>Because you need strength</Typography>
    //     </TimelineContent>
    //   </TimelineItem>
    //   <TimelineItem>
    //     <TimelineOppositeContent
    //       sx={{ m: 'auto 0' }}
    //       variant="body2"
    //       color="text.secondary"
    //     >
    //       10:00 am
    //     </TimelineOppositeContent>
    //     <TimelineSeparator>
    //       <TimelineConnector />
    //       <TimelineDot color="primary" sx={{ transform: "rotate(-90deg)" }}>
    //         <LaptopMacIcon />
    //       </TimelineDot>
    //       <TimelineConnector />
    //     </TimelineSeparator>
    //     <TimelineContent sx={{ py: '12px', px: 2 }}>
    //       <Typography variant="h6" component="span">
    //         Code
    //       </Typography>
    //       <Typography>Because it&apos;s awesome!</Typography>
    //     </TimelineContent>
    //   </TimelineItem>
    //   <TimelineItem>
    //     <TimelineSeparator>
    //       <TimelineConnector />
    //       <TimelineDot color="primary" variant="outlined">
    //         <HotelIcon />
    //       </TimelineDot>
    //       <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
    //     </TimelineSeparator>
    //     <TimelineContent sx={{ py: '12px', px: 2 }}>
    //       <Typography variant="h6" component="span">
    //         Sleep
    //       </Typography>
    //       <Typography>Because you need rest</Typography>
    //     </TimelineContent>
    //   </TimelineItem>
    //   <TimelineItem>
    //     <TimelineSeparator>
    //       <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
    //       <TimelineDot color="secondary">
    //         <RepeatIcon />
    //       </TimelineDot>
    //       <TimelineConnector />
    //     </TimelineSeparator>
    //     <TimelineContent sx={{ py: '12px', px: 2 }}>
    //       <Typography variant="h6" component="span">
    //         Repeat
    //       </Typography>
    //       <Typography>Because this is the life you love!</Typography>
    //     </TimelineContent>
    //   </TimelineItem>
    // </Timeline>
    // <Timeline position="alternate">
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon fontSize="small" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent variant="body2" sx={{ m: 'auto 0' }}>
          <Typography>
            Eat
          </Typography>
          {/* <Typography>Because you need strength</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon fontSize="small" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent variant="body2" sx={{ m: 'auto 0' }}>
          <Typography>
            Eat
          </Typography>
          {/* <Typography>Because you need strength</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon fontSize="small" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent variant="body2" sx={{ m: 'auto 0' }}>
          <Typography>
            Eat
          </Typography>
          {/* <Typography>Because you need strength</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon fontSize="small" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent variant="body2" sx={{ m: 'auto 0' }}>
          <Typography>
            Eat
          </Typography>
          {/* <Typography>Because you need strength</Typography> */}
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
