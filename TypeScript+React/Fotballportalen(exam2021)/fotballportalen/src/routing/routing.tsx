import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainNavigation from "../components/shared/MainNavigation";
import { UserPage, HomePage, PlayersPage, TeamsPage } from "../pages";
import  UserProfile  from "../components/User/UserProfile";
import PredictionsPage from "../pages/PredictionsPage";
import NewUserForm from "../components/User/NewUserForm"

const Routing: FC = () => {
    return (
        <BrowserRouter>
        <MainNavigation></MainNavigation>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="predictions" element={<PredictionsPage/>}></Route>
                <Route path="PlayersPage" element={<PlayersPage/>}></Route>
                <Route path="TeamsPage" element={<TeamsPage/>}></Route>
                <Route path="UserPage" element={<UserPage/>}></Route>
                <Route path="UserProfile/:Username" element={<UserProfile/>}></Route>
                <Route path="NewUserForm" element={<NewUserForm/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;