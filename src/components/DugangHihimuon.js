import {useState} from 'react'
import React from 'react'

const DugangHihimuon = () => {
    const [text, setText] = useState('')
    const [adlaw, setAdlaw] = useState('')
    const [pahinumdom, setPahinumdom] = useState(false)

    return (
        <form>
            <div>
                <label>Hirimuon</label>
                <input 
                    type='text' 
                    placeholder='Dugang Hirimuon' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div>
                <label>Adlaw ngan Oras</label>
                <input 
                    type='text' 
                    placeholder='Adlaw ngan Oras' 
                    value={adlaw} 
                    onChange={(e) => setAdlaw(e.target.value)}/>
            </div>
            <div>
                <label>Ipahinimdom?</label>
                <input 
                    type='checkbox'
                    value={pahinumdom} 
                    onChange={(e) => setPahinumdom(e.currentTarget.checked)}
                />
            </div>

            <input type='submit' value='Save Hirimuon' />
        </form>
    )
}

export default DugangHihimuon
