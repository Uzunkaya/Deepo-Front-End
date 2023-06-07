import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"
/**
  import React, { useState, useEffect } from 'react'
  import axios from "axios"
  Buraya apiden gelen ürün bilgileri yerleştirilecek.
 */
const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Kadın Giyim~Fırsatlar</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals