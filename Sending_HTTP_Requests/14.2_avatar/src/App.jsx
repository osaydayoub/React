import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const [avatars, setAvatars] = useState([]);
  const [error, setError] = useState(null);
  const [inputValue, setInputVal] = useState("");
  const [avatarsForDisplay, setAvatarsForDisplay] = useState([]);
  const [isFetching, setisFetching] = useState(false);


  useEffect(() => {
    async function get10Avatars() {
      setisFetching(true);
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const resData = await response.json();
        if (!response.ok) {
          throw new Error('Faild to fetch avatars');
        }
        setAvatars(resData.results);
        setAvatarsForDisplay(resData.results);

      } catch (error) {
        setError({ message: 'Faild to fetch avatars' });
      }
      setisFetching(false);
    }
    get10Avatars();
  }, [])
  useEffect(() => {
    if (inputValue) {
      setAvatarsForDisplay(avatarsForDisplay.filter((avatar) => {
        return (
          avatar.name.first.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
        );
      }))
    } else {
      setAvatarsForDisplay(avatars);
    }

  }, [inputValue])

  function handleChange(e) {
    setInputVal(e.target.value)
  }

  return (
    <>
      <div>{error !== null && <h1>{error.message}</h1>}</div>
      <div><input type="text" value={inputValue} onChange={(e) => handleChange(e)} /> </div>
      <div className="cards-container">
        {
          avatarsForDisplay.map((avatar, index) => {
            return <Card
              name={avatar.name.title + ' ' + avatar.name.first + ' ' + avatar.name.last}
              key={index}
              img={avatar.picture.medium}
            />
          })

        }
      </div>

    </>
  )
}

export default App
