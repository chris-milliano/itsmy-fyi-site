import { Component, OnInit } from '@angular/core';

export class User {
    username: string = "bob";
    password: string = "seceret123";


    User(username, password) {
        this.username = username;
        this.password = password;
    }
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

    //
    user: User;

    constructor() { }

    ngOnInit() {
        console.log("user:", this.user);
    }


    //
    validateLogin() {
        console.log("Check-in", this.user);
    }

}
