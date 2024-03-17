/* -- BYIMAAN -> THE FUTURE -- */
import { useEffect, useState } from "react";
import { fetchData } from "./api";

interface UseFetchProp<T> {
    data: T | null,
    error: string | null,
    isLoading: boolean,
};



export default function useFetch<T>(url: string, dependencies : any[] = []): UseFetchProp<T> {

    const [data, setData] = useState<T | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect ( function task(){

        fetchData(url).then( function success(data){
            setData(data);   
        }).catch( function fail(error){
            setError(error);
        }).finally( function final(){
            setLoading(false);
        });

        return function cleanUpFunc() {
            setLoading(true);
            setError(null);
            setData(null);
        };

    }, [url, ...dependencies]);

    return {data, error, isLoading}

};