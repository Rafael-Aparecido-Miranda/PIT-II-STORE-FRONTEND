import axios from 'axios';

const API_URL = 'http://localhost:3333/api/v1/accounts/';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}login`, { email, password });
    return response.data.token; // Retorna o token
  } catch (error) {
    // Lida com erros de autenticação
    if (error.response && error.response.status === 401) {
      throw new Error('Email ou senha incorretos.');
    }
    throw new Error('Erro ao tentar fazer login. Tente novamente mais tarde.');
  }
};

export const register = async (name, username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}create`, { name, username, email, password });
    return response.data; // Retorna os dados da resposta, se necessário
  } catch (error) {
    // Lida com erros de registro
    if (error.response && error.response.status === 400) {
      throw new Error('Dados inválidos. Verifique suas informações.');
    }
    throw new Error('Erro ao tentar registrar. Tente novamente mais tarde.');
  }
};

export const logout = () => {
  localStorage.removeItem('token'); // Remove o token do localStorage
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token'); // Verifica se o token está presente
};