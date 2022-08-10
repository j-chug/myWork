import axios from "axios";
import { IUser } from "../interfaces/IUser";

export const UserService = (function(){
    
    const urlToUserController = "https://localhost:5001/User/";
    const urlToUsernameController = "https://localhost:5001/User/SearchUser/";
    const urlToImageUploadController = "https://localhost:5001/ImageUpload/SaveImage";

    const getUsername = async () => {
        const result = await axios.get( urlToUserController );
        return result.data as IUser[];
    }

    const getUsernameByUsername = async () => {
        const result = await axios.get( urlToUsernameController );
        return result.data as IUser[];
    }

    const postUser = async ( newUser: IUser, image: File ) => {
        let formData = new FormData();
        formData.append( "file", image );

        axios.post( urlToUserController, newUser ); 
        axios({
            url: urlToImageUploadController,
            method: "POST",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        }) 

    }


    return {
        getUsername,
        getUsernameByUsername,
        postUser
    }

}()) 