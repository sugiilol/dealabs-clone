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
                    <div className="deal-card-header">
                        <div>- {deals[0].degres} +</div>
                        <div>Partager Commentaire {deals[0].comments}</div>
                    </div>
                    <div>
                        Publié le {deals[0].date}
                    </div>
                    <div>
                        <h2>{deals[0].title}</h2>                 
                    </div>                   
                    <div>
                        Bon plan {deals[0].owner}
                    </div>
                    <div>
                        Voir le deal
                    </div>
                    <div>
                        Partagé par {deals[0].poster}
                    </div>
                </div>
            </div>                      
            <div className="card-about-deal">
                
            </div>  
        </div>            
    )
}