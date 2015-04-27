angular.module('examExercise', [])
  .controller('MyCtrl1', ['$scope', 'AngularIssues', function($scope, AngularIssues) {
        $scope.data = {};

        AngularIssues.query(function(response) {
            // Assign the response INSIDE the callback
            $scope.data.issues = response;
        });
  }]);