import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <div>Welcome Sonu</div>;
    } else {
      return <div>Welcome Guest</div>;
    }

    // return (
    //     <div>

    //     <div> Welcome Sonu</div>
    //     <div>Welcome Guest</div>
    //     </div>
    // )
  }
}

export default UserGreeting;
