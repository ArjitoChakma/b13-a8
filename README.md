# 🧱 Tiles Gallery

A beautiful, responsive web application to showcase and explore premium tiles and ceramics collections. Built with modern web technologies for optimal performance and user experience.

## 📋 Project Overview

**Tiles Gallery** is a single-page application designed to display premium tile collections. Users can browse, search, view details of individual tiles, authenticate, and manage their profiles. The application is fully responsive and optimized for mobile, tablet, and desktop devices.

**Live Demo:** [Coming Soon - Deploy to Vercel]

## ✨ Key Features

### 🏠 Home Page
- **Hero Banner**: Eye-catching banner with call-to-action
- **Marquee Section**: Animated scrolling announcements and promotions
- **Featured Tiles**: Showcase of top 4 tiles with quick view options
- **CTA Section**: Call-to-action for shopping

### 🔍 Gallery & Search
- **All Tiles Page**: Complete grid view of all available tiles
- **Search Functionality**: Real-time search by tile title
- **Tile Cards**: Display thumbnail, title, price, and category
- **Details Button**: Quick navigation to detailed tile information

### 🖼️ Tile Details
- **High-Resolution Preview**: Large preview image on the left
- **Complete Information**: Title, price, creator, style, dimensions, material
- **Tags System**: Categorization and style tags
- **Stock Status**: In-stock indicator
- **Quick Actions**: Add to cart and wishlist buttons

### 🔐 Authentication
- **User Login**: Email and password based authentication
- **User Registration**: Sign up with name, email, photo URL, and password
- **Google OAuth**: Quick sign-in/sign-up with Google accounts
- **Form Validation**: Real-time error messages and validation
- **Toast Notifications**: User feedback for actions

### 👤 User Profile
- **Profile Page**: Display user information and statistics
- **Update Profile**: Edit name and profile photo
- **Account Stats**: Display orders, wishlist items, and reviews
- **Account Actions**: Quick access to orders, wishlist, password change, and logout

### 🎨 Design & Responsiveness
- **Fully Responsive**: Mobile-first design for all screen sizes
- **Modern UI**: Gradient backgrounds, smooth animations
- **Dark Mode Ready**: DaisyUI theme support
- **Accessible**: WCAG compliant components

### ⚡ Additional Features
- **Loading States**: Skeleton loaders for data fetching
- **404 Error Page**: Custom not-found page with navigation
- **Environment Variables**: Secure configuration management
- **Smooth Animations**: Enhanced user experience with CSS animations

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **UI Components**: [DaisyUI 4](https://daisyui.com/)
- **Animations**: [Swiper JS 11](https://swiperjs.com/)

### Backend & Packages
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Database Ready**: [MongoDB](https://www.mongodb.com/)
- **Icons**: Unicode emojis for lightweight icons

### Development Tools
- **Version Control**: Git
- **Linting**: ESLint
- **Code Formatting**: TypeScript support
- **Build Tool**: Next.js built-in bundler

## 📦 Installation & Setup

### Prerequisites
- Node.js 16.x or higher
- npm or yarn
- Git

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/tiles-gallery.git
cd tiles-gallery
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
Copy `.env.example` to `.env.local` and update with your credentials:
```bash
cp .env.example .env.local
```

Update the following variables:
```env
# Database
NEXT_PUBLIC_MONGODB_URI=your_mongodb_connection_string

# BetterAuth
BETTER_AUTH_SECRET=your_secure_secret_key
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# API
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# JSON Server
NEXT_PUBLIC_JSON_SERVER_URL=http://localhost:3001
```

### Step 4: Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will auto-reload on changes.

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
The easiest way to deploy is via [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel automatically detects Next.js and optimizes the build
4. Your site is live!

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## 📁 Project Structure

```
tiles-gallery/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Header and Footer
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── not-found.tsx      # 404 error page
│   ├── all-tiles/         # Gallery page
│   │   └── page.tsx
│   ├── tile/              # Tile details page
│   │   └── [id]/
│   │       └── page.tsx
│   ├── login/             # Login page
│   │   └── page.tsx
│   ├── register/          # Register page
│   │   └── page.tsx
│   └── my-profile/        # User profile page
│       └── page.tsx
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer with links
│   ├── Loading.tsx        # Loading skeleton
│   ├── Marquee.tsx        # Scrolling announcements
│   └── FeaturedTiles.tsx  # Featured tiles grid
├── public/                # Static assets
│   └── images/           # Image gallery
├── lib/                   # Utility functions
│   ├── auth.ts           # Authentication logic
│   ├── api.ts            # API calls
│   └── utils.ts          # Helper functions
├── .env.example           # Environment variables template
├── .env.local            # Local environment variables (git ignored)
├── package.json           # Dependencies
├── tsconfig.json         # TypeScript config
├── tailwind.config.js    # Tailwind CSS config
├── postcss.config.js     # PostCSS config
├── next.config.js        # Next.js config
└── README.md             # This file
```

## 🔑 Route Structure

### Public Routes
- `/` - Home page
- `/all-tiles` - Tile gallery with search
- `/login` - User login page
- `/register` - User registration page

### Protected Routes (Require Authentication)
- `/tile/[id]` - Tile details page
- `/my-profile` - User profile page

## 📊 Sample Tile Data Format

The application uses the following JSON format for tile data:

```json
{
  "id": "tile_001",
  "title": "Ceramic Blue Tile",
  "description": "Premium ceramic tile with blue glaze finish",
  "image": "/images/tiles/tile_001.jpg",
  "category": "ceramic",
  "price": 45.99,
  "currency": "USD",
  "dimensions": "60x60 cm",
  "material": "Ceramic",
  "inStock": true,
  "creator": "Artistic Tiles Co.",
  "tags": ["Minimalist", "Blue", "Premium"]
}
```

## 🔄 Git History

The project includes meaningful commits for each feature:

1. ✅ Initial project setup with Next.js configuration
2. ✅ Core layout and global styles
3. ✅ Navigation components (Header, Footer)
4. ✅ Home page components
5. ✅ All Tiles gallery page
6. ✅ Authentication pages (Login, Register)
7. ✅ Tile details and profile pages
8. ✅ Error handling (404 page)
9. ✅ Responsive design enhancements
10. ✅ Documentation and README

## 🎨 Customization

### Changing Colors
Edit `app/globals.css` to customize the color scheme:
```css
:root {
  --primary: #6366f1;
  --secondary: #ec4899;
  --accent: #f59e0b;
}
```

### Modifying DaisyUI Theme
Update `tailwind.config.js`:
```js
daisyui: {
  themes: ["light", "dark", "cupcake", "bumblebee"],
}
```

### Adding New Pages
Create new directories in the `app/` folder following Next.js conventions:
```bash
mkdir -p app/new-page
touch app/new-page/page.tsx
```

## 🚢 Deployment

### Deployment Requirements for Single Page Applications
- **SPA Configuration**: The application is configured to work as a single page application
- **Route Reloading**: All routes properly handle page reloads without throwing errors
- **Vercel Deployment**: Ready for deployment with zero-config support
- **Environment Setup**: Ensure all environment variables are configured

### Deployment Checklist
- [ ] Update environment variables
- [ ] Test all routes work on reload
- [ ] Test responsive design on mobile
- [ ] Test authentication flows
- [ ] Verify 404 page displays correctly
- [ ] Test API endpoints
- [ ] Optimize images and assets

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 📞 Support

For issues, questions, or feedback:
- Open an issue on GitHub
- Email: support@tilesgallery.com
- Visit: https://tilesgallery.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [DaisyUI](https://daisyui.com/) - Tailwind component library
- [Unsplash](https://unsplash.com/) - Free images

---

Made with ❤️ by the Tiles Gallery Team
