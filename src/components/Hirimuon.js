const Hirimuon = ({ hirimuon }) => {
    return (
        <>
            {hirimuon.map((himo) => (<h3 key={himo.id}>{himo.text}</h3>))}
        </>
    )  
}

export default Hirimuon
