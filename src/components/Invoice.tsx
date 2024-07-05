import React from "react";
import { Card, CardHeader, CardContent, Button, Box } from "@mui/material";

import { invoice } from "../assets/invoice";

const Invoice: React.FC = () => {
  const printImage = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(
        "<html><head><title>Print Invoice</title></head><body>"
      );
      printWindow.document.write(
        `<img src="${invoice}" style="width:100%;height:auto;">`
      );
      printWindow.document.write("</body></html>");
      printWindow.document.close();
      printWindow.onload = () => {
        printWindow.print();
        printWindow.close();
      };
    }
  };

  return (
    <Card>
      <CardHeader title="Invoice" subheader="Invoice #125863478945" />
      <CardContent>
        <Box display="flex" justifyContent="center">
          <img
            src={invoice}
            alt="Invoice"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
        <Box mt={2} display="flex" justifyContent="center">
          <Button variant="contained" color="primary" onClick={printImage}>
            Print
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Invoice;
