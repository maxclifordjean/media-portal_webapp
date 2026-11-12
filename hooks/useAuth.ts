'use client';

import { useEffect, useState } from 'react';
/**
 * Read a cookie value by name (client-side)
 */
const getCookie = (name: string): string | null => {
  const row = document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${name}=`));
  return row ? decodeURIComponent(row.substring(name.length + 1)) : null;
};

/**
 * Hook to check authentication status
 * Reads cookies set by auth_webapp (same source as middleware).
 */
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      try {
        // Cookies only: localStorage is per-origin and not shared with auth_webapp
        const token = getCookie('smedia_auth_token');
        const expiryStr = getCookie('smedia_token_expiry');
        const expiryTime = expiryStr ? parseInt(expiryStr, 10) : NaN;

        const isValid = !!token && !Number.isNaN(expiryTime) && Date.now() < expiryTime;
        console.log(isValid ? '[useAuth] Token found and valid' : '[useAuth] No valid token');

        setIsAuthenticated(isValid);
        setIsLoading(false);
      } catch (error) {
        console.error('[useAuth] Error checking authentication:', error);
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { isAuthenticated, isLoading };
}
