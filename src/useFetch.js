import { useState, useEffect } from "react";
// Complete the following hook

const useFetch = (url) => {
  const [data, setData]= useState({});
  const [loading, setIsLoading]= useState(false);
  const [error, setError]= useState(null);

  const getJoke = async () => {
    try{
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setData(data);
    }
    catch(err){
      console.log(error);
      setError(error);
    }
    finally{
      setIsLoading(false);
    }
  };
  //It should return data returned from fetch, loading, error and getJoke
  useEffect(()=>{
    setIsLoading(true);
    getJoke();
  },[]);
  
  return{data, error, loading, getJoke};
};
// export the useFetch hook as a default export
export default useFetch;