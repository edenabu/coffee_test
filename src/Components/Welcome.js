import React from "react";
import { Link } from "react-router-dom";

class Welcome extends React.Component{

  render(){
    return(
        <div>
          <h1> Welcome To Our Coffee Test! </h1>
          <Link to = "/question/1">start </Link>

        </div>
    )
  }
}

export default Welcome;
