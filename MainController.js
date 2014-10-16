(function() {

    var app = angular.module("githubViewer");

    var MainController = function($scope, $location) {

        
        $scope.search = function(username) {
           $location.path('/user/' + username);
        };
        

        $scope.username = "";
        $scope.title = "GitHub Viewer";
        $scope.repoSortOrder = "-stargazers_count";
    };


    app.controller('MainController', MainController);

}());