import React, { Component } from "react";
import { baseUrl } from "./shared/baseUrl";
import { connect } from "react-redux";
import cart from "./components/images/cart.png";
import avatar from "./components/images/avatar.png";
import searchimg from "./components/images/searchimg.png";
import "./test.css";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Badge,
  Dropdown,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import location from "./components/images/location.png";
import RecievedStores from "./components/RecievedStores";
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => ({});

class Test extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      toggleNav: false,
      loginModel: false,
      activeTab: "1",
      cartModal: false,
      locationModal: false,
      storeModal: false,
      otpModal: false,
      loginData: {},
      mobile: "",
    };
  }
  componentDidMount() {
    if (sessionStorage.getItem("pincode") === null) {
      this.toggleLocModal();
    }
  }

  toggle(id) {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }
  toggleLoginModel = () => {
    this.setState({
      loginModel: !this.state.loginModel,
    });
  };
  toggleCartModal = () => {
    this.setState({
      cartModal: !this.state.cartModal,
    });
  };

  toggleNav = () => {
    this.setState({ toggleNav: !this.state.toggleNav });
  };
  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) this.setState({ activeTab: tab });
  };
  toggleLocModal = () => {
    this.setState({ locationModal: !this.state.locationModal });
  };
  toggleOtpModal = () => {
    this.setState({ otpModal: !this.state.otpModal });
  };
  toggleSelectStore = () => {
    this.setState({ storeModal: !this.state.storeModal });
  };

  cartTotal = () => {
    let total = 0;

    return total;
  };
  handleLocation = (event) => {
    //this.setState({ pincode: this.pincode.value });
    sessionStorage.setItem("pincode", this.pincode.value);
    console.log("session pin set");
    this.toggleLocModal();
    this.props.fetchStores(this.pincode.value);
    this.toggleSelectStore();
    event.preventDefault();
  };
  handleMobile = (event) => {
    this.toggleLoginModel();
    this.toggleOtpModal();
    this.setState({ mobile: this.mobile.value });
    fetch(baseUrl + "custsignin", {
      method: "POST",
      body: JSON.stringify({
        mobile_no: this.mobile.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())
      .then((jres) => {
        this.setState({ loginData: jres.DATA });
        alert("OTP sent");
      })
      .catch((error) => alert(error));
    event.preventDefault();
  };
  handleOtp = (event) => {
    const response = this.state.loginData;
    response["mobile_no"] = this.state.mobile;
    response["otp"] = this.otp.value;
    fetch(baseUrl + "custsignin", {
      method: "POST",
      body: JSON.stringify(response),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())
      .then((jres) => {
        sessionStorage.setItem("userId", parseInt(jres.DATA["customer_id"]));
        alert(sessionStorage.getItem("userId"));
        alert("login successful");
      })
      .catch((error) => alert(error));
    this.toggleOtpModal();
    event.preventDefault();
  };

  search = () => {
    this.props.fetchSearch(
      sessionStorage.getItem("branch_id"),
      document.getElementById("search").value,
      52
    );
  };
  userDetails = () => {
    if (sessionStorage.getItem("userId")) {
      return (
        <NavLink to="/account">
          <img
            src={avatar}
            style={{ height: "40px", cursor: "pointer" }}
            onClick={this.toggleLoginModel}
            alt=""
          />
        </NavLink>
      );
    } else {
      return (
        <img
          src={avatar}
          style={{ height: "40px", cursor: "pointer" }}
          onClick={this.toggleLoginModel}
          alt=""
        />
      );
    }
  };
  click = () => {
    try {
      this.props.fetchSearch(
        sessionStorage.getItem("branch_id"),
        document.getElementById("search").value,
        50
      );
    } catch (error) {
      alert(error);
    }
  };
  render() {
    return (
      <React.Fragment>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          a dasf dasdf ad
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
// eslint-disable-next-line no-lone-blocks
{
  /*<Navbar light expand="md" className="mainNav">
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
                    <NavLink className="nav-link" to="/beverages">
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
                    <NavLink className="nav-link" to="/brandedFood">
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
                    <NavLink className="nav-link" to="/diaryBakery">
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
                    <NavLink className="nav-link" to="/fruitsVegitables">
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
                    <NavLink className="nav-link" to="/frozenVeg">
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
                    <NavLink className="nav-link" to="/nonVeg">
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
                    <NavLink className="nav-link" to="/homeCare">
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
                    <NavLink className="nav-link" to="/personalCare">
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
    </Navbar>*/
}
