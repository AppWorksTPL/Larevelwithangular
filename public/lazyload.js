/****************        lazy load         *************************/
 
app.config(["$ocLazyLoadProvider", function($ocLazyLoadProvider) {
    //Config For ocLazyLoading
    $ocLazyLoadProvider.config({
        'debug': true, 
        'events': true, 
        'modules': [{ 
            name: 'home',
            files: ['js/test.js']
        }, {
            name: 'siteconfig',
            files: ['controller/configCtrl.js']
        }]
    });
}]);