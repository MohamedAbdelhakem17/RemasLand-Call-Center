import { useEffect } from "react"
import useFetch from "../../../../hooks/useFetch"

const CategoryPar = () => {
    const { fetchData, loading, data, error } = useFetch("/category")

    useEffect(() => {
        fetchData()
    }, [])

    if (loading) return <h2>Waiiiiiiiiiiiiit</h2>
    if (error) return <h2>{error}</h2>
    return (
        <ul className="main-container">
            {
                data?.data?.map(item=><li key={item._id}> {item.name}</li>)
            }
        </ul>
    )
}

export default CategoryPar