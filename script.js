/* ============================================
   ANNETTE V. BLUE — PERSONAL WEBSITE
   script.js
   This file controls ALL the interactive
   behavior of the website — the smart form,
   the dynamic messages, and the submission.
   ============================================ */


/* ============================================
   SMART CONTACT FORM MESSAGES

   Think of this like a vending machine:
   - The user picks a reason from the dropdown
   - JavaScript looks up the matching message
   - That message appears below the dropdown
   - It guides them on what to write
   ============================================ */

// This is an "object" — like a lookup table.
// Each KEY (left side) matches a dropdown option value.
// Each VALUE (right side) is the message that appears.
const messages = {
  job:        "💼 Wonderful! Please share the opportunity details and your organization. Annette reviews all career opportunities personally.",
  collab:     "🤝 Exciting! Describe your AI project idea. Collaboration is where innovation begins.",
  speaking:   "🎤 Love it! Include the event name, date, and topic. Annette is passionate about community education.",
  mentorship: "🌱 Thank you for reaching out. Please share your background and what kind of connection would be most meaningful."
};


// This function runs every time someone picks
// a new option from the "Why are you reaching out?" dropdown
function showDynamicMessage() {

  // Step 1: Find out what the user selected
  const val = document.getElementById('freason').value;

  // Step 2: Find the message box element on the page
  const box = document.getElementById('dynamicMsg');

  // Step 3: If they picked something and we have a message for it...
  if (val && messages[val]) {
    box.textContent = messages[val]; // put the message inside the box
    box.style.display = 'block';     // make the box visible
  } else {
    box.style.display = 'none';      // hide the box if nothing selected
  }
}


// This connects the dropdown to the function above.
// When the dropdown changes, showDynamicMessage() runs automatically.
document.getElementById('freason').addEventListener('change', showDynamicMessage);


/* ============================================
   FORM SUBMISSION HANDLER

   When someone clicks "Send Message":
   1. We stop the page from refreshing (default browser behavior)
   2. We hide the form
   3. We show a thank-you confirmation message
   ============================================ */

document.getElementById('contactForm').addEventListener('submit', function(e) {

  // Step 1: Prevent the page from reloading
  e.preventDefault();

  // Step 2: Hide the form
  document.getElementById('contactForm').style.display = 'none';

  // Step 3: Show the success message
  document.getElementById('successMsg').style.display = 'block';

  // 💡 FUTURE UPGRADE TIP:
  // Right now this only shows a thank-you message.
  // To actually SEND the form data to your email,
  // you would connect a service like Formspree or EmailJS here.
  // Ask Claude to help you add that when you're ready!

});