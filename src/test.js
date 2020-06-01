import React, { Component } from "react";
import { baseUrl } from "./shared/baseUrl";
import cart from "./components/images/cart.png";
import avatar from "./components/images/avatar.png";
import searchimg from "./components/images/searchimg.png";

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
} from "reactstrap";
import { NavLink } from "react-router-dom";
import location from "./components/images/location.png";

class Header extends Component {
  constructor(props) {
    super(props);

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
      signupModal: false,
    };
  }
  componentDidMount() {
    if (window.location.href.includes("/shipping")) {
      if (sessionStorage.getItem("userId") === null) {
        this.toggleLoginModel();
      }
    }
    if (sessionStorage.getItem("pincode") === null) {
      this.toggleLocModal();
    }
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
  toggleSigninModal = () => {
    this.setState({
      signupModal: !this.state.signupModal,
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
    // eslint-disable-next-line array-callback-return

    return total;
  };
  handleLocation = (event) => {
    //this.setState({ pincode: this.pincode.value });
    console.log("session pin set");
    this.toggleLocModal();
    this.props.fetchStores(this.pincode.value);
    this.toggleSelectStore();
    event.preventDefault();
  };
  handleMobile = (event) => {
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
        this.toggleLoginModel();
        if (this.state.loginData.login_type === "signin") {
          this.toggleOtpModal();
        } else {
          this.toggleSigninModal();
        }
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
  handleSignup = (event) => {
    event.preventDefault();

    const response = this.state.loginData;
    response["mobile_no"] = this.state.mobile;
    response["otp"] = this.otp.value;
    response["first_name"] = this.firstname.value;
    response["last_name"] = this.lastname.value;
    alert(JSON.stringify(response));
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
        this.toggleSigninModal();
      })
      .catch((error) => alert(error));
  };

  search = () => {
    sessionStorage.setItem(
      "searchKeyWord",
      document.getElementById("search").value
    );
    this.props.fetchSearch(
      sessionStorage.getItem("branch_id"),
      document.getElementById("search").value,
      52,
      0
    );
  };
  userDetails = () => {
    if (sessionStorage.getItem("userId")) {
      return (
        <NavLink to="/account">
          <Label>
            <img
              src={avatar}
              style={{ height: "20px", cursor: "pointer" }}
              alt=""
            />
            M Shvejan
          </Label>
        </NavLink>
      );
    } else {
      return (
        <Button
          style={{
            marginLeft: "-50px",
            marginTop: "5px",
            width: "140px",
            height: "35px",
            overflow: "hidden",
          }}
        >
          Hello, Himanshu Shinghaaanamamam
        </Button>
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
  locationModalHeader = () => {
    if (sessionStorage.getItem("branch_id")) {
      return (
        <ModalHeader toggle={this.toggleLocModal}>
          Enter Your Pincode
        </ModalHeader>
      );
    } else {
      return <ModalHeader>Enter Your Pincode</ModalHeader>;
    }
  };
  loginModalHeader = () => {
    if (window.location.href.includes("/shipping")) {
      return <ModalHeader>Mobile Number</ModalHeader>;
    } else {
      return (
        <ModalHeader toggle={this.toggleLoginModel}>Mobile Number</ModalHeader>
      );
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="sticky-top">
          <div
            className="row header"
            style={{
              height: "80px",
              padding: "20px",
            }}
          >
            <div className="col-3">
              <NavLink to="/">
                <div className="row">
                  <div className="col-2">
                    <img
                      src={sessionStorage.getItem("branch_logo")}
                      alt="Logo"
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                    />
                  </div>
                  <div className="col-7">
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
            <form action="/searchresults" method="get">
              <div className="row">
                <div className="col-9 ">
                  <input
                    id="search"
                    type="text"
                    placeholder="search"
                    className="search"
                  ></input>
                </div>
                <div className="col-3">
                  <NavLink to="/searchresults/">
                    <button
                      onClick={this.search}
                      type="submit"
                      className="searchbtn"
                    >
                      {" "}
                      <img
                        src={searchimg}
                        style={{ height: "20px", width: "20px" }}
                        alt=""
                      />
                    </button>
                  </NavLink>
                </div>
              </div>
            </form>

            <div className="col-1 offset-1">
              <img
                src={location}
                style={{ height: "40px", width: "40px", cursor: "pointer" }}
                onClick={() => this.toggleLocModal()}
                alt=""
              />
            </div>
            <div className="col-1">{this.userDetails()}</div>
            <div className="col-1">
              <NavLink to="/checkout">
                <div>
                  <img
                    src={cart}
                    style={{ height: "40px", width: "40px" }}
                    alt=""
                  />
                  <Badge color="secondary">{this.cartTotal()}</Badge>
                </div>
              </NavLink>
            </div>
          </div>
          {/*nav bar*/}
          <Modal isOpen={this.state.loginModel}>
            {this.loginModalHeader()}

            <div className="justify-content-center">
              <Form onSubmit="">
                <FormGroup>
                  <Input
                    type="number"
                    id="mobile"
                    name="mobile"
                    innerRef={(input) => (this.mobile = input)}
                  />
                </FormGroup>
                <Button type="submit" value="submit" color="primary">
                  Request OTP
                </Button>
              </Form>
            </div>
          </Modal>
          <Modal isOpen={this.state.otpModal} toggle={this.toggleOtpModal}>
            <ModalHeader toggle={this.toggleOtpModal}>OTP</ModalHeader>

            <div className="justify-content-center">
              <Form onSubmit="{this.handleOtp}">
                <FormGroup>
                  <Input
                    type="number"
                    id="otp"
                    name="otp"
                    innerRef={(input) => (this.otp = input)}
                  />
                </FormGroup>
                <Button type="submit" value="submit" color="primary">
                  Submit
                </Button>
              </Form>
            </div>
          </Modal>
          <Modal
            isOpen={this.state.locationModal}
            backdropClassName="modal-backdrop"
            className="modal-dialog"
          >
            {this.locationModalHeader()}

            <ModalBody>
              <Form onSubmit={this.handleLocation}>
                <FormGroup>
                  <Input
                    type="number"
                    id="pincode"
                    name="pincode"
                    innerRef={(input) => (this.pincode = input)}
                  />
                </FormGroup>
                <Button type="submit" value="submit" color="primary">
                  Search
                </Button>
              </Form>
            </ModalBody>
          </Modal>
          <Modal isOpen={this.state.storeModal}>
            <ModalHeader>Avaliable stores at your location</ModalHeader>

            <ModalBody></ModalBody>
          </Modal>
          <Modal isOpen={this.state.signupModal}>
            <ModalHeader>Please fill the following details</ModalHeader>
            <ModalBody>
              <Form onSubmit="{this.handleSignup}">
                <FormGroup>
                  <Input
                    placeholder="OTP"
                    type="number"
                    id="otp"
                    name="otp"
                    innerRef={(input) => (this.otp = input)}
                  />
                  <Input
                    placeholder="First Name"
                    type="text"
                    id="firstname"
                    name="firstname"
                    innerRef={(input) => (this.firstname = input)}
                  />
                  <Input
                    placeholder="Last Name"
                    type="text"
                    id="lastname"
                    name="lastname"
                    innerRef={(input) => (this.lastname = input)}
                  />
                </FormGroup>
                <Button type="submit" value="submit" color="primary">
                  SignUp
                </Button>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
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
