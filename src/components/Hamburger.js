import '../styles/Hamburger.css';

const Hamburger = ({ isOpen }) => {
    return (
        <div className="hamburger">
            <div className={"burger " + (isOpen ? 'burger1-open' : '')}></div>
            <div className={"burger " + (isOpen ? 'burger2-open' : '')}></div>
            <div className={"burger " + (isOpen ? 'burger3-open' : '')}></div>
        </div>
    );
}

export default Hamburger;
