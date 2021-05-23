import PropTypes from 'prop-types';
import Button from './Button'

const ToDo = ({title}) => {
    const onClick = () =>{
        console.log('click')
    }
    
    return (
        <header>
            <h1>{title}</h1>
            <Button kolor='green' surat='Add Task' onClick={onClick}/>
        </header>
    )
}

ToDo.defaultProps = {
    title: 'ToDo List',
}

ToDo.propTypes = {
    title: PropTypes.string.isRequired
}

export default ToDo
