import React from "react";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
      <div>
      <p>404! Not found! <Link to="/">Go Home</Link></p>
      </div>
    )
  }

  export default NotFoundPage;