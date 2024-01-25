import React from 'react'
import './App.css'
import { Header } from './Components/Header/header'
import { SideBar } from './Components/SideBar/SideBar'
import { TodoList } from './Components/TodoList/TosoList'


function App() {
  

  return (
    <>
    
    <main className="main">
    .<Header />
    <SideBar/>
    <div className="container">
   
    <TodoList/>
    <TodoList/>
    <TodoList/>

    </div>
    
    </main>
    </>
  )
}

export default App
