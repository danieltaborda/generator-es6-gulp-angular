export default function ($stateProvider, $urlRouterProvider) {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            component: 'home'
        });
}