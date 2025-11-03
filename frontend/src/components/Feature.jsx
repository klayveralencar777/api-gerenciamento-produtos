import React from 'react';
export default function Feature({icon, title, description}) {
    return (
        <div className="flex-1 min-w-[200px] text-center p-4">
            <i
            style={{color: '#0F172A'}}
            className={`${icon} text-green-500 text-4xl mb-4`}></i>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>

    )
}
