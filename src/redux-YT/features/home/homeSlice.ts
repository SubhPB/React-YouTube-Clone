/* -- BYIMAAN -> THE FUTURE -- */

import CustomSlice from '../../shared/customSlice';
import { ApiResponse } from '../../../youtube/assists-jsx/apiInterfaces';

export const HomeSlice = new CustomSlice<ApiResponse>('home');

const HomeReducer = HomeSlice.sliceReducer;

export default HomeReducer;

