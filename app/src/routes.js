routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
        name: 'welcome',
        url: '/',
        views: {
            links: {
                template: '<a ui-sref="lolz" ui-sref-active="current">LOLZ</a>'
            },
            main: {
                component: 'welcome'
            }
        }
    });

    $stateProvider.state({
        name: 'albums',
        url: '/albums',
        views: {
            main: {
                component: 'albumApp'
            }
        }
    });

    $stateProvider.state({
        name: 'album',
        abstract: true,
        default: '.detail',
        url: '/album/:name',
        resolve: {
            album: ['albumService', '$transition$', (albums, t) => {
                return albums.getAlbum(t.params().name);
            }],
            images: ['album', album => album.images]
        },
        views: {
            main: {
                component: 'albumApp'
            },
            submain: {
                component: 'album'
            }
        }
    });

    $stateProvider.state({
        name: 'album.detail',
        url: '/detail',
        component: 'imageDetail'
    });

    $stateProvider.state({
        name: 'album.thumbnail',
        url: '/thumbnail',
        component: 'imageThumbnail'
    });

    $stateProvider.state({
        name: 'album.gallery',
        url: '/gallery',
        component: 'imageGallery'
    });

    $stateProvider.state({
        name: 'images',
        url: '/images',
        abstract: true,
        default: '.detail',
        resolve: {
            images: ['imageService', images => {
                return images.get();
            }]
        },
        views: {
            main: {
                component: 'imageApp'
            }
        }
    });

    $stateProvider.state({
        name: 'images.detail',
        url: '/detail',
        component: 'imageDetail'
    });

    $stateProvider.state({
        name: 'images.thumbnail',
        url: '/thumbnail',
        component: 'imageThumbnail'
    });

    $stateProvider.state({
        name: 'images.gallery',
        url: '/gallery',
        component: 'imageGallery'
    });

    $stateProvider.state({
        name: 'about',
        url: '/about',
        views: {
            main: {
                component: 'about'
            }
        }
    });

    $stateProvider.state({
        name: 'about.me',
        url: '/me',
        views: {
            header: {
                component: 'aboutHeader'
            },
            main: {
                component: 'aboutMain'
            }
        }
    });

    $stateProvider.state({
        name: 'about.gallery',
        url: '/gallery',
        views: {
            header: {
                component: 'aboutHeaderGallery'
            },
            main: {
                component: 'aboutMainGallery'
            }
        }
    });

    $urlRouterProvider.otherwise('/');
};