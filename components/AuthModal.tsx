"use client";

import React, { useEffect, useState } from "react";
import useAuthModal from "@/hooks/useAuthModal";
import Modal from "./Modal";
import { useSignupUser, useVerifyEmail } from "@/hooks/auth";

const AuthModal = () => {
    const { onClose, isOpen } = useAuthModal();

    const { mutate: signupUser, isPending, isSuccess } = useSignupUser();
    const { mutate: verifyEmail } = useVerifyEmail();

    // State for managing form data and modal view
    const [formData, setFormData] = useState({
        username: "",
        fullName: "",
        email: "",
        password: "",
        verificationCode: "", // Added for verification code input
    });

    const [formState, setFormState] = useState<
        "login" | "signup" | "forgotPassword" | "verifyEmail"
    >("signup");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formState === "signup") {
            signupUser({
                username: formData.username,
                email: formData.email,
                fullName: formData.fullName,
                password: formData.password,
            });
        } else if (formState === "verifyEmail") {
           verifyEmail({code: formData.verificationCode, email: formData.email})
        } else {
            onClose(); // Close modal after login or password reset
        }
    };

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    const handleFormSwitch = (
        state: "login" | "signup" | "forgotPassword" | "verifyEmail"
    ) => {
        setFormState(state);
    };

    useEffect(() => {
        if (isSuccess) {
            setFormState("verifyEmail");
        }
    }, [isSuccess]);

    return (
        <Modal
            title={
                formState === "signup"
                    ? "Create an account"
                    : formState === "login"
                    ? "Login"
                    : formState === "forgotPassword"
                    ? "Forgot Password"
                    : "Verify Email"
            }
            description={
                formState === "signup"
                    ? "Sign up to get started."
                    : formState === "login"
                    ? "Login to your account."
                    : formState === "forgotPassword"
                    ? "Enter your email to reset password."
                    : "Enter the verification code sent to your email."
            }
            isOpen={isOpen}
            onChange={onChange}
        >
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Conditional rendering for different form views */}
                {formState === "signup" && (
                    <>
                        {/* Username */}
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-[#5b5c5b] focus:text-white"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                placeholder="Your username"
                                className="w-full mt-1 p-2 bg-[#1f1f1f] border border-[#5b5c5b] rounded-md text-white focus:outline-none focus:ring-0 focus:border-white focus:text-white hover:border-white placeholder-custom"
                            />
                        </div>

                        {/* Full Name */}
                        <div>
                            <label
                                htmlFor="fullName"
                                className="block text-sm font-medium text-[#5b5c5b] focus:text-white"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                placeholder="Your fullname"
                                className="w-full mt-1 p-2 bg-[#1f1f1f] border border-[#5b5c5b] rounded-md text-white focus:outline-none focus:ring-0 focus:border-white focus:text-white hover:border-white placeholder-custom"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-[#5b5c5b] focus:text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Your email"
                                className="w-full mt-1 p-2 bg-[#1f1f1f] border border-[#5b5c5b] rounded-md text-white focus:outline-none focus:ring-0 focus:border-white focus:text-white hover:border-white placeholder-custom"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-[#5b5c5b] focus:text-white"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="Your password"
                                className="w-full mt-1 p-2 bg-[#1f1f1f] border border-[#5b5c5b] rounded-md text-white focus:outline-none focus:ring-0 focus:border-white focus:text-white hover:border-white placeholder-custom"
                            />
                        </div>
                    </>
                )}

                {formState === "verifyEmail" && (
                    <div className="space-y-4 text-center text-white">
                        <p>
                            A verification email has been sent to your email address. Please
                            check your inbox and enter the code below.
                        </p>
                        <div>
                            <label
                                htmlFor="verificationCode"
                                className="block text-sm font-medium text-[#5b5c5b] focus:text-white"
                            >
                                Verification Code
                            </label>
                            <input
                                type="text"
                                id="verificationCode"
                                name="verificationCode"
                                value={formData.verificationCode}
                                onChange={handleChange}
                                required
                                placeholder="Enter verification code"
                                className="w-full mt-1 p-2 bg-[#1f1f1f] border border-[#5b5c5b] rounded-md text-white focus:outline-none focus:ring-0 focus:border-white focus:text-white hover:border-white placeholder-custom"
                            />
                        </div>
                    </div>
                )}

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="mt-2 w-full bg-[#404040] border-2 border-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-500 hover:text-white transition"
                    >
                        {formState === "signup"
                            ? "Sign Up"
                            : formState === "login"
                            ? "Login"
                            : formState === "forgotPassword"
                            ? "Reset Password"
                            : "Verify"}
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default AuthModal;
