angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope) {})

.controller('PanelCtrl', function($scope, $ionicActionSheet, $timeout, $interval, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.syncing = true;
  $scope.steps = 6500;
  $scope.lpm = 69;
  $scope.calories = 1500;
  $scope.floors = 10;
  $scope.moa = 44;
  $scope.counter = 0;


  $timeout(function() {
    $scope.syncing = false;
  }, 12000);

  $interval(function(){
    $scope.steps += 4;
    $scope.counter++;
    if($scope.counter%5 == 0) {
      $scope.calories++;
      $scope.lpm = Math.floor((Math.random() * 10) + 70);
    }
  }, 1000);

  $scope.showSheet = function () {
    $ionicActionSheet.show({
      buttons: [
        {text: 'Monitor Excercise'},
        {text: 'Log Food'},
        {text: 'Log Weight'},
        {text: 'Log Sleep'},
        {text: 'Log Water Intake'}
      ],
      cancelText: 'Cancel',
      cancel: function () {
        // add cancel code..
      },
      buttonClicked: function (index) {
        return true;
      }
    });
  }
})

.controller('FriendsCtrl', function($scope, Chats) {

})
.controller('ChallengesCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
