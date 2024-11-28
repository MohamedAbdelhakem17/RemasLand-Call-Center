// import useProductContext from "../../context/Product/ProductContext"
import { Link } from "react-router-dom"
import Cart from "./Sections/Cart"
import CategoryPar from "./Sections/CategoryPar"
import Product from "./Sections/Product"
import NumbersBoard from "./Sections/NumbersBoard"

const Menu = () => {
    // const { cart } = useProductContext()
    return (
        <>
            <nav className="bg-blue-600 text-white">
                <div className="main-container p-2 py-4 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold">الرئيسية</Link>
                    <h2 className="text-2xl">عمل أوردر جديد</h2>
                </div>
            </nav>
            <div className="flex items-start justify-between">
                <div className="p-5 w-[1200px]">
                    <CategoryPar />
                    <Product />
                </div>
                <div className="p-5 flex-1">
                    <div className="border-[2px] border-blue-400 shadow p-3 rounded-md">
                        <Cart />
                        <NumbersBoard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu