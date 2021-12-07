import BTN from '../components/btn'
import ArrowLink from '../components/ArrowLink'

function Campaign(props) {
    
    return (
        <div className="campaign">
        <div>
            <img src={props.img} />
        </div>
        <div className="txt">
            <h5>{props.heading}</h5>
            <p>{props.txt}</p>
            <div className="action-group">
                <BTN value={props.btnValue} link="/" />
                <div>
                    <ArrowLink txt="lær mer" link="/" />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Campaign;