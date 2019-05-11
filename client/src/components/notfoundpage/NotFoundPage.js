import React from "react";
import { Header } from "semantic-ui-react";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className="error-container">
      <Header as="h2">Sorry, couldn't find what you are looking for</Header>
      <p as="h4">
        The link you followed appears to be broken or doesn't exists. Please try
        again or go back to the <a href="/">homepage</a>
      </p>
    </div>
  );
};

export default NotFoundPage;
