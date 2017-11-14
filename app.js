const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 3000
const people =[
  {
  id: '1',
  "fist name": "Alice",
  "last name": "Zephyr",
  "hometown": "Seattle",
  },
  {
  id: '2',
  "fist name": "Bob",
  "last name": "Yellow",
  "hometown": "Vancouver",
  },
  {
  id: '3',
  "fist name": "Claire",
  "last name": "Xylitol",
  "hometown": "Toledo",
  },
  {
  id: '4',
  "fist name": "Daniel",
  "last name": "Winston",
  "hometown": "Akron",
  },
  {
  id: '5',
  "fist name": "Edina",
  "last name": "Veridas",
  "hometown": "Witchita",
  },
]

function getId (data, id){
  for (var i = 0; i < data.length; i++) {
   if(data[i].id == id){
     return data[i]
   }
  }
  return null
}

app.get("/", function(request, response){
  response.json(people);
})

app.get("/:id", function(request, response){
  var record = getId(people, request.params.id);
  if (!record){
    response.status (404);
    response.json({
      error: {
        message: "No record found!"
      }
    });
  }
  response.json(record);
});

app.listen(port);
