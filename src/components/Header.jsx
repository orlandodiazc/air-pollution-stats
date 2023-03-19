import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
	const [value, setValue] = useState('')
	const navigate = useNavigate()
	function handleSubmit(ev) {
		ev.preventDefault()
		if (value) {
			navigate('/search', { state: value })
		}
	}
	return (
		<form role="search" onSubmit={(ev) => handleSubmit(ev)}>
			<input type="text" name="search" value={value} onChange={(ev) => setValue(ev.target.value)} />
			<button type="submit">Search</button>
		</form>
	)
}
