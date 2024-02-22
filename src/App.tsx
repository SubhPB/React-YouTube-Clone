/* -- BYIMAAN -> THE FUTURE -- */

import {lazy, Suspense} from 'react';
import './App.css';
import AppContextProvider from './src-context/ContextApi';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const YouTube = lazy(() => import('./youtube/YouTube'));
const SearchPage = lazy(() => import('./youtube/components-jsx/SearchPage'))

function App() {
  return (
    <AppContextProvider >

      <Router>

        <Suspense fallback={<div> Loading... </div>}>

          <Routes>

            <Route path='/*' element={<YouTube />}/>
            <Route path='*' element={<div> -N/A- Not found ... </div>}/>
            <Route path='/search' element={<SearchPage/>}/>

          </Routes>

        </Suspense>

      </Router>

    </AppContextProvider>
  );
};

export default App;
