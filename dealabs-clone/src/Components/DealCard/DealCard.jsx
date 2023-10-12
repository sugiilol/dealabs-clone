import "./DealCard.css"
import {deals} from "../../Data/DealsData"
import {users} from "../../Data/UsersData"
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import Button from '@mui/material/Button';
import UserCard from "../UserCard/UserCard"

export default function DealCard(){
    
    const actualUser = users.find( user => user.id === deals[0].userId)
    
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
                        <Button variant="contained" className="button-watch-the-deal"><span>Voir le deal</span><OpenInNewOutlinedIcon /></Button>
                    </div>
                    <div>
                        {/* Partagé par {deals[0].poster} */}
                        <UserCard user={actualUser} />
                    </div>
                </div>
            </div>                      
                <div className="card-about-deal">             
            </div>  
        </div>            
    )
}