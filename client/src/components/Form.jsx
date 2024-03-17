import {
  Button,
  Label,
  TextInput,
  Spinner,
  Radio,
  Select,
  Checkbox,
  Textarea,
} from "flowbite-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Toast } from 'flowbite-react';

export default function Form() {
  const [formData, setFormData] = useState({
  })
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(false)
  const [loading, setLoading] = useState(false)
  const [checkedRadio, setCheckedRadio] = useState({
    op1: false,
    op2: false,
    op3: false
  })
;
  // const selected = true
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value})
  }
  console.log(formData)


  const handleChangeRadio = (e) => {
    const {id} = e.target
      if (id === "normal"){
        setCheckedRadio({
        op1: true,
        op2: false,
        op3: false
      })    
      } else if (id === "urgent") {
        setCheckedRadio({
          op1: false,
          op2: true,
          op3: false
        })
      } else {
        setCheckedRadio({
          op1: false,
          op2: false,
          op3: true
        })
      }
      setFormData({ ...formData, [e.target.checked && e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    console.log(formData)
    try{
      const formRes = await fetch ("/form/data",{
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData)
      })

      const data = await formRes.json()
      console.log("ID from Request" + data)

      if (data.success === false) {
        console.log("false")
        setLoading(false)
        setErrorMessage(data.message)
        return 
      }
      if (formRes.ok) {
        setLoading(false)
        console.log("RES.OK")
        setSuccessMessage(data)
        return

      } 
    }catch(error){
      setErrorMessage(error.message)
      setLoading(false)
    }

  //////////////////////////////////REQUEST WITH FETCH////////////////////
    // try {
    //   setLoading(true)
    //   setErrorMessage(null)
    //   const res = await fetch("https://vtex58.zendesk.com/api/v2/tickets", {
        
    //     method: "POST",
    //     withCredentials: false,
    //     headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Basic ZGFuaWVsX2RldmVsb3BlckBob3RtYWlsLmNvbTpUZW1wZXJvMTIzIw==', // Base64 encoded "username:password"
    //      },
    //      body: JSON.stringify(data)
    //   })

    //   const data = await res.json()

    //   if (data.success === false) {
    //     setLoading(false)
    //     return setErrorMessage(data.message)
    //   }
    //   setLoading(false)
    //   if (res.ok) {
    //     console.log("RES.OK")
    //     console.log(data)
    //   }
    // } catch (error) {
    //   setErrorMessage(error.message)
    //   setLoading(false)
    // }
///////////////////////////////////////
    
// var dataAxios = JSON.stringify({
//       "ticket": {
//         "comment": {
//           "body": formData.comment
//         },
//         "priority": formData.input,
//         "subject": formData.subject
//       }
//     });
    
//       var config = {
//         method: 'POST',
//         withCredentials: false,
//         url: 'https://vtex58.zendesk.com/api/v2/tickets',
//         headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Basic ZGFuaWVsX2RldmVsb3BlckBob3RtYWlsLmNvbTpUZW1wZXJvMTIzIw==', // Base64 encoded "username:password"
//         },
//         data : dataAxios,
//       };
      
//       axios(config)
//       .then(
//         function (response) {
//           setLoading(false)
//           console.log(JSON.stringify(response.data));
//         }
//       )
//       .catch(function (error) {
//         console.log("Catch Error")
//         console.log(error);
//       });
  }

  return (
    <div className='min-h-screen mt-20 flex md:justify-center flex-col md:flex-row md:item-center'>
      <div className='flex max-w-3xl max-auto flex-col md:flex-row md:item-center gap-8'>
        {/* left side */}
        <div className='flex-1'>
          <Link
            to='/form'
            className='font-bold dark:text-white text-4xl text-gray-600'
          >
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-200 rounded-lg text-white'>
              {"Ticktet"}
            </span>
            Support
          </Link>
          <p className='text-sm mt-5'>
            After fill these fields, click on Submit Ticket Button to create the
            ticket
          </p>

        {successMessage && 
        <Toast className="mt-20 bg-gray-200">
        <h1 className="text-lg font-bold text-pink-500">Your ticket ID: </h1>
          <div className="ml-3 text-sm rounded p-2" ><h1 className="text-lg font-bold text-black">{successMessage}</h1></div>
          <Toast.Toggle className="hover:text-pink-700" />
        </Toast>}

        </div>
        {/* right side */}
        <div className='flex-1'>
          <form
            className='flex flex-col gap-4 p-3 bg-gray-200 rounded-lg shadow-xl'
            onSubmit={handleSubmit}
          >
            <h1 className='font-bold text-4xl text-gray-700'>
              How can I help you?
            </h1>
            <div>
              <Label value='Email: *' />
              <TextInput
                className=''
                type='text'
                placeholder='name@company.com'
                id='email'
              />
            </div>

            <div>
              <Label value='Your name *' />
              <TextInput
                className=''
                type='text'
                placeholder='name'
                id='username'
                
              />
            </div>
            <div className=''>
              <Label value='Your Accout Name' />
              <TextInput
                type='text'
                placeholder='account name'
                id='accountName'
              />
            </div>
            <div>
              <fieldset  className='flex max-w-md gap-4'>
                <legend className='mb-4 text-sm font-medium text-gray-900'>
                  Your question is *
                </legend>
                <div className='flex items-center gap-2'>
                  <Radio
                    className='text-pink-500'
                    id='normal'
                    name='input'
                    value='normal'
                    checked={checkedRadio.op1}
                    onChange={handleChangeRadio}
                    
                  />
                  <Label htmlFor='technical' className='font-normal'>
                  normal
                  </Label>
                </div>
                <div className='flex items-center gap-2'>
                  <Radio
                    className='text-pink-500'
                    id='urgent'
                    name='input'
                    value='urgent'
                    checked={checkedRadio.op2}
                    onChange={handleChangeRadio}
                  />
                  <Label htmlFor='financial' className='font-normal'>
                  urgent
                  </Label>
                </div>
                <div className='flex items-center gap-2'>
                  <Radio
                    className='text-pink-500'
                    id='high'
                    name='input'
                    value='high'
                    checked={checkedRadio.op3}
                    onChange={handleChangeRadio}
                    
                  />
                  <Label htmlFor='financial' className='font-normal'>
                  high
                  </Label>
                </div>
              </fieldset>
            </div>
            <div className='max-w-md'>
              <div className='mb-2 block'>
                <Label htmlFor='subject' value='Subject *' />
              </div>
              <Select onChange={handleChange} id='subject' required>
                <option>Order</option>
                <option>Payments</option>
                <option>Catalog</option>
                <option>Others</option>
              </Select>
            </div>

            {formData.subject === "Payments" && (
              <div className='flex max-w-md flex-col gap-4' id='checkbox'>
                <div className='flex items-center gap-2'>
                  <Checkbox id='accept' defaultChecked />
                  <Label htmlFor='accept' className='flex'>
                  Transaction number 
                  </Label>
                </div>
                <div className='flex items-center gap-2'>
                  <Checkbox id='promotion' />
                  <Label htmlFor='promotion'>Transaction status </Label>
                </div>
                <div className='flex items-center gap-2'>
                  <Checkbox id='age' />
                  <Label htmlFor='age'>Payment Acquirer </Label>
                </div>
              </div>
            )}

            <div className='max-w-md'>
              <div className='mb-2 block'>
                <Label htmlFor='comment' value='Describe your concern *' />
              </div>
              <Textarea
              onChange={handleChange}
                id='comment'
                placeholder='Leave a comment...'
                required
                rows={4}
              />
            </div>

            
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              disable={loading.toString()}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>loading...</span>
                </>
              ) : (
                "Submit Ticket"
              )}
            </Button>
          </form>
          {errorMessage && <Toast className="bg-gray-200">
        <h1 className="text-lg font-bold text-pink-500">ERROR </h1>
          <div className="ml-3 text-sm rounded p-2" ><h1 className="text-lg font-bold text-black">{errorMessage}</h1></div>
          <Toast.Toggle className="hover:text-pink-700" />
        </Toast>}
          <div className='flex gap-2 text-sm mt-1'>
            <span>Have an account?</span>
            <Link className='text-blue-500' to='/'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
