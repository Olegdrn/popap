import { useEffect, useState } from "react";

export function UseFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  //Вариант с async await: 
  // useEffect(async () => {
  //   const dataJson = await fetch(data);
  //   const finalData = await dataJson.json();
  //   setmessageList(finalData);
  //   setIsLoading(false);
  // }, []);

  //Вариант с then: 
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          setData(res);
          setIsLoading(false);
        })
        .catch(error => {
          setError(true)
        })
    }, 1000);
  }, [url])
  return { data, isLoading, error }

  //Abort controller
  // useEffect(() => {
  //   const abortCont = new AbortController();
  //   setTimeout(() => {
  //     fetch(url, { signal: abortCont.signal })
  //       .then((res) => {
  //         return res.json()
  //       })
  //       .then((res) => {
  //         setData(res);
  //         setIsLoading(false);
  //       })
  //       .catch(error => {
  //         if (error.name === 'AbortError') {
  //           console.log('fetch aborted')
  //         } else {
  //           setError(true)
  //         }
  //       })
  //   }, 1000);
  //   return () => abortCont.abort();
  // }, [url])
  // return { data, isLoading, error }

}