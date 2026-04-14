import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#244D3F]">
            <div className="container mx-auto p-4 flex justify-center items-center flex-col">
                <h1 className="flex gap-0 mb-4 mt-20 items-center"><span className="font-extrabold text-white text-4xl md:text-6xl">Keen</span><span className="font-medium text-white text-4xl md:text-6xl">Keeper</span></h1>
                <p className="mb-6 text-[#E9E9E9] text-center">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className="font-medium text-xl text-white mb-4">Social Links</p>
                <div className="flex gap-2">
                    <div className="bg-white p-3 rounded-full flex items-center justify-center"><FaInstagram/></div>
                    <div className="bg-white p-3 rounded-full flex items-center justify-center"><FaFacebookSquare/></div>
                    <div className="bg-white p-3 rounded-full flex items-center justify-center"><FaXTwitter /></div>
                </div>
            </div>
            <div className="container mx-auto p-4">
                <div className="border border-t-[#FAFAFA80]"></div>
            </div>
            <div className="container mx-auto p-4 mb-8 flex flex-col items-center gap-2 md:justify-between md:flex-row">
                <div><p className="text-[#FAFAFA80]">© 2026 KeenKeeper. All rights reserved.</p></div>
                <div className="flex gap-4">
                    <p className="text-[#FAFAFA80]">Privacy Policy</p>
                    <p className="text-[#FAFAFA80]">Terms of Service</p>
                    <p className="text-[#FAFAFA80]">Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;