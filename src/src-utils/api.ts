/* -- BYIMAAN -> THE FUTURE -- */

import axios, {AxiosError} from "axios";
import {obj, AsyncFunc} from './dataTypes';

const BASE_URL = "https://youtube138.p.rapidapi.com";

interface AxiosErr extends AxiosError {
  retry ?: boolean;
};

type FetchPropType = string | null

export const fetchData: AsyncFunc<[FetchPropType[]]> = async([url, token]) : Promise<any> => {
    // Imp: async func always returns a promise...

    try {
      
      if (!token || !url) return Promise.reject(new Error(" ApiCall can't be make without target-url and api-key."));


      const options: obj<obj<string>> = {
        params: {
          hl: 'en',
          gl: 'US'
        },
        headers: {
          'X-RapidAPI-Key': token,
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
      };

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

// async function handleRateLimiting(error: AxiosErr) : Promise<any> {

//   if (!token) return Promise.reject(error);

//   try {
//     const config = {
//       ...error.config,
//       headers: {
//         ...error.config?.headers,
//         'X-RapidAPI-Key': token
//       }
//     };
//     error.retry = true;
//     const {data} = await axios(config);
//     return data;

//   } catch (retryErr) {
//     return Promise.reject(retryErr);
//   }
// }


