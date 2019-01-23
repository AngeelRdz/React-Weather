import React from "react";
import PropTypes from "prop-types";

const Location = (props) => {
  // console.log(props);
  // debugger;

  //Destructuring

  const {city} = props;

  return (
    <div>
      <h1>{city}</h1>
    </div>
  );
};

export default Location;
