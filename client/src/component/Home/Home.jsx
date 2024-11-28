import { Link } from "react-router-dom"

const Home = () => {
    const options = [
        { service: "عمل أورد جديد ", icon: "fa-cart-plus", link: "/new-order" },
        { service: "الاوردارات القديمة ", icon: "fa-box-archive", link: "/old-orders" },
        { service: "الاوردرات بالمنافذ", icon: "fa-shop", link: "/active-orders" },
    ]

    return (
        <div className="h-dvh flex justify-evenly items-center main-container">
            {
                options?.map(({ service, icon, link }, index) =>
                    <Link to={link} key={index} className="w-1/3 p-5 ">
                        <div className="text-center rounded gap-3 border-blue-400 shadow border-2 text-blue-500 py-5 duration-300  ease-in-out hover:scale-90">
                            <div className="p-6 my-5 text-white w-[50px] h-[50px] bg-blue-500 mx-auto flex items-center justify-center rounded-full">
                                <i className={`fa-solid ${icon} text-2xl`}></i>
                            </div>
                            <h2 className="font-extrabold text-2xl">{service}</h2>
                        </div>
                    </Link>)
            }
        </div>
    )
}

export default Home