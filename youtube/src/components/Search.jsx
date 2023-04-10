import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaSistrix } from "react-icons/fa";

export default function Search () {
  const {keyword} = useParams();
  const navigate  = useNavigate();
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  }
  useEffect(() => setText(keyword || ''), [keyword]);
  return (
    <form className='w-full flex justify-center' onSubmit={handleSubmit}>
      <input 
        className='w-7/12 p-2 outline-none bg-black text-gray-50'
        type='text'
        value={text} 
        onChange={handleChange}
        placeholder='search...'></input>
      <button className='bg-zinc-600 px-4'><FaSistrix /></button>
    </form>
  );
}