import React, { useState } from "react";
import { Tab } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Sonnet from "./Sonnet";

const TableTab = () => {
  const [key, setKey] = useState("home");
  return (
    <div className="col-6 mt-5">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <Sonnet />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Sonnet />
        </Tab>
      </Tabs>
    </div>
  );
};

export default TableTab;
