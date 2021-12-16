export default function BreadcrumBnt(props) {

    return (
        <>
            <button
                className={'page' + props.nr}
                type='button'
                value={props.value}
                onClick={props.click}>
                <i className={props.icon}></i>
            </button>
            <div className={'line line' + props.nr}></div>
        </>
    );
}