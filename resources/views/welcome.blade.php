<html lang="en">

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Angular Material style sheet -->
    <link rel="stylesheet" href="css/angular-material.min.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/lf-ng-md-file-input.min.css">
    <link href="https://fonts.googleapis.com/css?family=Merienda+One" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/ionicons.min.css">
    <link rel='stylesheet' href='css/loading-bar.min.css' type='text/css' media='all' />
  </head>

<body ng-app="app" ng-cloak  ng-controller="AppCtrl">
  <div layout="column" ng-cloak>
    <md-toolbar class="md-theme-indigo header fixed">
      <!--- navbar start -->
      <div ui-view="navbar"></div>
      <!--- navbar end -->
    </md-toolbar>
    <section layout="row" flex>
      <!-- Overlay for fixed sidebar -->
      <div class="sidebar-overlay"></div>
      <!-- Material sidebar Start -->
      <div ui-view="sidebar"></div>
      <md-content flex layout-padding class="page-content">
        <!--- Body Area Start -->
        <div ui-view="main"></div>
        <!--- Body Area Endt -->
        <!--- Footer Start -->
        <div class="devider"></div>
        <div class="footer">
          Copyright &copy; all right reserved &reg; <strong>fabolic.com</strong>.
        </div>
        <!--- Footer End -->
      </md-content>
    </section>
  </div>
  <!-- Angular Material requires Angular.js Libraries -->
  <script type='text/javascript'  src="js/angular.min.js"></script>
  <script type='text/javascript'  src="js/angular-animate.min.js"></script>
  <script type='text/javascript'  src="js/angular-aria.min.js"></script>
  <script type='text/javascript'  src="js/angular-messages.min.js"></script>
  <script type='text/javascript'  src="js/ocLazyLoad.min.js"></script>
  <script type='text/javascript'  src="js/angular-ui-router.min.js"></script>
  <script type='text/javascript'  src='js/loading-bar.min.js'></script>
  <script type='text/javascript'  src="js/angular-material.min.js"></script>
  <script type='text/javascript'  src="js/lf-ng-md-file-input.min.js"></script>
  <script type='text/javascript'  src="js/jquery.min.js"></script>
  <script type='text/javascript'  src="js/bootstrap.min.js"></script>
  <script type='text/javascript'  src="js/main.js"></script>
  <script type='text/javascript'  src="app.js"></script>
  <script type='text/javascript'  src="lazyload.js"></script>
  <script type='text/javascript'  src="controller/appCtrl.js"></script>
  <script type='text/javascript'  src="controller/configCtrl.js"></script>
  <script type='text/javascript'  src="ui-router.js"></script>
</body>
</html>