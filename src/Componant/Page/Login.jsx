import { Link } from "react-router-dom"


const Login = () => {
  return (
   <div className="w-full bg-white font-sans">
      
      {/* ১. ওপরের ব্যানার ইমেজ */}
      <div 
        className="w-full h-[250px] md:h-[350px] bg-cover bg-center bg-no-repeat"
        style={{ 
          // এখানে আপনার আসল ব্যানার ইমেজের পাথ বসিয়ে দেবেন
          backgroundImage: "url('https://images.pexels.com/photos/11788437/pexels-photo-11788437.jpeg')" 
        }}
      ></div>

      {/* ২. লগইন ফর্ম সেকশন */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 items-start gap-8">
        
        {/* বাম পাশের বড় 'Login' টাইটেল */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-wide md:pl-12">
            Login
          </h2>
        </div>

        {/* ডান পাশের ফর্ম এরিয়া (মাঝখানের কলাম ফাকা রেখে ব্যালেন্স করার জন্য md:col-span-2 ব্যবহার করা হয়েছে) */}
        <div className="md:col-span-2 max-w-md w-full text-xs">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Username or E-mail Input */}
            <div className="flex flex-col space-y-2">
              <label className="text-gray-900 font-bold tracking-wide">
                Username or E-mail
              </label>
              <input 
                type="text" 
                className="w-full bg-white border border-gray-300 p-2.5 focus:outline-none focus:border-gray-500 rounded-sm"
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col space-y-2">
              <label className="text-gray-900 font-bold tracking-wide">
                Password
              </label>
              <input 
                type="password" 
                className="w-full bg-white border border-gray-300 p-2.5 focus:outline-none focus:border-gray-500 rounded-sm"
              />
            </div>

            {/* Keep me signed in Checkbox */}
            <div className="flex items-center space-x-2 pt-1">
              <input 
                type="checkbox" 
                id="keepSignedIn"
                className="w-3.5 h-3.5 border-gray-300 rounded focus:ring-0 accent-[#3ba1da]"
              />
              <label htmlFor="keepSignedIn" className="text-gray-400 font-medium cursor-pointer">
                Keep me signed in
              </label>
            </div>

            {/* বাটন্স এরিয়া (Login এবং Register পাশাপাশি) */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {/* Login Button */}
              <button 
                type="submit" 
                className="bg-[#3ba1da] text-white py-3 px-4 font-bold rounded shadow-sm hover:bg-[#3292c7] transition-colors"
              >
                Login
              </button>

              {/* Register Button */}
             <Link to="/signup"> <button 
                type="button" 
                className="bg-[#eee] text-gray-500 py-3 inline-block px-21 font-bold rounded shadow-sm hover:bg-[#e0e0e0] transition-colors"
              >
                Register
              </button>
              </Link>
            </div>

            {/* Forgot Password Link */}
            <div className="text-center pt-4">
              <a 
                href="#forgot-password" 
                className="text-gray-400 hover:text-gray-600 transition-colors font-medium"
              >
                Forgot your password?
              </a>
            </div>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Login