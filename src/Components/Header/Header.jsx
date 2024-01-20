import react from 'react'

export const Header = ()=>{
    return(
        <header className="header">
            <div className="header__wrapper">
                <div className="header__labalBord">
                   LabelBord 
                </div>
                <button className="header__button">
                   
                        <div className="button__wrapper">
                            <div className="button__icon">+</div>
                            <div className="button__text">AddNewTask</div>
                        </div>

                    </button>

                </div>
        </header>
    )
}