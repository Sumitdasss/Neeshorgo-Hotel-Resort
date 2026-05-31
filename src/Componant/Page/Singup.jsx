

const Singup = () => {
  return (
    <div className="w-full bg-white font-sans py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-start gap-8">
        
        {/* বাম পাশের বড় 'Register' টাইটেল */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-wide md:pl-12">
            Register
          </h2>
        </div>

        {/* ডান পাশের ফর্ম এরিয়া */}
        <div className="md:col-span-2 max-w-md w-full text-xs">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Username */}
            <div className="flex flex-col space-y-2">
              <label className="text-gray-900 font-bold tracking-wide">
                Username
              </label>
              <input 
                type="text" 
                className="w-full bg-white border border-gray-300 p-2.5 focus:outline-none focus:border-gray-500 rounded-sm"
              />
            </div>

            {/* First Name */}
            <div className="flex flex-col space-y-2">
              <label className="text-gray-900 font-bold tracking-wide">
                First Name
              </label>
              <input 
                type="text" 
                className="w-full bg-white border border-gray-300 p-2.5 focus:outline-none focus:border-gray-500 rounded-sm"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col space-y-2">
              <label className="text-gray-900 font-bold tracking-wide">
                Last Name
              </label>
              <input 
                type="text" 
                className="w-full bg-white border border-gray-300 p-2.5 focus:outline-none focus:border-gray-500 rounded-sm"
              />
            </div>

            {/* E-mail Address */}
            <div className="flex flex-col space-y-2">
              <label className="text-gray-900 font-bold tracking-wide">
                E-mail Address
              </label>
              <input 
                type="email" 
                className="w-full bg-white border border-gray-300 p-2.5 focus:outline-none focus:border-gray-500 rounded-sm"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col space-y-2">
              <label className="text-gray-900 font-bold tracking-wide">
                Password
              </label>
              <input 
                type="password" 
                className="w-full bg-white border border-gray-300 p-2.5 focus:outline-none focus:border-gray-500 rounded-sm"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col space-y-2">
              <label className="text-gray-900 font-bold tracking-wide">
                Confirm Password
              </label>
              <input 
                type="password" 
                placeholder="Confirm Password"
                className="w-full bg-white border border-gray-300 p-2.5 placeholder-gray-400 focus:outline-none focus:border-gray-500 rounded-sm"
              />
            </div>

            {/* বাটন্স এরিয়া (Register এবং Login পাশাপাশি) */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {/* Register Button */}
              <button 
                type="submit" 
                className="bg-[#3ba1da] text-white py-3 px-4 font-bold rounded shadow-sm hover:bg-[#3292c7] transition-colors"
              >
                Register
              </button>

              {/* Login Button */}
              <button 
                type="button" 
                className="bg-[#eee] text-gray-500 py-3 px-4 font-bold rounded shadow-sm hover:bg-[#e0e0e0] transition-colors"
              >
                Login
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Singup