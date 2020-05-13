import React, { Component } from "react";
import logo from "./images/logo-big.png";
import { Tab, Tabs } from "react-bootstrap";
import { baseUrl } from "../shared/baseUrl";
import { connect } from "react-redux";
import cart from "./images/cart.png";
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
import { fetchStores, addPincode, fetchSearch } from "../redux/ActionCreators";
import RecievedStores from "./RecievedStores";
const mapStateToProps = (state) => {
  return {
    stores: state.stores,
    pincode: state.pincode,
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
    if (sessionStorage.getItem("pincode") === "false") {
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
      default:
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
      default:
        return;
    }
  }
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
        alert(JSON.stringify(jres.DATA));
        this.setState({ loginData: jres.DATA });
        alert("OTP sent");
      })
      .catch((error) => alert(error));
    event.preventDefault();
  };
  handleOtp = (event) => {
    event.preventDefault();
    const response = this.state.loginData;
    response["mobile_no"] = this.state.mobile;
    response["otp"] = this.otp.value;
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
      .then((response) => alert(JSON.stringify(response)))
      .catch((error) => alert(error.message));
    this.toggleOtpModal();
  };
  search = () => {
    const key = document.getElementById("search").value;

    this.props.fetchSearch(
      sessionStorage.getItem("branch_id"),
      document.getElementById("search").value,
      50
    );
  };
  userDetails = () => {
    if (true) {
      return (
        <NavLink to="/account">
          <div className="col pt-3 ">
            <button className="login" onClick={this.toggleLoginModel}>
              Your Account
            </button>
          </div>
        </NavLink>
      );
    } else {
      return (
        <div className="col pt-3 ">
          <button className="login" onClick={this.toggleLoginModel}>
            Login/Register
          </button>
        </div>
      );
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="row row-content " style={{ height: "70px" }}>
          <div className=" p-4 col-2 col-sm-2">
            <NavLink to="/">
              <img
                src={sessionStorage.getItem("branch_logo")}
                alt="Logo"
                className="fluid"
                style={{ width: 50, height: 50, "margin-top": "-20px" }}
              />
              <div style={{ marginTop: "-55px", marginLeft: "70px" }}>
                <Label>{sessionStorage.getItem("branch_name")}</Label>
              </div>
            </NavLink>
          </div>
          <div
            className="row"
            style={{ marginTop: "-100px", marginLeft: "180px" }}
          >
            <div className="col pt-3">
              <button className="btnn" onClick={() => this.toggleLocModal()}>
                Location
              </button>
            </div>
            <div className="col pt-3">
              <input
                id="search"
                type="text"
                placeholder="search"
                className="search"
              ></input>
            </div>
            <div
              className="col pt-3"
              style={{ marginLeft: "-30px", marginTop: "5px" }}
            >
              <NavLink to="/searchresults/">
                <Button onClick={this.search}>go!</Button>
              </NavLink>
            </div>
            {this.userDetails()}
            <div className="col pt-3">
              <NavLink to="/checkout">
                <div>
                  <img src={cart} style={{ height: "40px", width: "40px" }} />
                </div>
              </NavLink>
            </div>
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
