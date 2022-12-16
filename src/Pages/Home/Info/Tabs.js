import React, { useState } from "react";
import { Tab } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Sonnet from "./Sonnet";

const TableTab = () => {
  const [key, setKey] = useState("ETH Transaction History");
  return (
    <div className="col-6 mt-5">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="ETH Transaction History" title="ETH Transaction History">
          <Sonnet />
        </Tab>
        <Tab eventKey="TestLink Transaction History" title="TestLink Transaction History">
          <Sonnet />
        </Tab>
      </Tabs>
    </div>
  );
};

export default TableTab;
