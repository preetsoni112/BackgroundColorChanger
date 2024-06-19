import React, { useState } from 'react';

function Buttons() {
  const [color, setColor] = useState("green");
  document.body.style.backgroundColor = color;
  return (
    <div className='w-full h-screen'>
      <div className='flex p-3 items-center justify-center fixed top-0 left-0 right-0 bg-rose-300'>
        <button onClick={() => setColor('violet')} className='mr-10 m-2 hover:text-lg bg-violet-500'>Violet</button>
        <button onClick={() => setColor('skyblue')} className='mr-10 m-2 hover:text-lg bg-sky-500'>Sky</button>
        <button onClick={() => setColor('blue')} className='mr-10 m-2 hover:text-lg bg-blue-900'>Blue</button>
        <button onClick={() => setColor('green')} className='mr-10 m-2 hover:text-lg bg-green-500'>Green</button>
        <button onClick={() => setColor('yellow')} className='mr-10 m-2 hover:text-lg bg-yellow-500'>Yellow</button>
        <button onClick={() => setColor('orange')} className='mr-10 m-2 hover:text-lg bg-orange-500'>Orange</button>
        <button onClick={() => setColor('red')} className='mr-10 m-2 hover:text-lg bg-red-500'>Red</button>
        <button onClick={() => setColor('pink')} className='mr-10 m-2 hover:text-lg bg-pink-500'>Pink</button>
        <button onClick={() => setColor('black')} className='mr-10 m-2 hover:text-lg bg-black'>Black</button>
      </div>
    </div>
  );
}

export default Buttons;
