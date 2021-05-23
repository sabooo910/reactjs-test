import { useState } from 'react'
import ToDo from "./components/ToDo"
import Hirimuon from "./components/Hirimuon"

const App = () => {
  const [hirimuon] = useState([
    {
      id: 1,
      text: 'Manhugas',
      adlaw: 'Lunes May 32 @ 69pm',
      reminder: true,
    },

    {
      id: 2,
      text: 'Manlaba',
      adlaw: 'Lunes May 32 @ 69pm',
      reminder: true,
    },
  ])

  return (
    <div className='container'>
      <ToDo />
      <Hirimuon hirimuon={hirimuon} />
    </div>
  );
}

export default App;
