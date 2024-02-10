// Immediately Invoked Function Expressions (IIFE)
// Immediately execute function & stops function from global scope pollution
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')