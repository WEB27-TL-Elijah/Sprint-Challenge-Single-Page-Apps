import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect
	const [characters, setCharacters] = useState([])
	const [filteredData, updateData] = useState([])

	const search = charAt => updateData(charAt)

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
		axios
			.get('https://rickandmortyapi.com/api/character/')
			.then(res => {
				setCharacters(res.data.results)
				updateData(res.data.results)
			})
			.catch(err => err)
	}, [])

	return (
		<div>
			<SearchForm characters={characters} search={search} />
			<section className='character-list grid-view'>
				{filteredData.map(char => {
					return (
						<div>
							<CharacterCard characters={char} key={char.id} />
						</div>
					)
				})}
			</section>
		</div>
	)
}
