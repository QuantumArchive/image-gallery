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
    });
});