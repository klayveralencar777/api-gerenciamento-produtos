import React from "react"
export default function CardHome({ title, description, buttonText, onClick }) {
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg flex-1 min-w-[250px] text-center transform hover:-translate-y-2 transition">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
            <button
                style={{backgroundColor: '#0F172A'}}
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
                onClick={onClick}
            >
                {buttonText}
            </button>
        </div>
    )


}
