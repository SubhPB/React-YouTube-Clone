/* -- BYIMAAN -> THE FUTURE -- */

import {lazy, Suspense} from 'react';
import './App.css';
import AppContextProvider from './src-context/ContextApi';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './youtube/components-jsx/Loading';

const YouTube = lazy(() => import('./youtube/YouTube'));
const SearchPage = lazy(() => import('./youtube/pages-jsx/SearchPage'))

function App() {
  return (
    <AppContextProvider >

      <Router>

        <Suspense fallback={<Loading />}>

          <Routes>

            <Route path='/*' element={<YouTube />}/>
            <Route path='/search' element={<SearchPage/>}/>
            <Route path='/loading' element={<Loading/>}/>
            <Route path='*' element={<div> -N/A- Not found ... </div>}/>

          </Routes>

        </Suspense>

      </Router>

    </AppContextProvider>
  );
};

export default App;
