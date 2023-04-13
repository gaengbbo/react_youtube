import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import { FaYoutube } from "react-icons/fa";


export default function SearchHeader () {
  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <div>
        <Link to='/' className='flex items-center'>
          <FaYoutube className='text-4xl text-brand'/>
          <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
        </Link>
      </div>
      <Search />
    </header>
  );

}