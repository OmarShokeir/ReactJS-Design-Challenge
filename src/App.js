import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { FaRegCalendarMinus, FaAngleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
      <button className="day-card-design-inactive">
        <p className="day-card-text">{this.props.day}</p>
        <br></br>
        <p className="day-card-text">{this.props.number}</p>
      </button>
    );
  }
}

class Table extends React.Component {
  renderCard() {
    return <Card />;
  }
  render() {
    return (
      <div className="container" id="table-wrapper">
        <div className="row table-header">
          <div className="col-sm"></div>
          <div className="col-sm ">
            <DayCard id="1" day={"Sun"} number={10} />
          </div>
          <div className="col-sm">
            <DayCard id="2" day={"Mon"} number={11} />
          </div>
          <div className="col-sm">
            <DayCard id="3" day={"Tue"} number={12} />
          </div>
          <div className="col-sm">
            <DayCard id="4" day={"Wed"} number={13} />
          </div>
          <div className="col-sm">
            <DayCard id="5" day={"Thu"} number={14} />
          </div>
          <div className="col-sm">
            <DayCard id="6" day={"Fri"} number={15} />
          </div>
          <div className="col-sm">
            <DayCard id="7" day={"Sat"} number={16} />
          </div>
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
      <div id="content-wrapper">
        <div className="sidebar-on">
          <GiHamburgerMenu className="grip-icon" />
        </div>
        <Table />
      </div>
    </div>
  );
}
