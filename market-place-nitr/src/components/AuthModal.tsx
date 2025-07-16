"use client";
import React, { useState } from "react";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import axios from "axios";
import toast from "react-hot-toast";

export default function AuthModal() {
    const [showSignUp, setShowSignUp] = useState(false);
    const [loading, setLoading] = useState(false);
    const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
    async function toggleSignup() {
        setShowSignUp(!showSignUp);
    }
    const [loginUser, setLoginUser] = useState({ email: "", password: "" });

    const [signupData, setSignupData] = useState({
        username: "",
        email: "",
        password: "",
        rollno: "",
    });

    const handleSignUpData = (e: any) => {
        setSignupData({
            ...signupData,
            [e.target.id]: e.target.value,
        });
    };
    const handleSignUp = async () => {
        if (
            !signupData.username ||
            !signupData.email ||
            !signupData.password ||
            !signupData.rollno
        ) {
            toast.error("Please fill all the fields");
            return;
        }
        setLoading(true);
        console.log(signupData);
        try {
            await axios.post(apiEndpoint + "/users/signup", signupData);
            toast.success("Signed up successfully");
            setShowSignUp(false);
        } catch (error: any) {
            toast.error(
                error.response?.data?.message ||
                    "Failed to sign up. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    const handleSignInData = (e: any) => {
        setLoginUser({
            ...loginUser,
            [e.target.id]: e.target.value,
        });
    };

    const handleSignIn = async () => {
        if (!loginUser.email || !loginUser.password) {
            return toast.error("Please fill all the fields");
        }
        setLoading(true);
        try {
            const response = await axios.post(
                apiEndpoint + "/users/signin",
                loginUser
            );
            console.log(response.data);
            // toast.success("Logged in successfully");
            localStorage.setItem("token_mpnit", response.data._id);
            window.location.reload();
        } catch (e: any) {
            console.log(e);
            toast.error(e.response?.data?.message || "Failed to sign in");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="hidden"
                        id="triggerLoginModal"
                    >
                        Show Dialog
                    </Button>
                </AlertDialogTrigger>
                {showSignUp ? (
                    <SignupForm
                        toggleSignup={toggleSignup}
                        handleSignUp={handleSignUp}
                        handleSignUpData={handleSignUpData}
                        loading={loading}
                    />
                ) : (
                    <LoginForm
                        toggleSignup={toggleSignup}
                        handleSignIn={handleSignIn}
                        handleSignInData={handleSignInData}
                        loading={loading}
                    />
                )}
            </AlertDialog>
        </div>
    );
}
