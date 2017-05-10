/* setup your angular app here */
/* globals angular, fruits, vegetables*/

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);

var myApp = angular.module('MyApp', []);
myApp.controller('main', ['$scope', function($scope) {
    $scope.list = sort(fruits.concat(vegetables));
    $scope.fruits = fruits;
    $scope.veggies = vegetables;
    $scope.userFruits = [];
    $scope.userVeggies = [];
    $scope.correct = true;

    $scope.addFruit = function(item) {
        var fruit = ($scope.list.splice($scope.list.indexOf(item), 1)).toString();
        $scope.userFruits.push(fruit);
    };

    $scope.addVege = function(item) {
        var vege = ($scope.list.splice($scope.list.indexOf(item), 1)).toString();
        $scope.userVeggies.push(vege);
    };

    $scope.fruitBack = function(item) {
        var fruit = ($scope.fruits.splice($scope.fruits.indexOf(item), 1).toString());
        $scope.list.push(fruit);
    };

    $scope.vegeBack = function(item) {
        var vege = ($scope.veggies.splice($scope.veggies.indexOf(item), 1).toString());
        $scope.list.push(vege);
    };

    $scope.checkLists = function(item, array) {
        var list = $scope.list;

        if (list.length === 0) {
            if (array.indexOf(item) === -1) {
                $scope.correct = false;
            } else {
                $scope.correct = true;
            }
            return $scope.correct;
        }
        return $scope.correct;
    };

}]);

function sort(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
