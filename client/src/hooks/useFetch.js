import { useEffect, useState } from "react";
import { axios } from "../../node_modules/axios/dist/esm/axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
};
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      const [error, setError] = useState(false);
      err;
    }
  };
  fetchData();
}, [url]);

const reFetch = async () => {
  setLoading(true);
  try {
    const res = await axios.get(url);
    setData(res.data);
  } catch (err) {
    setError(err);
  }
  setLoading(false);
};

return { data, loading, error, reFetch };
export default useFetch;
