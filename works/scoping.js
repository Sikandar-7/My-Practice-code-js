
function outer(){
    let name = "Ali ";

    function inner(){
        console.log(name); //inn acc out

    }

    inner();
}

outer();


// isolation


function one(){
    let a = 10;

    function tow(){
        let b = 20;
        console.log(a); //acc
        console.log(b); // not acc 
    }

    tow();

    // console.log(b); // b is not def out 
}

one();



function outer(){
    let count = 0;

    return function inner(){
        count++;
        console.log(count);

    };

}

const conuter =  outer();

conuter(); 
conuter(); 
conuter(); 
conuter(); 


























