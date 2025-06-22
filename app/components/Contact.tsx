"use client";
import React from "react";
import { motion } from "framer-motion";
import Button3 from "./Button3";

export default function Contact() {
    return (
        <div className="xl:px-40 md:px-20 px-4 py-20 bg-white">
            <div className="flex md:flex-row flex-col xl:gap-10 md:gap-6 gap-3 items-center justify-center">
                <motion.div
                    className="w-fit md:w-[44%] relative shadow-lg"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ amount: 0.3 }}
                >
                    <img
                        src="/images/lady.png"
                        className="xl:h-[400px] md:h-[300px] h-[200px] w-auto absolute xl:-left-16 xl:-top-16 md:-left-6 md:-top-6 -left-6 top-7 z-20"
                        alt=""
                    />
                    <div className="bg-blue-200 rounded -rotate-2 shadow-md p-2 relative z-10">
                        <div className="bg-blue-200 rounded-md shadow-md p-2 h-full rotate-1 border-2 border-blue-400 border-dashed flex flex-col items-start justify-start">
                            <div className="xl:ms-32 md:ms-30 ms-16 mr-4">
                                <p className="text-blue-600 tracking-light xl:text-[28px] md:text-[20px] text-[16px] font-bold leading-tight">
                                    Contact Me
                                </p>
                                <motion.div
                                    className="flex gap-4 my-4"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ amount: 0.3 }}
                                >
                                    <span>
                                        <img src="/images/phone.svg"
                                            className="xl:w-8 md:w-6 w-4 xl:h-8 md:h-6 h-4" alt="" />
                                    </span>
                                    <span className="text-xs md:text-md xl:text-base text-black
                                    ">+91 6299719397</span>
                                </motion.div>
                                <motion.div
                                    className="flex gap-4 my-4"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ amount: 0.3 }}
                                >
                                    <span>
                                        <img src="/images/email.svg"
                                            className="xl:w-8 md:w-6 w-4 xl:h-8 md:h-6 h-4" alt="" />
                                    </span>
                                    <a
                                        className="text-black hover:text-blue-600 text-xs md:text-md xl:text-base break-all"
                                        href="mailto:reshmaranjan02@gmail.com"
                                    >
                                        reshmaranjan02@gmail.com
                                    </a>
                                </motion.div>
                                <motion.div
                                    className="flex gap-4 my-4"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ amount: 0.3 }}
                                >
                                    <span>
                                        <img src="/images/address.svg"
                                            className="xl:w-8 md:w-6 w-4 xl:h-8 md:h-6 h-4" alt="" />
                                    </span>
                                    <span className="text-xs md:text-md xl:text-base break-all text-black">Uttarpradesh-201309, India</span>
                                </motion.div>

                                <p className="text-blue-600 tracking-light xl:text-[28px] md:text-[20px] text-[16px] font-bold leading-tight mt-3">
                                    Follow Me
                                </p>
                                <motion.div
                                    className="flex gap-4 my-4"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ amount: 0.3 }}
                                >
                                    <a
                                        href="https://www.facebook.com/reshma.ranjan.581"
                                        target="blank"
                                        className="transition duration-200 transform hover:scale-120 hover:shadow-md"
                                    >
                                        <img
                                            src="/images/facebook.svg"
                                            className="xl:w-8 md:w-6 w-4 xl:h-8 md:h-6 h-4"
                                            alt=""
                                        />
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/reshma-ranjan-9326691b1 "
                                        target="blank"
                                        className="transition duration-200 transform hover:scale-120 hover:shadow-md"
                                    >
                                        <img
                                            src="/images/linkedin.svg"
                                            className="xl:w-8 md:w-6 w-4 xl:h-8 md:h-6 h-4"
                                            alt=""
                                        />
                                    </a>
                                    <a
                                        href="https://github.com/reshmaranjan010102"
                                        target="blank"
                                        className="transition duration-200 transform hover:scale-120 hover:shadow-md"
                                    >
                                        <img
                                            src="/images/github2.svg" className="xl:w-8 md:w-6 w-4 xl:h-8 md:h-6 h-4 "
                                            alt=""
                                        />
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className="w-fit md:w-[50%] relative md:ps-20 ps-0 md:pt-0 pt-10">
                    <div className="flex min-w-72 flex-col gap-3">
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ amount: 0.3 }}
                            className="text-[#121517] tracking-light xl:text-[32px] md:text-[20px] text-[16px] font-bold leading-tight flex justify-center gap-2"
                        >
                            <span className="relative border-t-2 border-dashed md:top-5 top-2 w-8"></span>
                            Get in Touch{" "}
                            <span className="relative border-t-2 border-dashed md:top-5 top-2 w-8"></span>
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ amount: 0.3 }}
                            className="text-[#677a83] text-sm font-normal leading-normal"
                        >
                            I'm always open to discussing new projects, creative ideas, or
                            just a friendly chat. Feel free to reach out through the form
                            below or connect with me on social media.
                        </motion.p>

                        <motion.input
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ amount: 0.3 }}
                            readOnly
                            placeholder="Enter your name"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121517] focus:outline-0 focus:ring-0 border border-[#dde2e4] bg-white focus:border-[#dde2e4] h-14 placeholder:text-[#677a83] p-[8px] text-base font-normal leading-normal"
                            value=""
                        />
                        <motion.input
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ amount: 0.3 }}
                            readOnly
                            placeholder="Enter your email"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121517] focus:outline-0 focus:ring-0 border border-[#dde2e4] bg-white focus:border-[#dde2e4] h-14 placeholder:text-[#677a83] p-[8px] text-base font-normal leading-normal"
                            value=""
                        />
                        <motion.input
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ amount: 0.3 }}
                            readOnly
                            placeholder="Enter your phone number (optional)"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121517] focus:outline-0 focus:ring-0 border border-[#dde2e4] bg-white focus:border-[#dde2e4] h-14 placeholder:text-[#677a83] p-[8px] text-base font-normal leading-normal"
                            value=""
                        />
                        <motion.textarea
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ amount: 0.3 }}
                            placeholder="Your message"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121517] focus:outline-0 focus:ring-0 border border-[#dde2e4] bg-white focus:border-[#dde2e4] min-h-36 placeholder:text-[#677a83] p-[8px] text-base font-normal leading-normal"
                        ></motion.textarea>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ amount: 0.3 }}
                            className="flex items-center justify-center"
                        >
                            <Button3 href="">Send Message</Button3>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
