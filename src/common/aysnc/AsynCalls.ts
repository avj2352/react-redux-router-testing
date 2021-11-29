import axios from 'axios';

// export const BASE_URL = `http://localhost:5000`;
export const BASE_URL = `https://mashup-video.herokuapp.com`;


// AUTHENTICATION ============================================================

export type IDisplayUser = {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    role: 'admin' | 'free' | 'premium',
    subscriptionType: string
};

/**
 * Google OAuth Link
 * @returns 
 */
export const loginToGoogle = () => window.location.href = `${BASE_URL}/auth/google`;


/**
 * Fetch User Details
 * @param accessToken string
 * @returns 
 */
 export const getUserDetails = async (accessToken: string) => {
    return axios.get(`${BASE_URL}/auth/userinfo`, {
        headers: {
            'AccessToken': accessToken
        }
    });
  };