export default function PaymentBtn(props) {

    return (
        <button form="masterform" className={props.value} type="button" onClick={props.click}>
            <span>fortsett med</span>
            <img id={props.value}  src={'/' + props.value + '.svg'} alt={props.value}  />
        </button>
    );
}