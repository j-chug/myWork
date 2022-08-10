import { IUser } from "../interfaces/IUser";

export type UserContextType = {
    users: IUser[];
    getUserByUsername: ( Username: string ) => IUser;
}