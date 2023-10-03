import "./DealCard.css"
import {deals} from "../../Data/DealsData"

export default function DealCard(){

    return(
        <div className="container-card-deal">
            <div className="card-deal">
                <div className="deal-card-part1">
                    <img src={deals[0].img} alt="fuckOffBro" />
                </div>
                <div  className="deal-card-part2">
                    <div>
                        <h2>{deals[0].title}</h2>                 
                    </div>
                </div>
            </div>                      
            <div className="card-about-deal">
                
            </div>  
        </div>            
    )
}