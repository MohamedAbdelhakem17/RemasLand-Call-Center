import useProductContext from "../../context/Product/ProductContext"
import Cart from "./Sections/Cart"
import CategoryPar from "./Sections/CategoryPar"
import Product from "./Sections/Product"

const Menu = () => {
    const { cart } = useProductContext()
    return (
        <div className=" p-5">
            <CategoryPar />
            <Product />
            {(cart.length > 0) && <Cart />}
        </div>
    )
}

export default Menu