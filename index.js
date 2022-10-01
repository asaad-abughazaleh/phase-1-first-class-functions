function receivesAFunction(callback) {
    return callback()
}

function asaadFunction() {
    console.log("This is a asaad function.")
}

function returnsANamedFunction() {
    return asaadFunction
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("This is an anonymous function.")
    }
}