import axios from 'axios';
import { z } from 'zod';
import { getApiUrl } from '../config/env.config';
import { logger } from './logger.service';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;

export class AuthService {
  private static instance: AuthService;
  private token: string | null = null;

  private constructor() {
    this.token = localStorage.getItem('token');
    if (this.token) {
      logger.info('Auth token found in localStorage');
    }
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async login(data: LoginInput) {
    try {
      const validated = loginSchema.parse(data);
      logger.info('Attempting login', { email: validated.email });
      
      const response = await axios.post(getApiUrl('/auth/login'), validated);
      this.setToken(response.data.token);
      
      logger.info('Login successful', { email: validated.email });
      return response.data;
    } catch (error) {
      logger.error('Login failed', error);
      throw error;
    }
  }

  public async register(data: RegisterInput) {
    try {
      const validated = registerSchema.parse(data);
      logger.info('Attempting registration', { email: validated.email });
      
      const response = await axios.post(getApiUrl('/auth/register'), validated);
      this.setToken(response.data.token);
      
      logger.info('Registration successful', { email: validated.email });
      return response.data;
    } catch (error) {
      logger.error('Registration failed', error);
      throw error;
    }
  }

  public async logout() {
    logger.info('Logging out user');
    this.removeToken();
  }

  public async getCurrentUser() {
    try {
      if (!this.token) {
        logger.warn('Attempted to get current user without token');
        throw new Error('No token found');
      }

      const response = await axios.get(getApiUrl('/auth/me'), {
        headers: { Authorization: `Bearer ${this.token}` },
      });
      
      logger.info('Retrieved current user');
      return response.data;
    } catch (error) {
      logger.error('Failed to get current user', error);
      throw error;
    }
  }

  public getToken(): string | null {
    return this.token;
  }

  private setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
    logger.info('Auth token set in localStorage');
  }

  private removeToken() {
    this.token = null;
    localStorage.removeItem('token');
    logger.info('Auth token removed from localStorage');
  }
}
