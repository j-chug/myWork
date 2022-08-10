import { FC } from "react";
import { IUser } from "../../interfaces/IUser";
import { Card} from "react-bootstrap";

const UserItem : FC<IUser> = ({ id }) => {
    return (
        <article>
            <h3>
                {id}
            </h3>    
        </article>
    )
}

export default UserItem;