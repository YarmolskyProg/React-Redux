
import { connect } from "react-redux";
import React, { useState } from "react";
import { setProducts } from "./state";
import Product from "./product";


export function Single(props) {
    let [state, setstate] = useState(setProducts());
    return (
        <div>
            <Product/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        products: state
    }
}
export default connect(mapStateToProps, null)(Single)
