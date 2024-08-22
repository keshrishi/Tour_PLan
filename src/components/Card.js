import { useState } from "react";

function Card({id,image,info ,price,name,removeTour }){
    const [ReadMore , setReadMore] = useState(true);

    const description = ReadMore ? `${info.substring(0,200)}....` : info;

    function readmoreHandler(){
        setReadMore(!ReadMore);
    }

    return (
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {ReadMore ? `Read-More` : `Show-Less`}
                    </span>

                </div>
            </div>
            <button className="btn-red" onClick={()=> removeTour(id)}>
                Not Interested
            </button>
        </div>

    );
};

    export default Card;