import PropTypes from 'prop-types';

const Button = ({ kolor, surat, onClick }) => {
    return (
        <div>
            <button 
                onClick={onClick} 
                className='btn' 
                style={{backgroundColor: kolor}}> {surat}
            </button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    surat: PropTypes.string,
    kolor: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button
