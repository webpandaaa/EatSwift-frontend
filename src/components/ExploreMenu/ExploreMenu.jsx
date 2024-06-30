import React from 'react'
import './ExploreMenu.css'
import {menu_list} from "../../assets/assets"


const ExploreMenu = () => {
  return (
    <div className='explore-menu' id="exlore-menu">
        <h1>Explore our menu</h1>
        <p className='em-text'>
        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Out mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <div className='em-list'>
            {menu_list.map((item, index) =>{
                return (
                    <div key={index} className='em-list-item'>
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu
