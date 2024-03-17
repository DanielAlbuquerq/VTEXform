import axios from "axios"

export const axiosCall = async (req, res, next) => {
    res.status(201).json("ok")
}

    
// var dataAxios = JSON.stringify({
//     "ticket": {
//       "comment": {
//         "body": formData.comment
//       },
//       "priority": formData.input,
//       "subject": formData.subject
//     }
//   });
  
//     var config = {
//       method: 'POST',
//       withCredentials: false,
//       url: 'https://vtex58.zendesk.com/api/v2/tickets',
//       headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Basic ZGFuaWVsX2RldmVsb3BlckBob3RtYWlsLmNvbTpUZW1wZXJvMTIzIw==', // Base64 encoded "username:password"
//       },
//       data : dataAxios,
//     };
    
//     axios(config)
//     .then(
//       function (response) {
//         setLoading(false)
//         console.log(JSON.stringify(response.data));
//       }
//     )
//     .catch(function (error) {
//       console.log("Catch Error")
//       console.log(error);
//     })
// }