# Circl Web

This is the companion website for Circl, a community resource-sharing mobile app. Instead of just showing static screenshots of the app, I built a lightweight interactive simulator so visitors can click through the mobile interface before they download anything. 

## <u>Tech Stack</u>

- HTML5
- CSS3
- Vanilla JavaScript
- Figma
- Google Fonts

## <u>Features</u>

- **Lightweight App Simulator:** A lightweight clickable phone mockup that lets you explore the app's screens (Feed, Map, Create Request, Chat, Profile).
- **Instant Trilingual Toggle:** Switch the whole site between English, Sinhala, and Tamil without any page reloads.
- **Dynamic Theming:** Light and dark modes that can be switched instantly via a toggle button.
- **Custom Animations:** Smooth scroll reveals, hover effects, and layout transitions.

## <u>Architecture & Development</u>

I started by designing the layout in Figma to match the app's identity (colors, fonts, and vibe). Once the structure was set, I built it using pure HTML and CSS. For the simulator, I used CSS absolute positioning and hidden `div`s to mimic a phone screen. The language switching and theme toggling were handled using custom JavaScript data attributes and CSS variables to keep it fast and lightweight.

## <u>Technical Insights & Challenges</u>

Building this taught me how to translate a mobile app's design language to the web. I improved my implementation of CSS custom properties for theming and learned how to cleanly structure vanilla JavaScript. Handling the trilingual layout required careful typography adjustments to ensure proper font sizing across different languages. 

Overall, this project pushed me to consider performance, localization, and user experience, moving beyond just visual design and marking a significant step up in building interactive, user-focused frontends.

## <u>Future Scope</u>

- Turning the hardcoded simulator data into real, dynamic JSON.
- Adding actual App Store and Google Play links once the app is live.
- Optimizing image assets (like moving to WebP) for even faster load times.
- Adding scroll-jacking or parallax effects to the hero section for a more premium feel.

## <u>Local Setup</u>

Since this is a static site with no backend or build tools, you don't need to install anything. 
To run it locally: Clone this repository or download the ZIP, and simply double-click `index.html` to open it in your browser.

## <u>Video Demo</u>

<video src="https://github.com/AsfaThahani/CirclWeb/raw/main/CirclWebDemo.mp4" controls="controls" width="100%"></video>
