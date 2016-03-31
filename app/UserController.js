(function() {

    var app = angular.module("githubViewer");

    var UserController = function($scope, github, $routeParams) {

        var onUserComplete = function(data) {
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos, onError);
        };

        var onRepos = function(data) {
            $scope.repos = data;
        };

        var onError = function(reason) {
            $scope.error = "Could not fetch the data";
        };

        $scope.username = $routeParams.username;
        $scope.repoSortOrder = "-stargazers_count";
        $scope.title = username;
        github.getUser($scope.username).then(onUserComplete,OnError)
    };


    app.controller('UserController', UserController);

}());