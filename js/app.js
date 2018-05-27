var myApp = angular.module("myApp", []);

myApp.controller('myProfile', ['$scope', function($scope) {
    $scope.posts = [
        {
            "user" : "Luu Diec Phi",
            "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREziIja7NHT0i4YJmngcyjZDdYyhjJbL2s8q3rMKw46F6W1pY4",
            "caption" : "With Me",
            "time" : "2h",
            "like" : "100"
        },
        {
            "user" : "Luu Diec Phi",
            "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREziIja7NHT0i4YJmngcyjZDdYyhjJbL2s8q3rMKw46F6W1pY4",
            "caption" : "With Him",
            "time" : "3h",
            "like" : "200"
        }

    ];

    $scope.user =
        {
            "username" : "Luu Diec Phi",
            "age" : "24",
            "hobbies" : "Computer",
            "studies" : "National University Of Singapore",
            "job" : "Maid",
            "description" : "Cat Lover",
            "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREziIja7NHT0i4YJmngcyjZDdYyhjJbL2s8q3rMKw46F6W1pY4"
        }

}]);

myApp.controller('userProfile', ['$scope', function($scope) {
    $scope.posts = [
        {
            "user" : "Manh Pham",
            "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREziIja7NHT0i4YJmngcyjZDdYyhjJbL2s8q3rMKw46F6W1pY4",
            "caption" : "With Me",
            "time" : "2h",
            "like" : "100",
            "userID" : "2"
        },
        {
            "user" : "Manh Pham",
            "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREziIja7NHT0i4YJmngcyjZDdYyhjJbL2s8q3rMKw46F6W1pY4",
            "caption" : "Test test",
            "time" : "3h",
            "like" : "200",
            "userID" : "2"
        }

    ];

    $scope.user =
        {
            "username" : "Manh Pham",
            "age" : "28",
            "hobbies" : "Computer",
            "studies" : "National University Of Singapore",
            "job" : "SE",
            "description" : "Dog Lover",
            "image" : "img/manhphamimg.jpg"
        }

}]);

myApp.controller('wall', ['$scope', function($scope) {
    $scope.posts = [
        {
            "user" : "Manh Pham",
            "userimage" : "img/manhphamimg.jpg",
            "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREziIja7NHT0i4YJmngcyjZDdYyhjJbL2s8q3rMKw46F6W1pY4",
            "caption" : "With Me",
            "time" : "2h",
            "like" : "100",
            "userID" : "2"
        },
        {
            "user" : "Luu Diec Phi",
            "userimage" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREziIja7NHT0i4YJmngcyjZDdYyhjJbL2s8q3rMKw46F6W1pY4",
            "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREziIja7NHT0i4YJmngcyjZDdYyhjJbL2s8q3rMKw46F6W1pY4",
            "caption" : "With Me",
            "time" : "2h",
            "like" : "100",
            "userID" : "1"
        },
        {
            "user" : "Manh Pham",
            "userimage" : "img/manhphamimg.jpg",
            "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREziIja7NHT0i4YJmngcyjZDdYyhjJbL2s8q3rMKw46F6W1pY4",
            "caption" : "Test test",
            "time" : "3h",
            "like" : "200",
            "userID" : "2"
        }

    ];
}]);




