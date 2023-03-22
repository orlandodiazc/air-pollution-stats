import { createSearchParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MdChevronLeft, MdSettings, MdHome } from 'react-icons/md';

export default function Header() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  function handleSubmit(ev) {
    ev.preventDefault();
    if (value) {
      navigate({
        pathname: '/search',
        search: createSearchParams({
          q: value,
        }).toString(),
      });
    }
  }
  return (
    <header className="text-white">
      <div className="flex items-center px-2 m-auto max-w-sm">
        <button
          className="md:hidden flex items-center mr-1 md:mr-2 p-1 rounded hover:bg-black hover:bg-opacity-10"
          type="button"
          onClick={() => navigate(-1)}
        >
          <MdChevronLeft size={30} />
        </button>
        <form role="search" className="w-full" onSubmit={(ev) => handleSubmit(ev)}>
          <div className="p-2">
            <input
              className="border border-gray-400 text-black px-2 py-2 outline-lime-700 rounded-md w-full"
              type="text"
              name="search"
              value={value}
              placeholder="Search cities..."
              onChange={(ev) => setValue(ev.target.value)}
            />
          </div>
        </form>
        <button
          type="button"
          className="flex items-center p-2 rounded hover:bg-black hover:bg-opacity-10"
        >
          <a href="/">
            <MdHome size={24} />
          </a>
        </button>
        <button
          type="button"
          className="flex items-center p-2 rounded hover:bg-black hover:bg-opacity-10"
        >
          <MdSettings size={24} />
        </button>
      </div>
    </header>
  );
}
