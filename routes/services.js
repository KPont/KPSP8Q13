/**
 * Created by Kasper on 26-04-2015.
 */
angular.module('services', ['ngResource'])
    .factory('AngularIssues', function($resource){
        return $resource('localhost:3000/json', {})
    })
    .value('version', '0.1');