import './RaceListing.css'

function RaceListing({image, name, date}){ 
    return ( 
        <div>
            <div className="card">
                <img
                    className="cardImage"
                    src={image}
                    alt="Grand Prix Image"
                />
                <p>{name}</p>
                <p>{date} </p>
            </div>
        </div>
    );
}


export default RaceListing
