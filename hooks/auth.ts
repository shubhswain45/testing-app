import { createGraphqlClient } from "@/clients/api";
import { LoginUserPayload, ResetPasswordPayload, SignupUserPayload, VerifyEmailPayload } from "@/gql/graphql";
import { forgotPasswordMutation, loginUserMutation, logoutUserMutation, resetPasswordMutation, signupUserMutation, verifyEmailMutation } from "@/graphql/mutations/auth";
import { getCurrentUserQuery } from "@/graphql/queries/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import useAuthModal from "./useAuthModal";

export const useCurrentUser = () => {
    return useQuery({
        queryKey: ['currentUser'],
        queryFn: async () => {
            const graphqlClient = createGraphqlClient()
            const data = await graphqlClient.request(getCurrentUserQuery)
            return data
        }
    })
}

export const useLoginUser = (setIsVerified: React.Dispatch<React.SetStateAction<boolean>>) => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const authModal = useAuthModal()

    return useMutation({
        mutationFn: async (userData: LoginUserPayload) => {
            // Check if all required fields are filled
            if (!userData.usernameOrEmail || !userData.password) {
                throw new Error("Please fill both fields");
            }

            try {
                const graphqlClient = createGraphqlClient()
                const { loginUser } = await graphqlClient.request(loginUserMutation, { payload: userData });
                return loginUser;
            } catch (error: any) {
                // Throw only the error message for concise output
                throw new Error(error?.response?.errors?.[0]?.message || "Something went wrong");
            }
        },

        onSuccess: (data) => {
            if (!data?.isVerified) {
                setIsVerified(false)
                toast.error("Your account is not verified! Pls verified");

            } else {
                authModal.onClose()
                toast.success("Login successful!");
            }

            queryClient.setQueryData(["currentUser"], () => {
                return { getCurrentUser: data }
            })
        },

        onError: (error: any) => {
            const errorMessage = error.message.split(':').pop()?.trim() || "Something went wrong";
            toast.error(errorMessage);
        }
    });
};

export const useSignupUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (userData: SignupUserPayload) => {
            // Check if all required fields are filled
            if (!userData.email || !userData.username || !userData.fullName || !userData.password) {
                throw new Error("Please fill all the fields");
            }

            // Check if the email is valid
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(userData.email)) {
                throw new Error("Invalid email format.");
            }

            // Check if the password is greater than 6 char
            if (userData.password.length < 6) {
                throw new Error("Password must be at least 6 characters long.");
            }

            try {
                const graphQLClient = createGraphqlClient()
                const { signupUser } = await graphQLClient.request(signupUserMutation, { payload: userData });
                return signupUser;
            } catch (error: any) {
                // Throw only the error message for concise output
                throw new Error(error?.response?.errors?.[0]?.message || "Something went wrong");
            }
        },

        onSuccess: (data) => {
            queryClient.setQueryData(["currentUser"], () => {
                return { getCurrentUser: data }
            })
            toast.success("signup successfully")
        },

        onError: (error: any) => {
            const errorMessage = error.message.split(':').pop()?.trim() || "Something went wrong";
            toast.error(errorMessage);
        }
    });
};

export const useVerifyEmail = () => {
    const queryClient = useQueryClient();
    const authModal = useAuthModal()

    return useMutation({
        mutationFn: async (payload: VerifyEmailPayload) => {
            try {
                const graphqlClient = createGraphqlClient()
                const { verifyEmail } = await graphqlClient.request(verifyEmailMutation, { payload });
                return verifyEmail;
            } catch (error: any) {
                // Throw only the error message for concise output
                throw new Error(error?.response?.errors?.[0]?.message || "Something went wrong");
            }
        },

        onSuccess: (data) => {

            queryClient.setQueryData(["currentUser"], () => {
                return { getCurrentUser: data }
            })
            authModal.onClose()

            toast.success("Email verification successful!");
        },

        onError: (error) => {
            const errorMessage = error.message.split(':').pop()?.trim() || "Something went wrong";
            toast.error(errorMessage);
        }
    });
}

export const useLogoutUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            const graphqlClient = createGraphqlClient()
            const { logoutUser } = await graphqlClient.request(logoutUserMutation);
            return logoutUser;
        },

        onSuccess: (data) => {
            queryClient.setQueriesData({ queryKey: ['currentUser'] }, () => ({
                getAuthUser: null
            }));

            toast.success("Logout successful!");
        },
    });
};

export const useForgotPassword = () => {
    return useMutation({
        mutationFn: async (emailOrUsername: string) => {
            if (!emailOrUsername) {
                throw new Error("Email or Username is required!")
            }
            try {
                const graphqlClient = createGraphqlClient()
                const { forgotPassword } = await graphqlClient.request(forgotPasswordMutation, { emailOrUsername });
                return forgotPassword;
            } catch (error: any) {
                // Throw only the error message for concise output
                throw new Error(error?.response?.errors?.[0]?.message || "Something went wrong");
            }
        },

        onSuccess: (data) => {
            toast.success("Reset link send successful to your Email!");
        },

        onError: (error) => {
            const errorMessage = error.message.split(':').pop()?.trim() || "Something went wrong";
            toast.error(errorMessage);
        }
    });
}

export const useResetPassword = () => {
    return useMutation({
        mutationFn: async (payload: ResetPasswordPayload) => {

            if (payload.newPassword != payload.confirmPassword) {
                throw new Error("Password does't match.")
            }

            if (payload.newPassword.length < 6) {
                throw new Error("Password must be at least 6 characters long.");
            }

            try {
                const graphqlClient = createGraphqlClient()
                const { resetPassword } = await graphqlClient.request(resetPasswordMutation, { payload });
                return resetPassword;
            } catch (error: any) {
                // Throw only the error message for concise output
                throw new Error(error?.response?.errors?.[0]?.message || "Something went wrong");
            }
        },

        onSuccess: (data) => {
            toast.success("Reset password successful!");
        },

        onError: (error) => {
            const errorMessage = error.message.split(':').pop()?.trim() || "Something went wrong";
            toast.error(errorMessage);
        }
    });
}