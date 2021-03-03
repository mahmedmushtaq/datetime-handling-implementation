import React, { useEffect } from "react";
import { Route, RouteProps } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
 

interface PropsAttrs extends RouteProps {
  component:  React.ComponentType<any>;
  path: string;
  authRequired?: boolean;
  
}

const RoutesWithLayout = (props: PropsAttrs) => {
  const {
    path,
    component: Component,
    authRequired,
    ...restProps
  }: PropsAttrs = props;
  // const login = useSelector((store: RootState) => store.login);

  // if (authRequired) {
  //   if (!login.token) {
  //     return <Redirect to="/" />;
  //   }
  // }
 

  return (
    <div>
      
      <Route
        {...restProps}
        path={path}
        render={(innerProps) => <Component {...innerProps} />}
      />
    </div>
  );
};

export default RoutesWithLayout;
