import React from 'react'
import loading from './Spinner.gif'

export default function Spinner() {
  return (
    <div className="text-center">
    <img src={loading}  style={{width:"30px",height:"30px"}} alt="loading" />
    </div>
  )
}
