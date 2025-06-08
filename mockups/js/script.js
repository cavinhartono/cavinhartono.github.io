angular
  .module("portfolioApp", ["ngRoute"])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("");
    $routeProvider
      .when("/home", {
        templateUrl: "home.html",
      })
      .when("/portfolio", {
        templateUrl: "portfolio.html",
        controller: "PortfolioController",
      })
      .when("/notes", {
        templateUrl: "notes.html",
        controller: "NotesController",
      })
      .otherwise({ redirectTo: "/home" });
  })
  .controller("PortfolioController", function ($scope) {
    $scope.projects = ["Project 1", "Project 2", "Project 3"];
  })
  .controller("NotesController", function ($scope) {
    $scope.notes = [];
    $scope.addNote = function () {
      if ($scope.newNote) {
        $scope.notes.push($scope.newNote);
        $scope.newNote = "";
      }
    };
  });
