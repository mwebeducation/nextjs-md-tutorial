import React from 'react';

const Button = ({text}) => {
  return (
    <button className={"btn btn-primary"} onClick={event => en.target.innterText = "you clicked me"}>
      {text}
    </button>
  );
};

export default Button;