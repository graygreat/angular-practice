var app = angular.module('todo', []);

app.controller('TodoCtrl', function($scope) {
    $scope.todos = [
        {
            title: '요가 수행',
            completed: false,
            createdAt: Date.now()
        },
        {
            title: '앵귤러 학습',
            completed: false,
            createdAt: Date.now()
        },
        {
            title: '운동하기',
            completed: true,
            createdAt: Date.now()
        }
    ];

    $scope.remove = function(todo) {
        var idx = $scope.todos.findIndex(function (item) {
            return todo.title === item.title;
        })

        if (idx > -1) {
            $scope.todos.splice(idx, 1)
        }
    }
})
