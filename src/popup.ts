import * as angular from 'angular';
import { browser } from 'webextension-polyfill-ts';

module app {
    'use strict';

    interface IPopupScope extends angular.IScope {}

    class PopupController {
        static $inject = ['$scope'];
        private scope: IPopupScope;
        private count: number = 0;
        public url: string = '';
        public time: string = '';

        constructor($scope: IPopupScope) {
            this.scope = $scope;
            this.init();
        }

        private init = () => {
            browser.browserAction.setBadgeText({ text: this.count.toString() });
            browser.tabs
                .query({ active: true, currentWindow: true })
                .then((tabs) => {
                    var now = new Date();
                    this.url = tabs[0].url;
                    this.time = `${now.getHours()}:${now.getMinutes()}`;
                    this.scope.$apply();
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        public countUp = () => {
            browser.browserAction.setBadgeText({ text: (++this.count).toString() });
        };

        public changeBackground = () => {
            browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
                console.log(tabs[0].id);
                browser.tabs.sendMessage(tabs[0].id, { color: '#555555' }).then((msg) => {
                    console.log('result message:', msg);
                });
            });
        };
    }

    angular.module('app', []).controller('popupController', PopupController);
}
