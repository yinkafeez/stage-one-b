# Testable Profile Card — Stage 1b

## 🚀 Overview

A professional, accessible Profile Card built with semantic HTML5 and modern CSS Grid/Flexbox. This component is designed for automated testing environments using specific `data-testid` attributes.

## ⚙️ Local Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone [Your-Repo-Link-Here]
   ```
2. **Launch the Project:**

- Open index.html in any browser.
- Recommended: Use VS Code's "Live Server" extension for the best experience.

3. **🧪 Automated Testing Details**
   The following data-testid attributes are implemented for stable automated testing:

- test-profile-card: Main container.
- test-user-name: User's full name.
- test-user-time: Current Epoch time in milliseconds (updates every 100ms).
- test-user-avatar: Profile image with descriptive alt text.
- test-user-social-links: Navigation container for social media.
- test-user-hobbies & test-user-dislikes: List containers for personal interests.

4. **♿ Accessibility (A11y)**

- Semantic Tags: Utilizes <article>, <figure>, <nav>, and <section> for a robust document outline.
- Security: Social links include rel="noopener noreferrer" for safe external navigation.
- Contrast: Colors selected meet WCAG AA standards for text readability against dark backgrounds.
- Screen Readers: Time updates are wrapped in an aria-live region, and social icons include aria-label tags.

5. **📱 Responsiveness**

- Mobile (< 768px): Elements stack vertically for a slim, readable profile.
- Desktop (>= 768px): Utilizes a split-view layout with the Avatar/Figure on the left and Info on the right.
