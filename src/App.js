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

class DayCard extends React.Component {
  render() {
    return (
      <div className="day-card-design-inactive">
        <p className="day-card-text">{this.props.day}</p>
        <br></br>
        <p className="day-card-text">{this.props.number}</p>
      </div>
    );
  }
}

class Table extends React.Component {
  renderCard() {
    return <Card />;
  }
  renderDayCard(day, number) {
    return <DayCard day={day} number={number} />;
  }
  render() {
    return (
      <div class="container" id="table-wrapper">
        <div class="row table-header">
          <div class="col-sm"></div>
          <div class="col-sm ">{this.renderDayCard("Sun", 10)}</div>
          <div class="col-sm">{this.renderDayCard("Mon", 11)}</div>
          <div class="col-sm">{this.renderDayCard("Tue", 12)}</div>
          <div class="col-sm">{this.renderDayCard("Wed", 13)}</div>
          <div class="col-sm">{this.renderDayCard("Thu", 14)}</div>
          <div class="col-sm">{this.renderDayCard("Fri", 15)}</div>
          <div class="col-sm">{this.renderDayCard("Sat", 16)}</div>
        </div>
      </div>
    );
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
