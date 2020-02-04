import React from 'react'
import Header from './components/Header.js'
import TabNav from './components/TabNav.js'
import AppRouter from './components/AppRouter'

export default function App() {
	return (
		<main>
			<Header />
			<TabNav />
			<AppRouter />
		</main>
	)
}
