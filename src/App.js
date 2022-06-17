import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { FaRegCalendarMinus, FaAngleDown } from "react-icons/fa";

class Card extends React.Component {
  render() {
    return (
      <div className="card-design">
        <p className="card-title">Coffee with Aim team..</p>
        <p className="card-date">09:30 - 10:30 AM</p>
      </div>
    );
  }
}

class Table extends React.Component {
  renderCard() {
    return <Card />;
  }
  render() {
    return <div id="table"></div>;
  }
}

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <span className="navbar-brand mb-0 h1">Timeline</span>
        <div id="navbar-right-items">
          <button id="week-btn">
            <FaRegCalendarMinus className="calendar-icon" />
            <p>Week</p>
            <FaAngleDown className="arrow-down-icon" />
          </button>
          <span id="curr-date">10 - 16 December, 2019 </span>
          <div id="arrows-container">
            <button className="arrow-btn arrow-left-btn">{"<"}</button>
            <button className="arrow-btn arrow-right-btn">{">"}</button>
          </div>
        </div>
      </nav>
      <Table />
    </div>
  );
}
