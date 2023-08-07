export default function LearnCard(props) {
    return(
        <div className="card-container">

            <div className="one-card">

                <div className="svg-icons">
                    {props.icon}
                </div>

                <div className="text-description">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div>
            </div>

        </div>
    )
}