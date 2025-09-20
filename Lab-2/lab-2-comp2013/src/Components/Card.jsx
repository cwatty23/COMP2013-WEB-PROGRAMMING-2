export default function Card(props){
    return(
        <div className={props.sale ? "Card-Component Card-Sale-Color" : "Card-Component"}>
            <img src={props.image} alt="" width="100px" />
            <p className="Country"><b>{props.country}</b></p>
            <p className="Hotel"><b>{props.name}</b></p>
            {props.rating > 4 ? <p className="Rating-Green"> {props.rating} ★</p> : <p className="Rating-Red"> {props.rating} ★</p>}
            <p className="Price">{props.price}</p>
        </div>
    )
} 