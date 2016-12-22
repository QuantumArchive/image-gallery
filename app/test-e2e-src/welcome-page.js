export default class WelcomePage {
    constructor() {
        const nav = element.all(by.css('nav a'));
        this.aAlbums = nav.get(1);
        this.aImages = nav.get(2);
        this.aAbout = nav.get(3);
        this.uiView = element.all(by.css('main ui-view'));
        this.uiViewMain = this.uiView.get(0);
        this.uiViewSubMain = this.uiView.get(1);
    }

    get() {
        return browser.get('/');
    }

    get title() {
        return browser.getTitle();
    }

    get url() {
        return browser.getLocationAbsUrl();
    }

    get stateComponent() {
        return this.uiViewMain.all(by.css('*')).first().getTagName();
    }

    goToGallery() {
        this.aAlbums.click();
    }

    goToImages() {
        this.aImages.click();
    }

    goToAbout() {
        this.aAbout.click();
    }
};