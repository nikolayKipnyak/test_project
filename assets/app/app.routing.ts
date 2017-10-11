import {Routes, RouterModule} from "@angular/router";
import {MessagesComponent} from "./messages/messages.component";

const APP_ROUTES:Routes = [
    {path:'messages',component:MessagesComponent},
    {path:'',redirectTo: '/messages', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);