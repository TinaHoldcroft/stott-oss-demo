import Link from 'next/link';

function Card(props) {
    
    return (
        <div className="card">
            <h2>{props.heading}</h2>
            <p>{props.txt}</p>
            <div className="btn-wrapper btn-wrapper-yellow">
                <Link passHref href={props.link} target={props.target}> 
                    <button type="button" value={props.btn} className="btn"> {props.btn}</button>
                </Link>
            </div>
        </div>
    );
}

export default Card;