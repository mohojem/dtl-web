import { z } from "zod";

// Sanitize string input - remove potential XSS vectors
export const sanitizeString = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 10000); // Max length safety
};

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes")
    .transform(sanitizeString),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number")
    .transform(sanitizeString),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email is too long")
    .transform((val) => val.toLowerCase().trim()),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject must be less than 200 characters")
    .transform(sanitizeString),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters")
    .transform(sanitizeString),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Rate limiting helper (client-side indication)
const RATE_LIMIT_KEY = 'dtl_contact_form_submissions';
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_SUBMISSIONS = 3;

interface RateLimitEntry {
  timestamps: number[];
}

export const checkRateLimit = (): { allowed: boolean; remainingTime?: number } => {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();
    
    let entry: RateLimitEntry = { timestamps: [] };
    
    if (stored) {
      entry = JSON.parse(stored);
    }
    
    // Filter out old timestamps
    entry.timestamps = entry.timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);
    
    if (entry.timestamps.length >= MAX_SUBMISSIONS) {
      const oldestTimestamp = Math.min(...entry.timestamps);
      const remainingTime = Math.ceil((RATE_LIMIT_WINDOW - (now - oldestTimestamp)) / 1000);
      return { allowed: false, remainingTime };
    }
    
    return { allowed: true };
  } catch {
    return { allowed: true };
  }
};

export const recordSubmission = (): void => {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();
    
    let entry: RateLimitEntry = { timestamps: [] };
    
    if (stored) {
      entry = JSON.parse(stored);
    }
    
    // Filter out old timestamps and add new one
    entry.timestamps = entry.timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);
    entry.timestamps.push(now);
    
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(entry));
  } catch {
    // Silently fail if localStorage is unavailable
  }
};
