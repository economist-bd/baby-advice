import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { advicesList } from '../data/advices';
import SocialShare from '../components/SocialShare';

const AdviceDetail = () => {
    const { id } = useParams();
    const advice = advicesList.find(a => a.id === parseInt(id));
    const currentUrl = window.location.href;

    if (!advice) {
        return <Navigate to="/index" />;
    }

    return (
        <div className={`min-h-screen py-10 px-4 ${advice.bgColor}`}>
            <div className="container mx-auto max-w-3xl bg-white p-6 md:p-10 rounded-[3rem] shadow-2xl border-8 border-double ${advice.borderColor}">
                <h1 className="text-4xl md:text-5xl font-extrabold text-center text-kid-primary mb-8">
                    {advice.title}
                </h1>

                <div className="mb-8 rounded-3xl overflow-hidden border-4 border-kid-accent shadow-lg">
                    <img src={advice.image} alt={advice.title} className="w-full h-64 md:h-96 object-cover hover:scale-110 transition duration-500" />
                </div>

                <div className="text-xl md:text-2xl text-kid-dark leading-relaxed text-justify font-medium bg-kid-primary/5 p-6 rounded-2xl">
                    {advice.content}
                </div>

                <SocialShare title={`বাচ্চাদের উপদেশ: ${advice.title}`} url={currentUrl} />
            </div>
        </div>
    );
};

export default AdviceDetail;