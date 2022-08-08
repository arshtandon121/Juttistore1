import React from "react"


const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
    padding : "2px"
  }
  const mystyle1 = {
    width: "60%",
    height: "340px",
    
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          
          <div className='img' style={mystyle}>
            <img src='../images/2.jpg' width='100%' height='100%' />
          </div>

         
          <div className='img' style={mystyle1}>
            <img src='../images/15.jpg' width='100%' height='100%' />
          </div>

          <div className='img' style={mystyle}>
            <img src='../images/2.jpg' width='100%' height='100%' />
          </div>

         
          
          
          
        </div>
      </section>
    </>
  )
}

export default Annocument
