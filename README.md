# 🎭 React Meme Generator

> Create hilarious memes with ease! A modern React application for generating and downloading custom memes.

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## ✨ Features

- 🖼️ **Random Meme Templates** - Access hundreds of popular meme templates from ImgFlip API
- ✏️ **Custom Text** - Add your own top and bottom text to any meme
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices
- 💾 **High-Quality Downloads** - Download your memes as PNG files with transparent backgrounds
- ⚡ **Fast & Modern** - Built with React 19 and Vite for optimal performance
- 🎨 **Professional Styling** - Clean, modern UI with gradient backgrounds
- 🔧 **Configurable** - Easy-to-modify configuration for API settings and download options
- 🛡️ **Error Handling** - Robust error handling with user-friendly messages

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/scottfully/meme-generator-react.git
   cd meme-generator-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to the URL given by vite to see the meme generator in action! 🎉

## 🎮 How to Use

1. **Generate a Random Meme** 📸
   - Click "Get a new meme image 🖼" to load a random meme template

2. **Add Your Text** ✍️
   - Enter your custom text in the "Top Text" and "Bottom Text" fields
   - Text updates in real-time on the meme

3. **Download Your Creation** 💾
   - Click "Download Meme" to save your meme to an image file

## ⚙️ Configuration

The app uses a centralized configuration system located in `config/memeConfig.js`. You can customize various aspects of the application:

### 🔧 API Configuration

```javascript
export const API_CONFIG = {
    memeApiUrl: "https://api.imgflip.com/get_memes"
}
```

### 🖼️ Default Meme Settings

```javascript
export const DEFAULT_MEME = {
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    data: {
        // Default meme template data
    }
}
```

### 📥 Download Configuration

```javascript
export const DOWNLOAD_CONFIG = {
    defaultFilename: "meme",
    fileFormat: "png",
    quality: 0.9,
    canvasOptions: {
        backgroundColor: null,  // Transparent background
        useCORS: true,
        allowTaint: true,
        scale: 2,              // Higher resolution
        logging: false
    }
}
```

### 🛠️ Customization Options

- **Change default text**: Modify `DEFAULT_MEME.topText` and `DEFAULT_MEME.bottomText`
- **Adjust download quality**: Change `DOWNLOAD_CONFIG.quality` (0.1 to 1.0)
- **Modify filename**: Update `DOWNLOAD_CONFIG.defaultFilename`
- **API endpoint**: Replace `API_CONFIG.memeApiUrl` with a different meme API

## 🛠️ Built With

- **[React 19](https://reactjs.org/)** - UI library with latest features
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[html2canvas](https://html2canvas.hertzen.com/)** - Screenshot library for downloads
- **[ImgFlip API](https://imgflip.com/api)** - Meme template provider

## 📜 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm start        # Start development server (alias)
```

## 🎨 Styling

The app uses modern CSS with:
- Flexbox and CSS Grid layouts
- CSS custom properties for theming
- Responsive design principles
- Gradient backgrounds
- Professional typography with Karla font

## 🙏 Acknowledgments

- Adapted from the example Scrimba React course.
  + Added download button
  + Refactored code to use components, config files, default memes and more...
- Thanks to [ImgFlip](https://imgflip.com/) for providing the meme API
- Inspired by the classic meme generator format

Happy coding! 👨‍💻