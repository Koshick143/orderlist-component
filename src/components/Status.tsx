import React from "react";
import {
  Container,
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
  Button,
  TextField,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

import { data } from "../assets/status";

import '../styles/status.css'

const Status: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={5}>
        <Card sx={{ padding: 2 }}>
          <CardHeader title="Order Status" sx={{ paddingBottom: 0 }} />
          <Divider sx={{ my: 3 }} />

          <CardContent>
            <Grid container spacing={3} sx={{ marginBottom: 2 }}>
              <Grid item xs={12} md={6} lg={3}>
                <Typography variant="subtitle2" color="textSecondary">
                  <span>Order Place Date</span>
                </Typography>
                <Typography variant="h6">
                  <span>{data.orderPlaceDate}</span>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Typography variant="subtitle2" color="textSecondary">
                  <span>Order Status</span>
                </Typography>
                <Typography variant="h6">
                  <span>{data.orderStatus}</span>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Typography variant="subtitle2" color="textSecondary">
                  <span>Delivery Option</span>
                </Typography>
                <Typography variant="h6">
                  <span>{data.deliveryOption}</span>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Typography variant="subtitle2" color="textSecondary">
                  <span>Payment</span>
                </Typography>
                <Typography variant="h6">
                  <span>{data.paymentMethod}</span>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Typography variant="subtitle2" color="textSecondary">
                  <span>Order Amount</span>
                </Typography>
                <Typography variant="h6">
                  <span>{data.orderAmount}</span>
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <div id="status-lower">
              <div>
                <Timeline position="right">
                  {data.timelineItems.map((item, index) => (
                    <TimelineItem key={index}>
                      <TimelineSeparator>
                        <TimelineDot
                          color={item.completed ? "primary" : "grey"}
                          variant={item.completed ? "filled" : "outlined"}
                        />
                        {index !== data.timelineItems.length - 1 && (
                          <TimelineConnector
                            sx={{
                              bgcolor:
                                index < data.timelineItems.length - 1 &&
                                data.timelineItems[index + 1].completed
                                  ? "primary.main"
                                  : "grey.500",
                            }}
                          />
                        )}
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="h6" component="span">
                          <span>{item.title}</span>
                        </Typography>
                        <Typography color="textSecondary">
                          <span>{item.date}</span>
                        </Typography>
                        {item.description.map((desc, idx) => (
                          <Typography key={idx}>
                            <span>{desc}</span>
                          </Typography>
                        ))}
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </div>
              <div>
                <Box mt={3}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Write a Review"
                    multiline
                    rows={4}
                    sx={{ marginBottom: 2 }}
                  />
                  <Box display="flex" justifyContent="flex-end">
                    <Button variant="contained" color="primary">
                      Post Review
                    </Button>
                  </Box>
                </Box>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Status;
