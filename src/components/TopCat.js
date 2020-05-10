import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "reactstrap";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    mainCat: state.mainCat,
  };
};

class TopCat extends Component {
  render() {
    if (this.props.mainCat.isLoading) {
      return <Loading />;
    } else if (this.props.mainCat.errMess) {
      return <h3>Products not avaliable</h3>;
    }

    return (
      <div
        className="container"
        style={{ "margin-top": "100px", "margin-bottom": "100px" }}
      >
        <h3 style={{ marginBottom: "50px" }}>Top Categories</h3>
        <div className="row">
          {this.props.mainCat.mainCat.DATA.map((c) => {
            if (c.image)
              return (
                <Link
                  to={`/categories/${c.category_id}/subcategories`}
                  style={{ textDecoration: "none", fontSize: "15px" }}
                >
                  <div className="col-3" style={{ marginBottom: "20px" }}>
                    <Card style={{ width: "200px", height: "200px" }}>
                      <div className="align-items-center">
                        <img src={c.image} style={{ width: "199px" }} />
                      </div>
                    </Card>
                    <h6>{c.category_name}</h6>
                  </div>
                </Link>
              );
          })}
        </div>

        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div>
    );
  }
}
//export default TopCat;

export default connect(mapStateToProps)(TopCat);
