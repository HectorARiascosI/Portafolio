import { NextResponse } from 'next/server';

// Simple in-memory rate limiting (for mock)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 3; // 3 requests per minute

function isRateLimited(clientId) {
  const now = Date.now();
  const requests = rateLimitMap.get(clientId) || [];

  // Remove old requests outside window
  const recentRequests = requests.filter((time) => now - time < RATE_LIMIT_WINDOW);

  if (recentRequests.length >= MAX_REQUESTS) {
    return true;
  }

  // Add current request
  recentRequests.push(now);
  rateLimitMap.set(clientId, recentRequests);

  return false;
}

function validateContactForm(data) {
  const errors = {};

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  if (data.name && data.name.length > 100) {
    errors.name = 'Name must be less than 100 characters';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  if (data.message && data.message.length > 1000) {
    errors.message = 'Message must be less than 1000 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

function sanitizeInput(input) {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 1000); // Enforce max length
}

export async function POST(request) {
  try {
    // Get client IP for rate limiting
    const clientId = request.headers.get('x-forwarded-for') || 'unknown';

    // Check rate limit
    if (isRateLimited(clientId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please try again later.',
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate input
    const validation = validateContactForm(body);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    // Sanitize input
    const sanitizedData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      message: sanitizeInput(body.message),
    };

    // Mock: Log to console (in production, send email)
    console.log('Contact form submission:', sanitizedData);

    // Mock: Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Message received! I'll get back to you soon.",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again.',
      },
      { status: 500 }
    );
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
