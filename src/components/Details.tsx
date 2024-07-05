import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { data } from '../assets/adminData';

import '../styles/details.css'

import { MdDelete } from "react-icons/md";

export default function Details() {
  const { customer, order, billing_address, shipping_address, products, summary } = data;

  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6"><span>Customer</span></Typography>
                  <Typography><span className='cus-detail'>{customer.name}</span> <span className='cus-detail'>{customer.phone}</span> <span className='cus-detail'>{customer.email}</span></Typography>
                </Grid>
                <Grid item xs={12} md={6} style={{ textAlign: 'right' }}>
                  <Typography variant="subtitle1"><span>Placed on {order.placed_on}</span></Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6"><span>Payment method</span></Typography>
              <Divider sx={{ my: 1 }} />
              <Typography><span>Type: {order.payment_method.type}</span></Typography>
              <Typography><span>Transaction ID: {order.payment_method.transaction_id}</span></Typography>
              <Typography><span>Amount: {order.payment_method.amount}</span></Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6"><span>Shipping method</span></Typography>
              <Divider sx={{ my: 1 }} />
              <div id='detail-payment'>
                <div> 
                  <Typography><span>Carrier: {order.shipping_method.carrier}</span></Typography>
                  <Typography><span>Tracking Code: {order.shipping_method.tracking_code}</span></Typography>
                  <Typography><span>Date: {order.shipping_method.date}</span></Typography>
                </div>
                <div>
                  <Typography><span>Fulfillment status: {order.fulfillment_status}</span></Typography>
                  <Typography><span>Payment status: {order.payment_status}</span></Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6"><span>Billing address</span></Typography>
              <Divider sx={{ my: 1 }} />
              <Typography><span>First name: {billing_address.first_name}</span></Typography>
              <Typography><span>Last name: {billing_address.last_name}</span></Typography>
              <Typography><span>Address: {billing_address.address}</span></Typography>
              <Typography><span>City: {billing_address.city}</span></Typography>
              <Typography><span>Country: {billing_address.country}</span></Typography>
              <Typography><span>State: {billing_address.state}</span></Typography>
              <Typography><span>Zip code: {billing_address.zip_code}</span></Typography>
              <Typography><span>Phone: {billing_address.phone}</span></Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6"><span>Shipping address</span></Typography>
              <Divider sx={{ my: 1 }} />
              <Typography><span>First name: {shipping_address.first_name}</span></Typography>
              <Typography><span>Last name: {shipping_address.last_name}</span></Typography>
              <Typography><span>Address: {shipping_address.address}</span></Typography>
              <Typography><span>City: {shipping_address.city}</span></Typography>
              <Typography><span>Country: {shipping_address.country}</span></Typography>
              <Typography><span>State: {shipping_address.state}</span></Typography>
              <Typography><span>Zip code: {shipping_address.zip_code}</span></Typography>
              <Typography><span>Phone: {shipping_address.phone}</span></Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6"><span>Products</span></Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><span>Description</span></TableCell>
                <TableCell><span>Details</span></TableCell>
                <TableCell><span>Quantity</span></TableCell>
                <TableCell><span>Amount</span></TableCell>
                <TableCell><span>Total</span></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, index) => (
                <TableRow key={index}>
                  <TableCell><span>{product.description}</span></TableCell>
                  <TableCell><span>{product.details}</span></TableCell>
                  <TableCell><span>{product.quantity}</span></TableCell>
                  <TableCell><span>{product.amount}</span></TableCell>
                  <TableCell><span>{product.total}</span></TableCell>
                  <TableCell><span><MdDelete color='slateblue' size={20}/></span></TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ marginTop: 2 }}>
     <div id='detail-sum'>
        <Card sx={{ bgcolor:"rgba(28, 170, 205, 0.168)"}}>
      <div id='card-content'>
            <CardContent>

           <Typography variant="h6"><span>Summary</span></Typography>
           <Typography><span>Sub Total: {summary.sub_total}</span></Typography>
           <Typography><span>Taxes: {summary.taxes}</span></Typography>
           <Typography><span>Discount: {summary.discount}</span></Typography>
           <Typography><span>Total: {summary.total}</span></Typography>


</CardContent>
     </div>
          
        </Card>
     </div>
      </Box>
    </Box>
  );
}
