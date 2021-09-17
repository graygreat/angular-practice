angular.module('todo').factory('todoStorage', function() {
    var storage = {
        todos: [
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
        ], 
        get: function() {
            return storage.todos;
        },

        remove: function(todo) {
            var idx = storage.todos.findIndex(function (item) {
                return todo.title === item.title;
            })
    
            if (idx > -1) {
                storage.todos.splice(idx, 1)
            }
        },

        add: function(newTodoTitle) {
            var newTodo = {
                title: newTodoTitle,
                completed: false,
                createdAt: Date.now()
            }
    
            storage.todos.push(newTodo);
        }
    }
    return storage;
});