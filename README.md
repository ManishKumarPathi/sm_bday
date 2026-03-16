# Sree's Birthday Website 🎉

A beautiful, modern birthday website created with love for Sree.

## Features

- 🎨 Modern, responsive design
- 🖼️ Image slideshow with 43+ photos
- 📱 Mobile-friendly and touch-enabled
- ⌨️ Keyboard navigation (arrow keys)
- 🎯 Smooth animations and transitions
- 🌐 Professional navigation bar with account icon

## How to Host on GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it something like `sree-birthday` or any name you prefer
   - Keep it public (or private if you have GitHub Pro)
   - Don't initialize with README

2. **Upload files**
   - Click "uploading an existing file"
   - Drag and drop all files from the `sree-birthday-site` folder
   - Commit the changes

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click Save
   - Your site will be live at: `https://[your-username].github.io/[repository-name]/`

### Method 2: Using Git Command Line

1. **Initialize and push to GitHub**
   ```bash
   cd sree-birthday-site
   git init
   git add .
   git commit -m "Initial commit: Birthday website for Sree"
   git branch -M main
   git remote add origin https://github.com/[your-username]/[repository-name].git
   git push -u origin main
   ```

2. **Enable GitHub Pages** (same as Method 1, step 3)

## Local Development

To run locally, simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Then visit: http://localhost:8000
```

## Structure

```
sree-birthday-site/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # Slideshow functionality
├── images/             # All photos (43 images)
└── README.md           # This file
```

## Image Order

- **Slide 1**: Single opening image
- **Slide 2**: 3 specified images in grid
- **Slides 3-9**: Remaining images arranged in grids
- **Slide 10**: 3 closing images as specified

## Customization

To customize the colors, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #ff6b9d;
    --secondary-color: #c44569;
    --accent-color: #ffa94d;
}
```

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

---

Made with ❤️ for Sree's Birthday
