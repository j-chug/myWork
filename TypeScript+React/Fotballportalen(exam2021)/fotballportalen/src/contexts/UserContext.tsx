import { FC, createContext, useState, useEffect } from 'react'
import { IUser } from '../interfaces/IUser'
import { UserContextType } from '../types/UserContextType'
import { UserService } from '../services/UserService'
import "react-router-dom"

export const UserContext = createContext<UserContextType | null>( null );

export const UserProvider:FC = ({children}) => {

    const [users, setUsers] = useState<IUser[]>([]);
 
    useEffect( () => {
        getUsersFromService();
    }, [])

    const getUsersFromService = async () => {
        const result = await UserService.getUsername();
        setUsers( result );
    }

    const getUserByUsername = (Username: string) => {
        return users.find( user => user.Username === Username ) as IUser;
    }

    return (
        <UserContext.Provider value={{users, getUserByUsername}}>
            {children}
        </UserContext.Provider>
    )
}