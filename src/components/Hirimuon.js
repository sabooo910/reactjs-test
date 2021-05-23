import Hihimuon from './Hihimuon'

const Hirimuon = ({ hirimuon, onDelete }) => {
    return (
        <>
            {hirimuon.map((himo) => 
            (<Hihimuon 
                key={himo.id}
                himo={himo} 
                onDelete={onDelete} 
            />))}
        </>
    )  
}

export default Hirimuon
