import useProductContext from "../../../context/Product/ProductContext"
import Loading from "../../Shared/Loading";

const Product = () => {
    const { loading, error, data, addToCart } = useProductContext()

    console.log(data)
    if (loading) return <Loading />;
    if (error) return <h2>{error.message}</h2>;
    return (
        <div className="flex items-start justify-center flex-wrap gap-2 p-3">
            {
                (data?.data?.length > 0)
                    ? data.data.map(item => <div onDoubleClick={() => addToCart(item)} key={item._id} className="duration-150 ease-in-out hover:scale-90  hover:shadow-xl shadow p-5 rounded text-slate-900 bg-blue-100 cursor-pointer">
                        <h2>{item.name}</h2>
                        <h2 className="text-center font-bold">{item.price} جنية </h2>
                    </div>)
                    : <h2>لايوجد منتجات</h2>
            }
        </div>
    )
}

export default Product