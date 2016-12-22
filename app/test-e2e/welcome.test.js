'use strict';

var _welcomePage = require('./welcome-page.js');

var _welcomePage2 = _interopRequireDefault(_welcomePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ui testing of my gallery app', function () {

    var welcome = new _welcomePage2.default();

    it('should have a title', function () {
        welcome.get();
        expect(welcome.title).toEqual('Trying out more Angular stuff');
    });

    describe('tests out the navigation', function () {
        beforeEach(function () {
            welcome.get();
        });

        it('default to welcome page, and navigate to albums', function () {
            expect(welcome.url).toBe('/');
            expect(welcome.stateComponent).toEqual('welcome');

            welcome.goToGallery();

            expect(welcome.url).toBe('/albums');
            expect(welcome.stateComponent).toEqual('album-app');
        });

        it('default to welcome page and navigate to images then about', function () {
            expect(welcome.url).toBe('/');
            expect(welcome.stateComponent).toEqual('welcome');

            welcome.goToImages();

            expect(welcome.url).toBe('/images/detail');
            expect(welcome.stateComponent).toEqual('image-app');

            welcome.goToAbout();

            expect(welcome.url).toBe('/about');
            expect(welcome.stateComponent).toEqual('about');
        });
    });
    //welcome: welcome, albums: albumApp, images: imageApp, about: about 
});