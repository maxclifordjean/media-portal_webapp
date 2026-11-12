'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AlertCircle, Loader } from 'lucide-react';

const LOGIN_APP_URL = 'http://localhost:8080'; // auth_webapp URL

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if token exists in cookies
    const checkAuth = () => {
      const cookies = document.cookie;
      const hasAuthToken = cookies.includes('smedia_auth_token');

      if (hasAuthToken) {
        // Token found, redirect to home
        console.log('[LoginPage] Auth token found, redirecting to home');
        router.push('/');
      } else {
        // No token, redirect to auth_webapp
        console.log('[LoginPage] No auth token, redirecting to auth app');
        window.location.href = LOGIN_APP_URL;
      }
    };

    const timer = setTimeout(checkAuth, 500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8f1724] to-[#5a0f15] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#f3c928]">
            <Loader className="h-8 w-8 animate-spin text-[#8f1724]" />
          </div>

          <h1 className="text-2xl font-black text-[#181716]">
            Authentification
          </h1>

          <p className="mt-4 text-gray-600">
            Vous êtes en cours de redirection vers l'authentification...
          </p>

          <div className="mt-8 w-full rounded-lg bg-blue-50 border border-blue-200 p-4">
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-700">
                <p className="font-semibold">Besoin de vous connecter</p>
                <p className="mt-1">
                  Si la redirection ne fonctionne pas,{' '}
                  <a
                    href={LOGIN_APP_URL}
                    className="font-semibold underline hover:text-blue-900"
                  >
                    cliquez ici
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-xs text-gray-500">
            Redirigé depuis: {LOGIN_APP_URL}
          </div>
        </div>
      </div>
    </div>
  );
}
