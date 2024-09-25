
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



document.onload(e => {})
