import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import gif from "./images/nearbygif.gif";
const mapStateToProps = (state) => {
  return {
    mainCat: state.mainCat,
    storeDetails: state.storeDetails,
  };
};
function Footer(props) {
  const links = () => {
    return (
      <React.Fragment>
        <li className="fl">Catoergoy </li>
        <li className="fl">Blog </li>
        <li className="fl">Career </li>
        <li className="fl">Customer Comments </li>
        <li className="fl">Feedback </li>
      </React.Fragment>
    );
    // if (!props.mainCat.isLoading)
    //   return (
    //     <React.Fragment>
    //       <li>
    //         <Link
    //           to={`/categories/${props.mainCat.mainCat.DATA[0].category_id}`}
    //           style={{ color: "rgb(166, 236, 166)", fontWeight: "lighter" }}
    //         >
    //           {props.mainCat.mainCat.DATA[0].category_name}
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to={`/categories/${props.mainCat.mainCat.DATA[1].category_id}`}
    //           style={{ color: "rgb(166, 236, 166)", fontWeight: "lighter" }}
    //         >
    //           {props.mainCat.mainCat.DATA[1].category_name}
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to={`/categories/${props.mainCat.mainCat.DATA[2].category_id}`}
    //           style={{ color: "rgb(166, 236, 166)", fontWeight: "lighter" }}
    //         >
    //           {props.mainCat.mainCat.DATA[2].category_name}
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to={`/categories/${props.mainCat.mainCat.DATA[3].category_id}`}
    //           style={{ color: "rgb(166, 236, 166)", fontWeight: "lighter" }}
    //         >
    //           {props.mainCat.mainCat.DATA[3].category_name}
    //         </Link>
    //       </li>
    //     </React.Fragment>
    //   );
  };
  return (
    <React.Fragment>
      <div className="footer">
        <div>
          <div className="row">
            <div className="col-4 col-sm-2">
              <h6 className="fh">
                ABOUT {sessionStorage.getItem("branch_name")}
              </h6>
              <ul className="list-unstyled fl">
                <li>About Us</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>FAQ</li>
                <li>T&C</li>
                <li>Terms Of Offer</li>
              </ul>
            </div>
            <div className="col-4  col-sm-2">
              <h5 className="fh">Quick links</h5>
              <ul className="list-unstyled fl">{links()}</ul>
            </div>
            <div className="col-4  col-sm-2">
              <h5 className="fh">CONTACT US</h5>
              <ul className="list-unstyled fl">
                <li>
                  <b>Phone: </b>
                  {sessionStorage.getItem("branch_phone")}
                </li>
                <li>
                  <b>Email: </b>
                  {props.storeDetails.isLoading
                    ? ""
                    : props.storeDetails.storeDetails.DATA.business_email}
                </li>
                <h5 className="fh" style={{ paddingTop: "20px" }}>
                  Address
                </h5>
                <p className="fl">
                  {props.storeDetails.isLoading
                    ? ""
                    : props.storeDetails.storeDetails.DATA.address}
                </p>
              </ul>
            </div>
            <div class="vl"></div>
            <div className="col">
              <div className="row">
                <div className="col-5">
                  <h5 className="fh">Nearby Grocer</h5>
                  <div className="row">
                    <a href="https://www.instagram.com/nearbygrocer/">
                      <div className="col-2">
                        <span
                          className="fa fa-instagram fa-lg"
                          style={{ color: "rgb(166, 236, 166)" }}
                        ></span>
                      </div>
                    </a>
                    <a href="https://www.facebook.com/nearbygrocer/">
                      <div className="col-2">
                        <span
                          style={{ color: "rgb(166, 236, 166)" }}
                          className="fa fa-facebook-f fa-lg"
                        ></span>
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/company/nearbygrocer/">
                      <div className="col-2">
                        <span
                          style={{ color: "rgb(166, 236, 166)" }}
                          className="fa fa-linkedin fa-lg"
                        ></span>
                      </div>
                    </a>
                    <a href="https://www.youtube.com/channel/UCNUslEuEcPOF0im7DDpHu-A">
                      <div className="col-2">
                        <span
                          style={{ color: "rgb(166, 236, 166)" }}
                          className="fa fa-youtube fa-lg"
                        ></span>
                      </div>
                    </a>
                  </div>
                  <h5 className="fh" style={{ paddingTop: "20px" }}>
                    Address
                  </h5>
                  <p className="fl">
                    505, B-Wing, Tirupati Plaza, Opp - Ajit Nagar Ground, Daman
                    Road, Chala, Vapi, 396191, Tirupati Plaza, Vapi, Gujarat
                    396191, IN
                  </p>
                  <p className="fl">
                    {" "}
                    <b>Phone:</b> +918160509206, +918866686625
                  </p>
                  <p className="fl">
                    <b>Email:</b> info@nearbygrocer.com
                  </p>
                </div>
                <div className="col-7">
                  <img src={gif} alt="gif" className="gif" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default connect(mapStateToProps)(Footer);
