import React from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div className="container text-start py-5">
      <h1 className="text-primary text-center">Frequently Asked Questions</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is a blockchain oracle?</Accordion.Header>
          <Accordion.Body>
            A blockchain oracle is any system that services a smart contract by
            providing it with data from an off-chain source or connecting it
            with an off-chain system. Oracles enable connectivity between
            blockchains and real-world data by interfacing with external APIs
            and data feeds, allowing them to pull data for or push data from a
            smart contract.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why do blockchains need oracles?</Accordion.Header>
          <Accordion.Body>
            Oracles enable smart contracts to interact with off-chain resources.
            Without oracles, smart contracts can only access data within a
            blockchain, severely limiting their potential applications. The
            majority of industry-changing real-world use cases for smart
            contracts require off-chain data and computation for proper
            execution and often an integration with existing payment rails to
            settle a contract. For example, a smart contract may require
            high-quality weather data from a reputable source like AccuWeather
            to trigger a transaction. It may also require the ability to pay out
            escrowed fiat currency through existing financial infrastructure,
            such as a bank checking account.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What is the Chainlink Network?</Accordion.Header>
          <Accordion.Body>
            Oracles enable smart contracts to interact with off-chain resources.
            Without oracles, smart contracts can only access data within a
            blockchain, severely limiting their potential applications. The
            majority of industry-changing real-world use cases for smart
            contracts require off-chain data and computation for proper
            execution and often an integration with existing payment rails to
            settle a contract. For example, a smart contract may require
            high-quality weather data from a reputable source like AccuWeather
            to trigger a transaction. It may also require the ability to pay out
            escrowed fiat currency through existing financial infrastructure,
            such as a bank checking account.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Why do blockchains need oracles?</Accordion.Header>
          <Accordion.Body>
            Oracles enable smart contracts to interact with off-chain resources.
            Without oracles, smart contracts can only access data within a
            blockchain, severely limiting their potential applications. The
            majority of industry-changing real-world use cases for smart
            contracts require off-chain data and computation for proper
            execution and often an integration with existing payment rails to
            settle a contract. For example, a smart contract may require
            high-quality weather data from a reputable source like AccuWeather
            to trigger a transaction. It may also require the ability to pay out
            escrowed fiat currency through existing financial infrastructure,
            such as a bank checking account.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>What is the Chainlink Network?</Accordion.Header>
          <Accordion.Body>
            Oracles enable smart contracts to interact with off-chain resources.
            Without oracles, smart contracts can only access data within a
            blockchain, severely limiting their potential applications. The
            majority of industry-changing real-world use cases for smart
            contracts require off-chain data and computation for proper
            execution and often an integration with existing payment rails to
            settle a contract. For example, a smart contract may require
            high-quality weather data from a reputable source like AccuWeather
            to trigger a transaction. It may also require the ability to pay out
            escrowed fiat currency through existing financial infrastructure,
            such as a bank checking account.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Why do blockchains need oracles?</Accordion.Header>
          <Accordion.Body>
            Oracles enable smart contracts to interact with off-chain resources.
            Without oracles, smart contracts can only access data within a
            blockchain, severely limiting their potential applications. The
            majority of industry-changing real-world use cases for smart
            contracts require off-chain data and computation for proper
            execution and often an integration with existing payment rails to
            settle a contract. For example, a smart contract may require
            high-quality weather data from a reputable source like AccuWeather
            to trigger a transaction. It may also require the ability to pay out
            escrowed fiat currency through existing financial infrastructure,
            such as a bank checking account.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            Where can I explore the performance and reliability of the Chainlink
            Network?
          </Accordion.Header>
          <Accordion.Body>
            Oracles enable smart contracts to interact with off-chain resources.
            Without oracles, smart contracts can only access data within a
            blockchain, severely limiting their potential applications. The
            majority of industry-changing real-world use cases for smart
            contracts require off-chain data and computation for proper
            execution and often an integration with existing payment rails to
            settle a contract. For example, a smart contract may require
            high-quality weather data from a reputable source like AccuWeather
            to trigger a transaction. It may also require the ability to pay out
            escrowed fiat currency through existing financial infrastructure,
            such as a bank checking account.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            How do I keep up with current protocol development?
          </Accordion.Header>
          <Accordion.Body>
            Oracles enable smart contracts to interact with off-chain resources.
            Without oracles, smart contracts can only access data within a
            blockchain, severely limiting their potential applications. The
            majority of industry-changing real-world use cases for smart
            contracts require off-chain data and computation for proper
            execution and often an integration with existing payment rails to
            settle a contract. For example, a smart contract may require
            high-quality weather data from a reputable source like AccuWeather
            to trigger a transaction. It may also require the ability to pay out
            escrowed fiat currency through existing financial infrastructure,
            such as a bank checking account.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
