import template from './album-new.html';
import styles from './album-new.scss';

export default {
    template,
    bindings: {
        addAlbum: '<',
        loading: '='
    },
    controller
};

function controller() {
    this.styles = styles;
    
    this.reset = () => {
        this.name = '';
    };
    
    this.addNewAlbum = () => {
        this.addAlbum({
            name: this.name
        });
        this.reset();
    };
};