import Link from 'next/link';

function BTN(props) {

    return (
        <div className="btn">
            <Link passHref href={props.link} target={props.target}> 
                <button type="button" value={props.value} onClick={props.onClick}>{props.value}</button>
            </Link>
        </div>
    );
}

export default BTN;