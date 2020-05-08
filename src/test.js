import React, { Component } from "react";
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      branch_id: "1",
      business_id: "1",
      branch_name: "Akash Store",
      phone: "7066960461",
      logo: "http://www.nearbygrocer.com/images/store/store-1.jpeg",
      minimum_order_value: "200.00",
      maximum_order_value: "1500.00",
      product_count: "6968",
      operation_time: "10:00 AM To 08:00 PM",
    };
  }
  render() {
    return <h3>"props.stores.stores.STATUS"</h3>;
  }
}
export default Test;
