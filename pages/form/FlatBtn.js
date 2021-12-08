export default function FormBnt(props) {

    return (
        <button 
            className={'flat-btn float-' + props.direction}
            type='button' 
            onClick={props.click}
            value={props.value}
            disabled={props.disabled}
            form='masterform'
        >
            {props.value}
        </button>
    );
}