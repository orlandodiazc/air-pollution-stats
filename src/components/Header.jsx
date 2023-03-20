import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { MdChevronLeft, MdSettings } from 'react-icons/md'

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
		<header className="bg-blue-500 text-white">
			<div className="flex gap-1 px-2 m-auto max-w-sm">
				<button type="button" onClick={() => navigate(-1)}>
					<MdChevronLeft size={24} />
				</button>
				<form role="search" className="w-full" onSubmit={(ev) => handleSubmit(ev)}>
					<div className="p-2">
						<input
							className="bg-white text-black px-2 py-1 outline-lime-700 rounded-md w-full"
							type="text"
							name="search"
							value={value}
							onChange={(ev) => setValue(ev.target.value)}
						/>
					</div>
				</form>
				<button type="button" className="p-1">
					<MdSettings />
				</button>
			</div>
		</header>
	)
}
