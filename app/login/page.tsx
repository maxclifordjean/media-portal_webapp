'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Lock, User } from "lucide-react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import userPool from "../../utils/userPool";
import * as TokenAccess from "../../utils/tokenAccess";
import { useRouter } from 'next/navigation';

interface LoginFormInputs {
  username: string;
  password: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const onSubmit = (data: LoginFormInputs) => {
    const authenticationDetails = new AuthenticationDetails({
      Username: data.username,
      Password: data.password,
    });

    const user = new CognitoUser({
      Username: data.username,
      Pool: userPool.userPool,
    });

    user.authenticateUser(authenticationDetails, {
      onSuccess: async(session) => {
        try {
          //Store token in session
          console.log('auth before set token')
          await TokenAccess.set(session.getIdToken().getJwtToken());
          console.log('auth succeed')
          //Redirect to portal
          //router.push("/apps");
        }catch(e){
          console.error('auth:err',e);
        }
      },
      onFailure: (err) => {
        console.error('err',err);
        setErrorMessage(err.message || "Échec de la connexion");
      },
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side with background image and text */}
      <div className="hidden lg:flex lg:w-2/3 relative bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-center justify-center w-full">
          <div className="max-w-2xl p-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Travailler en toute autonomie
            </h1>
            <p className="text-xl md:text-2xl text-white">
              grâce à notre solution complète de Media IT via un portail unique en self-service.
            </p>
          </div>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="w-full lg:w-1/3 flex flex-col">
        <div className="flex justify-end p-6">
          <div className="inline-flex items-center px-4 py-2 rounded-lg bg-red-600 text-white font-medium">
            Media Portal
          </div>
        </div>

        <div className="flex-grow flex items-center justify-center px-8">
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <div className="relative">
                  <input
                    {...register("username", { required: "username is required" })}
                    type="text"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors peer"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm -top-5 text-sm">
                    Login
                  </label>
                  <User className="absolute right-4 top-3 text-gray-400" size={20} />
                </div>
                {errors.username && (
                  <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
                )}
              </div>

              <div>
                <div className="relative">
                  <input
                    {...register("password", { required: "Password is required" })}
                    type="password"
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors peer"
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm -top-5 text-sm">
                    Mot de passe
                  </label>
                  <Lock className="absolute right-4 top-3 text-gray-400" size={20} />
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-4 rounded-lg transition-colors"
              >
                SE CONNECTER →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}