import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(url);
            setData(responseData);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { error, data };
}
export default useFetch;