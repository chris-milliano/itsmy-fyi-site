import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

    // Hold display text vars
    selectedSection: string = "default";
    hasSectionBeenClicked: boolean = false;


    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        console.log("Init home.component");
    }


    // Change out the text to explain the section the user selected
    updateSelectedSection(optionSelected: string) {
        if (this.hasSectionBeenClicked == false) { this.hasSectionBeenClicked = true }
        this.selectedSection = optionSelected;
    }


    // Redirect to a different page
    redirectTo (path: string) {
        this.router.navigateByUrl(path);
    }

}
