import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

export const HeaderCartButton = (props) => {
	const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
	const cartCtx = useContext(CartContext);
	const { items } = cartCtx;
	const numberOfCartItems = cartCtx.items?.reduce((currentNumber, item) => {
		return currentNumber + item.amount;
	}, 0);
	// console.log(cartCtx.items,'cartCtx.items on HeaderCartButton.js');
	// console.log(numberOfCartItems, 'numberOfCartItems on HeaderCartButton.js);

	//button animation
	const btnClasses = `${classes.button} ${
		btnIsHighLighted ? classes.bump : ""
	}`;
    //bump effect on button 
	useEffect(() => {
		if (cartCtx.items.length === 0) {
		}
		setBtnIsHighLighted(true);

		const timer = setTimeout(() => {
			setBtnIsHighLighted(false);
		}, 300);
        return () =>{
            clearTimeout(timer)
        }
	}, [items]);

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Cart</span>
			<span className={classes.badge}>
				{!numberOfCartItems ? "0" : numberOfCartItems}
			</span>
		</button>
	);
};
