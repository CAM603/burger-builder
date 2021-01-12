import React from "react";
import classes from "./Order.module.css";

const Order = ({ ing, price }) => {
    const ingredients = Object.entries(ing).map(([key, value], idx) => {
        return (
            <span
                key={idx}
                style={{
                    textTransform: "capitalize",
                    display: "inline-block",
                    margin: "0 8px",
                    border: "solid 1px #ccc",
                    padding: "5px",
                }}
            >
                {key}: {value}
            </span>
        );
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredients}</p>
            <p>
                Price:{" "}
                <strong>USD ${Number.parseFloat(price).toFixed(2)}</strong>
            </p>
        </div>
    );
};

export default Order;
