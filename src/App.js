import './App.css';
import axios from "axios";
import { useState } from 'react';

function App() {
  const [value, setValue] = useState("");
  const [post, setPost] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=7985b400513334a733ef849fe7be1121`;

  function Clickgarne() {
    axios.get(url).then((res) => {
      setPost(res.data);
    });
  }

  function Changegarne(event) {
    setValue(event.target.value);
  }

  return (
    <div className='bg-gray-700'>
      <div className="flex flex-col items-center justify-center gap-[50px] pt-[70px]">
        <div className='text-white text-[40px] font-bold'>Eliza's Weather App</div>
        <div className="flex gap-[3px]">
          <input
            type='text'
            placeholder='Enter City'
            onChange={Changegarne}
            className='border border-blue-700'
          />
          <button className='px-[6px] py-[3px] bg-purple-700' onClick={Clickgarne}>
            Search
          </button>
        </div>

        {typeof post.main !== "undefined" ? (
          <div>
            <div className="text-[20px] text-white pt-[20px]">{post.name}</div>
            <div className="text-[20px] text-white pt-[20px]">{post.main.temp}</div>
            <div className="text-[20px] text-white pt-[20px]">{post.weather[0].main}</div>
            <div className="text-[20px] text-white pt-[20px]">
              ({post.weather[0].description})
            </div>
          </div>
        ) : (
          null
        )}
      </div>
    </div>
  );
}

export default App;
