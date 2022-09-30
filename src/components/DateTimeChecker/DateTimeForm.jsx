import React from "react";
import { useForm } from "react-hook-form";

export default function DateTimeForm({ handleCheckDate = () => {} }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        handleCheckDate(data);
    };

    return (
        <div className="my-2">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className=" flex flex-col items-center  gap-2"
            >
                <div className="flex items-center justify-start gap-5">
                    <label htmlFor="day" className=" w-10">
                        Day
                    </label>
                    <input
                        {...register("day")}
                        type="text"
                        name="day"
                        className="block shadow-sm w-[200px] py-1 px-2  border border-slate-100 focus:border-sky-400 focus:outline-sky-400 rounded-sm"
                    />
                </div>
                <div className="flex items-center justify-start gap-5">
                    <label htmlFor="month" className=" w-10">
                        Month
                    </label>
                    <input
                        {...register("month")}
                        type="text"
                        name="month"
                        className="block shadow-sm w-[200px] py-1 px-2  border border-slate-100 focus:border-sky-400 focus:outline-sky-400 rounded-sm"
                    />
                </div>
                <div className="flex items-center justify-start gap-5">
                    <label htmlFor="year" className=" w-10">
                        Year
                    </label>
                    <input
                        {...register("year")}
                        type="text"
                        name="year"
                        className="block shadow-sm w-[200px] py-1 px-2 border border-slate-100 focus:border-sky-400 focus:outline-sky-400 rounded-sm"
                    />
                </div>
                <div className="mt-5 flex justify-center items-center">
                    <div className="flex gap-5">
                        {" "}
                        <input
                            type="reset"
                            className="px-5 py-1 bg-slate-200 rounded-sm hover:bg-sky-300 focus:bg-sky-200 cursor-pointer transition duration-150 ease-in-out"
                            onClick={() => {
                                reset();
                            }}
                            value="Clear"
                        />
                        <input
                            className="px-5 py-1 bg-slate-200 rounded-sm hover:bg-sky-300 focus:bg-sky-400 cursor-pointer transition duration-150 ease-in-out"
                            type="submit"
                            value="Check"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}
