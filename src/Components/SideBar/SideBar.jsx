import React from "react"
import bord from '../../assets/bord.jpg'
export const SideBar = ()=>{
    return(
     <div className="sidebar">
        <div className="sidebar__wrapper">

        <div className="sidebar__header">
            <h1>Kanban</h1>
        </div>
       
        <div className="sidebar__content content">
        
            <div className="content__label">
                all boards 0
            </div>
        <ul className="content__items">
            <li className="content__item">
                <span className="content_icon">
                    <img src={bord} alt="icon" />
                </span>
                bord 1
            </li>
            <li className="content__item content__item-active">
                bord 1
            </li>
        </ul>
        </div>
        <div className="sideBar__footer">
          <div className="sideBar__hide"> Hide Sidebar</div> 
        </div>
        </div>
     </div>
    )
}