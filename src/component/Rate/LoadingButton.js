import React from "react";
import { Button, Spinner } from "reactstrap";
import PropTypes from "prop-types";

const LoadingButton = ({ isLoading = false, ...props }) => {
  return (
    <Button disabled={isLoading} {...props}>
      {isLoading ? <Spinner style={{ marginRight: "10px" }} size="sm" /> : null}
      <span className="LoadingButton" >{props.children}</span>
    </Button>
  );
};

LoadingButton.propTypes = {
  isLoading: PropTypes.bool,
};

export { LoadingButton };
