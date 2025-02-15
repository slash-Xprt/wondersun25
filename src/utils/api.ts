// In development, use the full URL. In production, use Netlify Functions URL
const API_BASE_URL = import.meta.env.DEV 
  ? (import.meta.env.VITE_API_URL || 'http://localhost:8888')
  : '';  // Empty string in production since we use absolute paths

interface ApiResponse {
  success: boolean;
  message: string;
  errors?: Array<{
    msg: string;
    param: string;
  }>;
}

async function handleResponse(response: Response): Promise<ApiResponse> {
  const contentType = response.headers.get('content-type');
  console.log('Response headers:', Object.fromEntries(response.headers.entries()));
  console.log('Response status:', response.status);
  
  if (!contentType || !contentType.includes('application/json')) {
    console.error('Invalid content type:', contentType);
    throw new Error('Server returned an invalid response format');
  }

  try {
    const data = await response.json();
    console.log('Response data:', data);
    if (!response.ok) {
      if (data.errors) {
        throw new Error(data.errors.map((e: any) => e.msg).join(', '));
      }
      throw new Error(data.message || 'Server returned an error');
    }
    return data;
  } catch (error) {
    console.error('Response parsing error:', error);
    if (error instanceof SyntaxError) {
      throw new Error('Server returned invalid JSON data');
    }
    throw error;
  }
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<ApiResponse> {
  try {
    const endpoint = import.meta.env.DEV
      ? `${API_BASE_URL}/api/contact`
      : '/.netlify/functions/api/contact';
    console.log('Submitting to:', endpoint);
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
    });

    return await handleResponse(response);
  } catch (error) {
    console.error('Contact form error details:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      endpoint: import.meta.env.DEV ? `${API_BASE_URL}/api/contact` : '/.netlify/functions/api/contact',
      data
    });
    throw new Error(error instanceof Error ? error.message : 'Failed to send message. Please try again later.');
  }
}

export async function subscribeToNewsletter(email: string): Promise<ApiResponse> {
  try {
    const endpoint = import.meta.env.DEV
      ? `${API_BASE_URL}/api/newsletter`
      : '/.netlify/functions/api/newsletter';
    console.log('Subscribing to newsletter at:', endpoint);
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ email }),
    });

    return await handleResponse(response);
  } catch (error) {
    console.error('Newsletter error details:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      endpoint: import.meta.env.DEV ? `${API_BASE_URL}/api/newsletter` : '/.netlify/functions/api/newsletter',
      email
    });
    throw new Error(error instanceof Error ? error.message : 'Failed to subscribe. Please try again later.');
  }
}