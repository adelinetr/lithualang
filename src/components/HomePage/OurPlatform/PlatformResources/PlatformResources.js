
export default function Resources(props) {
    return(
        <div className={`src-card ${props.active ? 'active' : ''}`}>

            <div className="info-side">
                <h2>{props.heading}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}