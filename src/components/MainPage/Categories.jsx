import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Mens",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Womens",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Kids",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Hard Leather",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Soft Leather",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Designer",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "White",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Special Print",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Others",
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
