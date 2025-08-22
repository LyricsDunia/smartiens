# GadgetFinder - AI-Powered Electronic Gadget Recommendations

A modern web application that helps users find the perfect electronic gadgets using AI-powered recommendations, smart filtering, and real-time price comparisons.

## Features

- 🤖 AI-powered product recommendations
- 🔍 Smart search with voice input
- 💰 Real-time price comparison across retailers
- 📊 Feature comparison tools
- 🎥 YouTube review integration
- 💬 AI chatbot assistant (GadgetGenie)
- 📱 Responsive design

## Live Demo

Visit the live application: [Your GitHub Pages URL]

## Quick Start

1. **Clone the repository:**
```bash
git clone https://github.com/YOUR_USERNAME/gadget-finder.git
cd gadget-finder
```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server for better experience

3. **Using Live Server (Recommended):**
   - Install Live Server extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"

## Project Structure

```
gadget-finder/
├── index.html              # Main HTML file
├── app.js                  # Main application logic
├── components/             # React components
│   ├── Header.js
│   ├── Hero.js
│   ├── AISearch.js
│   ├── Chatbot.js
│   └── ...
├── utils/                  # Utility functions
│   ├── aiAgent.js
│   ├── priceAPI.js
│   └── ...
├── trickle/               # Project resources
│   ├── assets/
│   ├── notes/
│   └── rules/
└── README.md
```

## Technology Stack

- **Frontend:** React 18, TailwindCSS
- **Icons:** Lucide Icons
- **Charts:** Chart.js
- **Database:** Trickle Database (built-in)
- **AI:** Built-in AI Agent API

## Deployment Options

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select source branch (main/master)
4. Your site will be available at: `https://YOUR_USERNAME.github.io/gadget-finder/`

### Netlify

1. Connect your GitHub repository to Netlify
2. Build settings: Leave empty (static site)
3. Publish directory: `/` (root)

### Vercel

1. Import your GitHub repository to Vercel
2. No build configuration needed
3. Deploy automatically

## Configuration

The application works out of the box with:
- Mock data for demonstration
- AI-powered search and recommendations
- Simulated price comparisons
- YouTube review integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions, please open a GitHub issue.