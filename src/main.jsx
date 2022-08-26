import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AccountContainer from './components/containers/AccountContainer'

import {AnimatePresence} from 'framer-motion'

import './index.css'
import DetailView from './views/DetailView'
import ErrorView from './views/ErrorView'
import HomeView from './views/HomeView'
import LoginView from './views/LoginView'
import SearchView from './views/SearchView'
import CreateView from './views/CreateView'
import UpdateView from './views/UpdateView'
import DeleteView from './views/DeleteView'
import CollectionView from './views/CollectionView'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatePresence>
      <AccountContainer>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='search'>
              <Route path=''element={<SearchView />} />
              <Route path=':searchTerm' element={<SearchView />} />
            </Route>
            <Route path='movies' element={<CollectionView />} />
            <Route path=':movieId'>
              <Route path='' element={<DetailView />} />
              <Route path='edit' element={<UpdateView />} />
              <Route path='delete' element={<DeleteView />} />
            </Route>
            <Route path='add' element={<CreateView />} />
            <Route path='error' element={<ErrorView />} />
            <Route path='login' element={<LoginView />} />
            {/* <Route path='mocks' element={<Mocks />} /> */}
          </Routes>
        </BrowserRouter>
      </AccountContainer>
    </AnimatePresence>
  </React.StrictMode>
)
