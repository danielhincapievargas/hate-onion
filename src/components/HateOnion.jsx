import './HateOnion.css'

const HateOnion = () => {
    const tieneCebolla = (event) => {
        let nuevoTexto = event.target.value.toLowerCase();
        nuevoTexto.includes('cebolla') ? alert('no me gusta la cebolla') : undefined;
    }
    return (
        <>
        <input type='textarea' onChange={tieneCebolla} />
        </>
    )
}

export default HateOnion