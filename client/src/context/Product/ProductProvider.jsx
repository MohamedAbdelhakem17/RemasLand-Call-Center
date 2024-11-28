import PropTypes from "prop-types";
import useFetch from "../../../hooks/useFetch";
import { productContext } from "./ProductContext";
import { useState } from "react";

const ProductProvider = ({ children }) => {
    const { fetchData, loading, data, error } = useFetch();
    const [cart, setCart] = useState([])

    // Function to fetch products by category ID
    const getProducts = (id) => {
        fetchData(`/category/${id}`);
    };

    const addToCart = (item) => {
        const newItem = [...cart, item]
        setCart(newItem)
    }

    return (
        <productContext.Provider value={{ loading, data, error, getProducts, addToCart, cart }}>
            {children}
        </productContext.Provider>
    );
};

// Define PropTypes for the component
ProductProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProductProvider;
