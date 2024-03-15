import {
  Button,
  Label,
  TextInput,
  Alert,
  Spinner,
  Radio,
  Select,
  Dropdown,
  Checkbox,
  Textarea,
} from "flowbite-react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Form() {
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState("")

  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
  //     console.log(formData)
  //   }

  //   const handleSubmit = async (e) => {
  //     e.preventDefault()
  //     if (!formData.username || !formData.email || !formData.password) {
  //       return setErrorMessage("Please fill out all fields.")
  //     }
  //     try {
  //       setLoading(true)
  //       setErrorMessage(null)
  //       const res = await fetch("/api/auth/signup", {
  //         method: "POST",
  //         headers: { "Content-type": "application/json" },
  //         body: JSON.stringify(formData),
  //       })

  //       console.log("submitted")
  //       const data = await res.json()

  //       if (data.success === false) {
  //         console.log("false if-No submitted")
  //         setLoading(false)
  //         return setErrorMessage(data.message)
  //       }
  //       setLoading(false)
  //       if (res.ok) {
  //         console.log("RES.OK")
  //         navigate("/sign-in")
  //       }
  //     } catch (error) {
  //       setErrorMessage(error.message)
  //       setLoading(false)
  //     }
  //   }
  const handleSelect = (e) => {
    setSelected(e.target.value)
  }
  console.log(selected)
  return (
    <div className="min-h-screen mt-20 flex md:justify-center flex-col md:flex-row md:item-center">
      <div className="flex max-w-3xl max-auto flex-col md:flex-row md:item-center gap-8">
        {/* left side */}
        <div className="flex-1">
          <Link
            to="/form"
            className="font-bold dark:text-white text-4xl text-gray-600"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-200 rounded-lg text-white">
              {"Ticktet"}
            </span>
            Support
          </Link>
          <p className="text-sm mt-5">
            After fill these fields, click on Submit Ticket Button to create the
            ticket
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4 p-3 bg-gray-200 rounded-lg shadow-xl">
            <h1 className="font-bold text-4xl text-gray-700">
              How can I help you?
            </h1>
            <div>
              <Label value="Email:" />
              <TextInput
                className=""
                type="text"
                placeholder="name@company.com"
                id="email"
                required
              />
            </div>

            <div>
              <Label value="Your name *" />
              <TextInput
                className=""
                type="text"
                placeholder="name"
                id="username"
                required
              />
            </div>
            <div className="">
              <Label value="Your Accout Name" />
              <TextInput
                type="text"
                placeholder="account name"
                id="accountName"
                required
              />
            </div>
            <div>
              <fieldset className="flex max-w-md gap-4">
                <legend className="mb-4 text-sm font-medium text-gray-900">
                  Your question is *
                </legend>
                <div className="flex items-center gap-2">
                  <Radio
                    className="text-pink-500"
                    id="technical"
                    name="questionsTech"
                    value="technical"
                    defaultChecked
                  />
                  <Label htmlFor="technical" className="font-normal">
                    Technical
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    className="text-pink-500"
                    id="financial"
                    name="questionFin"
                    value="financial"
                  />
                  <Label htmlFor="financial" className="font-normal">
                    Financial
                  </Label>
                </div>
              </fieldset>
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="subject" value="Subject *" />
              </div>
              <Select onChange={handleSelect} id="subject" required>
                <option>Order</option>
                <option>Payments</option>
                <option>Catalog</option>
                <option>Others</option>
              </Select>
            </div>

            {selected === "Order" && (
              <div className="flex max-w-md flex-col gap-4" id="checkbox">
                <div className="flex items-center gap-2">
                  <Checkbox id="accept" defaultChecked />
                  <Label htmlFor="accept" className="flex">
                    xxxxxxxxx
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="promotion" />
                  <Label htmlFor="promotion">xxxxxxxxxx</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="age" />
                  <Label htmlFor="age">xxxxxxxxxxx</Label>
                </div>
              </div>
            )}

            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Describe your concern *" />
              </div>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                required
                rows={4}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disable={loading.toString()}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">loading...</span>
                </>
              ) : (
                "Submit Ticket"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-1">
            <span>Have an account?</span>
            <Link className="text-blue-500" to="/sign-in">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
