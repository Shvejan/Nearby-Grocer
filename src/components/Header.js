import React, { Component } from "react";
import logo from "./images/logo-big.png";
import { Tab, Tabs } from "react-bootstrap";
import { connect } from "react-redux";
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
import { NavLink } from "react-router-dom";
import { fetchStores } from "../redux/ActionCreators";
import RecievedStores from "./RecievedStores";
const mapStateToProps = (state) => {
  return {
    stores: state.stores,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchStores: (pincode) => dispatch(fetchStores(pincode)),
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
    };
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
  toggleSelectStore = () => {
    this.setState({ storeModal: !this.state.storeModal });
  };
  handleLocation = (event) => {
    this.toggleLocModal();
    this.props.fetchStores(this.pincode.value);
    this.toggleSelectStore();
    event.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <div className="row row-content " style={{ height: "70px" }}>
          <div className=" p-4 col-2 col-sm-2">
            <NavLink to="/">
              <img
                src={logo}
                alt="Logo"
                className="fluid"
                style={{ width: 100, height: 50, "margin-top": "-20px" }}
              />
            </NavLink>
          </div>
          <div className="row">
            <div className="col pt-3">
              <button className="btnn" onClick={() => this.toggleLocModal()}>
                Location
              </button>
            </div>
            <div className="col pt-3">
              <input
                type="text"
                placeholder="search"
                className="search"
              ></input>
            </div>
            <div className="col pt-3 ">
              <button className="login" onClick={this.toggleLoginModel}>
                Login/Register
              </button>
            </div>
            <div className="col pt-3">
              <button className="cart" onClick={this.toggleCartModal}>
                Cart
              </button>
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
        </Navbar>
        <Modal isOpen={this.state.loginModel} toggle={this.toggleLoginModel}>
          <div className="justify-content-center">
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
            >
              <Tab eventKey="home" title="Home">
                <ModalHeader toggle={this.toggleLoginModel}>Login</ModalHeader>
                <ModalBody>
                  <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                      <Label htmlFor="username">Username</Label>
                      <Input
                        type="text"
                        id="username"
                        name="username"
                        innerRef={(input) => (this.username = input)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        innerRef={(input) => (this.password = input)}
                      />
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          name="remember"
                          innerRef={(input) => (this.remember = input)}
                        />
                        Remember me
                      </Label>
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary">
                      Login
                    </Button>
                  </Form>
                </ModalBody>
              </Tab>
              <Tab eventKey="Register" title="Register">
                <ModalHeader toggle={this.toggleLoginModel}>
                  Register
                </ModalHeader>
                <ModalBody>
                  <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                      <Label htmlFor="username">Username</Label>
                      <Input
                        type="text"
                        id="username"
                        name="username"
                        innerRef={(input) => (this.username = input)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        innerRef={(input) => (this.password = input)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="password">Retype Password</Label>
                      <Input
                        type="password"
                        id="password2"
                        name="password2"
                        innerRef={(input) => (this.password2 = input)}
                      />
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          name="remember"
                          innerRef={(input) => (this.remember = input)}
                        />
                        Remember me
                      </Label>
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary">
                      Register
                    </Button>
                  </Form>
                </ModalBody>
              </Tab>
            </Tabs>
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
            <RecievedStores stores={this.props.stores} />
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
