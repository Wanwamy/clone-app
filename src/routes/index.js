import Home from 'src/pages/Home'
import Following from 'src/pages/Following';
import { Component } from 'react';
import Profile from 'src/pages/Profile';
import Upload from 'src/pages/Upload';

const publicRoutes =[
    {path:'/' ,component: Home},
    {path:'/following', component: Following},
    {path:'/proflie', component: Profile},
    {path:'/upload', component: Upload ,layout: null},

]


const privateRoutes = [];


export {publicRoutes , privateRoutes}
