import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "../users/Footer";
import Header from "../users/Header";

export const HomeTemplate = (props) => {
    const {Component, ...restProps} = props;

    return <Route {...restProps} render={(propsRoute) => {
         return <Fragment>
          {/* <Header {...propsRoute}/> */}
          <h1>Dây là Header</h1>
          <Component {...propsRoute} />

          <hr className="mt-5"/>
          {/* <Footer /> */}
          <footer >
            Đây là footer
          </footer>
         </Fragment>
    }} />
}