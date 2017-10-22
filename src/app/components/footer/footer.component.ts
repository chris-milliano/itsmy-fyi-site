import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})


export class FooterComponent implements OnInit {

    footerToBottomClass: boolean = false;

    constructor() { }

    ngOnInit() {
        console.log("Init footer");

        // this.footerToBottomCheck();
    }


    // //
    // footerToBottomCheck() {
    //     console.log("run floorFooter()");
    //
    //     let footer = document.getElementById('footer');
    //     console.log("footer", footer);
    //
    //     if ( screen.height - footer.getBoundingClientRect().bottom  > 0) {
    //         console.log("add class");
    //         this.footerToBottomClass = true;
    //     }
    // }

}
