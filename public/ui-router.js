/***************      progress bar      ***************/
app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
}])
/******************       routing        *******************/
app.config(function($stateProvider) {
    $stateProvider.state('home', {
         url: '',
         views: {
            'navbar': {
                templateUrl: 'nav.html',
            },
            'sidebar': {
                templateUrl: 'sidebar.html',
            },
            'main': {
                templateUrl: 'views/home.html'
            }
        },
        resolve: {
            loadfiles: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load('home');
            }]
        }
    })
        .state('siteconfig', {
        url: "/siteconfig",
        views: {
            'navbar': {
                templateUrl: 'nav.html',
            },
            'sidebar': {
                templateUrl: 'sidebar.html',
            },
            'main': {
                templateUrl: "views/site_config.html"
            }
        }
    })
        .state('showsiteconfig', {
        views: {
            'navbar': {
                templateUrl: 'nav.html',
            },
            'sidebar': {
                templateUrl: 'sidebar.html',
            },
            'main': {
                templateUrl: "views/show_site_config.html"
            }
        },
        url: "/showsiteconfig",
    }).state('category', {
        views: {
            'navbar': {
                templateUrl: 'nav.html',
            },
            'sidebar': {
                templateUrl: 'sidebar.html',
            },
            'main': {
                templateUrl: "views/category.html"
            }
        },
        url: "/category",
    }).state('message', {
        views: {
            'navbar': {
                templateUrl: 'nav.html',
            },
            'sidebar': {
                templateUrl: 'sidebar.html',
            },
            'main': {
                templateUrl: "views/message.html"
            }
        },
        url: "/message",
    }).state('editmessage', {
        views: {
            'navbar': {
                templateUrl: 'nav.html',
            },
            'sidebar': {
                templateUrl: 'sidebar.html',
            },
            'main': {
                templateUrl: "views/edit_message.html"
            }
        },
        url: "/edit_message",
    }).state('notfound', {
        views: {
            'navbar': {
                templateUrl: 'nav.html',
            },
            'sidebar': {
                templateUrl: 'sidebar.html',
            },
            'main': {
                templateUrl: "views/404.html"
            }
        },
        url: "*path",
    });
});