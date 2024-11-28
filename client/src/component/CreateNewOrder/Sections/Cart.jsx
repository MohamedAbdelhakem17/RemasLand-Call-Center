import useProductContext from '../../../context/Product/ProductContext'

const Cart = () => {
    const { cart } = useProductContext()
    return (
        <div className=' bg-gray-100 p-5 shadow-md my-3 rounded'>
            <div className="max-h-[300px] min-h-[300px] overflow-y-auto mb-3 px-4 ">
                {
                    (cart.length > 0)
                    && cart.map(item => <div key={item._id} className="flex align-center justify-between border-b-2 py-2">
                        <h2>{item.name}</h2>
                        <h2 className="text-center font-bold w-auto">{item.price} جنية </h2>
                    </div>)
                }
            </div>
            <div className="flex justify-between items-center bg-white text-slate-800 p-4 rounded ">
                <p>الاجمالى</p>
                <p>-- جنية</p>
            </div>
        </div>
    )
}

export default Cart