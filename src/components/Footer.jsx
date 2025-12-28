import React from 'react';
import { FaPhoneAlt, FaUserTie } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-kid-dark text-white p-6 mt-10 rounded-t-3xl">
             <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    {/* এখানে লেখকের ছবি দিতে পারেন public ফোল্ডার থেকে */}
                    <div className="w-16 h-16 rounded-full bg-white overflow-hidden border-4 border-kid-accent">
                        <img src="https://via.placeholder.com/150" alt="মঞ্জুরুল হক" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-kid-accent">লেখক: মঞ্জুরুল হক</h3>
                        <p className="flex items-center gap-2"><FaUserTie /> প্রভাষক, অর্থনীতি</p>
                    </div>
                </div>
                <div className="text-lg font-semibold bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                    <FaPhoneAlt className="text-kid-accent"/> মোবাইল: ০১৭১৫২৪৭৫৮৮
                </div>
            </div>
             <p className="text-center text-sm mt-4 opacity-70">© 2023 শিশুদের উপদেশ মালা। সর্বস্বত্ব সংরক্ষিত।</p>
        </footer>
    );
};

export default Footer;