import { FaTimes } from 'react-icons/fa'

const Hihimuon = ({ himo, onDelete }) => {
    return (
        <div>
            <h3>
                {himo.text}{' '}
                <FaTimes 
                    style={{ color: 'red', cursor: 'pointer' }} 
                    onClick={() => onDelete(himo.id)}
                />
            </h3>
            <p>{himo.adlaw}</p>
        </div>
    )
}

export default Hihimuon
