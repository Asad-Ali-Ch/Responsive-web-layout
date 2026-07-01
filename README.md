**Project 2 - Responsive-Web-Layout**

DecodeLabs Frontend Project 2 Responsive Web Layout | Batch 2026 | Powered by DecodeLabs Project Overview TechPulse is a fully responsive website built as part of DecodeLabs Frontend Project 2. The goal was to build a fluid, device-agnostic web layout using pure HTML, CSS, and JavaScript with no frameworks or libraries. File Structure project2/ index.html - Page structure and content style.css - All styling, layout, and media queries script.js - Interactivity and scroll animations README.md - This file Project 2 Checklist RequirementStatusMeta viewport tagDoneMobile-First Base CSSDoneCSS Grid (Macro layout)DoneFlexbox (Micro/component layout)DoneFluid Units (%, rem, vw, clamp())DoneCSS Media Queries (3 breakpoints)DoneResponsive NavigationDoneHamburger / Popover MenuDoneAccessible Touch Targets (min 44x44px)DoneProper Spacing and AlignmentDoneSeparate HTML, CSS, JS filesDone Tech Stack

HTML5 - Semantic elements, Popover API CSS3 - Custom Properties, Grid, Flexbox, clamp(), Media Queries Vanilla JavaScript - IntersectionObserver, scroll animations, count-up effect

Layout Architecture CSS Grid - Macro (page structure) Flexbox - Micro (components and alignment) The page follows the Grid for the layout, Flexbox for the components principle from the DecodeLabs kit. Breakpoints NameWidthChangesDesktopAbove 900px2-column hero, sidebar layoutTablet900px and belowSingle column hero, sidebar becomes 2-col gridMobile640px and belowHamburger nav, single column layoutSmall Mobile360px and belowSingle column everything Typography All font sizes use clamp() for fluid scaling: cssfont-size: clamp(min, fluid-vw, max); Text scales smoothly across every viewport width with no abrupt jumps. Navigation The mobile hamburger menu uses the native HTML Popover API: htmlMenu

...
No JavaScript required for open/close Built-in backdrop overlay Accessible by default

JavaScript Features FeatureMethodActive nav link on scrollIntersectionObserverStat number count-up animationrequestAnimationFrameScroll-reveal cards (staggered)IntersectionObserverResponsive CTA button toggleresize event listener Accessibility

All buttons and links meet the 44x44px minimum touch target size Zoom is never blocked (user-scalable=no is not used) Semantic HTML with proper aria-label and role attributes Keyboard navigable throughout

How to Run

Download all files into the same folder Open index.html in any modern browser Resize the window to test responsiveness
