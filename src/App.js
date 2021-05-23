import { useState } from 'react'
import ToDo from "./components/ToDo"
import Hirimuon from "./components/Hirimuon"

const App = () => {
  const [hirimuon, setHirimuon ] = useState([
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

  // DELETE HIRIMUON
  const deleteHirimuon = (id) => {
    setHirimuon(hirimuon.filter((himo) => himo.id !== id))
  }

  return (
    <div className='container'>
      <ToDo />
      {hirimuon.length > 0 ? 
        <Hirimuon 
          hirimuon={hirimuon} 
          onDelete={deleteHirimuon} 
        /> : 
        'karasa wara na hirimuon. BATUGAN!'
      }
    </div>
  );
}

export default App;
