# Dhanush Kukatla — Software Engineer Portfolio

A high-performance, interactive 3D personal portfolio built to showcase software engineering experience, technical skills, and featured projects. Designed with an emphasis on premium aesthetics, zero-layout-shift performance, and seamless user interaction.

## ✨ Features

- **Interactive 3D WebGL Background**: A highly optimized `Three.js` particle and node-connection simulation that dynamically scales rendering fidelity between desktop and mobile devices to preserve battery and framerate.
- **Glassmorphism UI**: Custom CSS variables and backdrop filters to create a modern, sleek depth effect across all components.
- **Scroll Reveals & Micro-Animations**: Native `IntersectionObserver` implementations trigger elegant directional fade-ins and text-scramble effects as the user scrolls.
- **3D Interactive Cards**: Hover states use mouse tracking to calculate X/Y axis rotation and dynamic spotlight effects on project and skill cards.
- **Serverless Contact Form**: Direct-to-inbox messaging implemented using the Web3Forms API via seamless AJAX background requests without page reloads.
- **Custom 404 Experience**: Ensures lost traffic is cleanly caught and routed back to the home page with a stylized aesthetic matching the site.

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build/) - Selected for its zero-JS-by-default architecture and blazing fast load times.
- **Styling**: Tailwind CSS integration paired with robust Vanilla CSS architecture for maximal custom styling and animation control.
- **WebGL Engine**: [Three.js](https://threejs.org/)
- **Deployment**: Configured for Vercel edge edge-rendering and static hosting.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dkukatla/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your Web3Forms Access Key:
   ```env
   PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # To launch on your local network for mobile testing:
   # npm run dev -- --host
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

## 📬 Contact Setup
The contact form uses [Web3Forms](https://web3forms.com/) to avoid needing a custom backend. To receive emails from your site, simply generate a free access key from their website and place it in your `.env` and hosting provider's Secrets configuration.

---

*Designed and engineered by Dhanush Kukatla.*
