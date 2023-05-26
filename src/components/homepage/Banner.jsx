import React, { useState } from 'react'
import './banner.css'
import { Button } from '@mui/material'
import DatePicker from './DatePicker';
import {useNavigate} from "react-router-dom"
const Banner = () => {
  const history=useNavigate();
  const [showsearch,setShowsearch]=useState(false);
  return (
    <div className='banner'>
      <div className="banner__search">
        {
          showsearch ? <DatePicker/>:<></>
        }
        <Button className='banner__searchBtn' variant='outline' onClick={()=>setShowsearch(!showsearch)}>
        {
          !showsearch ? "Search date":"Hide"
        }
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>Plan a diffrent kind of getway to uncover the hidden gems near you</h5>
        <Button variant='outlined' onClick={()=> history('/search')}>Explore Nearby</Button>
      </div>
    </div>
  )
}

export default Banner
