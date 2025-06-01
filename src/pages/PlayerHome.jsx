import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Library from './Library'
import Feed from './Feed'
import Trending from './Trending'
import MusicPlayer from './MusicPlayer'
import Favorites from './Favorites'
import PlayerSideBar from '../components/PlayerSidebar'
import Login from './auth/login'

const PlayerHome = () => {
  return (
    <Login/>
    /*<div className='flex flex-row'>
      <BrowserRouter>
        <PlayerSideBar/>
        <Routes>
            <Route path='/' element={<Library/>}/>
            <Route path='/feed' element={<Feed/>}/>
            <Route path='/trending' element={<Trending/>}/>
            <Route path='/player' element={<MusicPlayer/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
      </BrowserRouter>
    </div>*/
  )
}

export default PlayerHome
