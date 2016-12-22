'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WelcomePage = function () {
    function WelcomePage() {
        _classCallCheck(this, WelcomePage);

        var nav = element.all(by.css('nav a'));
        this.aAlbums = nav.get(1);
        this.uiView = element.all(by.css('main ui-view'));
        this.uiViewMain = this.uiView.get(0);
        this.uiViewSubMain = this.uiView.get(1);
    }

    _createClass(WelcomePage, [{
        key: 'get',
        value: function get() {
            return browser.get('/');
        }
    }, {
        key: 'goToGallery',
        value: function goToGallery() {
            this.aAlbums.click();
        }
    }, {
        key: 'title',
        get: function get() {
            return browser.getTitle();
        }
    }, {
        key: 'url',
        get: function get() {
            return browser.getLocationAbsUrl();
        }
    }, {
        key: 'stateComponent',
        get: function get() {
            return this.uiViewMain.all(by.css('*')).first().getTagName();
        }
    }]);

    return WelcomePage;
}();

exports.default = WelcomePage;
;