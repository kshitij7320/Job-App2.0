# JobHub Frontend - Professional Architecture Guide

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Footer with links
│   └── JobCard.jsx     # Job listing card
├── pages/              # Page components (one per route)
│   ├── Home.jsx        # Landing page
│   ├── Jobs.jsx        # Job listings page
│   ├── Login.jsx       # User login page
│   ├── Register.jsx    # User registration page
│   └── About.jsx       # About company page
├── layouts/            # Layout wrappers (future use)
├── hooks/              # Custom React hooks (future use)
├── context/            # React Context for state management (future use)
├── services/           # API calls and external services
├── utils/              # Utility functions
│   ├── helpers.js      # General helpers (formatting, text utilities)
│   └── validators.js   # Form validation functions
├── constants/          # Application constants
│   ├── routes.js       # Route definitions
│   └── config.js       # App configuration
├── styles/             # Global and component styles
│   ├── global.css      # Global styles and resets
│   ├── variables.css   # CSS variables for colors, spacing, etc.
│   ├── buttons.css     # Button component styles
│   ├── forms.css       # Form input styles
│   ├── header.css      # Header component styles
│   ├── footer.css      # Footer component styles
│   ├── job-card.css    # Job card styles
│   ├── pages.css       # Page-level styles
│   ├── jobs-page.css   # Jobs page specific styles
│   ├── auth-page.css   # Auth pages (login/register) styles
│   └── about-page.css  # About page styles
├── App.jsx             # Main app component with routing
└── main.jsx            # Entry point
```

## 🎨 Design System

### Color Palette

```css
--color-primary: #0f3460;           /* Main blue */
--color-primary-light: #16a085;     /* Accent teal */
--color-primary-dark: #0a1f35;      /* Dark blue */
--color-secondary: #e94560;         /* Red accent */
--color-white: #ffffff;
--color-gray-50 to gray-900:        /* Gray scale */
--color-success: #10b981;           /* Green for success */
--color-warning: #f59e0b;           /* Orange for warning */
--color-error: #ef4444;             /* Red for errors */
--color-info: #3b82f6;              /* Blue for info */
```

### Typography

```css
Font Family: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, etc.)
Sizes: xs (0.75rem) → 5xl (3rem)
Weights: light (300) → bold (700)
Line Heights: tight (1.25) → loose (2)
```

### Spacing System

```css
0px, 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 64px, 80px, 96px
Used for padding, margins, and gaps
```

### Border Radius

```css
sm: 0.25rem, base: 0.375rem, md: 0.5rem, lg: 0.75rem,
xl: 1rem, 2xl: 1.5rem, 3xl: 2rem, full: 9999px
```

### Shadows

```css
xs, sm, base, md, lg, xl
Used for elevation and depth
```

## 📚 Utility Functions

### Helpers (`utils/helpers.js`)
- `cn()` - Class name concatenation
- `formatDate()` - Date formatting
- `formatCurrency()` - Currency formatting
- `truncateText()` - Text truncation
- `scrollToTop()` - Smooth scroll to top
- `debounce()` - Function debouncing
- `getInitials()` - Get name initials

### Validators (`utils/validators.js`)
- `validateEmail()` - Email validation
- `validatePassword()` - Password validation (min 8 chars)
- `validatePhoneNumber()` - Phone number validation
- `validateUrl()` - URL validation

## 🔄 Component Architecture

### Header Component
- Sticky navigation with responsive mobile menu
- Search functionality
- Auth button CTAs (Login/Sign Up)
- Uses `NAV_LINKS` constant for dynamic navigation

### Footer Component
- Multi-column layout with sections
- Social media links
- Copyright and legal links
- Responsive grid layout

### JobCard Component
- Displays job information with logo
- Meta information (location, type)
- Salary display
- Apply button with click handler

### Pages
- **Home**: Hero section + features grid + CTAs
- **Jobs**: Filterable job listings with sidebar filters
- **Login/Register**: Authentication forms with validation
- **About**: Company story + team + values + stats

## 🎯 Features Implemented

### Professional Design
✅ Modern color scheme with primary/secondary colors
✅ Consistent spacing using CSS variables
✅ Smooth transitions and hover effects
✅ Professional typography hierarchy
✅ Responsive grid layouts

### Responsive Design
✅ Mobile-first approach
✅ Breakpoints: 640px, 768px, 1024px, 1280px, 1536px
✅ Flexible containers and grids
✅ Hamburger menu for mobile navigation

### User Experience
✅ Form validation with error messages
✅ Loading states for form submissions
✅ Smooth animations and transitions
✅ Intuitive navigation structure
✅ Accessible markup with proper labels and ARIA

### Code Quality
✅ Organized folder structure
✅ Reusable components
✅ Utility functions for common tasks
✅ CSS variables for consistent theming
✅ Constants for app configuration

## 🚀 Getting Started

### Installation
```bash
cd frontend/Job-App2
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## 📝 Adding New Features

### Adding a New Page
1. Create component in `src/pages/PageName.jsx`
2. Create route constant in `src/constants/routes.js`
3. Add route in `src/App.jsx`
4. Create styles in `src/styles/page-name.css`
5. Import styles in `src/main.jsx`

### Adding a New Component
1. Create component in `src/components/ComponentName.jsx`
2. Create styles in `src/styles/component-name.css`
3. Export from component file
4. Use in pages or other components

### Adding Utility Functions
1. Add to appropriate file in `src/utils/`
2. Export function
3. Import and use where needed

## 🔗 API Integration

To connect the backend:
1. Create API service in `src/services/api.js`
2. Use `API_BASE_URL` constant from `src/constants/config.js`
3. Create fetch/axios wrapper for requests
4. Handle responses and errors
5. Use in pages and components

Example:
```javascript
// src/services/api.js
import { API_BASE_URL } from '../constants/config';

export const fetchJobs = async (filters = {}) => {
  const response = await fetch(`${API_BASE_URL}/jobs`, {
    method: 'GET',
    // Add filters, auth headers, etc.
  });
  return response.json();
};
```

## 🎨 Customizing Theme

To change colors/theme:
1. Edit CSS variables in `src/styles/variables.css`
2. Update color palette globally
3. All components will reflect changes automatically

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Security Notes

- Form validation happens on client-side (add server-side validation)
- API calls should include authentication headers
- Protect sensitive routes with guards
- Use environment variables for API URLs

## 🚦 Next Steps

1. Connect backend API endpoints
2. Implement authentication/JWT tokens
3. Add state management (Redux/Context)
4. Implement job detail pages
5. Add user profile pages
6. Implement job search with advanced filters
7. Add pagination for job listings
8. Implement favorites/saved jobs
9. Add user dashboard
10. Implement application tracking

