import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-10 text-center">
            <h1 className="text-5xl font-bold text-kid-primary mb-6 animate-bounce">
                স্বাগতম ছোট বন্ধুরা! 🎉
            </h1>
            <p className="text-2xl text-kid-dark mb-10 max-w-2xl mx-auto">
                এখানে তোমাদের জন্য আছে ১০০টি মজার ও শিক্ষণীয় উপদেশ। চলো, জীবনকে সুন্দর করে সাজাই!
            </p>

            <div className="p-4 bg-white rounded-3xl shadow-xl border-4 border-dashed border-kid-secondary max-w-md mx-auto mb-10">
                <img src="banner.png" alt="Kids Reading" className="rounded-2xl w-full mb-4" />
                <h2 className="text-2xl font-bold text-kid-secondary">আজকের সেরা উপদেশটি পড়তে চাও?</h2>
            </div>

            <Link to="/index" className="inline-block bg-kid-accent text-kid-dark text-2xl font-bold px-10 py-4 rounded-full shadow-lg hover:bg-yellow-400 transform hover:scale-105 transition">
                 🚀 সব উপদেশ দেখুন (ইনডেক্স)
            </Link>
        </div>
    );
};

export default Home;
