//Higer order components ->
// component (HOC) that run other component (regular)
//to Reuse code, render hijacking, props manipulations, abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>This info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info, don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <div>
          <p>You're logged</p>
          <WrappedComponent {...props} />
        </div>
      ) : (
        <div>
          <p>Please login</p>
          <WrappedComponent />
        </div>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  //   <AdminInfo isAdmin={true} info="This is the detail" />,
  //   document.getElementById("app")
  <AuthInfo isAuthenticated={true} info="This is the detail" />,
  document.getElementById("app")
);
