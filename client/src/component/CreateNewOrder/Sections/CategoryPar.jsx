import { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import useProductContext from "../../../context/Product/ProductContext";

const CategoryPar = () => {
    const { fetchData, loading, data, error } = useFetch();
    const { getProducts } = useProductContext()
    const [activeCategory, setActiveCategory] = useState("");

    // Fetch data on component mount
    useEffect(() => {
        fetchData("/category");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (data?.data?.length > 0) {
            const firstCategory = data.data[0]._id
            setActiveCategory(firstCategory)
            getProducts(firstCategory)
        }
    }, [data]);


    const handleActiveCategory = (id) => {
        setActiveCategory(id);
        getProducts(id)
    };

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error.message}</h2>;

    return (
        <ul className="flex items-center gap-3 flex-wrap">
            {data?.data?.map((item) => (
                <li
                    key={item._id}
                    className={`font-thin cursor-pointer rounded-3xl border-2 border-blue-400 p-2 duration-300 ease-linear hover:scale-95 hover:text-white hover:bg-blue-400 ${activeCategory === item._id
                        ? "scale-95 bg-blue-400 text-white"
                        : "text-blue-400"
                        }`}
                    onClick={() => handleActiveCategory(item._id)}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

export default CategoryPar;
