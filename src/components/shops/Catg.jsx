import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Nike",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Mavi",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Adidas",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Under Armour",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Puma",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Decathlon",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Marka</h1>
          <h1>Mağaza</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>Tümünü Gör</button>
        </div>
      </div>
    </>
  )
}

export default Catg