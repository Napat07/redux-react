import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BearCard from './components/BearCard'
import BearList from './components/BearList'
import InputForm from './components/InputForm';

export default () => {

  return (
    <div>
      <h2>Cats</h2>
      <BearList  />
      <h2>--------------------------------------</h2>
      <InputForm />
      <h2>--------------------------------------</h2>
    </div>
  )
}
