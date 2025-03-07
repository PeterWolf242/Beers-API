import { useState } from 'react'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Allbears from './pages/allbears/Allbears'
import RandomBears from './pages/randombears/RandomBears'
import BierItem from './pages/bier-item/BierItem'

function App() {

	const router = createBrowserRouter(createRoutesFromElements(
		<Route path="/" element={<Layout />} >
			<Route index element={<Home />} />
			<Route path='allbears' element={<Allbears />} />
			<Route path='randombears' element={<RandomBears />} />
			<Route path=':id' element={<BierItem />} />
			<Route path='*' element={<div>404</div>} />

		</Route>
	)
	)

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
