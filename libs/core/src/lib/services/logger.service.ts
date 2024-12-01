import { config, isDevelopment } from '../config/env.config';

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

class Logger {
  private static instance: Logger;
  private readonly enableLogs: boolean;

  private constructor() {
    this.enableLogs = config.enableLogs;
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private formatMessage(level: LogLevel, message: string, data?: any): string {
    const timestamp = new Date().toISOString();
    const dataString = data ? `\nData: ${JSON.stringify(data, null, 2)}` : '';
    return `[${timestamp}] ${level.toUpperCase()}: ${message}${dataString}`;
  }

  private shouldLog(): boolean {
    return this.enableLogs || isDevelopment;
  }

  public info(message: string, data?: any): void {
    if (this.shouldLog()) {
      console.info(this.formatMessage('info', message, data));
    }
  }

  public warn(message: string, data?: any): void {
    if (this.shouldLog()) {
      console.warn(this.formatMessage('warn', message, data));
    }
  }

  public error(message: string, error?: Error | any): void {
    if (this.shouldLog()) {
      console.error(
        this.formatMessage('error', message, {
          error: error?.message || error,
          stack: error?.stack,
        })
      );
    }
  }

  public debug(message: string, data?: any): void {
    if (isDevelopment && this.shouldLog()) {
      console.debug(this.formatMessage('debug', message, data));
    }
  }
}

export const logger = Logger.getInstance();
