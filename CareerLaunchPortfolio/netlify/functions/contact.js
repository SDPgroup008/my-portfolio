// Netlify Function to handle contact form submissions
const sgMail = require('@sendgrid/mail');

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
    
    // Check if SendGrid API key is set
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    if (!SENDGRID_API_KEY) {
      console.error("SendGrid API key is not set. Please set the SENDGRID_API_KEY environment variable.");
      // Fallback: Return success for testing without actually sending emails
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          message: "Form received (note: email not sent because SendGrid API key is not configured)" 
        }),
      };
    }

    // Set SendGrid API key
    sgMail.setApiKey(SENDGRID_API_KEY);
    
    // Format email message
    const emailContent = `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      
      Message:
      ${message}
    `;
    
    // Configure email data with both primary and alternative email addresses
    const msg = {
      to: ['reinolmartin01@gmail.com', 'reinolmartin001@gmail.com'],
      from: 'noreply@portfolio-website.com', // This should be a verified sender in your SendGrid account
      subject: `Portfolio Contact: ${subject}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a5568;">New Message from Portfolio Contact Form</h2>
          <hr style="border: 1px solid #e2e8f0; margin: 20px 0;">
          
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          
          <div style="background-color: #f7fafc; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
    };
    
    // Send email
    await sgMail.send(msg);
    
    console.log("Email sent successfully to:", msg.to);
    
    // Create auto-responder to let the sender know their message was received
    const autoReply = {
      to: email,
      from: 'noreply@portfolio-website.com',
      subject: 'Thank you for contacting Ssenkungu Reinol Martin',
      text: `
        Dear ${name},
        
        Thank you for reaching out to me through my portfolio website. I have received your message and will get back to you as soon as possible.
        
        Best regards,
        Ssenkungu Reinol Martin
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a5568;">Thank You for Your Message</h2>
          <hr style="border: 1px solid #e2e8f0; margin: 20px 0;">
          
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
          
          <p style="margin-top: 20px;">Best regards,<br>Ssenkungu Reinol Martin</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 0.8em; color: #718096;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    };
    
    // Send auto-reply
    await sgMail.send(autoReply);
    
    // Success response
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: "Your message has been sent successfully. Thank you for reaching out!"
      }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    
    // Error handling
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: "There was an error sending your message. Please try again or contact me directly via email.",
        error: error.toString() 
      }),
    };
  }
};