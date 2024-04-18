/* -- BYIMAAN -> THE FUTURE -- */

import axios, {AxiosError} from "axios";
import {obj, AsyncFunc} from './dataTypes';

const BASE_URL = "https://youtube138.p.rapidapi.com";
const token = localStorage.getItem('token');

const options: obj<obj<string>> = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': token ?? 'null',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

interface AxiosErr extends AxiosError {
  retry ?: boolean;
};

export const fetchData: AsyncFunc<[string]> = async(url) : Promise<any> => {
    // Imp: async func always returns a promise...

    try {
      
      if (!token) return Promise.reject(new Error('Token is missing, cannot make an api without key.'));

      const {data} = await axios.get(`${BASE_URL}/${url}`, options);
      return data;

    } catch (error){

      const axiosErr = error as AxiosErr; 

      // if (axios.isAxiosError(error)) {
      //   const axiosErr = error as AxiosErr; 
      //   if (axiosErr.response?.status === 429 && !axiosErr.retry){
      //     return handleRateLimiting(axiosErr);
      //   };
      // };

      return Promise.reject(axiosErr);

    }
    
};

async function handleRateLimiting(error: AxiosErr) : Promise<any> {

  if (!token) return Promise.reject(error);

  try {
    const config = {
      ...error.config,
      headers: {
        ...error.config?.headers,
        'X-RapidAPI-Key': token
      }
    };
    error.retry = true;
    const {data} = await axios(config);
    return data;

  } catch (retryErr) {
    return Promise.reject(retryErr);
  }
}


