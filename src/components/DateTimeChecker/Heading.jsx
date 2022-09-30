import React from "react";
import logo from "../../assets/logo.webp";
export default function Heading() {
    return (
        <div>
            <div className="w-1/2 ">
                <img src={logo} alt="" className=" block w-full h-24" />
            </div>
            <h1 className="mt-2 text-center text-[26px] text-blue-400 font-bold">
                Date Time Checker
            </h1>
        </div>
    );
}
