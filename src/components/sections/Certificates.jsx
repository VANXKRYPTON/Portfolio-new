import React from 'react';
import DataScience from '../../assets/DataScience.jpg';
import IBM from '../../assets/IBM.jpg';
import MySQL from '../../assets/MySQL.jpg';
import { RevealOnScroll } from '../RevealOnScroll';

const certificates = [
{
    img: MySQL,
    title: "MySQL",
    issuer: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/ZE2M25Z52T9L",
},
{
    img: DataScience,
    title: "Data Science",
    issuer: "Cisco Networking Academy",
    link: "https://www.netacad.com/certificates/?issuanceId=0c39c191-aea6-4f43-8cbd-6a266724a956",
},
{
    img: IBM,
    title: "IBM MQ DEVELOPERS ESSENTIAL",
    issuer: "IBM",
    link: "https://www.credly.com/badges/68c5cd89-0a1c-4bf9-8357-f40d2ac689b1",
},
];

export const Certificates = () => {
return (
    <section id="certificates" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
    <section className="certificates-section py-14">
        <h2 className="text-center text-4xl font-bold mb-4">
        My <span className="accent-color">Certificates</span>
        </h2>
        <p className="text-center text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
        I am a passionate student actively building my skills in frontend development. 
        I have earned certificates across various domains that showcase my continuous learning 
        and dedication to mastering new technologies.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6">
        {certificates.map((cert, idx) => (
            <div
            key={idx}
            className="certificate-card bg-[#0e1122] rounded-2xl overflow-hidden shadow-xl w-full max-w-sm flex flex-col"
            style={{ minWidth: "320px", maxWidth: "400px" }}
            >
              {/* Certificate image */}
            <div className="w-full h-52 md:h-56 bg-white flex items-center justify-center">
                <img
                src={cert.img}
                alt={cert.title}
                className="object-contain w-full h-full"
                loading="lazy"
                />
                </div>
              {/* Certificate details */}
            <div className="py-6 px-6 text-center flex flex-col flex-1 justify-between bg-[#11132a]">
                <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                <div className="text-md text-purple-300 font-semibold mb-2">{cert.issuer}</div>
                <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium mt-1 text-gray-200 underline flex items-center justify-center gap-2 hover:text-purple-300 transition"
                >
                View Certificate
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 17L13 12L8 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
                </a>
            </div>
            </div>
        ))}
        </div>
        {/* Check my other certificates button */}
        <div className="w-full flex justify-center mt-10">
        <a
            href="https://drive.google.com/drive/folders/1pqpfi4tmXD1ADR6WiCrC_IVdCg0ymCWv?usp=drive_link"
            className="px-8 py-3 rounded-full text-lg font-semibold bg-purple-400 text-white flex items-center gap-2 shadow-lg hover:bg-purple-500 transition border-0"
            style={{ boxShadow: "0 0 18px #a78bfa77" }}
            target="_blank"
            rel="noopener noreferrer"
        >
            Check my other certificates
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        </a>
        </div>
    </section>
    </RevealOnScroll>
    </section>
);
};
