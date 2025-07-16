import React from "react";
import { Input } from "./ui/input";
import { ButtonLoading } from "./ButtonLoading";
import {
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
export default function LoginForm({
    toggleSignup,
    handleSignInData,
    handleSignIn,
    loading,
}: {
    toggleSignup: () => void;
    handleSignInData: (e: any) => void;
    handleSignIn: () => void;
    loading: boolean;
}) {
    return (
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle className="flex w-full justify-between">
                    <span className="text-2xl ">
                        <span className="text-pri-100">Login</span> to your
                        account
                    </span>
                    <AlertDialogCancel className="p-2" id="close">
                        <X size={20} />
                    </AlertDialogCancel>
                </AlertDialogTitle>
                <div className="flex gap-2 text-gray-400">
                    <span>Dont have an account?</span>
                    <button
                        onClick={toggleSignup}
                        className="hover:text-pri-100 duration-150"
                    >
                        Sign up
                    </button>
                </div>
            </AlertDialogHeader>
            <AlertDialogDescription>
                <div className="flex flex-col gap-3">
                    <Input
                        placeholder="Email"
                        type="email"
                        id="email"
                        onChange={handleSignInData}
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        id="password"
                        onChange={handleSignInData}
                    />
                </div>
                <div className="mt-5">
                    <ButtonLoading
                        isLoading={loading}
                        handleSubmit={handleSignIn}
                        title="Login"
                    />
                </div>
            </AlertDialogDescription>
        </AlertDialogContent>
    );
}
