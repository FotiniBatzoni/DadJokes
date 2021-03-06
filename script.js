const jokeEl= document.getElementById('joke');
const jokeBtn= document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();         //we call the function


//USING ASYNC AWAIT
async function generateJoke(){

    //the object we need for fetch or async await
    const config ={
        headers:{
            'Accept': 'application/json' //key:value pair
        }
    };

    const response = await fetch('https://icanhazdadjoke.com', config);

    const data = await response.json();

    jokeEl.innerHTML = data.joke;
}




//uSING FETCH

// function generateJoke(){

//     //the object we need for fetch or async await
//      //to return the object we want
//     const config ={
//         headers:{
//             'Accept': 'application/json' //key:value pair
//         }
//     };

//      // //we are making the fetch request
//     // //fetch gives us a promise back

//     // fetch('https://icanhazdadjoke.com', config)  //we make a GET request
//     //     .then(response => response.json()) //
//     //     .then(data => {
//     //         jokeEl.innerHTML = data.joke;        //we access joke from object data 
//     //  };
// }