import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../common/services/http.service";
import { MyCourse, UserInfo } from "app/profile/core/profile.interface";

@Component({
    selector: 'profile-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class ProfileHomeComponent implements OnInit {
    userInfo: UserInfo;
    myCourses: MyCourse[];
    
    constructor(private http: HttpService) { }

    ngOnInit() {
        this.userInfo = <UserInfo>{
            fullName: "Khiet Phan",
            position: "Engineer"
        };
        
        this.myCourses = [
            <MyCourse>{
                title: "Classy Coming Soon",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                image: "https://zbnvbq-dm2306.files.1drv.com/y4mq86sgWpK5mptkcxg5eptoumup4ho1HkRC7zIODeNvKNkrg92KLIFB_oh3pZL_VNzOupRdjyhDzEBfD4PObvxQI2mJs4dWDfEQrHNdI9Tj4ywi72-QHr9X73eCe2mFVid0m4xejgl_4HLAHmhV-rbTOUM-_4q5j--73u_El6V6UkFhxB6nYMfNyDnQ6LPxsDFm8Nw78RLuMy9J-BkY_GfUg/1.jpg?psid=1"
            },
            <MyCourse>{
                title: "404 Error Page",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                image: "https://zbnvbq-dm2306.files.1drv.com/y4mq86sgWpK5mptkcxg5eptoumup4ho1HkRC7zIODeNvKNkrg92KLIFB_oh3pZL_VNzOupRdjyhDzEBfD4PObvxQI2mJs4dWDfEQrHNdI9Tj4ywi72-QHr9X73eCe2mFVid0m4xejgl_4HLAHmhV-rbTOUM-_4q5j--73u_El6V6UkFhxB6nYMfNyDnQ6LPxsDFm8Nw78RLuMy9J-BkY_GfUg/1.jpg?psid=1"
            },
            <MyCourse>{
                title: "Credit Card Validation",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                image: "https://zbnvbq-dm2306.files.1drv.com/y4mq86sgWpK5mptkcxg5eptoumup4ho1HkRC7zIODeNvKNkrg92KLIFB_oh3pZL_VNzOupRdjyhDzEBfD4PObvxQI2mJs4dWDfEQrHNdI9Tj4ywi72-QHr9X73eCe2mFVid0m4xejgl_4HLAHmhV-rbTOUM-_4q5j--73u_El6V6UkFhxB6nYMfNyDnQ6LPxsDFm8Nw78RLuMy9J-BkY_GfUg/1.jpg?psid=1"
            },
            <MyCourse>{
                title: "Eshop Product Detail Widget",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                image: "https://zbnvbq-dm2306.files.1drv.com/y4mq86sgWpK5mptkcxg5eptoumup4ho1HkRC7zIODeNvKNkrg92KLIFB_oh3pZL_VNzOupRdjyhDzEBfD4PObvxQI2mJs4dWDfEQrHNdI9Tj4ywi72-QHr9X73eCe2mFVid0m4xejgl_4HLAHmhV-rbTOUM-_4q5j--73u_El6V6UkFhxB6nYMfNyDnQ6LPxsDFm8Nw78RLuMy9J-BkY_GfUg/1.jpg?psid=1"
            },
            <MyCourse>{
                title: "Model Profile Widget",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                image: "https://zbnvbq-dm2306.files.1drv.com/y4mq86sgWpK5mptkcxg5eptoumup4ho1HkRC7zIODeNvKNkrg92KLIFB_oh3pZL_VNzOupRdjyhDzEBfD4PObvxQI2mJs4dWDfEQrHNdI9Tj4ywi72-QHr9X73eCe2mFVid0m4xejgl_4HLAHmhV-rbTOUM-_4q5j--73u_El6V6UkFhxB6nYMfNyDnQ6LPxsDFm8Nw78RLuMy9J-BkY_GfUg/1.jpg?psid=1"
            },
            <MyCourse>{
                title: "Flat Under Construction",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                image: "https://zbnvbq-dm2306.files.1drv.com/y4mq86sgWpK5mptkcxg5eptoumup4ho1HkRC7zIODeNvKNkrg92KLIFB_oh3pZL_VNzOupRdjyhDzEBfD4PObvxQI2mJs4dWDfEQrHNdI9Tj4ywi72-QHr9X73eCe2mFVid0m4xejgl_4HLAHmhV-rbTOUM-_4q5j--73u_El6V6UkFhxB6nYMfNyDnQ6LPxsDFm8Nw78RLuMy9J-BkY_GfUg/1.jpg?psid=1"
            }
        ]
    }

    logout() {
        this.http.logout();
    }
}