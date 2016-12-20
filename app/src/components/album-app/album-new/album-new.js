import template from './album-new.html';
import styles from './album-new.scss';

export default {
    template,
    bindings: {
        addalbum: '<',
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
        this.addalbum({
            name: this.name
        });
        this.reset();
    };
};