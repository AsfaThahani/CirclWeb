# Circl Web

This is the companion website for Circl, a community resource-sharing mobile app. Instead of just showing static screenshots of the app, I built a lightweight interactive simulator so visitors can click through the mobile interface before they download anything. 

## <u>🛠️ Tech Stack</u>

* HTML5
* CSS3
* Vanilla JavaScript
* Figma
* Google Fonts

## <u>✨ Features</u>

* 📱 **Lightweight App Simulator:** A lightweight clickable phone mockup that lets you explore the app's screens (Feed, Map, Create Request, Chat, Profile).
* 🌍 **Instant Trilingual Toggle:** Switch the whole site between English, Sinhala, and Tamil without any page reloads.
* 🌗 **Dynamic Theming:** Light and dark modes that can be switched instantly via a toggle button.
* 🎬 **Custom Animations:** Smooth scroll reveals, hover effects, and layout transitions.

## <u>👀 What You Can See on the Website</u>

* A hero section with floating category tags and an animated loading screen.
* A lightweight, clickable simulator showing five different app screens.
* A breakdown of the four app categories (Borrow, Rent, Favour, Task).
* A visual recreation of the "Aura" trust system and badge tiers.
* A working contact form and an FAQ section.

## <u>🧠 The Process</u>

I started by designing the layout in Figma to match the app's identity (colors, fonts, and vibe). Once the structure was set, I built it using pure HTML and CSS. For the simulator, I used CSS absolute positioning and hidden `div`s to mimic a phone screen. The language switching and theme toggling were handled using custom JavaScript data attributes and CSS variables to keep it fast and lightweight.

## <u>📚 What I Learned</u>

Building this taught me how to translate a mobile app's design language to the web. I got much better at using CSS custom properties for theming, and I learned how to structure vanilla JavaScript so it doesn't turn into a mess. Handling the trilingual layout also taught me a lot about typography and how different languages need different font sizing to look right.

## <u>🚀 Overall Growth</u>

This project pushed me to think beyond just "making it look good." I had to consider how the site would perform, how it would feel for users speaking different languages, and how to make the simulator feel like a real app. It was a big step up in building interactive, user-focused frontends.

## <u>🔮 How It Can Be Improved</u>

* Turning the hardcoded simulator data into real, dynamic JSON.
* Adding actual App Store and Google Play links once the app is live.
* Optimizing image assets (like moving to WebP) for even faster load times.
* Adding scroll-jacking or parallax effects to the hero section for a more premium feel.

## <u>💻 Running the Project</u>

Since this is a static site with no backend or build tools, you don't need to install anything. 
To run it locally: Clone this repo or download the ZIP, and simply double-click `index.html` to open it in your browser.
