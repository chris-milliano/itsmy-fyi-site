import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        console.log("Init header.component");
    }

    // Redirect to a different page
    redirectTo (path: string) {
        this.router.navigateByUrl(path);
    }
}
