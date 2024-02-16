import React from 'react'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../Main/Main'

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Main/>} ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing