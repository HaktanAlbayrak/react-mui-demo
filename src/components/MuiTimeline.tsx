import {
  Timeline,
  TimelineConnector,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
} from '@mui/lab';
import { Typography, Paper } from '@mui/material';
import { TimelineContent } from '@mui/lab';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

export const MuiTimeline = () => {
  return (
    <Timeline position='alternate'>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          9:05 AM
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City A</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          9:10 AM
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City B</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          9:15 AM
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary' variant='outlined' />
        </TimelineSeparator>
        <TimelineContent>City C</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
