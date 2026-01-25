# EmailJS Appointment Booking System - Setup Guide

## Overview
This document explains how the EmailJS integration works in the Swasti Lifecare appointment booking system and provides step-by-step instructions for setting up a free EmailJS account.

## Current Implementation Summary

### Architecture
The booking system uses **EmailJS** (client-side email service) to send appointment requests directly from the browser without needing a backend email server. When users submit the booking form, EmailJS sends a formatted email to the clinic.

### Key Components

**1. EmailJS Library** (`lib/emailjs.ts`)
- Initializes EmailJS with public key
- Sends booking emails with formatted template data
- Handles error cases and validation

**2. Booking Form** (`components/booking/BookingForm.tsx`)
- Collects patient information (name, phone, email, date, time, service, doctor, message)
- Validates form fields before submission
- Shows success/error messages to users
- Integrates with EmailJS library

**3. Environment Configuration** (`.env.local`)
- Stores EmailJS credentials securely
- Three required variables:
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

### Email Template Data Sent

When a booking is submitted, the following data is sent to EmailJS:
- **to_name**: "Swasti Lifecare" (used for email body greetings, NOT as recipient address)
- **from_name**: Patient's full name
- **from_phone**: Patient's phone number
- **from_email**: Patient's email address (used as "From Email" field)
- **preferred_date**: Requested appointment date
- **preferred_time**: Requested appointment time
- **service**: Selected service (e.g., "Neurology Consultation", "Laboratory Services")
- **doctor**: Selected doctor or "Any available doctor"
- **message**: Additional message from patient

**Note:** The actual recipient email address must be hardcoded in the EmailJS template, not sent as a variable.

### Supported Services

The system maps service codes to readable labels:
- **general** → Family Clinic & General Practice
- **neurology** → Neurology Consultation
- **orthopaedics** → Orthopaedics Consultation
- **paediatrics** → Paediatrics Consultation
- **pulmonology** → Pulmonology Consultation
- **general-practice** → General Practice Consultation
- **lab** → Laboratory Services
- **neuro-lab** → Neuro Diagnostic Lab (NCS, EEG)
- **physio** → Physiotherapy & Rehabilitation
- **home-care** → Home Care Services

---

## EmailJS Free Account Setup Guide

### Step 1: Create EmailJS Account

1. **Visit EmailJS Website**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Click **"Sign Up Free"** button

2. **Register Your Account**
   - Enter your email address
   - Create a secure password
   - Click "Sign Up"
   - Verify your email address (check inbox/spam)

3. **Login to Dashboard**
   - After verification, login at [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)

**Free Plan Limits:**
- 200 emails per month
- Limited to 2 email templates
- No credit card required
- **Note**: If using auto-reply, each booking sends 2 emails (clinic notification + patient confirmation), so effectively 100 bookings per month on free plan

---

### Step 2: Add Email Service

EmailJS needs to connect to an email provider to send emails on your behalf.

1. **Navigate to Email Services**
   - In the dashboard sidebar, click **"Email Services"**
   - Click **"Add New Service"** button

2. **Choose Email Provider**

   **Option A: Gmail (Recommended for testing)**
   - Click **"Gmail"** service
   - Click **"Connect Account"**
   - Sign in with your Gmail account
   - Grant EmailJS permission to send emails
   - Service will be automatically configured

   **Option B: Other Providers**
   - Outlook/Hotmail
   - Yahoo Mail
   - Custom SMTP (advanced)

3. **Configure Service Settings**
   - **Service Name**: Give it a recognizable name (e.g., "Swasti Lifecare Bookings")
   - **Service ID**: This will be auto-generated (copy this - you'll need it!)
   - Click **"Create Service"**

4. **Save Your Service ID**
   - Copy the **Service ID** (format: `service_xxxxxxxxx`)
   - You'll use this in your `.env.local` file as `NEXT_PUBLIC_EMAILJS_SERVICE_ID`

**Important Notes:**
- For Gmail: You may need to enable "Less secure app access" or use an App Password if 2FA is enabled
- For production: Consider using a dedicated clinic email (e.g., `bookings@swastilifecare.in`)

---

### Step 3: Create Email Template

The template defines how appointment booking emails will look when received.

1. **Navigate to Email Templates**
   - In the dashboard sidebar, click **"Email Templates"**
   - Click **"Create New Template"** button

2. **Configure Template Settings**
   - **Template Name**: "Appointment Booking Request" (or similar)
   - **Template ID**: Auto-generated (copy this!)

3. **Design Email Template**

   **To Email (Recipient):**
   ```
   your-email@example.com
   ```
   (Replace with the actual email address connected to your EmailJS service - the same email you used when setting up the Email Service in Step 2)

   **Important:** This must be an actual email address, NOT a template variable like {{to_name}}. Use the email address you connected to EmailJS in the dashboard.

   **From Email:**
   ```
   {{from_email}}
   ```

   **From Name:**
   ```
   {{from_name}}
   ```

   **Subject Line:**
   ```
   New Appointment Request - {{service}} - {{preferred_date}}
   ```

   **Email Body (HTML or Plain Text):**
   ```html
   <h2>New Appointment Booking Request</h2>

   <h3>Patient Details:</h3>
   <p><strong>Name:</strong> {{from_name}}</p>
   <p><strong>Phone:</strong> {{from_phone}}</p>
   <p><strong>Email:</strong> {{from_email}}</p>

   <h3>Appointment Details:</h3>
   <p><strong>Service:</strong> {{service}}</p>
   <p><strong>Doctor:</strong> {{doctor}}</p>
   <p><strong>Preferred Date:</strong> {{preferred_date}}</p>
   <p><strong>Preferred Time:</strong> {{preferred_time}}</p>

   <h3>Additional Message:</h3>
   <p>{{message}}</p>

   <hr>
   <p><em>This is an automated booking request from the Swasti Lifecare website.</em></p>
   ```

4. **Test Your Template**
   - Click **"Test it"** button
   - Fill in sample values for all variables
   - Send test email to verify formatting
   - Check your email inbox for the test

5. **Save Template**
   - Click **"Save"** button
   - Copy the **Template ID** (format: `template_xxxxxxxxx`)
   - You'll use this in your `.env.local` file as `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

---

### Step 4: Create Auto-Reply Template (Optional but Recommended)

Setting up an auto-reply ensures patients receive immediate confirmation when they submit a booking request.

1. **Navigate to Email Templates**
   - In the dashboard sidebar, click **"Email Templates"**
   - Click **"Create New Template"** button

2. **Configure Auto-Reply Template Settings**
   - **Template Name**: "Appointment Booking - Auto Reply" (or similar)
   - **Template ID**: Auto-generated (you don't need to save this one for the code)

3. **Design Auto-Reply Email Template**

   **To Email (Recipient):**
   ```
   {{from_email}}
   ```
   (This will be the patient's email)

   **From Email:**
   ```
   bookings@swastilifecare.in
   ```
   (Use your clinic's email address)

   **From Name:**
   ```
   Swasti Lifecare
   ```

   **Subject Line:**
   ```
   Appointment Request Received - Swasti Lifecare
   ```

   **Email Body (HTML or Plain Text):**
   ```html
   <h2>Thank You for Your Appointment Request</h2>

   <p>Dear {{from_name}},</p>

   <p>We have received your appointment request for <strong>{{service}}</strong> and will get back to you shortly to confirm your appointment.</p>

   <h3>Your Submitted Details:</h3>
   <p><strong>Service:</strong> {{service}}</p>
   <p><strong>Preferred Doctor:</strong> {{doctor}}</p>
   <p><strong>Preferred Date:</strong> {{preferred_date}}</p>
   <p><strong>Preferred Time:</strong> {{preferred_time}}</p>

   <h3>What Happens Next?</h3>
   <p>Our team will review your request and contact you within 24 hours to confirm your appointment. You will receive a confirmation via:</p>
   <ul>
     <li>Phone call to {{from_phone}}</li>
     <li>Email to {{from_email}}</li>
   </ul>

   <h3>Need Immediate Assistance?</h3>
   <p>If you need urgent medical attention or have questions about your appointment, please contact us:</p>
   <ul>
     <li><strong>Phone:</strong> +91 1234567890</li>
     <li><strong>Email:</strong> bookings@swastilifecare.in</li>
     <li><strong>WhatsApp:</strong> +91 1234567890</li>
   </ul>

   <hr>
   <p><em>This is an automated confirmation email from Swasti Lifecare.</em></p>
   <p><em>Please do not reply to this email. For inquiries, use the contact information above.</em></p>

   <p>Best regards,<br>
   <strong>Swasti Lifecare Team</strong></p>
   ```

4. **Save Auto-Reply Template**
   - Click **"Save"** button
   - This template is now ready to use

5. **Enable Auto-Reply in Main Template**
   - Go back to your **"Appointment Booking Request"** template (created in Step 3)
   - Click **"Edit"** on that template
   - Scroll down to find **"Auto Reply"** section
   - Toggle **"Enable Auto Reply"** to ON
   - Select the auto-reply template you just created from the dropdown
   - Click **"Save"** to update the main template

6. **How Auto-Reply Works**
   - When a patient submits the booking form:
     1. Clinic receives the appointment request email (from Step 3 template)
     2. Patient immediately receives confirmation email (auto-reply template)
   - This happens automatically without any code changes
   - Both emails are counted toward your EmailJS quota

**Benefits of Auto-Reply:**
- Improves patient experience with instant feedback
- Reduces anxiety about whether the booking was successful
- Sets expectations for response time (24 hours)
- Provides contact information if urgent assistance is needed
- Professional and automated communication

---

### Step 5: Get Public Key

EmailJS uses a public key for browser-side authentication.

1. **Navigate to Account Settings**
   - Click your profile icon (top-right)
   - Select **"Account"** from dropdown
   - Or go to **"Integration"** tab in sidebar

2. **Locate Public Key**
   - Look for **"API Keys"** section
   - Find **"Public Key"** (also called "User ID")
   - It will look like: `xxxxxxxxxxxxxx` (alphanumeric string)

3. **Copy Public Key**
   - Copy the entire public key
   - You'll use this in your `.env.local` file as `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

**Security Note:**
- The public key is safe to expose in browser code
- Don't share your private API key (if you have one) in frontend code

---

### Step 6: Configure Environment Variables

Now add your EmailJS credentials to the Next.js project.

1. **Locate Environment File**
   - Open your project folder
   - Find or create `.env.local` file in the root directory
   - (There's also `.env.local.example` as a reference)

2. **Add EmailJS Credentials**

   Open `.env.local` and add:
   ```bash
   # EmailJS Configuration
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
   ```

   Replace the `xxxxxxxxx` values with your actual:
   - Service ID (from Step 2)
   - Template ID (from Step 3)
   - Public Key (from Step 5)

3. **Verify Format**
   - Ensure no extra spaces around the `=` sign
   - Each variable on its own line
   - No quotes needed around the values

4. **Restart Development Server**
   ```bash
   npm run dev
   ```
   - Environment variables are loaded on server start
   - After restart, your booking form will use the new credentials

**Important:**
- `.env.local` should be in your `.gitignore` (don't commit to Git)
- For production deployment (Vercel, Netlify, etc.), add these as environment variables in the hosting platform's dashboard

---

### Step 7: Test the Booking System

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Open Booking Page**
   - Navigate to `http://localhost:3000/booking`
   - The booking form should be visible

3. **Submit Test Appointment**
   - Fill in all required fields:
     - Name: "Test Patient"
     - Phone: "+91 1234567890"
     - Email: Your email address
     - Preferred Date: Tomorrow's date
     - Preferred Time: Select any time slot
     - Service: Select any service
     - Message: "This is a test booking"
   - Click **"Submit Appointment Request"**

4. **Verify Success**
   - You should see a green success message: "Your appointment request has been sent successfully!"
   - Check the clinic's email inbox (the one connected to EmailJS service)
   - You should receive the appointment booking request email with patient details
   - Check the patient's email inbox (the email you used in the test form)
   - You should also receive an auto-reply confirmation email (if you set up Step 4)

5. **Check EmailJS Dashboard**
   - Login to EmailJS dashboard
   - Go to **"Email Log"** section
   - Your test email should appear in the log
   - Verify status is "Sent" (green checkmark)

**Troubleshooting Test Failures:**
- **"Email service is not configured"** → Check environment variables are set correctly
- **Email not received** → Check spam folder, verify email service connection
- **Error 400/403** → Verify Service ID, Template ID, and Public Key are correct
- **Rate limit error** → You've exceeded 200 emails/month on free plan

---

## How the Email Flow Works

### User Journey

1. **Patient visits website**
   - Goes to `/booking` page
   - Sees booking form

2. **Patient fills form**
   - Enters personal details
   - Selects service and doctor
   - Chooses preferred date/time
   - Adds optional message

3. **Form validation**
   - System validates all required fields
   - Checks email format, phone format
   - Ensures date is in future

4. **EmailJS initialization**
   - On page load, `initEmailJS()` is called
   - EmailJS library is initialized with public key

5. **Form submission**
   - User clicks "Submit Appointment Request"
   - `handleSubmit()` function triggers
   - Form data is prepared with template parameters

6. **Email sending**
   - `sendBookingEmail(data)` is called
   - EmailJS sends HTTP request to their API
   - API forwards email to configured service (Gmail, etc.)

7. **Response handling**
   - Success: Green message shown, form resets
   - Error: Red error message shown, form persists

8. **Clinic receives email & Patient gets auto-reply**
   - Email arrives at clinic's inbox with booking details
   - Patient receives auto-reply confirmation email (if configured)
   - Clinic staff reviews request and contacts patient to confirm appointment via phone/email

### Technical Flow

```
Browser (User)
    ↓ [Fills form]
BookingForm Component
    ↓ [Validates data]
lib/emailjs.ts → sendBookingEmail()
    ↓ [Sends to EmailJS API]
EmailJS Service
    ↓ [Forwards to email provider]
Gmail/Outlook/etc
    ↓ [Delivers email]
Clinic Inbox (Swasti Lifecare)
```

---

## Code Implementation Details

### File: `lib/emailjs.ts`

**Key Functions:**

1. **initEmailJS()**
   - Initializes EmailJS library with public key
   - Called once on component mount

2. **sendBookingEmail(data: BookingFormData)**
   - Validates configuration exists
   - Maps service codes to readable labels
   - Prepares template parameters
   - Sends email via EmailJS API
   - Returns success/error response

**Service Label Mapping:**
```typescript
const SERVICE_LABELS: Record<string, string> = {
  'general': 'Family Clinic & General Practice',
  'neurology': 'Neurology Consultation',
  'orthopaedics': 'Orthopaedics Consultation',
  'paediatrics': 'Paediatrics Consultation',
  'pulmonology': 'Pulmonology Consultation',
  'general-practice': 'General Practice Consultation',
  'lab': 'Laboratory Services',
  'neuro-lab': 'Neuro Diagnostic Lab (NCS, EEG)',
  'physio': 'Physiotherapy & Rehabilitation',
  'home-care': 'Home Care Services',
};
```

### File: `components/booking/BookingForm.tsx`

**Key Features:**

1. **Form State Management**
   - Uses React `useState` for form data
   - Tracks submission status and errors
   - Manages loading state during submission

2. **Validation Logic**
   - Name: Required, non-empty
   - Phone: Required, matches pattern `/^[+]?[\d\s-]{10,}$/`
   - Email: Required, matches pattern `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
   - Date: Required, must be future date
   - Time: Required
   - Service: Required

3. **User Feedback**
   - Success message (green): "Your appointment request has been sent successfully! We will contact you shortly."
   - Error messages (red): Specific error details from EmailJS
   - Loading state: Button shows "Submitting..." with disabled state

4. **Form Reset**
   - On successful submission, form clears
   - User can submit another appointment

---

## Production Considerations

### Email Deliverability

1. **Use Professional Email Address**
   - Instead of personal Gmail, use `bookings@swastilifecare.in`
   - Set up custom domain email through Google Workspace, Microsoft 365, or hosting provider
   - This improves trust and professionalism

2. **SPF and DKIM Records**
   - Configure DNS records to improve deliverability
   - Prevents emails from being marked as spam
   - EmailJS provides guidance in their documentation

3. **Monitor Email Limits**
   - Free plan: 200 emails/month
   - If exceeded, upgrade to paid plan ($7-15/month for higher limits)
   - Monitor usage in EmailJS dashboard

### Security Best Practices

1. **Rate Limiting**
   - Consider adding client-side rate limiting (e.g., one submission per 5 minutes per IP)
   - Prevents spam abuse of the form
   - Can be implemented with localStorage or cookies

2. **CAPTCHA Integration**
   - Add reCAPTCHA v3 or hCaptcha to prevent bot submissions
   - Reduces spam and abuse
   - Protects your EmailJS quota

3. **Environment Variables**
   - Never commit `.env.local` to Git
   - Keep `.env.local` in `.gitignore`
   - For production (Vercel/Netlify), add variables in platform dashboard

### Scaling Considerations

1. **Upgrade EmailJS Plan**
   - **Personal Plan** ($7/month): 1,000 emails/month
   - **Professional Plan** ($15/month): 5,000 emails/month
   - **Enterprise**: Custom pricing for higher volumes

2. **Alternative: Backend Email Service**
   - For very high volume, consider moving to server-side solution
   - Options: SendGrid, Mailgun, AWS SES, Nodemailer
   - Requires backend API route in Next.js

3. **Backup Email Method**
   - If EmailJS fails, provide alternate contact method
   - Display phone number and WhatsApp link
   - Show "Email us directly" fallback option

---

## Common Issues and Solutions

### Issue 1: "Email service is not configured"

**Cause:** Environment variables are missing or incorrect

**Solution:**
1. Check `.env.local` file exists in project root
2. Verify all three variables are set:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
3. Restart development server: `npm run dev`
4. Clear browser cache and reload page

### Issue 2: Emails not being received

**Cause:** Email provider connection issue or spam filtering

**Solution:**
1. Check EmailJS dashboard → Email Log for send status
2. If status is "Sent" but not in inbox:
   - Check spam/junk folder
   - Add EmailJS sender to safe senders list
3. If status is "Failed":
   - Reconnect email service in EmailJS dashboard
   - Verify email provider credentials

### Issue 3: Rate limit exceeded

**Cause:** More than 200 emails sent in current month (free plan)

**Solution:**
1. Check EmailJS dashboard for usage statistics
2. Wait until next month for quota reset
3. Or upgrade to paid plan immediately
4. Implement client-side rate limiting to prevent abuse

### Issue 4: Invalid template variables

**Cause:** Template uses variables not provided by the code

**Solution:**
1. Review template in EmailJS dashboard
2. Ensure template variables match the ones sent from code:
   - `{{to_name}}`, `{{from_name}}`, `{{from_phone}}`, etc.
3. Check for typos in variable names (case-sensitive)
4. Test template with "Test it" button in dashboard

### Issue 5: CORS errors in browser console

**Cause:** EmailJS API requests blocked by browser

**Solution:**
1. Ensure you're calling `initEmailJS()` on component mount
2. Verify public key is correct
3. Check browser console for specific CORS error details
4. Ensure EmailJS service is active (not paused/disabled)

### Issue 6: 422 Error - "The recipients address is corrupted"

**Cause:** The EmailJS template has a template variable (like `{{to_name}}`) in the "To Email" field instead of an actual email address.

**Solution:**
1. Go to EmailJS Dashboard → Email Templates
2. Edit your appointment booking template
3. In the "To Email" field, replace any template variables with your actual clinic email:
   - **Wrong:** `{{to_name}}` or `{{from_email}}`
   - **Correct:** The email address you connected to EmailJS (e.g., `your-clinic-email@gmail.com`)
4. Save the template and test
5. The "To Email" field must always be a hardcoded email address - use the same email you connected to EmailJS service

**Why this happens:**
- EmailJS requires a valid email address to know where to send the message
- Template variables like `{{to_name}}` render as names (e.g., "Swasti Lifecare"), not email addresses
- This causes EmailJS to reject the request with a 422 error

---

## Monitoring and Maintenance

### EmailJS Dashboard Monitoring

1. **Email Log**
   - View all sent emails
   - Check delivery status
   - Debug failed sends

2. **Usage Statistics**
   - Track monthly email count
   - Monitor quota consumption
   - Plan upgrades if approaching limit

3. **Service Health**
   - Check email service connection status
   - Reconnect if disconnected
   - Verify provider credentials

### Regular Checks

**Weekly:**
- Review email logs for any failures
- Check spam folder for legitimate bookings that were filtered

**Monthly:**
- Review EmailJS usage statistics
- Ensure quota is sufficient
- Test booking form functionality

**Quarterly:**
- Review and update email template if needed
- Check for EmailJS service updates
- Verify all environment variables in production

---

## Alternative Email Solutions

If EmailJS doesn't meet your needs, consider these alternatives:

### 1. **Formspree** (Similar to EmailJS)
- Free tier: 50 submissions/month
- Easy setup, no backend required
- Form data sent directly to email

### 2. **SendGrid** (Backend Required)
- Free tier: 100 emails/day
- More reliable for production
- Requires Next.js API route

### 3. **Resend** (Modern Alternative)
- Free tier: 100 emails/day
- React email templates
- Requires backend implementation

### 4. **Web3Forms** (Privacy-Focused)
- Free tier: 250 submissions/month
- No account required
- GDPR compliant

### 5. **Nodemailer + Gmail SMTP** (Self-Hosted)
- Completely free
- Requires Next.js API route
- More control but more setup

---

## Summary Checklist

- [ ] Create free EmailJS account at emailjs.com
- [ ] Connect email service (Gmail recommended for testing)
- [ ] Copy Service ID from dashboard
- [ ] Create email template with appointment booking fields
- [ ] Copy Template ID from dashboard
- [ ] Create auto-reply template for patient confirmation
- [ ] Enable auto-reply in main template settings
- [ ] Get Public Key from account settings
- [ ] Add all three values to `.env.local` file
- [ ] Restart development server
- [ ] Test booking form with sample data
- [ ] Verify clinic email received with booking details
- [ ] Verify patient auto-reply email received
- [ ] Check EmailJS dashboard for send confirmation
- [ ] Configure production environment variables (if deploying)
- [ ] Set up monitoring and quota alerts

---

## Resources

- **EmailJS Documentation**: https://www.emailjs.com/docs/
- **EmailJS Dashboard**: https://dashboard.emailjs.com/
- **Gmail App Passwords**: https://support.google.com/accounts/answer/185833
- **Next.js Environment Variables**: https://nextjs.org/docs/basic-features/environment-variables

---

## Contact for Support

If you encounter issues with the EmailJS setup or booking system:
1. Check the Common Issues section above
2. Review EmailJS documentation
3. Check browser console for error messages
4. Verify all environment variables are set correctly
5. Test with a different email provider if Gmail fails
