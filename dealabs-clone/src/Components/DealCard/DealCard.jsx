import "./DealCard.css"
import {deals} from "../../Data/DealsData"
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

export default function DealCard(){

    return(
        <div className="container-card-deal">
            <div className="card-deal">
                <div className="deal-card-part1">
                    <img src={deals[0].img} alt="fuckOffBro" />
                </div>
                <div  className="deal-card-part2">
                    <div className="deal-card-header">
                        <div className="deal-degres">
                            <span className="blue-span">-</span><span className="red-span"> {deals[0].degres}° </span><span className="red-span">+</span>
                        </div>
                        <div className="deal-share-comment">
                            <span><ShareOutlinedIcon />Partager</span><span><QuestionAnswerOutlinedIcon/> {deals[0].comments}</span>
                        </div>
                    </div>
                    <div className="deal-date">
                        Publié le {deals[0].date}
                    </div>
                    <div className="deal-title">
                        <h2>{deals[0].title}</h2>                 
                    </div>                   
                    <div className="deal-owner">
                        <a href="#">Bon plan <span>{deals[0].owner}</span></a>
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