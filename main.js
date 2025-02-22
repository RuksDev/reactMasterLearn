    // Add event listener to the DOMContentLoaded event to log a message when the DOM is ready.
    document.addEventListener("DOMContentLoaded",  () => {
        console.log("Dom is Ready!");


    });
    //Js comments 
    /* this is multiline comments (shift + alt + A) */
    // this is single line comment (ctrl + /)


    // Js Variables

    // can't declare variables using keywords
    //Variable name cases

    //camelCase naming convention
    var camelCase =100;
    //snake_case naming convention
    var snake_case = 200;
    //PascalCase naming convention
    var PascalCase = 100;
    
    //Variables declaration with var
    var message;
    // Variables declaration with let
    let message_2; 

    //we cant declare const without values
    const message_3 = "Hello world!!!"


    //Assigning a value to the variable
    message = "Hello, World!"; 
    message_2 = "Hello, World again!";

    console.log("LOG:", message);
    console.log("LOG:", message_2);
    console.log(message_3);

    // Js Functions 
    //this is function declaration 
    function greet() {
        let myVariable = 5000;
        console.log(myVariable);
    }

    greet(); // function calling
    // console.log(myVariable); //we can't access myVariable outside the scope