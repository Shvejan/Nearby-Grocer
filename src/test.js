import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./App.css";
import { Tab, Tabs } from "react-bootstrap";
import { connect } from "react-redux";
import cart from "./components/images/cart.png";
import avatar from "./components/images/avatar.png";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  Navbar,
  Collapse,
  NavItem,
  NavbarToggler,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";
import { NavLink, Redirect } from "react-router-dom";
import location from "./components/images/location.png";
import searchimg from "./components/images/searchimg.png";

const MenuItem = ({ text, selected }) => {
  return <div className="menu-item">{text}</div>;
};

export const Menu = (list) =>
  list.map((el) => {
    const { name } = el;

    return <MenuItem text={name} key={name} />;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });
class Test extends Component {
  state = {
    selected: 0,
    list: [
      { name: "item1" },
      { name: "item2" },
      { name: "item3" },
      { name: "item4" },
      { name: "item5" },
      { name: "item6" },
      { name: "item7" },
      { name: "item8" },
      { name: "item9" },
    ],
  };

  onSelect = (key) => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = Menu(this.state.list, selected);

    return (
      <div className="row" style={{ height: "90px", padding: "20px" }}>
        <div className="col-3">
          <NavLink to="/">
            <div className="row">
              <div className="col-3">
                <img
                  src={sessionStorage.getItem("branch_logo")}
                  alt="Logo"
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div className="col">
                <Label
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  {sessionStorage.getItem("branch_name")}
                </Label>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="col-4 ">
          <input
            id="search"
            type="text"
            placeholder="search"
            className="search"
          ></input>
        </div>
        <div className="col-2" style={{ marginLeft: "-55px" }}>
          <NavLink to="/searchresults/">
            <button onClick={this.search} className="searchbtn">
              {" "}
              <img
                src={searchimg}
                style={{ height: "20px", width: "20px" }}
                onClick={() => this.toggleLocModal()}
              />
            </button>
          </NavLink>
        </div>
        <div className="col-1">
          <img
            src={location}
            style={{ height: "40px", width: "40px" }}
            onClick={() => this.toggleLocModal()}
          />
        </div>
        <div className="col-1">
          <img
            src={avatar}
            style={{ height: "40px" }}
            onClick={this.toggleLoginModel}
          />
        </div>
        <div className="col-1">
          <NavLink to="/checkout">
            <div>
              <img src={cart} style={{ height: "40px", width: "40px" }} />
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Test;
