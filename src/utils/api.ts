const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

interface ApiResponse {
  success: boolean;
  message: string;
  errors?: Array<{
    msg: string;
    param: string;
  }>;
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.errors 
        ? result.errors.map((e: any) => e.msg).join(', ') 
        : result.message || 'Failed to send message'
    );
  }

  return result;
}

export async function subscribeToNewsletter(email: string): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE_URL}/newsletter`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.errors 
        ? result.errors.map((e: any) => e.msg).join(', ') 
        : result.message || 'Failed to subscribe'
    );
  }

  return result;
}