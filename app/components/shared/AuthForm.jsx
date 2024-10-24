"use client";
import { signIn } from "next-auth/react";

import { IoMdMail, IoMdLock, } from "react-icons/io";
import { FaRegEyeSlash, FaRegEye, FaGoogle, FaUserAlt } from "react-icons/fa";

import TextInput from "./TextInput";
import Link from "next/link";

const AuthForm = ({ type }) => {
  return type === "sign-up" ? (
    <div className="max-w-[480px] flex flex-col gap-4 text-center">
      <h2 className="text-4xl font-bold">Create a tipid. account</h2>
      <h5 className="text-sm text-gray-600">
        Please enter your details to sign up
      </h5>
      <div className="flex-col">
      <TextInput
          label={"Full Name"}
          placeholder={"Please enter your full name"}
          type={"text"}
          iconLeft={<FaUserAlt  />}
        />
        <TextInput
          label={"Email"}
          placeholder={"Please enter your email"}
          type={"email"}
          iconLeft={<IoMdMail />}
        />
        <TextInput
          label={"Password"}
          placeholder={"••••••"}
          type={"password"}
          iconLeft={<IoMdLock />}
          showIcon={<FaRegEyeSlash />}
          hideIcon={<FaRegEye />}
        />
      </div>

      <div className="divider">or</div>
      <button className="btn" onClick={() => signIn("google")}>
        <FaGoogle /> Sign in with Google
      </button>
      <div className="text-sm text-gray-600">
        Already have an account?{" "}
        <Link href={"sign-in"} className="underline">
          Sign In
        </Link>
      </div>
    </div>
  ) : (
    <div className="max-w-[480px] flex flex-col gap-4 text-center">
      <h2 className="text-4xl font-bold">Welcome back to tipid.</h2>
      <h5 className="text-sm text-gray-600">
        Please enter your email and password to sign in
      </h5>
      <div className="flex-col">
        <TextInput
          label={"Email"}
          placeholder={"Please enter your email"}
          type={"email"}
          iconLeft={<IoMdMail />}
        />
        <TextInput
          label={"Password"}
          placeholder={"••••••"}
          type={"password"}
          iconLeft={<IoMdLock />}
          showIcon={<FaRegEyeSlash />}
          hideIcon={<FaRegEye />}
        />
      </div>

      <div className="divider">or</div>
      <button className="btn" onClick={() => signIn("google")}>
        <FaGoogle /> Sign Up with Google
      </button>
      <div className="text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Link href={"sign-up"} className="underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default AuthForm;
