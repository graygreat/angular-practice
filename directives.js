
angular.module('todo').directive('todoTitle', function() {
    return {
        template: '<h1>TODO LIST<h1>'
    }
});

angular.module('todo').directive('todoItem', function() {
    return {
        templateUrl: 'todoItemTpl.html'
    }
});
