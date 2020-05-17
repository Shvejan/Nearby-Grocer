import React, { Component } from "react";
import { baseUrl } from "../shared/baseUrl";
import { connect } from "react-redux";
import cart from "./images/cart.png";
import avatar from "./images/avatar.png";
import searchimg from "./images/searchimg.png";

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
import location from "./images/location.png";
import { fetchStores, addPincode, fetchSearch } from "../redux/ActionCreators";
import RecievedStores from "./RecievedStores";
const mapStateToProps = (state) => {
  return {
    stores: state.stores,
    pincode: state.pincode,
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchStores: (pincode) => dispatch(fetchStores(pincode)),
  fetchSearch: (branch_id, keyword, limit) =>
    dispatch(fetchSearch(branch_id, keyword, limit)),

  addPincode: (pincode) => dispatch(addPincode),
});

class Header extends Component {
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
    // eslint-disable-next-line array-callback-return
    this.props.cart.products.map((p) => {
      total += p.quantity;
    });
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
        <div className="row" style={{ height: "80px", padding: "20px" }}>
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
        <Modal isOpen={this.state.loginModel} toggle={this.toggleLoginModel}>
          <ModalHeader toggle={this.toggleLoginModel}>
            Mobile Number
          </ModalHeader>

          <div className="justify-content-center">
            <Form onSubmit={this.handleMobile}>
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
            <Form onSubmit={this.handleOtp}>
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
          isOpen={this.state.cartModal}
          toggle={this.toggleCartModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          dialogClassName="cart-modal"
        >
          <ModalHeader toggle={this.toggleCartModal}>Your Cart</ModalHeader>
          <ModalBody>
            <div className="container">
              <p> item1</p>
              <p> item2</p>
              <p> item3</p>
            </div>
            <hr />
            <NavLink to="/checkout">
              <Button color="success">Checkout</Button>
            </NavLink>
          </ModalBody>
        </Modal>
        <Modal isOpen={this.state.locationModal} toggle={this.toggleLocModal}>
          <ModalHeader toggle={this.toggleLocModal}>
            Enter Your Pincode
          </ModalHeader>
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
        <Modal isOpen={this.state.storeModal} toggle={this.toggleSelectStore}>
          <ModalHeader toggle={this.toggleSelectStore}>
            Avaliable stores at your location
          </ModalHeader>

          <ModalBody>
            <RecievedStores
              stores={this.props.stores}
              toggleStoresModal={this.toggleSelectStore}
            />
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
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
