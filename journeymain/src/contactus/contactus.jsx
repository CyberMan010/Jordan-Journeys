import UseCreateUser from "./UseCreateUser";
import validateNewUser from "./validateNewUser"



const CreateUser = () => {
  const {handleChange, values, handleSubmit, errors} = UseCreateUser(validateNewUser);
  
    return (
        <div className="min-h-screen bg-[--background] flex flex-col items-center justify-center p-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
            <div className="relative">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmddZCBWW8fnRf125HbPUzEt74Q_Nlt_-mJA&s" alt="Contact Us Banner" className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-zinc-800 bg-opacity-50 flex items-center justify-center">
                <h1 className="text-3xl text-white font-bold">Contact Us</h1>
              </div>
            </div>
            <div className="p-8 flex flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-8">
                <h2 className="text-2xl font-bold mb-4">Talk with us</h2>
                <p className="text-muted-foreground mb-4">Questions, comments, or suggestions? Simply fill out the form and well be in touch shortly.</p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <img src="https://openui.fly.dev/openui/24x24.svg?text=📍" alt="location-icon" className="mr-2 ring-offset-green-600" />
                    <span>1055 Arthur Ave, Elk Grove, 67, New Orleans South Caroline</span>
                  </li>
                  <li className="flex items-center">
                    <img src="https://openui.fly.dev/openui/24x24.svg?text=📞" alt="phone-icon" className="mr-2" />
                    <span>+1 234 018 999 99</span>
                  </li>
                  <li className="flex items-center">
                    <img src="https://openui.fly.dev/openui/24x24.svg?text=✉️" alt="email-icon" className="mr-2" />
                    <span>Contact@ourmail.com</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <form onSubmit={handleSubmit} className="bg-[--card] p-6 rounded-lg shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input className="border  p-2 w-full rounded-md" placeholder='First Name' name='firstName' type='text' value={values.firstName} onChange={handleChange} />
                    {errors.firstName && <p style={{color: "red"}}>{errors.firstName}</p>}
                    <input   placeholder='Last Name' name='lastName' type='text' defaultValue={values.lastName}  onChange={handleChange} />
                    {errors.lastName && <p style={{color: "red"}}>{errors.lastName}</p>}
                  </div>
                  <div className="mb-4">
                    <input   placeholder='Email' name='email' type='email' value={values.email} onChange={handleChange} />
                    {errors.email && <p style={{color : "red"}}>{errors.email}</p>}
                  </div>
                  <div className="mb-4">
                    <input placeholder='your number' name='phone' type='text' value={values.phone} onChange={handleChange} />
                    {errors.phone && <p style={{color: "red"}}>{errors.phone}</p>}
                  </div>
                  <div className="mb-4">
                    <input placeholder="Your message..." className="border  p-2 w-full rounded-md h-32" defaultValue={values.feed} onChange={handleChange}/>
                  </div>
                  <button type="submit" className="rounded-md bg-green-600 text-white p-2 hover:bg-green-400">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
}
export default CreateUser;