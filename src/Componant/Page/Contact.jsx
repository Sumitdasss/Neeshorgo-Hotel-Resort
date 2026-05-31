
const Contact = () => {
  return (
   <div className="w-full bg-white font-sans py-12">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* ফর্ম এবং কন্টাক্ট ডিটেইলস সেকশন */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          
          {/* বাম পাশ: ড্রপ আস এ লাইন (Form) */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Drop us a line</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Name</label>
                <input type="text" className="w-full bg-[#f4f4f4] border-none p-3 focus:ring-1 focus:ring-blue-900 outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input type="email" className="w-full bg-[#f4f4f4] border-none p-3 focus:ring-1 focus:ring-blue-900 outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Phone</label>
                <input type="text" className="w-full bg-[#f4f4f4] border-none p-3 focus:ring-1 focus:ring-blue-900 outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Message</label>
                <textarea rows="6" className="w-full bg-[#f4f4f4] border-none p-3 focus:ring-1 focus:ring-blue-900 outline-none resize-none"></textarea>
              </div>
              <button type="submit" className="bg-[#003d66] text-white px-8 py-2.5 font-bold rounded-sm hover:bg-[#002a47] transition-colors">
                Submit
              </button>
            </form>
          </div>

          {/* ডান পাশ: কন্টাক্ট ডিটেইলস */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4 text-sm text-gray-500">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-700">Address :</span>
                <span className="text-right">Plot No. 492, Marine Drive Road</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-700">City :</span>
                <span>Cox's Bazar</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-700">Check-In :</span>
                <span>1:00 pm</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-700">Check-Out :</span>
                <span>11:00 am</span>
              </div>
            </div>

            {/* ফোন এবং ইমেইল আইকন সহ */}
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <span>01780077056</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">💬</span>
                <span>01617834401</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">📧</span>
                <span>neeshorgocox@gmail.com</span>
              </div>
            </div>

            {/* এভেইলেবল ২৪/৭ */}
            <div className="pt-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Available 24/7</span>
              <div className="w-10 h-[1px] bg-gray-300 mb-2"></div>
              <span className="text-gray-500 font-medium">+8801780-077056</span>
            </div>
          </div>
        </div>

        {/* নিচের ম্যাপ সেকশন */}
        <div className="w-full h-[400px] bg-gray-100 relative rounded-sm overflow-hidden shadow-inner">
           {/* আসল গুগল ম্যাপ ইন্টিগ্রেট করতে নিচের iframe ব্যবহার করতে পারেন */}
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.645284060763!2d91.99066021493903!3d21.40386718579638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc62603caabd1%3A0x343ed31a9b4cb751!2sNeeshorgo%20Hotel%20%26%20Resort%20Ltd.!5e0!3m2!1sen!2sbd!4v1606805530027!5m2!1sen!2sbd" 
            className="w-full h-full border-0"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

      </div>
    </div>
  )
}



export default Contact