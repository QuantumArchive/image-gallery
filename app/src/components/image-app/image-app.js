import template from './image-app.html';
import styles from './image-app.scss';

export default {
    template,
    bindings: {
        images: '<',
        albumName: '<'
    },
    controller,
    controllerAs: 'app'
};

controller.$inject = ['imageService', 'albumService', '$state'];

function controller(imageService, albumService, $state) {
    this.styles = styles;

    this.setDisplay = name => {
        const parts = $state.current.name.split('.');
        parts[parts.length-1] = name;
        const newState  = parts.join('.');
        this.state = newState;
        $state.go(newState);
    };

    this.remove = image => {
        this.loading = true;
        imageService
            .remove(image._id)
            .then(() => {
                this.loading = false;
                const index = this.images.indexOf(image);
                if (index > -1) this.images.splice(index, 1);
            });
    };

    this.add = image => {
        this.loading = true;
        imageService
            .add(image)
            .then(saved => {
                this.loading = false;
                this.images.push(saved);
            });
    };

    if (!(this.albumName)) {
        this.loading = true;
        albumService
            .getAll()
            .then(albums => {
                this.loading = false;
                this.albums = albums;
            });
    };
};