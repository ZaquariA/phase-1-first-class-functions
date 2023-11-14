function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    function add() {
        
    }
    return add
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log();
    }
}