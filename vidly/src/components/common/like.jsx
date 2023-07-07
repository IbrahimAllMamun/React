import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Like = props => {
  const { liked, onLike } = props;
    let classes = "fa-heart fa-"
    classes += liked ? "solid" : "regular"
  return ( <React.Fragment>
    <FontAwesomeIcon
      style={{ cursor: "pointer" }}
      onClick={onLike}
      icon={classes}
    />
  </React.Fragment> );
}
 
export default Like;