(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        <ion-menu-button autoHide=\"true\"></ion-menu-button>\n      <span class=\"text-spacer\">App name</span>\n      <span class=\"example-spacer\"></span>\n      <mat-icon class=\"icon-left\" aria-hidden=\"false\" matBadge=\"{{myCart.length}}\"  matBadgePosition=\"after\" matBadgeColor=\"warn\" (click)=\"UpdateCart()\">shopping_cart</mat-icon>\n    </mat-toolbar-row>\n    <mat-toolbar-row>\n    \n    <div class=\"row\">\n      <div class=\"col-4 mt-4\">\n            <button class=\"btn btn-small grey lighten-3\">Catagory</button>\n      </div>\n      <div class=\"col-8 mt-4\">\n            <input class=\"cst-form-control\" placeholder=\"&#xF002;  Search\" disabled style=\"font-family:FontAwesome;width: 100%;\">\n      </div>\n    </div>\n          \n       \n    \n    </mat-toolbar-row>\n  </mat-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <!-- SLIDER -->\n        <ion-slides pager=\"true\" [options]=\"slideOpts\">\n            <ion-slide>\n              <img src=\"../../assets/images/sliders/1.jpg\"/>\n            </ion-slide>\n            <ion-slide>\n                <img src=\"../../assets/images/sliders/2.jpg\"/>\n            </ion-slide>\n            <ion-slide>\n                <img src=\"../../assets/images/sliders/3.jpg\"/>\n            </ion-slide>\n  </ion-slides>\n  <!-- SLIDER -->\n\n  <ion-item-divider class=\"ion-devider\">\n    <ion-label (click)=\"OpenOnSeparateSection('FruitsList','FRUITS')\">\n     FRUITS\n    </ion-label>\n  </ion-item-divider>\n\n  <!-- FRUITS SLIDER -->\n  <ion-slides [options]=\"slideOptGrossary\">\n    <ion-slide *ngFor=\"let fruits of FruitsList; let i = index\">\n      <div>\n        <ion-card>\n          <ion-card-header (click)=\"ProductDetails(i,'FruitsList')\">\n            <ion-card-title>\n              {{ fruits.name }} <br> <ion-text color=\"danger\">{{fruits.price | currency:\"₹\"}}</ion-text>\n            </ion-card-title>\n            <ion-card-content>\n              <ion-img [src]=\"fruits.image\"></ion-img>\n            </ion-card-content>\n          </ion-card-header>\n          <ion-footer>\n              <mat-toolbar color=\"primary\" *ngIf=\"(!fruits.qty || fruits.qty == 0 || ExitInCart(fruits))\">\n                \n                  <ion-tabs>\n                      <ion-tab-bar slot=\"bottom\" class=\"themebg\">\n                        <ion-tab-button expand=\"full\" (click)=\"addToCart(fruits)\" style=\"background-color: transparent;\">\n                          <ion-title color=\"light\">Add to Cart</ion-title>\n                        </ion-tab-button>\n                    \n                      </ion-tab-bar>\n                    </ion-tabs>\n              </mat-toolbar>\n\n              <mat-toolbar color=\"primary\" *ngIf=\"(fruits.qty && fruits.qty > 0 || ExitInCart(fruits))\">\n                  <ion-tabs>\n                      <ion-tab-bar slot=\"bottom\"  class=\"themebg\">\n                        <ion-tab-button (click)=\"updateitemQty(fruits,'dec')\" style=\"background-color: transparent;color: white;\">\n                         \n                              <i class=\"material-icons\">\n                                  exposure_neg_1\n                                  </i>\n                          \n                        </ion-tab-button>\n                    \n                        <ion-tab-button>\n                          <ion-label >{{fruits.qty}}</ion-label>\n                        </ion-tab-button>\n                    \n                        <ion-tab-button (click)=\"updateitemQty(fruits,'inc')\"  style=\"background-color: transparent;color: white;\">\n                        \n                              <i class=\"material-icons\">\n                                  exposure_plus_1\n                                  </i>\n                        \n                        </ion-tab-button>\n                      </ion-tab-bar>\n                    </ion-tabs>\n              </mat-toolbar>\n            </ion-footer>\n        </ion-card>\n      </div>\n    </ion-slide>\n  </ion-slides>\n<!-- FRUITS SLIDER -->\n\n  <ion-item-divider class=\"ion-devider\">\n    <ion-label (click)=\"OpenOnSeparateSection('vegitablesList','VEGITABLES')\">\n     VEGITABLES\n    </ion-label>\n  </ion-item-divider>\n\n  <!-- FRUITS SLIDER -->\n  <ion-slides [options]=\"slideOptGrossary\">\n    <ion-slide *ngFor=\"let vegitables of vegitablesList; let i = index\">\n      <div>\n        <ion-card>\n          <ion-card-header (click)=\"ProductDetails(i,'vegitablesList')\">\n            <ion-card-title>\n              {{ vegitables.name }} <br> <ion-text color=\"danger\">{{vegitables.price | currency:\"₹\"}}</ion-text>\n            </ion-card-title>\n            <ion-card-content>\n              <ion-img [src]=\"vegitables.image\"></ion-img>\n            </ion-card-content>\n          </ion-card-header>\n          <ion-footer>\n              <ion-toolbar *ngIf=\"(!vegitables.qty || vegitables.qty == 0 || ExitInCart(vegitables))\">\n                \n                  <ion-tabs>\n                      <ion-tab-bar slot=\"bottom\"  class=\"themebg\">\n                        <ion-tab-button expand=\"full\" (click)=\"addToCart(vegitables)\" style=\"background-color: transparent;\">\n                          <ion-title color=\"light\">Add to Cart</ion-title>\n                        </ion-tab-button>\n                    \n                      </ion-tab-bar>\n                    </ion-tabs>\n              </ion-toolbar>\n\n              <ion-toolbar *ngIf=\"(vegitables.qty && vegitables.qty > 0 || ExitInCart(vegitables))\">\n                  <ion-tabs>\n                      <ion-tab-bar slot=\"bottom\" class=\"themebg\">\n                        <ion-tab-button  (click)=\"updateitemQty(vegitables,'dec')\" style=\"background-color: transparent;color: white;\">\n                         \n                              <i class=\"material-icons\">\n                                  exposure_neg_1\n                                  </i>\n                          \n                        </ion-tab-button>\n                    \n                        <ion-tab-button>\n                          <ion-label>{{vegitables.qty}}</ion-label>\n                        </ion-tab-button>\n                    \n                        <ion-tab-button  (click)=\"updateitemQty(vegitables,'inc')\" style=\"background-color: transparent;color: white;\">\n                        \n                              <i class=\"material-icons\">\n                                  exposure_plus_1\n                                  </i>\n                        \n                        </ion-tab-button>\n                      </ion-tab-bar>\n                    </ion-tabs>\n              </ion-toolbar>\n            </ion-footer>\n        </ion-card>\n      </div>\n    </ion-slide>\n  </ion-slides>\n<!-- FRUITS SLIDER -->\n\n\n\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/material-module */ "./src/app/modules/material-module.ts");









var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _modules_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModules"],
                _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["IonicStorageModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-badge {\n  color: #fff;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  border-radius: 100%;\n}\n\n.category-block {\n  margin-bottom: 4px;\n}\n\n.category-banner {\n  border-left: 8px solid var(--ion-color-secondary);\n  background: var(--ion-color-light);\n  height: 40px;\n  padding: 10px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcTWF5dXIgMjMtNy0xOFxcMjAxOVxcSU9OSUNcXFRlbXBsYXRlL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0FDRko7O0FES0E7RUFDSSxpREFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbiBcbi5jYXRlZ29yeS1ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuIFxuLmNhdGVnb3J5LWJhbm5lciB7XG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59IiwiaW9uLWJhZGdlIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5jYXRlZ29yeS1ibG9jayB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLmNhdGVnb3J5LWJhbm5lciB7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");






var HomePage = /** @class */ (function () {
    function HomePage(menu, storage, router, _ProductsService) {
        this.menu = menu;
        this.storage = storage;
        this.router = router;
        this._ProductsService = _ProductsService;
        this.myCart = [];
        this.FruitsList = [];
        this.vegitablesList = [];
        this.slideOpts = {
            autoplay: true,
            initialSlide: 0,
            speed: 400
        };
        this.slideOptGrossary = {
            slidesPerView: 1.75,
            spaceBetween: 1,
            centeredSlides: false
        };
    }
    HomePage.prototype.ngOnInit = function () {
        this.getProducts();
        this.getCartDetails();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.getProducts();
        this.getCartDetails();
    };
    HomePage.prototype.getFruits = function () {
        this.FruitsList = this._ProductsService.getFruitsList();
    };
    HomePage.prototype.getVegitables = function () {
        this.vegitablesList = this._ProductsService.getVegitablesList();
    };
    HomePage.prototype.getProducts = function () {
        this.getFruits();
        this.getVegitables();
    };
    HomePage.prototype.getCartDetails = function () {
        var _this = this;
        this.storage.get('cart').then(function (val) {
            if (val != null)
                _this.myCart = JSON.parse(val);
        });
    };
    HomePage.prototype.ExitInCart = function (item) {
        if (this.myCart.length > 0) {
            this.myCart.map(function (value) {
                if (value.name == item.name) {
                    item.qty = value.qty;
                    return true;
                }
                else {
                    return false;
                }
            });
        }
    };
    HomePage.prototype.openFirst = function () {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    };
    HomePage.prototype.openEnd = function () {
        this.menu.open('end');
    };
    HomePage.prototype.openCustom = function () {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    };
    HomePage.prototype.addToCart = function (item) {
        item.qty = 1;
        this.myCart.push(item);
        this.storage.set('cart', JSON.stringify(this.myCart));
    };
    HomePage.prototype.updateitemQty = function (item, type) {
        var _this = this;
        if (type == 'inc') {
            item.qty += 1;
        }
        else {
            item.qty -= 1;
        }
        this.myCart.map(function (value, index) {
            if (value.name == item.name) {
                if (item.qty == 0) {
                    _this.myCart.splice(index, 1);
                }
                else {
                    value.qty = item.qty;
                }
            }
        });
    };
    HomePage.prototype.redirectionToUrl = function (urlparams) {
        this.router.navigate(urlparams);
    };
    HomePage.prototype.UpdateCart = function () {
        this.storage.set('cart', JSON.stringify(this.myCart));
        this.redirectionToUrl(['/cart']);
    };
    HomePage.prototype.ProductDetails = function (id, container) {
        id = parseInt(id) + 1;
        this.redirectionToUrl(['/productdetails', id, container]);
    };
    HomePage.prototype.OpenOnSeparateSection = function (container, title) {
        this.redirectionToUrl(['/productsection', container, title]);
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map