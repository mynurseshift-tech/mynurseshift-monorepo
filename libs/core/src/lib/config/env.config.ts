import { z } from 'zod';

const envSchema = z.object({
  NX_API_URL: z.string().url(),
  NX_ENV: z.enum(['development', 'test', 'production']),
  NX_ENABLE_LOGS: z.string().transform((str) => str === 'true'),
  NX_AUTH_COOKIE_NAME: z.string(),
  NX_AUTH_COOKIE_DOMAIN: z.string(),
});

type EnvConfig = z.infer<typeof envSchema>;

function validateEnv(): EnvConfig {
  const env = {
    NX_API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
    NX_ENV: import.meta.env.VITE_ENV || 'development',
    NX_ENABLE_LOGS: import.meta.env.VITE_ENABLE_LOGS || 'true',
    NX_AUTH_COOKIE_NAME: import.meta.env.VITE_AUTH_COOKIE_NAME || 'mynurseshift_auth',
    NX_AUTH_COOKIE_DOMAIN: import.meta.env.VITE_AUTH_COOKIE_DOMAIN || 'localhost',
  };

  try {
    return envSchema.parse(env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.issues.map((issue) => issue.path.join('.'));
      throw new Error(
        `❌ Invalid environment variables: ${missingVars.join(', ')}`,
      );
    }
    console.error('❌ Invalid environment variables:', error);
    throw new Error('Invalid environment variables');
  }
}

export const env = validateEnv();

export const isDevelopment = env.NX_ENV === 'development';
export const isTest = env.NX_ENV === 'test';
export const isProduction = env.NX_ENV === 'production';

export function getApiUrl(path: string): string {
  const baseUrl = env.NX_API_URL.replace(/\/$/, '');
  const cleanPath = path.replace(/^\//, '');
  return `${baseUrl}/${cleanPath}`;
}

export const config = {
  env: env.NX_ENV,
  apiUrl: env.NX_API_URL,
  enableLogs: env.NX_ENABLE_LOGS,
  auth: {
    cookieName: env.NX_AUTH_COOKIE_NAME,
    cookieDomain: env.NX_AUTH_COOKIE_DOMAIN,
  },
} as const;
