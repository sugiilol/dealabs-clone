import "./UserCard.css"

export default function UserCard(props){

    return(
        <div>
            <h2>{props.user.pseudo}</h2>
        </div>
    )
}