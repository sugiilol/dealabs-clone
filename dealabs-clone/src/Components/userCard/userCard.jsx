import "./UserCard.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';

export default function UserCard(props) {

    return (
        <div className="container-usercard">
            <div className="usercard-avatar">
                <img src={props.user.avatar} alt="user-avatar" />
            </div>
            <div className="usercard-user-infos">
                <div>
                    Partagé par <span>{props.user.pseudo}</span>
                </div>
                <div>
                    <CalendarMonthIcon className="icon-custom" />Membre depuis {props.user.yearInscription} <SellOutlinedIcon className="icon-custom" /> {props.user.nbOfPost} <ThumbUpOffAltIcon className="icon-custom" />{props.user.nbOfLike}
                </div>
            </div>
        </div>
    )
}