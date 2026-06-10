# JobHub Frontend - Quick Start Guide

## Prerequisites
- Node.js 16+ installed
- npm or yarn package manager
- Terminal/CLI access

## Installation

### 1. Navigate to Frontend Directory
```bash
cd frontend/Job-App2
```

### 2. Install Dependencies
```bash
npm install
```
*Note: Bootstrap and react-bootstrap have been removed in favor of custom CSS for better control and smaller bundle size*

### 3. Setup Environment Variables
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Edit `.env` and add your API URL:
```
VITE_API_URL=http://localhost:5000/api
```

## Running the Application

### Development Mode
```bash
npm run dev
```
The application will start at `http://localhost:5173`

### Production Build
```bash
npm run build
npm run preview
```

## Project Structure Overview

### Key Directories

| Directory | Purpose |
|-----------|---------|
| `src/components/` | Reusable React components |
| `src/pages/` | Page components for each route |
| `src/styles/` | CSS stylesheets organized by component |
| `src/utils/` | Utility functions and validators |
| `src/constants/` | App configuration and route constants |
| `src/services/` | API calls and external services |
| `src/hooks/` | Custom React hooks (for future use) |
| `src/context/` | React Context for state management (for future use) |

## Key Features

### ✨ Modern Design System
- Professional color palette with CSS variables
- Responsive grid-based layouts
- Smooth animations and transitions
- Mobile-first responsive design

### 🎯 Pages Included
- **Home** - Landing page with features
- **Jobs** - Job listings with filters
- **Login** - User authentication
- **Register** - New user signup
- **About** - Company information

### 🔧 Built-in Utilities
- Form validation functions
- Text formatting helpers
- Date/currency formatting
- CSS variable-based theming

## Customization

### Changing Colors
Edit `src/styles/variables.css` to modify the color scheme:
```css
:root {
  --color-primary: #0f3460;  /* Change this */
  --color-secondary: #e94560; /* And this */
  /* ... other colors ... */
}
```

### Adding New Pages
1. Create a new file in `src/pages/`
2. Add route to `src/constants/routes.js`
3. Import and add Route to `src/App.jsx`
4. Create corresponding CSS in `src/styles/`

### Adding Components
1. Create component in `src/components/`
2. Create CSS file in `src/styles/`
3. Export and use in pages

## API Integration

The app is ready for backend integration:

### Backend Configuration
1. Update `VITE_API_URL` in `.env`
2. Create API service in `src/services/api.js`
3. Update form handlers in pages to use API calls

Example:
```javascript
// src/services/api.js
export const loginUser = async (email, password) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};
```

## Debugging

### Browser DevTools
- Use React DevTools browser extension
- Check Console for errors
- Use Network tab to inspect API calls

### Common Issues

**Port 5173 already in use:**
```bash
npm run dev -- --port 3000
```

**CSS not loading:**
- Clear browser cache (Ctrl+Shift+Del)
- Restart dev server

**Import errors:**
- Make sure all imports use correct relative paths
- Check file names are case-sensitive

## Browser Support
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari 12+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips
1. Use browser DevTools Lighthouse for audits
2. Code-split large components with React.lazy()
3. Optimize images before use
4. Use CSS variables for efficient theming

## Deployment

### Building for Production
```bash
npm run build
```
This creates an optimized build in the `dist/` folder.

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
- GitHub Pages
- Netlify
- AWS S3 + CloudFront
- Heroku

## Linting and Quality

### Run ESLint
```bash
npm run lint
```

### Fix Linting Issues
```bash
npm run lint -- --fix
```

## Next Steps

1. **Connect Backend**: Update API endpoints in services
2. **Add Authentication**: Implement JWT token handling
3. **State Management**: Add Redux or Context API for global state
4. **Testing**: Add Jest and React Testing Library
5. **Documentation**: Keep code well-commented
6. **Performance**: Monitor bundle size and load times

## Useful Resources

- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Web Accessibility](https://www.w3.org/WAI/)

## Support

For issues or questions:
1. Check the [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed structure info
2. Review error messages in console
3. Check component props and imports
4. Verify environment variables are set correctly

---

**Last Updated:** 2024
**Version:** 1.0.0
