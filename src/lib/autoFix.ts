/**
 * Utility for automatically retrying failed operations (auto-fix)
 * This helps recover from transient network errors or temporary service unavailability.
 */

export interface AutoFixOptions {
  maxRetries?: number;
  baseDelayMs?: number;
  onRetry?: (error: any, attempt: number) => void;
}

export async function withAutoFix<T>(
  operation: () => Promise<T>,
  options: AutoFixOptions = {}
): Promise<T> {
  const {
    maxRetries = 3,
    baseDelayMs = 1000,
    onRetry = (err, attempt) => console.warn(`[AUTO-FIX] Attempt ${attempt} failed, retrying...`, err)
  } = options;

  let attempt = 0;

  while (true) {
    try {
      return await operation();
    } catch (error) {
      attempt++;
      
      if (attempt > maxRetries) {
        console.error(`[CRITICAL ERROR] Auto-fix failed after ${maxRetries} attempts. Cannot recover.`);
        throw error;
      }

      onRetry(error, attempt);
      
      // Exponential backoff
      const delay = baseDelayMs * Math.pow(2, attempt - 1);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}
