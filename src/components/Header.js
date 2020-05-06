import React, { Component } from "react";
import logo from "./images/StarQuiklogo.png";
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
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen1: false,
      dropdownOpen2: false,
      dropdownOpen3: false,
      dropdownOpen4: false,
      dropdownOpen5: false,
      dropdownOpen6: false,
      dropdownOpen7: false,
      dropdownOpen8: false,
      toggleNav: false,
    };
  }

  toggle(id) {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  onMouseEnter(id) {
    switch (id) {
      case 1:
        this.setState({ dropdownOpen1: true });
        return;
      case 2:
        this.setState({ dropdownOpen2: true });
        return;
      case 3:
        this.setState({ dropdownOpen3: true });
        return;
      case 4:
        this.setState({ dropdownOpen4: true });
        return;
      case 5:
        this.setState({ dropdownOpen5: true });
        return;
      case 6:
        this.setState({ dropdownOpen6: true });
        return;
      case 7:
        this.setState({ dropdownOpen7: true });
        return;
      case 8:
        this.setState({ dropdownOpen8: true });
        return;
    }
  }

  onMouseLeave(id) {
    switch (id) {
      case 1:
        this.setState({ dropdownOpen1: false });
        return;
      case 2:
        this.setState({ dropdownOpen2: false });
        return;
      case 3:
        this.setState({ dropdownOpen3: false });
        return;
      case 4:
        this.setState({ dropdownOpen4: false });
        return;
      case 5:
        this.setState({ dropdownOpen5: false });
        return;
      case 6:
        this.setState({ dropdownOpen6: false });
        return;
      case 7:
        this.setState({ dropdownOpen7: false });
        return;
      case 8:
        this.setState({ dropdownOpen8: false });
        return;
    }
  }
  toggleNav = () => {
    this.setState({ toggleNav: !this.state.toggleNav });
  };
  render() {
    return (
      <React.Fragment>
        <div className="row row-content ">
          <div className=" p-4 col-2 col-sm-2">
            <NavLink className="nav-link" to="/">
              <img
                src={logo}
                alt="Logo"
                className="fluid"
                style={{ width: 150 }}
              />
            </NavLink>
          </div>
          <div className="row">
            <div className="col pt-3">
              <button className="btnn">Location</button>
            </div>
            <div className="col pt-3">
              <input
                type="text"
                placeholder="search"
                className="search"
              ></input>
            </div>
            <div className="col pt-3 ">
              <button className="login">Login/Register</button>
            </div>
            <div className="col pt-3">
              <button className="cart">Cart</button>
            </div>
          </div>
        </div>
        <Navbar light expand="md" className="mainNav">
          <div className="container just-content-center">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.toggleNav} navbar>
              <Nav navbar className="">
                <NavItem>
                  <Dropdown
                    className="d-inline-block dropdown"
                    onMouseOver={() => this.onMouseEnter(1)}
                    onMouseLeave={() => this.onMouseLeave(1)}
                    isOpen={this.state.dropdownOpen1}
                    toggle={() => this.toggle(1)}
                    style={{ backgroundColor: "#1b1b2a" }}
                  >
                    <NavLink to="/beverages">
                      <DropdownToggle
                        className="text-white"
                        caret
                        color="#1b1b2a"
                      >
                        Beverages
                      </DropdownToggle>
                    </NavLink>

                    <DropdownMenu>
                      <DropdownItem header>Category 1</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem disabled>Item1</DropdownItem>
                      <DropdownItem disabled>Item2</DropdownItem>
                      <DropdownItem disabled>Item3</DropdownItem>
                      <DropdownItem disabled>Item4</DropdownItem>
                      <DropdownItem disabled>Item5</DropdownItem>
                      <DropdownItem disabled>Item6</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
                <NavItem>
                  <Dropdown
                    className="d-inline-block dropdown"
                    onMouseOver={() => this.onMouseEnter(2)}
                    onMouseLeave={() => this.onMouseLeave(2)}
                    isOpen={this.state.dropdownOpen2}
                    toggle={() => this.toggle(2)}
                    style={{ backgroundColor: "#1b1b2a" }}
                  >
                    <NavLink to="/brandedFood">
                      <DropdownToggle
                        className="text-white"
                        caret
                        color="#1b1b2a"
                      >
                        Branded Food
                      </DropdownToggle>
                    </NavLink>

                    <DropdownMenu>
                      <DropdownItem header>Category 1</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem disabled>Item1</DropdownItem>
                      <DropdownItem disabled>Item2</DropdownItem>
                      <DropdownItem disabled>Item3</DropdownItem>
                      <DropdownItem disabled>Item4</DropdownItem>
                      <DropdownItem disabled>Item5</DropdownItem>
                      <DropdownItem disabled>Item6</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
                <NavItem>
                  <Dropdown
                    className="d-inline-block dropdown"
                    onMouseOver={() => this.onMouseEnter(3)}
                    onMouseLeave={() => this.onMouseLeave(3)}
                    isOpen={this.state.dropdownOpen3}
                    toggle={() => this.toggle(3)}
                    style={{ backgroundColor: "#1b1b2a" }}
                  >
                    <NavLink to="/diaryBakery">
                      <DropdownToggle
                        className="text-white"
                        caret
                        color="#1b1b2a"
                      >
                        Diary,Bakery
                      </DropdownToggle>
                    </NavLink>

                    <DropdownMenu>
                      <DropdownItem header>Category 1</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem disabled>Item1</DropdownItem>
                      <DropdownItem disabled>Item2</DropdownItem>
                      <DropdownItem disabled>Item3</DropdownItem>
                      <DropdownItem disabled>Item4</DropdownItem>
                      <DropdownItem disabled>Item5</DropdownItem>
                      <DropdownItem disabled>Item6</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>

                <NavItem>
                  <Dropdown
                    className="d-inline-block dropdown"
                    onMouseOver={() => this.onMouseEnter(4)}
                    onMouseLeave={() => this.onMouseLeave(4)}
                    isOpen={this.state.dropdownOpen4}
                    toggle={() => this.toggle(4)}
                    style={{ backgroundColor: "#1b1b2a" }}
                  >
                    <NavLink to="/fruitsVegitables">
                      <DropdownToggle
                        className="text-white"
                        caret
                        color="#1b1b2a"
                      >
                        Fruits & Vegitables
                      </DropdownToggle>
                    </NavLink>

                    <DropdownMenu>
                      <DropdownItem header>Category 1</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem disabled>Item1</DropdownItem>
                      <DropdownItem disabled>Item2</DropdownItem>
                      <DropdownItem disabled>Item3</DropdownItem>
                      <DropdownItem disabled>Item4</DropdownItem>
                      <DropdownItem disabled>Item5</DropdownItem>
                      <DropdownItem disabled>Item6</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
                <NavItem>
                  <Dropdown
                    className="d-inline-block dropdown"
                    onMouseOver={() => this.onMouseEnter(5)}
                    onMouseLeave={() => this.onMouseLeave(5)}
                    isOpen={this.state.dropdownOpen5}
                    toggle={() => this.toggle(5)}
                    style={{ backgroundColor: "#1b1b2a" }}
                  >
                    <NavLink to="/frozenVeg">
                      <DropdownToggle
                        className="text-white"
                        caret
                        color="#1b1b2a"
                      >
                        Frozen Veg
                      </DropdownToggle>
                    </NavLink>

                    <DropdownMenu>
                      <DropdownItem header>Category 1</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem disabled>Item1</DropdownItem>
                      <DropdownItem disabled>Item2</DropdownItem>
                      <DropdownItem disabled>Item3</DropdownItem>
                      <DropdownItem disabled>Item4</DropdownItem>
                      <DropdownItem disabled>Item5</DropdownItem>
                      <DropdownItem disabled>Item6</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
                <NavItem>
                  <Dropdown
                    className="d-inline-block dropdown"
                    onMouseOver={() => this.onMouseEnter(6)}
                    onMouseLeave={() => this.onMouseLeave(6)}
                    isOpen={this.state.dropdownOpen6}
                    toggle={() => this.toggle(6)}
                    style={{ backgroundColor: "#1b1b2a" }}
                  >
                    <NavLink to="/nonVeg">
                      <DropdownToggle
                        className="text-white"
                        caret
                        color="#1b1b2a"
                      >
                        Non Veg
                      </DropdownToggle>
                    </NavLink>

                    <DropdownMenu>
                      <DropdownItem header>Category 1</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem disabled>Item1</DropdownItem>
                      <DropdownItem disabled>Item2</DropdownItem>
                      <DropdownItem disabled>Item3</DropdownItem>
                      <DropdownItem disabled>Item4</DropdownItem>
                      <DropdownItem disabled>Item5</DropdownItem>
                      <DropdownItem disabled>Item6</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
                <NavItem>
                  <Dropdown
                    className="d-inline-block dropdown"
                    onMouseOver={() => this.onMouseEnter(7)}
                    onMouseLeave={() => this.onMouseLeave(7)}
                    isOpen={this.state.dropdownOpen7}
                    toggle={() => this.toggle(7)}
                    style={{ backgroundColor: "#1b1b2a" }}
                  >
                    <NavLink to="/homeCare">
                      <DropdownToggle
                        className="text-white"
                        caret
                        color="#1b1b2a"
                      >
                        Home Care
                      </DropdownToggle>
                    </NavLink>

                    <DropdownMenu>
                      <DropdownItem header>Category 1</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem disabled>Item1</DropdownItem>
                      <DropdownItem disabled>Item2</DropdownItem>
                      <DropdownItem disabled>Item3</DropdownItem>
                      <DropdownItem disabled>Item4</DropdownItem>
                      <DropdownItem disabled>Item5</DropdownItem>
                      <DropdownItem disabled>Item6</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
                <NavItem>
                  <Dropdown
                    className="d-inline-block dropdown"
                    onMouseOver={() => this.onMouseEnter(8)}
                    onMouseLeave={() => this.onMouseLeave(8)}
                    isOpen={this.state.dropdownOpen8}
                    toggle={() => this.toggle(8)}
                    style={{ backgroundColor: "#1b1b2a" }}
                  >
                    <NavLink to="/personalCare">
                      <DropdownToggle
                        className="text-white"
                        caret
                        color="#1b1b2a"
                      >
                        Personal Care
                      </DropdownToggle>
                    </NavLink>

                    <DropdownMenu>
                      <DropdownItem header>Category 1</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem disabled>Item1</DropdownItem>
                      <DropdownItem disabled>Item2</DropdownItem>
                      <DropdownItem disabled>Item3</DropdownItem>
                      <DropdownItem disabled>Item4</DropdownItem>
                      <DropdownItem disabled>Item5</DropdownItem>
                      <DropdownItem disabled>Item6</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
