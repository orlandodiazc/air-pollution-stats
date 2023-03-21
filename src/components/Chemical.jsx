export default function Chemical({ component }) {
	return (
		<li className="bg-blue-800 rounded-md shadow-sm border border-gray-400 border-opacity-50 shadow-gray-800">
			<div className="p-2 md:px-4 md:py-3 flex flex-col h-full">
				<div className="flex justify-between items-center mb-3 gap-1">
					<div className="text-xs sm:text-sm">
						<p>{component.name}</p>
						<span>
							{component.concentration}
							<span> μg/m3</span>
						</span>
					</div>
					<div>
						<img className="w-16" src={component.spamodel} alt="NO" />
					</div>
				</div>
				<div className="bg-gray-200 px-6 py-4 m-auto md:m-0 rounded-md h-full grid place-items-center">
					<img className="w-36" src={component.model} alt="NO" />
				</div>
			</div>
		</li>
	)
}
