import React from "react";
import {Link} from "react-router-dom";
import "./Welcome.css";

class Welcome extends React.Component{

  render(){
    return(
        <div>
          <h1> Welcome To Our Coffee Test! </h1>

          <Link id="start" to = "/question/1"> start </Link>

        </div>
    )
  }
}

export default Welcome;
