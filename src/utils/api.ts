const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://wondersun-festival-backend.onrender.com';

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
  try {
    console.log('Submitting to:', `${API_BASE_URL}/api/contact`);
    
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log('Response:', result);

    if (!response.ok) {
      if (result.errors) {
        throw new Error(result.errors.map((e: any) => e.msg).join(', '));
      }
      throw new Error(result.message || 'Server returned an error');
    }

    return result;
  } catch (error) {
    console.error('Contact form error details:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      url: `${API_BASE_URL}/api/contact`,
      data
    });
    throw new Error(error instanceof Error ? error.message : 'Failed to send message. Please try again later.');
  }
}

export async function subscribeToNewsletter(email: string): Promise<ApiResponse> {
  try {
    console.log('Subscribing to newsletter:', `${API_BASE_URL}/api/newsletter`);
    
    const response = await fetch(`${API_BASE_URL}/api/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();
    console.log('Newsletter response:', result);

    if (!response.ok) {
      if (result.errors) {
        throw new Error(result.errors.map((e: any) => e.msg).join(', '));
      }
      throw new Error(result.message || 'Server returned an error');
    }

    return result;
  } catch (error) {
    console.error('Newsletter error details:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      url: `${API_BASE_URL}/api/newsletter`,
      email
    });
    throw new Error(error instanceof Error ? error.message : 'Failed to subscribe. Please try again later.');
  }
}