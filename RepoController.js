(function(){
    
    var module = angular.module("githubViewer");
    
    var repoController = function ($scope, $routeParams, github){
        
        var onRepo = function(){
          $scope.repo = data;  
        };
        
        var onError = function(reason){
            $scope.error = reason;
        };
        
        var reponame = $routeParams.reponame;
        var username = $routeParams.username;
        
        github.getRepoDetails(username, reponame)
              .then(onRepo, onError);
        
    };
    
    module.controller("RepoController", RepoController);
    
}());