// IIFE --immediately invoked function expression

(function(){
    function Start()
    {
        console.log("App has started");
    }

   

    window.addEventListener("load", Start);
    
})();