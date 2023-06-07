import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Moda",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Elektronik",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Oyuncak",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Ev ve Bahçe",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Hediyeler",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Müzik",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Güzellik Ürünleri",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Evcil Hayvan Ürünleri",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Bebek",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Market Ürünleri",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Kitap",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories