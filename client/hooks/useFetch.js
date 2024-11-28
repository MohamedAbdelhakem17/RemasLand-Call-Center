import { useState } from "react";
import axios from "axios";

const useFetch = (endpoint, baseUrl = "http://localhost:9070/api/v1") => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get(`${baseUrl}${endpoint}`);
            setData(response.data);
        } catch (error) {
            console.error(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };


    return { fetchData, loading, data, error };
};

export default useFetch;
