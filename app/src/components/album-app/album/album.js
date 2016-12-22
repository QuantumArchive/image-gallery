import template from './album.html';
import styles from './album.scss';

export default {
    template,
    bindings: {
        album: '<'
    },
    controller
};

function controller() {
    this.styles = styles;

    // this.uiOnParamsChanged = params => {
    //     this.view = params.view;
    // };
};