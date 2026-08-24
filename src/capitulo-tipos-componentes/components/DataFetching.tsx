import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../settings";

const withDataFetching = (WrapperComponent, endpoint) => {
  return () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const response = await fetch(`${API_BASE_URL}{endpoint}`);
          console.log(response);

          if (!response.ok) {
            throw new Error("Erro ao buscar");
          }

          const data = await response.json();
          setData(data);
          setIsLoading(false);
        } catch (error) {
          setError("error");
          console.log(error);
          setIsLoading(false);
        }
      };

      fetchData();
    }, []);

    return <WrapperComponent />;
  };
};

export default withDataFetching;
