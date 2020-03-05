import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BearCard from './components/BearCard'
import BearList from './components/BearList'
import InputForm from './components/InputForm';

export default () => {

  return (
    <div>
      <h2>Bears</h2>
      <BearList  />
      <InputForm />
    </div>
  )
}
