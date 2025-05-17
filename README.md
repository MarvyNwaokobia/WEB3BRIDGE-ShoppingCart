# MarvySmart Shopping Cart

A feature-rich e-commerce shopping cart application built with React and Tailwind CSS. This application provides a seamless shopping experience with a modern UI, persistent cart functionality, and responsive design.

## Features

- 🛍️ **Product Catalog**
  - Beautiful product cards with images
  - Dynamic pricing display
  - Responsive grid layout
  - Featured categories section

- 🛒 **Shopping Cart**
  - Add/remove items
  - Quantity adjustment
  - Persistent cart data using localStorage
  - Real-time price updates
  - Coupon code support

- 🎨 **Modern UI/UX**
  - Clean and intuitive interface
  - Responsive design for all devices
  - Smooth animations and transitions
  - Hero section with call-to-action
  - Modern navigation bar
  - Informative footer

- 🔒 **Features**
  - Input validation
  - Error handling
  - Loading states
  - Fallback images
  - Responsive images

## Tech Stack

- React.js
- Tailwind CSS
- Context API for state management
- LocalStorage for data persistence
- Unsplash for product images

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd marvysmart
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/         # React components
├── context/           # Context providers
├── data/             # Static data
├── pages/            # Page components
└── App.jsx           # Main application component
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Features in Detail

### Product Management
- Display products in a responsive grid
- Product cards with images, names, and prices
- Add to cart functionality
- Quantity management

### Cart Functionality
- Add/remove items
- Update quantities
- Calculate totals
- Apply coupon codes
- Persistent cart data

### UI Components
- Modern navigation bar
- Hero section
- Product grid
- Cart page
- Footer with social links

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Icons from [Heroicons](https://heroicons.com)
- Design inspiration from modern e-commerce platforms
