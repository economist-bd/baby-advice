import React from 'react';
import { Link } from 'react-router-dom';
import { advicesList } from '../data/advices';

const IndexPage = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-4xl font-bold text-center text-kid-dark mb-10">
                📜 ১০০টি উপদেশের তালিকা (Index)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advicesList.map((advice) => (
                    <Link to={`/advice/${advice.id}`} key={advice.id} className="group">
                        <div className={`p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 bg-white border-b-4 ${advice.borderColor} flex items-center gap-4`}>
                            <span className="text-3xl font-extrabold text-kid-primary">#{advice.id}</span>
                            <h3 className="text-xl font-bold text-kid-dark group-hover:text-kid-primary transition">
                                {advice.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default IndexPage;