import React from "react"
import logo from "../../components/assets/images/deepo-logo.svg"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Binlerce mağaza arasından en ucuz fiyatı bulun..!' />
            <span>Kategoriler</span>
          </div>

          <div className='icon f_flex width'>
            
            <div className='login'>
              <Link to='/login'>
              <i className='fa fa-user icon-circle'></i>
                
              </Link>
              </div>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-heart icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search