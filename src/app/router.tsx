import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {GroupsPage} from "@pages/groups";





export const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<GroupsPage/>}/>
        </Routes>
    );
};

