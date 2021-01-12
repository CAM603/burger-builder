import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import Spinner from "../../components/UI/Spinner/Spinner";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getOrders();
        // axios
        //     .get("/orders.json")
        //     .then((res) => {
        //         let fetchedOrders = [];
        //         for (let key in res.data) {
        //             fetchedOrders.push({
        //                 ...res.data[key],
        //                 id: key,
        //             });
        //         }
        //         this.setState({ loading: false, orders: fetchedOrders });
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         this.setState({ loading: false });
        //     });
    }
    render() {
        let orders = <Spinner />;

        if (!this.props.loading) {
            orders = this.props.orders.map((order) => (
                <Order
                    key={order.id}
                    ing={order.ingredients}
                    price={order.price}
                />
            ));
        }
        return <div>{orders}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getOrders: () => dispatch(actions.fetchOrders()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(Orders, axios));
