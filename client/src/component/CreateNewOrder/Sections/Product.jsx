import useProductContext from "../../../context/Product/ProductContext"

const Product = () => {
    const { loading, error, data , addToCart} = useProductContext()

    console.log(data)
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error.message}</h2>;
    return (
        <div className="flex item-center justify-center flex-wrap gap-6 p-5">
            {
                (data?.data?.length > 0)
                    ? data.data.map(item => <div onDoubleClick={()=>addToCart(item)} key={item._id} className="duration-150 ease-in-out hover:scale-90  hover:shadow-xl shadow p-5 rounded text-slate-900 bg-blue-100 cursor-pointer">
                        <h2>{item.name}</h2>
                        <h2 className="text-center font-bold">{item.price} جنية </h2>
                    </div>)
                    : <h2>لايوجد منتجات</h2>
            }
        </div>
    )
}

export default Product