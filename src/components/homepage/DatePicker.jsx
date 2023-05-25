import React, { useState } from 'react'
import './DatePicker.css'
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from 'react-date-range'
import { People } from '@mui/icons-material'
import { Button } from '@mui/material'
import {useNavigate} from "react-router-dom"
const DatePicker = () => {
  const history=useNavigate()
    const [startDate,setStartDate]=useState(new Date());
    const [endDate,setEndDate]=useState(new Date());
    const selectionRange={
        startDate: startDate,
        endDate: endDate,
        key:"selection"
    };
    const handleSelect=(ranges)=>{
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
  return (
    <div className='datepicker'>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} ></DateRangePicker>
      <h2>Number of guests
        <People/>
      </h2>
      <input type="number" min={0} defaultValue={2}/>
      <Button onClick={()=> history("./search")}>Search Airbnb</Button>
    </div>
  )
}

export default DatePicker
