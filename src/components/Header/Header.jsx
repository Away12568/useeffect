import React, { useEffect, useState } from 'react'
import './Header.css'



const Header = () => {
  
  const [load, setLoad] = useState(true)
  

  const [data,setData] = useState([])

      useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => {
            setData(data )
            setLoad(!load)
          })
      },[])

      console.log(data);
      

  return (
    <>
      <section className='hero'>
        <div className="container">
          <div className="Hero__wrapper">

          {load? (
            <h2 className="load">загрузка данных...</h2>
          ) : (
            <>
            {data.map((post)  => (
              <div key={post.id} className="hero-card">
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </div>
                ))}
            </>
          ) }


       
  
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
