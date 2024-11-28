"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuthModal from "@/hooks/useAuthModal";
import Modal from "./Modal";
import { useSignupUser, useVerifyEmail } from "@/hooks/auth";
import { Loader } from "lucide-react";

type FormValues = {
    username?: string;
    fullName?: string;
    email?: string;
    password?: string;
    emailOrUsername?: string;
    verificationCode?: string;
};

const AuthModal = () => {
    const { onClose, isOpen } = useAuthModal();

    const { mutate: signupUser, isPending: isSignuping, isSuccess } = useSignupUser();
    const { mutate: verifyEmail, isPending: isVerifying } = useVerifyEmail();

    const { register, handleSubmit, reset, setValue } = useForm<FormValues>();

    const [formState, setFormState] = React.useState<"login" | "signup" | "forgotPassword" | "verifyEmail">("signup");

    const onSubmit = (data: FormValues) => {
        switch (formState) {
            case "signup":
                signupUser({ username: data.username!, fullName: data.fullName!, email: data.email!, password: data.password! });
                break;
            case "verifyEmail":
                verifyEmail({ code: data.verificationCode!, email: data.email! });
                break;
            case "login":
                console.log("Logging in:", data.emailOrUsername, data.password);
                break;
            case "forgotPassword":
                console.log("Forgot password for:", data.emailOrUsername);
                break;
            default:
                break;
        }
    };

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    const handleFormSwitch = (state: "login" | "signup" | "forgotPassword" | "verifyEmail") => {
        setFormState(state);
        if (state !== "verifyEmail") {
            reset(); // Reset all form fields when switching forms
        }
    };

    useEffect(() => {
        if (isSuccess) {
            setFormState("verifyEmail");
        }
    }, [isSuccess, setValue]);

    return (
        <Modal
            title={(() => {
                switch (formState) {
                    case "signup":
                        return "Create an account";
                    case "login":
                        return "Login";
                    case "forgotPassword":
                        return "Forgot Password";
                    case "verifyEmail":
                        return "Verify Email";
                    default:
                        return "";
                }
            })()}
            description={(() => {
                switch (formState) {
                    case "signup":
                        return "Sign up to get started.";
                    case "login":
                        return "Login to your account.";
                    case "forgotPassword":
                        return "Enter your email to reset your password.";
                    case "verifyEmail":
                        return "Enter the verification code sent to your email.";
                    default:
                        return "";
                }
            })()}
            isOpen={isOpen}
            onChange={onChange}
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Signup Form */}
                {formState === "signup" && (
                    <>
                        <div>
                            <label className="block text-sm font-medium text-[#5b5c5b]">
                                Username
                            </label>
                            <input
                                {...register("username", { required: true })}
                                placeholder="Your username"
                                className="w-full mt-1 p-2 bg-[#1f1f1f] border border-[#5b5c5b] rounded-md text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#5b5c5b]">
                                FullName
                            </label>
                            <input
                                {...register("fullName", { required: true })}
                                placeholder="Your fullname"
                                className="w-full mt-1 p-2 bg-[#1f1f1f] border border-[#5b5c5b] rounded-md text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#5b5c5b]">
                                Email
                            </label>
                            <input
                                {...register("email", {
                                    required: true,
                                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                })}
                                placeholder="Your email"
                                className="w-full mt-1 p-2 bg-[#1f1f1f] border border-[#5b5c5b] rounded-md text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#5b5c5b]">
                                Password
                            </label>
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                placeholder="Your password"
                                className="w-full mt-1 p-2 bg-[#1f1f1f] border border-[#5b5c5b] rounded-md text-white"
                            />
                        </div>
                    </>
                )}

                {/* Login Form */}
                {formState === "login" && (
                    <>
                        <div>
                            <label className="block text-sm font-medium text-[#5b5c5b]">
                                Email or Username
                            </label>
                            <input
                                {...register("emailOrUsername", { required: true })}
                                placeholder="Your email or username"
                                className="w-full mt-1 p-2 bg-[#1f1f1f] border border-[#5b5c5b] rounded-md text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#5b5c5b]">
                                Password
                            </label>
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                placeholder="Your password"
                                className="w-full mt-1 p-2 bg-[#1f1f1f] border border-[#5b5c5b] rounded-md text-white"
                            />
                        </div>
                    </>
                )}

                {/* Forgot Password */}
                {formState === "forgotPassword" && (
                    <div>
                        <label className="block text-sm font-medium text-[#5b5c5b]">
                            Email or Username
                        </label>
                        <input
                            {...register("emailOrUsername", { required: true })}
                            placeholder="Your email or username"
                            className="w-full mt-1 p-2 bg-[#1f1f1f] border border-[#5b5c5b] rounded-md text-white"
                        />
                    </div>
                )}

                {/* Verify Email */}
                {formState === "verifyEmail" && (
                    <div>
                        <label className="block text-sm font-medium text-[#5b5c5b]">
                            Verification Code
                        </label>
                        <input
                            {...register("verificationCode", { required: true })}
                            placeholder="Enter your code"
                            className="w-full mt-1 p-2 bg-[#1f1f1f] border border-[#5b5c5b] rounded-md text-white"
                        />
                    </div>
                )}

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="mt-2 w-full bg-[#404040] border-2 border-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-500"
                    >
                        {(() => {
                            switch (formState) {
                                case "signup":
                                    return isSignuping ? <Loader className="animate-spin mx-auto" size={25} /> : "Sign Up";
                                case "login":
                                    return "Login";
                                case "forgotPassword":
                                    return "Forgot Password";
                                case "verifyEmail":
                                    return isVerifying ? <Loader className="animate-spin mx-auto" size={25} /> : "Verify";
                                default:
                                    return "";
                            }
                        })()}
                    </button>
                </div>

                {/* Form-Switching Text */}
                <p className="text-center text-sm text-[#5b5c5b]">
                    {formState === "signup" ? (
                        <>
                            Already have an account?{" "}
                            <button
                                type="button"
                                onClick={() => handleFormSwitch("login")}
                                className="text-green-500 hover:underline"
                            >
                                Log in
                            </button>
                        </>
                    ) : formState === "login" ? (
                        <>
                            Forgot your password?{" "}
                            <button
                                type="button"
                                onClick={() => handleFormSwitch("forgotPassword")}
                                className="text-green-500 hover:underline"
                            >
                                Forgot password
                            </button>
                            <br />
                            Dont have an account?{" "}
                            <button
                                type="button"
                                onClick={() => handleFormSwitch("signup")}
                                className="text-green-500 hover:underline"
                            >
                                Sign up
                            </button>
                        </>
                    ) : formState === "forgotPassword" ? (
                        <>
                            Remembered your password?{" "}
                            <button
                                type="button"
                                onClick={() => handleFormSwitch("login")}
                                className="text-green-500 hover:underline"
                            >
                                Log in
                            </button>
                        </>
                    ) : null}
                </p>
            </form>
        </Modal>
    );
};

export default AuthModal;
