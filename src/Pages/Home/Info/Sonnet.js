import React from "react";
import { Table } from "react-bootstrap";

const Sonnet = () => {
  return (
    <Table striped bordered hover className="w-50 ">
      <thead>
        <tr>
          <th>Sr</th>
          <th>Time</th>
          <th>Amount</th>
          <th>Hash</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>08:30 AM</td>
          <td>748</td>
          <td>@7s7effkeurusue4</td>
        </tr>
        
        <tr>
          <td>2</td>
          <td>08:30 AM</td>
          <td>748</td>
          <td>@4s8er5s5fe57rjmxnfuewrurks</td>
        </tr>
        
        <tr>
          <td>3</td>
          <td>08:30 AM</td>
          <td>748</td>
          <td>@4s8er5s5fe57rjmxnfuewrurks</td>
        </tr>
        
      </tbody>
    </Table>
  );
};

export default Sonnet;
