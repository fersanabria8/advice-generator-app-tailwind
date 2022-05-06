import React, { useEffect, useState } from 'react'
import desktop from '../images/pattern-divider-desktop.svg'
import icondice from '../images/icon-dice.svg'
import axios from 'axios';

export const Generator = () => {
  const [text, setText ]= useState([]);
 //funcion para traer los datos de la API

  const url = 'https://api.adviceslip.com/advice';

  const fetchAd = async () => {
    const res = await axios.get(url);

    setText(res.data.slip)
    console.log(res.data.slip)
  }

  useEffect(() => {
    fetchAd();

  },[]);



  return (
    <div className='container flex flex-col justify-center items-center content-center text-center  w-[350px] h-96 gap-5 bg-slate-700 rounded-2xl relative mx-auto' > 
      <h1 className='text-teal-500 uppercase'>Advice # {text.id}</h1>
      <p className='text-white text-[24px] w-10/12'>"{text.advice}"</p>

      <div className='w-10/12'>
        <img src={ desktop } alt="" />
      </div>

      <button className='cursor-pointer absolute -bottom-0 translate-y-1/2  w-12 h-12 bg-emerald-500 hover:bg-emerald-600 shadow-lg  shadow-emerald-700/20 hover:shadow-emerald-700/100 rounded-full ' onClick={fetchAd}>
        <img className='w-7 h-7 mx-auto ' src={ icondice } alt="" />
      </button>
    
    </div>
  )
}
