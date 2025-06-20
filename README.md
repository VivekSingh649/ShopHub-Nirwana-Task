## 🛠️ Technologies Used

- **React** - Frontend library for building user interfaces
- **Redux Toolkit** - State management with simplified Redux logic
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Hot Toast** - Toast notifications
- **Lucide React** - Beautiful & consistent icons

## ✨ Features

### Product Management

- Product listing with grid layout
- Product details modal
- Product search functionality
- Category filtering
- Responsive product cards

### Cart Management

- Add to cart functionality
- Cart item quantity management
- Remove items from cart
- Cart total calculation

### User Experience

- Toast notifications for cart actions
- Responsive design
- Smooth animations
- Modal interactions
- Loading states

## 🏗️ Project Structure

```
src/
├── components/
│   ├── CartItem.jsx       # Individual cart item component
│   ├── CartList.jsx       # Cart items list component
│   ├── Header.jsx         # Navigation header
│   ├── ProductCard.jsx    # Product card component
│   └── ProductDetailsModal.jsx  # Product details modal
├── features/
│   ├── cart/             # Cart slice with Redux Toolkit
│   ├── modal/            # Modal slice for product details
│   └── products/         # Products slice for data management
├── pages/
│   ├── Cart.jsx          # Cart page
│   └── Home.jsx          # Home page with product listing
└── App.jsx               # Main application component
```

## 🔄 Redux Features

### Cart Slice

- Add to cart
- Remove from cart
- Update quantity
- Calculate total

### Modal Slice

- Open product details
- Close modal
- Selected product state

### Products Slice

- Product listing
- Search functionality
- Category filtering
- Product state management

## 🎨 UI Components

### Reusable Components

- **ProductCard**: Displays product information with add to cart functionality
- **CartItem**: Manages individual cart items with quantity controls
- **CartList**: Renders the list of cart items
- **ProductDetailsModal**: Shows detailed product information

### Toast Notifications

- Add to cart confirmation
- Remove from cart notification
- Quantity update feedback

## 🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/VivekSingh649/ShopHub-Nirwana-Task.git
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser
