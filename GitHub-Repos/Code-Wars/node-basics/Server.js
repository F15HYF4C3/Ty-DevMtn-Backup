const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//memorize this pattern
const app = express();
//object that gives us pecies of express server
let nums = [1,2,3,4,5];
//middleware use pattern below:
app.use(cors())
app.use(bodyParser.json())
/////////////// data that comes through the request must be a parameter or query ///////////////////
app.get('/api/numbers', (request, response, next)=>{
    response.send(nums)
})
//Always use `/` and specify a string to plug in URL for accessing data (/api/numbers/swapi...etc)
//Request is data from user
//Response is what we wend back
//Next i middleware

app.delete('/api/num/:num/:name', (request, response, next)=>{
    nums = nums.filter((e)=>{
        return e !== Number(request.params.num)
    })
    response.send(nums)
})

app.post('/api/numbers', (request, response, next)=>{
createNums = request.body.nums;
response.send(createNums)
})
const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})

//local host for this server = http//:localhost:8080
//pulling in your api.get function = http//:localhost:8080/api/numbers