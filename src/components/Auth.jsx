// eslint-disable-next-line no-unused-vars
import React, { use, useState } from "react";
import { supabase } from "../supabase";
import { Loader } from "lucide-react";
import { EyeClosed } from 'lucide-react';
import { Eye } from 'lucide-react';

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [eye, setEye] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    setErrorMsg(false);
    try {
      const { data, error } = await supabase.auth.signUp({
        password,
        email,
      });

      if (error) {
        console.log("Error Logging In", error.message);
        setErrorMsg(error.message);
      } else {
        console.log("Success in logging in", data.session);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error occured", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        password,
        email,
      });
      if (error) {
        console.log("Error logging in", error.message);
      } else {
        console.log("Log in successful", data.session);
      }
    } catch (error) {
      console.log("Error occured", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-[90%]
max-w-md
mx-auto
my-7
min-h-[500px]
shadow-md
shadow-gray-500
p-6
flex
flex-col
gap-2
bg-gray-100
rounded-lg "
    >
      <h1 className="text-center text-xl lg:text-2xl lg:mb-2 font-medium">{isSignedIn ? "Log Into Your Account" : "Sign In To Create A New Account"}</h1>
      <div className="w-full h-auto py-2 flex flex-col gap-1 justify-center">
        <label htmlFor="email" className="text-lg">
          Email:
        </label>
        <input
          type="text"
          id="email"
          placeholder="Enter email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full outline-0 border-0 shadow-sm shadow-gray-500 h-auto p-2 text-lg tracking-wide"
        />
      </div>

      <div className="w-full mb-2 h-auto py-2 flex flex-col gap-1 justify-center">
        <label htmlFor="password" className="text-lg">
          Password:
        </label>
        <div className="flex gap-3 items-center h-auto w-full shadow-sm shadow-gray-600 px-2 bg-blue-100">
        <input
          type={eye ? "text" : "password"}
          id="password"
          placeholder="Enter password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full outline-0 border-0 h-auto p-2 text-lg tracking-wide"
        />
        <button onClick={() => setEye(!eye)}>{eye ? <Eye /> : <EyeClosed />}</button>
        </div>
      </div>

      {isSignedIn ? (
        <button
          type="submit"
          onClick={handleLogin}
          className={`${loading ? "h-9 w-[30%] ml-40" : "w-full h-9  bg-green-500 text-2xl font-medium shadow-lg shadow-gray-500 outline-0 border-0 hover:scale-102 duration-150 transition-all rounded-sm text-white cursor-pointer text-center"}`}
        >
          {loading ? <Loader /> : "Log In"}
        </button>
      ) : (
        <>
          <button
            type="submit"
            onClick={handleSignUp}
            className={`${loading ? "h-9 w-[30%] text-center ml-40" : "w-full h-9  bg-green-500 text-2xl font-medium shadow-lg shadow-gray-500 outline-0 border-0 hover:scale-102 duration-150 transition-all rounded-sm text-white cursor-pointer text-center"}`}
          >
            {loading ? <Loader /> : "Sign In"}
          </button>
          {errorMsg && <p className="text-red text-lg">{errorMsg}</p>}
        </>
      )}

      <p
        onClick={() => setIsSignedIn(!isSignedIn)}
        className="mt-5 text-blue-500 text-sm font-medium text-center cursor-pointer"
      >
        {isSignedIn ? "Create A New Account" : "Already have an account"}
      </p>
    </div>
  );
};

export default Auth;
