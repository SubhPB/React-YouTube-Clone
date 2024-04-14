/* -- BYIMAAN -> THE FUTURE -- */

import axios, {AxiosError} from "axios";
import {obj, AsyncFunc} from './dataTypes';

const BASE_URL = "https://youtube138.p.rapidapi.com";


const options: obj<obj<string>> = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_UTUBE_API_KEY!,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchData: AsyncFunc<[string]> = async(url) => {
    // Imp: async func always returns a promise...

    try {

      const {data} = await axios.get(`${BASE_URL}/${url}`, options);
      return data;

    } catch (error){
      const axiosErr = error as AxiosError 
      console.log("The request made on " + `'${BASE_URL}/${url}'` + " got rejected.");
      console.log(error);
      return Promise.reject(axiosErr);

    }
    
};


