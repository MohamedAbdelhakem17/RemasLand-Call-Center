import useProductContext from '../../../context/Product/ProductContext'

const Cart = () => {
    const { cart } = useProductContext()
    return (
        <div className=' w-[350px] mx-auto'>
            <h2 className='text-3xl font-extrabold p-2 '>الاوردر</h2>
            <div className="border border-slate-500 gap-6 p-5">
                {
                    (cart.length > 0)
                    && cart.map(item => <div key={item._id} className="flex align-center justify-between border-b-2 py-2">
                        <h2>{item.name}</h2>
                        <h2 className="text-center font-bold w-auto">{item.price} جنية </h2>
                    </div>)

                }
            </div>
        </div>
    )
}

export default Cart