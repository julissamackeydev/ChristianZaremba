(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _latest_latest_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./latest/latest.component */ "./src/app/latest/latest.component.ts");





var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'latest', component: _latest_latest_component__WEBPACK_IMPORTED_MODULE_4__["LatestComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        materialize_css__WEBPACK_IMPORTED_MODULE_2__["AutoInit"]();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _engagements_engagements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./engagements/engagements.component */ "./src/app/engagements/engagements.component.ts");
/* harmony import */ var _latest_latest_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./latest/latest.component */ "./src/app/latest/latest.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _bio_bio_component__WEBPACK_IMPORTED_MODULE_6__["BioComponent"],
                _engagements_engagements_component__WEBPACK_IMPORTED_MODULE_7__["EngagementsComponent"],
                _latest_latest_component__WEBPACK_IMPORTED_MODULE_8__["LatestComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bio/bio.component.css":
/*!***************************************!*\
  !*** ./src/app/bio/bio.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bio_image{\n    height:173px;\n}\n.bio_landing{\n    height:750px;\n}\n.bio_landing_image{\n    height:450px;\n}\n.end_bio_image{\n    height:500px;\n}\n.raleway{\n    font-family: 'Raleway', sans-serif;\n}\n.andrew{\n    height:750px;\n}\nblockquote{\n    margin: 20px 0;\n    padding-left: 1.5rem;\n    border-left: 5px solid black; \n    font-style: italic;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlvL2Jpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksbUNBQW1DO0NBQ3RDO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixtQkFBbUI7R0FDcEIiLCJmaWxlIjoic3JjL2FwcC9iaW8vYmlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlvX2ltYWdle1xuICAgIGhlaWdodDoxNzNweDtcbn1cbi5iaW9fbGFuZGluZ3tcbiAgICBoZWlnaHQ6NzUwcHg7XG59XG4uYmlvX2xhbmRpbmdfaW1hZ2V7XG4gICAgaGVpZ2h0OjQ1MHB4O1xufVxuLmVuZF9iaW9faW1hZ2V7XG4gICAgaGVpZ2h0OjUwMHB4O1xufVxuLnJhbGV3YXl7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbn1cbi5hbmRyZXd7XG4gICAgaGVpZ2h0Ojc1MHB4O1xufVxuYmxvY2txdW90ZXtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGJsYWNrOyBcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/bio/bio.component.html":
/*!****************************************!*\
  !*** ./src/app/bio/bio.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- header -->\n<div class=\"bio_landing container section\">\n\n  <!-- title -->\n  <div class=\"row section\" style=\"text-align:center\">\n    <h3 class=\"grey-text text-darken-2\">BIOGRPAHY</h3>\n  </div>\n  <!-- end title -->\n\n  <!-- main bio landing page content -->\n  <div class=\"row valign-wrapper \">\n    \n    <img class=\"col s12 m8 bio_landing_image\" src=\"../../assets/microphone.jpg\">\n\n    <!-- bio landing page text -->\n    <div class=\"col s12 m6\">\n      <div class=\"card grey darken-4\">\n        <div class=\"card-content grey-text text-lighten-1 raleway\">\n          <h4 class=\"left-align \">\"Here is a quote about art, life, music and greatness.\"</h4><br>\n          <p class=\"right-align\">a great artist</p>\n        </div>\n      </div>\n    </div>\n    <!-- end bio landing page text -->\n\n  </div>\n  <!-- end main bio landing page content -->\n\n</div>\n<!-- end header -->\n\n<div class=\"divider grey\"></div>\n\n<!-- begin bio content -->\n<div class=\"container section\">\n\n  <!-- padding -->\n  <div class=\"row section\"></div> \n\n  <!-- first bio section -->\n  <!-- image -->\n  <div class=\"row section\">\n    <img class=\"col m12\"src=\"../../assets/angelotti.jpg\">\n    <blockquote class=\"\" >As Angelotti with Vittorio Grigolo in the Metropolitan Opera's 2018-2019 production of Tosca.</blockquote>\n  </div>\n  <!-- text -->\n  <div class=\"row section\">\n    <p class=\"center-align col s10 m10 offset-m1 offset-s1 flow-text raleway\">\n    Last season, Mr. Zaremba was seen as Angelotti in Tosca at the Metropolitan Opera, Sparafucile in Rigoletto with Michigan Opera Theater, Zuniga in Carmen with Austin Opera, and the bass soloist in Verdi’s Requiem with The Greenwich Symphony.</p>\n  </div>\n  <!-- end first bio section -->\n\n  <!-- begin second bio section -->\n  <div class=\"row section\">\n    <img class=\"col s12 m12 section\"src=\"../../assets/collatinus.jpg\">\n    <blockquote class=\"\" >As Collatinus with a lady in the a place's production of The Rape of Lucretia.</blockquote>\n\n    <p class=\"center-align col s10 m10 offset-m1 offset-s1 flow-text raleway\">Recent highlights include Il Re in Aïda with the National Symphony, Collatinus in The Rape of Lucretia, Passagallo in L’Opera Seria, and Dr. Bartolo in Le nozze di Figaro with Wolf Trap Opera, Colline in La bohème with Portland Opera and Opera Omaha, Sarastro in Die Zauberflöte and Ashby in La fanciulla del West with Minnesota Opera, and the Bass Soloist in The Little Match Girl Passion with the Glimmerglass Festival and Portland Opera.\n    In the 2018-2019 season, Mr. Zaremba returns to The Metropolitan for productions of Gianni Schicchi and Tosca before greeting the New Year with a return to Austin Opera as the French General in Silent Night.  He then will make debuts with The Lyric Opera of Kansas City as Nouribad in Les pêcheurs des perles and reprise his Sparafucile in Rigoletto with Opera Theatre of St. Louis.</p>\n  </div>\n  <!-- end second bio section -->\n\n  <!-- begin picture row -->\n  <div class=\"row\">\n    <img class=\"col s3 bio_image\" src=\"../../assets/andrew.jpg\"> \n    <img class=\"col s3 bio_image\"src=\"../../assets/sarastro.jpg\">\n    <img class=\"col s3 bio_image\" src=\"../../assets/del_west.jpg\">\n    <img class=\"col s3 bio_image\"  src=\"../../assets/zuniga.jpg\"> \n  </div>\n  <div class=\"row\">\n      <blockquote>Left to right: As Andrew in Difficulties of Crossing a Field, Portland Opera; As Sarastro in Magic Flute, as a person in Fanciulla del West; As Zuniga in Carmen.</blockquote>\n\n  </div>\n  <!-- end picture row -->\n\n  <!-- padding -->\n  <div class=\"row\"></div>\n\n  <!-- begin third bio section -->\n  <div class=\"row\">   \n      <p class=\"col m4 s4 flow-text raleway\">Whether “stealing the evening. . . as the dancing master” (The Washington Post) or “chilling in espousing the theories of Negro management” (Opera News), French-American bass, Christian Zaremba, is intent on leaving a strong impression each time he performs.</p>\n    <div class=\"col m8 s8\">\n        <img class=\"end_bio_image\" src=\"../../assets/del_west_center.jpg\">\n        <blockquote class=\"\" >As dude with Vittorio Grigolo in the Metropolitan Opera's 2018-2019 production of Tosca.</blockquote>\n    </div> \n  </div>\n\n  <!-- end third bio section -->\n</div>\n\n"

/***/ }),

/***/ "./src/app/bio/bio.component.ts":
/*!**************************************!*\
  !*** ./src/app/bio/bio.component.ts ***!
  \**************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BioComponent = /** @class */ (function () {
    function BioComponent() {
    }
    BioComponent.prototype.ngOnInit = function () {
    };
    BioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bio',
            template: __webpack_require__(/*! ./bio.component.html */ "./src/app/bio/bio.component.html"),
            styles: [__webpack_require__(/*! ./bio.component.css */ "./src/app/bio/bio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BioComponent);
    return BioComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".insta{\n    height: 30px;;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5zdGF7XG4gICAgaGVpZ2h0OiAzMHB4Oztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row section\">\n  <div class=\"row section\" style=\"text-align: center\">\n      <img class=\"\" src=\"../../assets/zaremba_logo/email_size.jpg\"> \n  </div>\n  <div class=\"row valign-wrapper section\">\n    <div>\n        <p class=\"right-align\">ADA Artist Management</p>\n        <p class=\"right-align\">236 West 30th Street Floor 3</p> \n        <p class=\"right-align\">NY, NY 10001</p>\n        <p>phone: 212 - 567 - 7670</p>\n        <p>email: <a href=\"mailto:ana@ada-artists.com\">   ana@ada-artists.com</a></p>\n        <a target=\"_blank\"href=\"https://www.instagram.com/zarembabass/\"><img class=\"insta\"src=\"../../assets/insta.png\"></a>\n    </div>\n    <div class=\"\">\n      \n    </div>\n  </div>\n</div>\n\n\n  \n\n\n\n  \n\n\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/engagements/engagements.component.css":
/*!*******************************************************!*\
  !*** ./src/app/engagements/engagements.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".calendar_image{\n    height:650px;\n}\n.title{\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5nYWdlbWVudHMvZW5nYWdlbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2VuZ2FnZW1lbnRzL2VuZ2FnZW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsZW5kYXJfaW1hZ2V7XG4gICAgaGVpZ2h0OjY1MHB4O1xufVxuLnRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/engagements/engagements.component.html":
/*!********************************************************!*\
  !*** ./src/app/engagements/engagements.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row grey darken-4\">\n  <img class=\"calendar_image\" src=\"../../assets/lean_opera_news.jpg\">\n  <h5 class=\"col s3 offset-s9 white-text\">UPCOMING PERFORMANCES</h5>\n</div>\n\n<div class=\"divider\"></div>\n\n<!-- AUSTIN -->\n<div class=\"row valign-wrapper hoverable\" style=\"text-align: center\">\n  <div class=\"col s4\">\n    <h6>JANUARY 26 & 31 2019;</h6>\n    <h6>FEBRUARY 03, 2018;</h6>\n  </div>\n  <div class=\"col s4\">\n    <h6 class=\"title\">PUTS: SILENT NIGHT (GENERAL AUDABERT)</h6>\n    <p>AUSTIN OPERA, TEXAS</p>\n  </div>\n  <div class=\"col s3 grey darken-4 \">\n    <a target=\"_blank\" href=\"https://austinopera.org/event/silent-night/\" class=\"white-text btn-flat\">BUY TICKETS</a>\n  </div>\n</div>\n\n<!-- MN -->\n<div class=\"row valign-wrapper hoverable\" style=\"text-align: center\">\n    <div class=\"col s4\">\n      <h6>MARCH 16, 19, 21, 23 & 24 2019;</h6>\n    </div>\n    <div class=\"col s4\">\n      <h6 class=\"title\">COMPOSER: THE FIX (\"MOUNTAIN\" LANDIS)</h6>\n      <p>MN OPERA, MINNESOTA</p>\n    </div>\n    <div class=\"col s3 grey darken-4 \">\n      <a target=\"_blank\" href=\"https://mnopera.org/season/2018-2019/the-fix/\"class=\"white-text btn-flat\">BUY TICKETS</a>\n    </div>\n  </div>\n\n  <!-- LYRIC KC -->\n  <div class=\"row valign-wrapper hoverable\" style=\"text-align: center\">\n      <div class=\"col s4\">\n        <h6>APRIL 27, 2019;</h6>\n        <h6>MAY 1, 3, & 5 2019;</h6>        \n      </div>\n      <div class=\"col s4\">\n        <h6 class=\"title\">BIZET: THE PEARL FISHERS (NOURABAD)</h6>\n        <p>LYRIC OPERA, KANSAS CITY</p>\n      </div>\n      <div class=\"col s3 grey darken-4 \">\n        <a target=\"_blank\" href=\"https://tickets.kcopera.org/single/PSDetail.aspx?psn=13594\" class=\"white-text btn-flat\">BUY TICKETS</a>\n      </div>\n  </div>\n\n  <!-- ST LOUIS -->\n  <div class=\"row valign-wrapper hoverable\" style=\"text-align: center\">\n      <div class=\"col s4\">\n        <h6>JUNE 01, 05, 14, 20, 22, 26 & 30 2019;</h6>\n      </div>\n      <div class=\"col s4\">\n        <h6 class=\"title\">VERDI: RIGOLETTO (SPARAFUCILE)</h6>\n        <p>OPERA ST LOUIS, KANSAS CITY</p>\n      </div>\n      <div class=\"col s3 grey darken-4 \">\n        <a target=\"_blank\" href=\"https://www.opera-stl.org/season-and-events/productions/rigoletto-2019#production-page-calendar\" class=\"white-text btn-flat\">BUY TICKETS</a>\n      </div>\n  </div>  \n"

/***/ }),

/***/ "./src/app/engagements/engagements.component.ts":
/*!******************************************************!*\
  !*** ./src/app/engagements/engagements.component.ts ***!
  \******************************************************/
/*! exports provided: EngagementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngagementsComponent", function() { return EngagementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EngagementsComponent = /** @class */ (function () {
    function EngagementsComponent() {
    }
    EngagementsComponent.prototype.ngOnInit = function () {
    };
    EngagementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-engagements',
            template: __webpack_require__(/*! ./engagements.component.html */ "./src/app/engagements/engagements.component.html"),
            styles: [__webpack_require__(/*! ./engagements.component.css */ "./src/app/engagements/engagements.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EngagementsComponent);
    return EngagementsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header_image{\n    height: 650px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX2ltYWdle1xuICAgIGhlaWdodDogNjUwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"></div>\n<div class=\"row valign-wrapper\">\n  <!-- header images -->\n  <header class=\"\">\n    <img class=\"header_image col m4 hide-on-med-and-down\" src=\"../../assets/marble_background.jpg\">\n    <img class=\"header_image col m4 hide-on-med-and-down\" src=\"../../assets/blue_vest.jpg\">\n    <img class=\"header_image col m4 hide-on-med-and-down\" src=\"../../assets/marble_background2.jpg\">\n    <img class=\"header_image_tablet center-align col s12 hide-on-large-only\" src=\"../../assets/blue_vest_tablet_version.jpg\">\n  </header>\n</div>\n<!-- end header images -->\n\n<!-- desktop nav bar -->\n<div class=\"row hide-on-med-and-down\">\n    <h6 class=\"right-align col m1 offset-m7 btn-flat\"><a class=\"black-text\" href=\"#calendar\">CALENDAR</a></h6>\n    <h6 class=\"right-align col m1 btn-flat\"><a class=\"black-text\" href=\"#bio\">BIOGRAPHY</a></h6>\n    <h6 class=\"right-align col m1 btn-flat grey\"><a class=\"black-text\" href=\"#latest\">LATEST</a></h6>\n    <h6 class=\"right-align col m1 btn-flat\"><a class=\"black-text\" href=\"#contact\">CONTACT</a></h6>\n</div>\n<!-- end desktop nav bar -->\n\n<!-- tablet side nav -->\n<ul id=\"slide-out\" class=\"sidenav\">\n  <li><a href=\"#calendar\">CALENDAR</a></li>\n  <li><a href=\"#bio\">BIOGRAPHY</a></li>\n  <li><a href=\"#latest\">LATEST</a></li>\n  <li><a href=\"#contact\">CONTACT</a></li>\n</ul>\n<div class=\"row\">\n  <a href=\"#\" data-target=\"slide-out\" class=\" black-text col s2 offset-s10 sidenav-trigger hide-on-large-only\"><i class=\"material-icons\">menu</i></a>\n</div>\n<!-- end tablet side nav -->\n<div class=\"divider grey\"></div>\n<!-- END HEADER AND NAV BAR -->\n\n<app-latest id=\"latest\"></app-latest>\n<div class=\"divider grey\"></div>\n<app-engagements id=\"calendar\"></app-engagements>\n<div class=\"divider grey\"></div>\n<app-bio id=\"bio\"></app-bio>\n<div class=\"divider grey\"></div>\n<app-contact id=\"contact\"></app-contact>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_2__);



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        materialize_css__WEBPACK_IMPORTED_MODULE_2__["AutoInit"]();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/latest/latest.component.css":
/*!*********************************************!*\
  !*** ./src/app/latest/latest.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news_image{\n    margin-left: 50%;\n    width:250px;\n    height:150px;\n}\n.news_snippet{\n    display: inline-block;\n    padding:2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF0ZXN0L2xhdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvbGF0ZXN0L2xhdGVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld3NfaW1hZ2V7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICB3aWR0aDoyNTBweDtcbiAgICBoZWlnaHQ6MTUwcHg7XG59XG4ubmV3c19zbmlwcGV0e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOjIlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/latest/latest.component.html":
/*!**********************************************!*\
  !*** ./src/app/latest/latest.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <img class=\"col latest_image\" src=\"../../assets/suit_jacket.jpg\">\n\n  <div class=\"col m5\">\n    \n    <h2 class=\"center-align grey-text\">LATEST NEWS</h2>\n    <div class=\"section grey lighten-3 news_snippet\">\n      <!-- <img class=\"news_image right-align\"src=\"../../assets/passagallo.jpg\"> -->\n      <p class=\"right-align\">this section will be things that Christian is going to or has recently starred in.</p>\n    </div>    \n  \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/latest/latest.component.ts":
/*!********************************************!*\
  !*** ./src/app/latest/latest.component.ts ***!
  \********************************************/
/*! exports provided: LatestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestComponent", function() { return LatestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LatestComponent = /** @class */ (function () {
    function LatestComponent() {
    }
    LatestComponent.prototype.ngOnInit = function () {
    };
    LatestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-latest',
            template: __webpack_require__(/*! ./latest.component.html */ "./src/app/latest/latest.component.html"),
            styles: [__webpack_require__(/*! ./latest.component.css */ "./src/app/latest/latest.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LatestComponent);
    return LatestComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/julissamackey/Code/ChristianZaremba/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map