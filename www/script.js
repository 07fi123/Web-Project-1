
async function fetching(url,body){
    var response = undefined;
    var responseBody = undefined; 
    try {
        response = await fetch(url,{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(body)});

      responseBody = JSON.parse(response.body)
      if (response == undefined || responseBody == undefined){
        throw "Response or response body is undefined"
      }
    } catch(err){
        console.error(err)
    }
    return responseBody
}


const onDomReadyHandler = () => {
    console.log("Dom Ready")
    /* TODO:
        Call a function that loads defaults from the browser session storage.  
        Call a function that makes a request to the database via route /api/hydrate

    */ 
}

addEventListener("DOMContentLoaded", onDomReadyHandler);

