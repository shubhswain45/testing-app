"use client";
import { useState } from "react";
import { useParams } from "next/navigation"; // Hook to get dynamic route params
import { motion } from "framer-motion";
import { useResetPassword } from "@/hooks/auth";

const ResetPasswordPage = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { token } = useParams(); // Extract token from dynamic route
    const { mutate: resetPassword, isPending: isResettingPassword } = useResetPassword();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Ensure token is a string
        if (typeof token !== "string") {
            alert("Invalid token. Please check the reset link.");
            return;
        }

        resetPassword({ newPassword, confirmPassword, token });
    };

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='max-w-md w-full bg-gray-800 bg-opacity-50 rounded-2xl shadow-xl overflow-hidden'
            >
                <div className='p-8'>
                    <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
                        Reset Password
                    </h2>

                    <form onSubmit={handleSubmit}>
                        {/* Input for New Password */}
                        <div className='mb-4'>
                            <input
                                type='password'
                                placeholder='New Password'
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className='w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:border-green-500 transition duration-200 outline-none'
                                required
                            />
                        </div>

                        {/* Input for Confirm Password */}
                        <div className='mb-4'>
                            <input
                                type='password'
                                placeholder='Confirm New Password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className='w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:border-green-500 transition duration-200 outline-none'
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className='w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 disabled:opacity-50'
                            type='submit'
                            disabled={isResettingPassword}
                        >
                            {isResettingPassword ? "Set New Password" : "Processing..."}
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default ResetPasswordPage;
