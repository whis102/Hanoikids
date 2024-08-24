import "./History.scss";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { Typography } from "@mui/material";
import timelineData from "../../data/timelineData";
import { TimelineOppositeContent } from "@mui/lab";

export default function History() {
  return (
    <Timeline position="right">
      {timelineData.map((time, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent className="year">
            {time.yearRange}
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot>{time.yearRange}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <Typography>{time.events}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
