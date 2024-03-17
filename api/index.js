import express from "express"
import axios from "axios"
//Express connection <>
const app = express()

app.use(express.json())

//</>

app.post("/form/data", async (req, res) =>{

    console.log("requested ON")
    
    var dataAxios = JSON.stringify({
    "ticket": {
      "comment": {
        "body": req.body.comment
      },
      "priority": req.body.input,
      "subject": req.body.subject
    }
  });
  
    var config = {
      method: 'POST',
      withCredentials: false,
      url: 'https://vtex58.zendesk.com/api/v2/tickets',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ZGFuaWVsX2RldmVsb3BlckBob3RtYWlsLmNvbTpUZW1wZXJvMTIzIw==', // Base64 encoded "username:password"
      },
      data : dataAxios,
    };
    
    await axios(config)
    .then(
      function (response) {
        
        res.status(200).json(response.data.audit.ticket_id)
      }
    )
    .catch(function (error) {
      console.log("Catch Error")
      console.log(error);
    })
    res.status(200).json(req.body.input)
})


app.listen(3000, () => {
  console.log("serving is running on port 3000")
})

// //middleware
// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500
//   const message = err.message || "Internal Server Error"
//   res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   })
// })