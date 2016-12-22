import WelcomePage from './welcome-page.js';

describe('ui testing of my gallery app', () => {

    const welcome = new WelcomePage();

    it('should have a title', () => {
        welcome.get();
        expect(welcome.title).toEqual('Trying out more Angular stuff');
    });

    describe('tests out the navigation', () => {
        beforeEach(() => {
            welcome.get();
        });

        it('default to welcome page, and navigate to albums', () => {
            expect(welcome.url).toBe('/');
            expect(welcome.stateComponent).toEqual('welcome');

            welcome.goToGallery();

            expect(welcome.url).toBe('/albums');
            expect(welcome.stateComponent).toEqual('album-app');
        });
        
        it('default to welcome page and navigate to images then about', () => {
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