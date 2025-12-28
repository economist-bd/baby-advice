import React, { useState } from 'react';
import { advicesList } from './advices'; // আপনার ডাটা ফাইল ইমপোর্ট

// আইকন (Lucide React বা হিরো আইকন ব্যবহার করা যেতে পারে, এখানে ইমোজি ব্যবহার করছি সহজ করার জন্য)

const App = () => {
  const [visibleCount, setVisibleCount] = useState(12); // শুরুতে ১২টি দেখাবে
  const [searchTerm, setSearchTerm] = useState("");

  // কালার প্যালেট (র‍্যান্ডম কালার জেনারেট করার জন্য)
  const colors = [
    { bg: "bg-red-50", border: "border-red-300", text: "text-red-600" },
    { bg: "bg-orange-50", border: "border-orange-300", text: "text-orange-600" },
    { bg: "bg-yellow-50", border: "border-yellow-400", text: "text-yellow-700" },
    { bg: "bg-green-50", border: "border-green-300", text: "text-green-600" },
    { bg: "bg-teal-50", border: "border-teal-300", text: "text-teal-600" },
    { bg: "bg-blue-50", border: "border-blue-300", text: "text-blue-600" },
    { bg: "bg-indigo-50", border: "border-indigo-300", text: "text-indigo-600" },
    { bg: "bg-purple-50", border: "border-purple-300", text: "text-purple-600" },
    { bg: "bg-pink-50", border: "border-pink-300", text: "text-pink-600" },
  ];

  // ফিল্টার করা ডাটা
  const filteredAdvices = advicesList.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FFFBEB] font-sans selection:bg-pink-200">
      
      {/* --- হিরো সেকশন (বইয়ের মলাটের মতো) --- */}
      <div className="relative overflow-hidden bg-white shadow-sm rounded-b-[3rem] border-b-4 border-orange-100">
        <div className="container mx-auto px-4 pt-10 pb-16 text-center">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-bold tracking-wider text-orange-500 bg-orange-100 rounded-full animate-bounce">
            ✨ ছোটদের জন্য জাদুর উপদেশ ✨
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-4 drop-shadow-sm">
            এসো শিখি, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">ভালো মানুষ</span> হই
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto mb-8">
            এখানে তোমরা পাবে ১০০টি জাদুর উপদেশ, যা তোমাকে একজন সুপারহিরো হতে সাহায্য করবে! 🦸‍♂️🦸‍♀️
          </p>

          {/* সার্চ বার (বুদবুদের মতো) */}
          <div className="max-w-md mx-auto relative group">
            <input
              type="text"
              placeholder="কোন বিষয়ে জানতে চাও? (যেমন: সত্য, সাহস)..."
              className="w-full py-4 px-6 rounded-full border-2 border-orange-200 bg-orange-50 focus:outline-none focus:border-pink-400 focus:bg-white transition-all shadow-sm text-slate-700 placeholder-slate-400"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl group-hover:scale-110 transition-transform">
              🔍
            </div>
          </div>
        </div>

        {/* ব্যাকগ্রাউন্ড ডেকোরেশন (লতাপাতা/মেঘ) */}
        <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      {/* --- মেইন কন্টেন্ট (বইয়ের পাতা) --- */}
      <div className="container mx-auto px-4 py-12">
        
        {/* গ্রিড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAdvices.slice(0, visibleCount).map((advice, index) => {
            // ডায়নামিক কালার সিলেকশন
            const colorTheme = colors[index % colors.length];

            return (
              <div 
                key={advice.id}
                className={`group relative flex flex-col h-full bg-white rounded-3xl overflow-hidden border-2 ${colorTheme.border} shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
              >
                {/* কার্ডের হেডার / ছবি */}
                <div className={`h-48 overflow-hidden relative ${colorTheme.bg}`}>
                  <img 
                    src={advice.image} 
                    alt={advice.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* বইয়ের পাতার নম্বর (ID) */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-slate-700 shadow-sm border border-slate-100">
                    উপদেশ #{advice.id}
                  </div>
                </div>

                {/* কার্ডের বডি */}
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className={`text-2xl font-bold mb-3 ${colorTheme.text}`}>
                    {advice.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed flex-grow">
                    {advice.content}
                  </p>
                  
                  {/* নিচের বাটন / ডেকোরেশন */}
                  <div className="mt-6 pt-4 border-t border-dashed border-slate-200 flex justify-between items-center">
                    <span className="text-2xl animate-pulse">🌟</span>
                    <button className={`text-sm font-semibold px-4 py-2 rounded-full ${colorTheme.bg} ${colorTheme.text} hover:brightness-95 transition-colors`}>
                      পড়া শেষ? ✅
                    </button>
                  </div>
                </div>

                {/* বইয়ের নিচের মোটা অংশ (3D Effect) */}
                <div className={`h-3 w-full ${colorTheme.bg.replace('50', '200')}`}></div>
              </div>
            );
          })}
        </div>

        {/* --- লোড মোর বাটন (বইয়ের পরবর্তী পাতা উল্টানো) --- */}
        {visibleCount < filteredAdvices.length && (
          <div className="text-center mt-16">
            <button 
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="group relative px-8 py-4 bg-white border-b-4 border-r-4 border-pink-200 rounded-full text-xl font-bold text-pink-500 hover:border-pink-300 hover:-translate-y-1 active:border-b-0 active:border-r-0 active:translate-y-1 transition-all shadow-lg"
            >
              আরো উপদেশ দেখুন 📖
              <span className="absolute -top-2 -right-2 text-2xl group-hover:rotate-12 transition-transform">✨</span>
            </button>
          </div>
        )}

        {/* কোনো রেজাল্ট না পাওয়া গেলে */}
        {filteredAdvices.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🤔</div>
            <h3 className="text-xl text-slate-500">দুঃখিত! এমন কোনো উপদেশ খুঁজে পাওয়া যায়নি।</h3>
          </div>
        )}

      </div>

      {/* --- ফুটার --- */}
      <footer className="bg-white border-t border-orange-100 mt-12 py-8 text-center">
        <p className="text-slate-500 font-medium">
          শিশুদের জন্য ভালোবাসা দিয়ে তৈরি ❤️ | © ২০২৫
        </p>
      </footer>
    </div>
  );
};

export default App;
