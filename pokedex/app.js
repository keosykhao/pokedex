// link for API for Pokemon


// being able to input the user's search into the api
// populate the data
// set a variable for the user input

// async await to grab the data


// document.ready function
$(() =>{
    // onClick function to search for info
    $('form').on("submit",(event)=>{
        // prevent default info from populating
        event.preventDefault()
        const userInput = $('input[type="text"]').val()
        

    console.log(userInput)
   
    async function getPokeData(input){
        //  async await to fetch the data
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
        // change the data to json data
                const data =  await response.json()
                $('#info').html(data.sprites['front_default'].append('.info'));
                $('#pokeName').html(data.forms[0].name);
                $('#pokeType').html(data.types[0].type.name);
                $('#pokeNum').html(data.id);
                
                console.log(data);
         let pokeType = ["bug", "poison", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "grass", "ground","ice","normal","psychic", "rock", "steel", "water"]       
        
            }
            getPokeData();  
    })
   


})