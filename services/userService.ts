import axios from 'axios';

const API_URL = "https://lp-jobmi-ab6b9d72e9ba.herokuapp.com/api";

export const registerUser = async (userData: {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  password: string;
  phone: string;
  googleId?: string; // Rendre googleId facultatif
}) => {
  try {
    // Faire une copie des données utilisateur
    const dataToSend = { ...userData };
    
    // Vérifier si googleId existe et est vide, si oui, le supprimer
    if (dataToSend.googleId === '') {
      delete dataToSend.googleId;
    }

    const response = await axios.post(`${API_URL}/users/register`, dataToSend);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'inscription de l\'utilisateur:', error);
    throw error;
  }
};

export const loginUser = async (userData: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la connexion de l\'utilisateur:', error);
    throw error;
  }
};

export const subscribeToNewsletter = async (email: string) => {
    try {
      await axios.post(`${API_URL}/newsletter/subscribe`, { email });
    } catch (error) {
      console.error('Erreur lors de la souscription à la newsletter:', error);
      throw error;
    }
};

export const getUserData = async (email: string) => {
  try {
    const response = await axios.get(`${API_URL}/users/${email}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
    throw error;
  }
};

export const updateUserData = async (email: string, userData: any) => {
  try {
    const response = await axios.put(`${API_URL}/users/${email}`, userData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour des informations de l\'utilisateur:', error);
    throw error;
  }
};
