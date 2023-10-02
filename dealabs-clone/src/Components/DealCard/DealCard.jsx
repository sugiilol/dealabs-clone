import "./DealCard.css"
import {deals} from "../../Data/DealsData"

export default function DealCard(){

    return(
        <div className="container-card-deal">
            <div className="card-deal">
                <div>
                    <img src="../img/fuckOff.jpg" alt="fuckOffBro" />
                </div>
                <div>
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