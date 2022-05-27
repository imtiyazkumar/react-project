import './Card.css';
function Card (props) {
    const classes = 'card '+ props.className;
    return <div className = {classes}> {props.Children} </div>
}

export default Card;