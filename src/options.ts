import * as angular from 'angular';
import { browser } from 'webextension-polyfill-ts';

module app {
    'use strict';

    interface IPopupScope extends angular.IScope {}

    class PopupController {
        static $inject = ['$scope'];
        private scope: IPopupScope;
        public selectedColor: string = '';
        public colorList: string[] = ['red', 'green', 'blue', 'yellow'];
        public isLike: boolean = false;
        public status: string = '';

        constructor($scope: IPopupScope) {
            this.scope = $scope;
            this.init();
        }

        private init = () => {
            this.restoreOptions().then(() => {
                this.scope.$apply();
            });
        };

        // Saves options to browser.storage.sync
        public save = () => {
            return browser.storage.sync
                .set({
                    favoriteColor: this.selectedColor,
                    likesColor: this.isLike,
                })
                .then((value) => {
                    // Update status to let user know options were saved
                    this.status = 'Options saved.';
                    this.scope.$apply();
                });
        };

        // Restores select box and checkbox state using the preferences stored in browser.storage
        // Use default value color = 'red' and likesColor = true
        public restoreOptions = () => {
            return browser.storage.sync
                .get({
                    favoriteColor: 'red',
                    likesColor: true,
                })
                .then((items) => {
                    this.selectedColor = items.favoriteColor;
                    this.isLike = items.likesColor;
                });
        };
    }

    angular.module('app', []).controller('popupController', PopupController);
}
