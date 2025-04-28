// Netlify Function to handle contact form submissions
exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  try {
    // Parse the JSON body
    const data = JSON.parse(event.body);
    const { name, email, subject, message } = data;
    
    // Validate form inputs
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields" }),
      };
    }
    
    // Here you would typically store the form data or send an email
    // For now, we'll just log it and return success
    console.log("Form submission:", { name, email, subject, message });
    
    // Success response
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: "Form submission received successfully"
      }),
    };
  } catch (error) {
    // Error handling
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server error", error: error.toString() }),
    };
  }
};