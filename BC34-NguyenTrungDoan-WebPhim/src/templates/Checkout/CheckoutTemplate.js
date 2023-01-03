import { Fragment } from "react";
import { Route, redirect } from 'react-router';
import { USER_LOGIN } from "../../utils/constant";


export const CheckoutTemplate = (props) => {
    const {Component, ...restProps} = props;

    if (!localStorage.getItem(USER_LOGIN)) {
        return redirect("/login")
    }

    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <Component {...propsRoute} />
        </Fragment>
    }}/>
}