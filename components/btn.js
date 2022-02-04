import Link from 'next/link';

function BTN(props) {

    return (
        <div className='btn'>
            <button type='button' value={props.value} onClick={props.onClick}>
                <Link passHref href={props.link}>
                    <a target={props.target}>
                        {props.value}
                    </a>
                </Link>
            </button>
        </div>
    );
}

export default BTN;