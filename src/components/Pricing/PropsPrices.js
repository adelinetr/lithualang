export default function Prices(props) {
    return(
        <div className={props.prices}>
            <div className="plan">
            <div className="plan-first-part">
                <h3 className={props.pricingH3}>{props.heading} </h3>
                <p>{props.description}</p>
            </div>

                <div className="all-points">
                  <span className="point">{props.point1}</span>  
                  <span className="point">{props.point2}</span>  
                  <span className="point">{props.point3}</span>  
                  <span className="point">{props.point4}</span>  
                </div>

                  <div className="buttons-plans">
                    <h3 className='price'>{props.price}</h3>
                    <button className={props.className}>{props.button}</button>
                </div>
            </div>
        </div>
    )
}