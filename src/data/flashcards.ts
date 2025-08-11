import { Flashcard } from '@/types';

export const flashcards: Flashcard[] = [
  // HTML
  {
    id: 'html-1',
    categoryId: 'html',
    question:
      'With the introduction of HTML5 we now have the ability to write semantic HTML. Talk for a moment about your experiences writing semantic HTML. What is it? Where do you see the benefits of using semantics?',
    answer:
      "With the introduction of HTML5, semantic HTML has become a foundational best practice in how I structure web applications. Semantic HTML refers to using elements that convey meaning about the content they wrap — such as <article>, <section>, <header>, <footer>, <main>, <nav>, and so on — rather than relying on generic containers like <div> or <span>.  I've used it to improve accessibility, SEO, and code clarity. It makes content easier to navigate for screen readers, better indexed by search engines, and more maintainable for devs.",
    expanded: '',
    tags: ['html', 'semantic', 'accessibility', 'seo'],
    code: '',
    hint: 'Think of <section>, <article>, <nav>...',
    reference: [
      {
        label: 'MDN Web Docs: Introduction to HTML semantics',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element#semantic_elements',
      },
      {
        label: 'W3Schools: HTML5 Semantic Elements',
        url: 'https://www.w3schools.com/html/html5_semantic_elements.asp',
      },
    ],
  },
  {
    id: 'html-2',
    categoryId: 'html',
    question:
      'Let’s talk about the Web API. What is it, how is it organized, and what can you do with it?',
    answer:
      "The Web API is a collection of browser-provided interfaces that let you interact with the browser and the device. It's organized into modules like DOM, Fetch, Storage, and Events. You can use it to manipulate the page, make network requests, store data, handle user input, and much more.",
    expanded:
      'Web APIs are built into the browser and expose functionality like DOM manipulation, HTTP requests, local storage, media playback, and device access. They are grouped by purpose—e.g., DOM for document interaction, Fetch for HTTP requests, and Storage APIs for client-side persistence.',
    tags: ['api', 'dom', 'browser', 'html'],
    code: '',
    hint: 'Think of fetch(), localStorage, or querySelector.',
    reference: [
      {
        label: 'MDN Web Docs: Web APIs',
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction',
      },
      {
        label: 'W3Schools: Introduction to Web APIs',
        url: 'https://www.w3schools.com/js/js_api_intro.asp',
      },
    ],
  },
  {
    id: 'html-3',
    categoryId: 'html',
    question: 'What does a doctype do?',
    answer:
      'A doctype tells the browser which version of HTML to expect so it can render the page correctly. In HTML5, it ensures the browser uses standards mode instead of quirks mode.',
    expanded:
      'The <!DOCTYPE html> declaration at the top of an HTML file prevents the browser from falling back to old, non-standard rendering behavior (quirks mode). It helps ensure consistent rendering across browsers.',
    tags: ['html', 'doctype', 'html5', 'browser'],
    code: '',
    hint: 'It appears at the top of your HTML file.',
    reference: [
      {
        label: 'MDN Web Docs: <!DOCTYPE>',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/Doctype',
      },
      {
        label: 'W3Schools: Doctype',
        url: 'https://www.w3schools.com/tags/tag_doctype.ASP',
      },
    ],
  },
  {
    id: 'html-4',
    categoryId: 'html',
    question: 'How do you serve a page with content in multiple languages?',
    answer:
      'Use the `lang` attribute in the <html> tag (e.g. <html lang="en">) to set the page’s language, and add `lang` to elements that differ (e.g. <span lang="es">hola</span>). For full multilingual sites, serve different language versions at different URLs.',
    expanded:
      'The `lang` attribute helps screen readers and search engines understand the language. For full language support, sites may use routing or subdomains (e.g. /en/, /fr/, or en.example.com).',
    tags: ['html', 'lang', 'accessibility', 'i18n'],
    code: '',
    hint: 'Start with the <html lang="..."> tag.',
    reference: [
      {
        label: 'MDN Web Docs: The lang attribute',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang',
      },
      {
        label: 'Geeks for Geeks: Multiple Languages',
        url: 'https://www.geeksforgeeks.org/html/how-to-serve-a-page-with-content-in-multiple-languages/',
      },
    ],
  },
  {
    id: 'html-5',
    categoryId: 'html',
    question:
      'What kind of things must you be wary of when designing or developing for multilingual sites?',
    answer:
      'Watch out for text expansion, font and character support, right-to-left (RTL) layouts, date/number formats, and hardcoded strings. Also ensure proper use of the lang attribute and consider locale-based routing.',
    expanded:
      'Different languages can change layout needs: some take more space (e.g. German), others flip direction (e.g. Arabic). Avoid hardcoding content; instead, use translation files and locale-aware components.',
    tags: ['html', 'i18n', 'rtl', 'accessibility', 'localization'],
    code: '',
    hint: 'Think text size, direction, format, and translation.',
    reference: [
      {
        label: 'DEV: Tips for Multiligual Sites',
        url: 'https://dev.to/zibu15/some-tips-for-designing-or-developing-multilingual-sites-2mp4',
      },
      {
        label: 'Get Blend: Multilingual Websites Best PRactices',
        url: 'https://www.getblend.com/blog/common-mistakes-to-avoid-when-building-a-multilingual-website/',
      },
    ],
  },

  {
    id: 'html-6',
    categoryId: 'html',
    question: 'What are data-attributes good for?',
    answer:
      'Data attributes (e.g., data-user-id="123") allow you to store custom data on HTML elements without affecting the layout or behavior. They are useful for attaching metadata that JavaScript can access and manipulate.',
    expanded:
      'Data attributes provide a flexible way to embed extra information on elements. They keep HTML valid while enabling scripts to read/write data easily, often used for dynamic UI behavior or tracking.',
    tags: ['html', 'data-attributes', 'javascript', 'metadata'],
    code: '',
    hint: 'Look for attributes starting with "data-".',
    reference: [
      {
        label: 'MDN Web Docs: Using data attributes',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes',
      },
      {
        label: 'W3Schools: HTML data-* Attribute',
        url: 'https://www.w3schools.com/tags/att_data-.asp',
      },
      {
        label: 'GeeksforGeeks: HTML Data Attributes',
        url: 'https://www.geeksforgeeks.org/html-data-attributes/',
      },
    ],
  },
  {
    id: 'html-7',
    categoryId: 'html',
    question:
      'Consider HTML5 as an open web platform. What are the building blocks of HTML5?',
    answer:
      'The building blocks of HTML5 include semantic elements (like <section>, <article>), multimedia support (audio, video), graphics (Canvas, SVG), APIs (Web Storage, Geolocation), and enhanced form controls.',
    expanded:
      'HTML5 provides new structural tags for better semantics, native media playback, 2D/3D graphics, and JavaScript APIs that enable rich, interactive web apps without plugins.',
    tags: ['html', 'html5', 'web-platform', 'api', 'multimedia'],
    code: '',
    hint: 'Think semantics, media, graphics, and APIs.',
    reference: [
      {
        label: 'MDN Web Docs: Introduction to HTML5',
        url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
      },
      {
        label: 'W3Schools: HTML5 Introduction',
        url: 'https://www.w3schools.com/html/html5_intro.asp',
      },
    ],
  },

  {
    id: 'html-8',
    categoryId: 'html',
    question:
      'Describe the difference between a cookie, sessionStorage, and localStorage.',
    answer:
      'Cookies store small data sent with every HTTP request and can have expiration dates. sessionStorage stores data for one browser tab session and clears when the tab closes. localStorage stores larger data persistently across sessions until explicitly cleared.',
    expanded:
      'Cookies are used for server communication (like auth) but have size limits and security considerations. sessionStorage is temporary and per tab. localStorage persists until cleared and is good for client-side data caching.',
    tags: ['html', 'storage', 'cookie', 'sessionstorage', 'localstorage'],
    code: '',
    hint: 'Think scope, persistence, and size limits.',
    reference: [
      {
        label: 'MDN Web Docs: Web Storage API',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API',
      },
      {
        label: 'MDN Web Docs: HTTP Cookies',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies',
      },
      {
        label: 'W3Schools: HTML Web Storage',
        url: 'https://www.w3schools.com/html/html5_webstorage.asp',
      },
    ],
  },
  {
    id: 'html-9',
    categoryId: 'html',
    question:
      'Describe the difference between <script>, <script async>, and <script defer>.',
    answer:
      'A plain <script> blocks HTML parsing while it downloads and runs, which can slow page load. <script async> downloads the script without blocking HTML parsing and runs it as soon as it’s ready, which can happen before or after the HTML is parsed. <script defer> also downloads without blocking, but always waits to execute the script until after the entire HTML document is parsed, making it better for scripts that rely on the DOM.',
    expanded:
      'Using async or defer helps improve page performance by not blocking the HTML parser. async is good for independent scripts, while defer is better when scripts need the full DOM ready.',
    tags: ['html', 'script', 'performance', 'async', 'defer'],
    code: '',
    hint: 'Think about how scripts affect HTML parsing and when they run.',
    reference: [
      {
        label: 'Great Frontend: Script async and defer',
        url: 'https://www.greatfrontend.com/questions/quiz/describe-the-difference-between-script-async-and-script-defer',
      },
      {
        label: 'Google Developers: Async vs Defer',
        url: 'https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript',
      },
    ],
  },

  {
    id: 'html-10',
    categoryId: 'html',
    question:
      'Why is it a good idea to put CSS <link>s in the <head> and JS <script>s before </body>?',
    answer:
      'Placing CSS links in the <head> lets the browser start loading styles early, so the page renders styled content faster and avoids a flash of unstyled content. Putting JS scripts before </body> prevents blocking the HTML parsing, so the page structure loads first and scripts run after, improving perceived load time.',
    expanded:
      'CSS is render-blocking, so loading it early helps the browser paint styled pages sooner. Scripts can block rendering, so placing them at the end lets the page load and display before running JavaScript.',
    tags: ['html', 'css', 'javascript', 'performance', 'render-blocking'],
    code: '',
    hint: 'Think about what blocks page rendering and how to optimize load order.',
    reference: [
      {
        label: 'Great Front End: Loading CSS and JS',
        url: 'https://www.greatfrontend.com/questions/quiz/css-link-between-head-and-js-script-just-before-body',
      },
      {
        label: 'MDN: Link reference',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/linkm',
      },
    ],
  },
  {
    id: 'html-11',
    categoryId: 'html',
    question: 'What is progressive rendering?',
    answer:
      'Progressive rendering is a technique where the browser displays content to the user as soon as it’s available, instead of waiting for the whole page to load. This makes the page feel faster and more responsive.',
    expanded:
      'By prioritizing critical content first and loading other resources later, progressive rendering improves user experience, especially on slow connections or large pages.',
    tags: ['html', 'performance', 'rendering', 'progressive'],
    code: '',
    hint: 'Think about showing content early for better perceived speed.',
    reference: [
      {
        label: 'Geeks to Geeks: Progressive Rendering',
        url: 'https://www.geeksforgeeks.org/css/what-is-progressive-rendering/',
      },
      {
        label: 'Medium: The Key to Progressive Rendering',
        url: 'https://medium.com/the-thinkmill/progressive-rendering-the-key-to-faster-web-ebfbbece41a4',
      },
    ],
  },
  {
    id: 'html-12',
    categoryId: 'html',
    question:
      'Why would you use a "loading" attribute in an image tag? Explain the process the browser uses.',
    answer:
      'Using `loading="lazy"` delays loading images until they are about to enter the viewport. This improves page load performance by reducing initial data usage and speeding up time to interactive.',
    expanded:
      'When `loading="lazy"` is set, the browser defers fetching the image until the user scrolls near it. This saves bandwidth and reduces CPU/memory usage for images that may never be seen immediately.',
    tags: ['html', 'performance', 'lazy-loading', 'images'],
    code: '',
    hint: 'Think about delaying image loading to improve speed.',
    reference: [
      {
        label: 'MDN Web Docs: Image loading attribute',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading',
      },
      {
        label: 'Google Developers: Lazy loading images',
        url: 'https://web.dev/lazy-loading-images/',
      },
    ],
  },
  {
    id: 'html-13',
    categoryId: 'html',
    question: 'Have you used different HTML templating languages before?',
    answer:
      'I’ve mainly used React JSX and some Angular templates. Both let you combine HTML and JavaScript logic to build dynamic UIs. While I haven’t used many traditional templating languages like EJS or Handlebars, I’m familiar with the concepts and open to learning more.',
    expanded:
      'JSX and Angular templates enable declarative UI building by mixing markup with code. They help manage complex interfaces efficiently compared to classic templating engines.',
    tags: ['html', 'templating', 'react', 'jsx', 'angular'],
    code: '',
    hint: 'Think about how components mix markup and logic.',
    reference: [
      {
        label: 'W3Schools: Intro to Reach JSX',
        url: 'https://www.w3schools.com/react/react_jsx.asp',
      },
      {
        label: 'Angular Docs: Templates',
        url: 'https://angular.dev/guide/templates',
      },
    ],
  },
  {
    id: 'html-14',
    categoryId: 'html',
    question: 'What is the difference between block-level and inline elements?',
    answer:
      'Block-level elements take up the full width available and start on a new line (e.g., <div>, <section>). Inline elements only take up as much width as needed and flow within the text (e.g., <span>, <a>).',
    expanded:
      'Understanding this helps with layout control. Block elements define structure, while inline elements are typically used for formatting or links inside text.',
    tags: ['html', 'block', 'inline', 'layout'],
    code: '',
    hint: 'Think <div> vs <span>.',
    reference: [
      {
        label: 'MDN: Block-level elements',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements',
      },
      {
        label: 'W3Schools: HTML Elements',
        url: 'https://www.w3schools.com/html/html_blocks.asp',
      },
    ],
  },
  {
    id: 'html-15',
    categoryId: 'html',
    question: 'What is ARIA and when would you use it?',
    answer:
      'ARIA (Accessible Rich Internet Applications) is a set of attributes that improve accessibility for users relying on assistive technologies. It’s used when native HTML elements don’t provide enough semantic meaning.',
    expanded:
      'ARIA can add roles, states, and properties to HTML elements to describe their behavior to screen readers, especially in custom components. It should be used carefully and only when semantic HTML isn’t enough.',
    tags: ['html', 'accessibility', 'aria', 'a11y'],
    code: '',
    hint: 'Think accessibility support for custom UI elements.',
    reference: [
      {
        label: 'MDN Web Docs: ARIA',
        url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA',
      },
      {
        label: 'W3C: WAI-ARIA Overview',
        url: 'https://www.w3.org/WAI/standards-guidelines/aria/',
      },
    ],
  },

  // CSS ------------------------------------------

  {
    id: 'css-1',
    categoryId: 'css',
    question:
      'Please tell me about your strategy for creating responsive designs. What is it, and how do you approach the problem?',
    answer:
      'I use a mobile-first approach—starting with a base layout for small screens and scaling up with media queries. I use flexible layouts with percentage widths, relative units like rem/em, and tools like Flexbox and Grid. I also make sure spacing, typography, and images scale well across breakpoints.',
    code: '',
    hint: 'Think small screen first, then enhance.',
    expanded:
      'Responsive design is about building layouts that work across screen sizes. A mobile-first approach ensures the core experience is optimized for small devices first, then progressively enhanced using media queries for larger screens.',
    tags: [
      'css',
      'responsive design',
      'mobile-first',
      'media queries',
      'flexbox',
      'grid',
    ],
    reference: [
      {
        label: 'MDN Web Docs: Responsive design',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design',
      },
      {
        label: 'Google Developers: Responsive Web Design Basics',
        url: 'https://web.dev/responsive-web-design-basics/',
      },
    ],
  },
  {
    id: 'css-2',
    categoryId: 'css',
    question: 'What are media queries? What are pseudo-selectors?',
    answer:
      'Media queries let you apply styles based on the device’s characteristics, like screen width or orientation. Pseudo-selectors let you style elements in specific states or positions, like when a user hovers or when an element is the first child.',
    code: '',
    hint: 'Think about adapting to screen size and styling specific states or positions.',
    expanded:
      'Media queries are used to create responsive designs by applying styles only when certain conditions are met, such as the width of the screen. Pseudo-selectors target elements in specific contexts, such as when they are being hovered over or when they are the last child in a container. Both tools help make CSS more flexible and interactive.',
    tags: [
      'css',
      'media queries',
      'pseudo selectors',
      'responsive design',
      'selectors',
    ],
    reference: [
      {
        label: 'MDN Web Docs: Using media queries',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries',
      },
      {
        label: 'MDN Web Docs: Pseudo-classes',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes',
      },
      {
        label: 'W3Schools: CSS Media Queries',
        url: 'https://www.w3schools.com/css/css_rwd_mediaqueries.asp',
      },
      {
        label: 'W3Schools: CSS Pseudo-classes',
        url: 'https://www.w3schools.com/css/css_pseudo_classes.asp',
      },
    ],
  },
  {
    id: 'css-3',
    categoryId: 'css',
    question: 'How do you approach organizing your CSS?',
    answer:
      'I organize CSS by grouping it into layers: base styles, layout, components, and utilities. I use a consistent naming convention like BEM or a similar pattern, and aim to keep styles modular and easy to maintain.',
    code: '',
    hint: 'Think layers, consistency, and reusability.',
    expanded:
      'Organizing CSS in logical sections helps keep code readable and maintainable. Starting with resets or base styles, then adding layout and component-specific styles, allows for better scalability. Naming conventions like BEM help reduce confusion and avoid conflicts.',
    tags: ['css', 'organization', 'naming', 'modular', 'bem'],
    reference: [
      {
        label: 'MDN Web Docs: Organizing your CSS',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing',
      },
      {
        label: 'CSS-Tricks: BEM 101',
        url: 'https://css-tricks.com/bem-101/',
      },
    ],
  },
  {
    id: 'css-4',
    categoryId: 'css',
    question: 'What is CSS selector specificity and how does it work?',
    answer:
      'Specificity is how the browser decides which CSS rule to apply when multiple rules target the same element. It’s calculated based on the types of selectors used—inline styles are the most specific, followed by IDs, then classes, then elements.',
    code: '',
    hint: 'Think of it like a scoring system for which rule wins.',
    expanded:
      'Each type of selector has a different weight. Inline styles have the highest specificity, then ID selectors, then classes and attributes, and finally element selectors. When rules conflict, the one with higher specificity overrides the others.',
    tags: ['css', 'specificity', 'selectors', 'cascade'],
    reference: [
      {
        label: 'MDN Web Docs: Specificity',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity',
      },
      {
        label: 'W3Schools: CSS Specificity',
        url: 'https://www.w3schools.com/css/css_specificity.asp',
      },
    ],
  },
  {
    id: 'css-5',
    categoryId: 'css',
    question:
      'What\'s the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?',
    answer:
      'Resetting CSS removes all default styles from browsers to create a blank slate. Normalizing CSS keeps useful defaults and makes styles more consistent across browsers. I usually prefer normalizing because it preserves helpful styles while reducing cross-browser inconsistencies.',
    code: '',
    hint: 'Think blank slate vs consistent baseline.',
    expanded:
      'A reset stylesheet wipes out all default styling, which can be useful for full control but may require more work to rebuild basics. Normalize.css, on the other hand, keeps useful defaults like button styling and makes rendering consistent across browsers without over-stripping styles.',
    tags: ['css', 'reset', 'normalize', 'browser consistency'],
    reference: [
      {
        label: 'Geeks for Geeks: CSS reset and normalize',
        url: 'https://www.geeksforgeeks.org/css/difference-between-reset-vs-normalize-css/',
      },

      {
        label: 'CSS-Tricks: Reset vs Normalize',
        url: 'https://css-tricks.com/reboot-resets-reasoning/',
      },
    ],
  },
  {
    id: 'css-6',
    categoryId: 'css',
    question: 'Describe floats and how they work.',
    answer:
      'Floats allow elements to move to the left or right within their container, so that other content can flow around them. They were originally used for layouts but now are more commonly used for wrapping text around images.',
    code: '',
    hint: 'Think about content wrapping around an element.',
    expanded:
      'When an element is floated, it’s taken out of the normal document flow, which can affect how surrounding elements are positioned. This often requires "clearing" the float to prevent layout issues. Floats were once a common layout tool but are now mostly replaced by Flexbox and Grid.',
    tags: ['css', 'floats', 'layout', 'positioning'],
    reference: [
      {
        label: 'MDN Web Docs: float',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/float',
      },
      {
        label: 'W3Schools: CSS Float',
        url: 'https://www.w3schools.com/css/css_float.asp',
      },
      {
        label: 'CSS-Tricks: All About Floats',
        url: 'https://css-tricks.com/all-about-floats/',
      },
    ],
  },
  {
    id: 'css-7',
    categoryId: 'css',
    question: 'Describe z-index and how stacking context is formed.',
    answer:
      'z-index controls the vertical stacking order of positioned elements. Higher z-index values appear on top of lower ones. A stacking context is created by elements with position and z-index values, or certain CSS properties, which groups elements into separate layers.',
    code: '',
    hint: 'Think about layers and which elements appear in front.',
    expanded:
      'A stacking context is formed when an element has a position value other than static and a z-index value, or due to certain CSS properties like opacity less than 1, transform, or flex containers. Elements inside a stacking context stack relative to each other but do not affect elements outside it.',
    tags: ['css', 'z-index', 'stacking context', 'positioning', 'layout'],
    reference: [
      {
        label: 'MDN Web Docs: z-index',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/z-index',
      },
      {
        label: 'MDN Web Docs: Stacking context',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context',
      },
    ],
  },

  {
    id: 'css-8',
    categoryId: 'css',
    question: 'Describe BFC (Block Formatting Context) and how it works.',
    answer:
      'A Block Formatting Context (BFC) is a part of the visual CSS rendering that isolates elements so their layout and floats do not affect outside elements. It’s triggered by certain properties like overflow, float, or display settings.',
    code: '',
    hint: 'Think of it as an isolated layout container.',
    expanded:
      'When an element creates a BFC, it contains its floated children and prevents margins from collapsing with outside elements. This helps manage layout issues like clearing floats and controlling element boundaries.',
    tags: ['css', 'bfc', 'layout', 'floats', 'formatting'],
    reference: [
      {
        label: 'MDN Web Docs: Block formatting context',
        url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context',
      },
      {
        label: 'Geeks for Geeks: Block Formatting Context',
        url: 'https://www.geeksforgeeks.org/css/what-is-block-formatting-context-in-css/',
      },
    ],
  },
  {
    id: 'css-9',
    categoryId: 'css',
    question:
      'What are the various clearing techniques and which is appropriate for what context?',
    answer:
      'Clearing techniques fix layout issues caused by floated elements. Common methods include using the `clear` property on a sibling element, the clearfix hack using `::after` with `content` and `clear: both`, and setting overflow to hidden or auto on the container.',
    code: '',
    hint: 'Think about preventing container collapse caused by floats.',
    expanded:
      'Using `clear: both` on a block-level element forces it below floated siblings, useful when you want a break. The clearfix method adds a hidden element after floats inside the container to expand its height, ideal for reusable containers. Setting `overflow` to hidden or auto on a container creates a new block formatting context that contains floats but can clip content, so use it carefully.',
    tags: ['css', 'clearing', 'floats', 'clearfix', 'layout'],
    reference: [
      {
        label: 'MDN Web Docs: clear',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/clear',
      },
      {
        label: 'CSS-Tricks: The Clearfix Hack',
        url: 'https://css-tricks.com/snippets/css/clear-fix/',
      },
    ],
  },
  {
    id: 'css-10',
    categoryId: 'css',
    question: 'How would you approach fixing browser-specific styling issues?',
    answer:
      'I usually test my CSS across different browsers early on to catch issues. When problems arise, I inspect styles in dev tools to understand what’s different. Flexbox can sometimes cause inconsistencies, so I often prefer using CSS Grid for more predictable layouts. I also use vendor prefixes or @supports if needed. I also use browser support tables like Can I Use.',
    code: '',
    hint: 'Think testing early and choosing reliable CSS features.',
    expanded:
      'Browser differences often show up in how certain CSS features work, especially Flexbox. Testing early helps avoid surprises. CSS Grid tends to have better cross-browser consistency. Using vendor prefixes and fallback styles can help maintain support where needed.',
    tags: ['css', 'cross-browser', 'debugging', 'flexbox', 'grid'],
    reference: [
      {
        label: 'MDN Web Docs: Supports',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@supports',
      },
      {
        label: 'Can I use - Browser support tables',
        url: 'https://caniuse.com/',
      },
    ],
  },
  {
    id: 'css-11',
    categoryId: 'css',
    question:
      'How do you serve your pages for feature-constrained browsers? What techniques/processes do you use?',
    answer:
      'I use progressive enhancement by building a solid baseline experience with simple, widely supported features first. Then, I layer on advanced CSS or JavaScript for browsers that support them. I also use feature detection tools like Modernizr and provide fallbacks or polyfills when necessary.',
    code: '',
    hint: 'Think progressive enhancement and fallback strategies.',
    expanded:
      'Serving feature-constrained browsers means ensuring core functionality and content are accessible even if advanced features aren’t supported. Progressive enhancement focuses on building up from a simple base, testing features before use, and providing alternatives to maintain usability.',
    tags: ['css', 'progressive enhancement', 'feature detection', 'fallbacks'],
    reference: [
      {
        label: 'MDN Web Docs: Progressive Enhancement',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement',
      },
      {
        label: 'Modernizr',
        url: 'https://modernizr.com/',
      },
    ],
  },
  {
    id: 'css-12',
    categoryId: 'css',
    question:
      'What are the different ways to visually hide content but keep it accessible to screen readers?',
    answer:
      'You can visually hide content using CSS techniques like `clip-path`, `position: absolute` with off-screen positioning, or the popular `.sr-only` class that moves content off-screen but keeps it in the accessibility tree.',
    code: '',
    hint: 'Think hiding visually but keeping for assistive tech.',
    expanded:
      'The key is to remove content from visual flow without removing it from the accessibility tree. Common methods include using `position: absolute` with negative offsets, `clip-path: inset(50%)` or `clip: rect(0 0 0 0)`, and using dedicated screen-reader-only CSS classes that hide content visually but preserve it for screen readers.',
    tags: ['css', 'accessibility', 'screen readers', 'visual hiding'],
    reference: [
      {
        label: 'Great Frontend: Visually Hidden',
        url: 'https://www.greatfrontend.com/questions/quiz/what-are-the-different-ways-to-visually-hide-content-and-make-it-available-only-for-screen-readers',
      },
      {
        label: 'WebAIM: Using CSS to Hide Content',
        url: 'https://webaim.org/techniques/css/invisiblecontent/',
      },
    ],
  },
  {
    id: 'css-13',
    categoryId: 'css',
    question:
      'Have you ever used a grid system, and if so, what do you prefer?',
    answer:
      'Yes, I’ve used both traditional CSS grid frameworks like Bootstrap and modern CSS Grid layout. I prefer CSS Grid because it provides more flexibility and control for creating complex, responsive layouts without relying on external libraries.',
    code: '',
    hint: 'Think native CSS Grid vs frameworks.',
    expanded:
      'While frameworks like Bootstrap offer quick setup with predefined classes, CSS Grid gives full control over layout structure and alignment, making it ideal for custom designs. It also integrates well with Flexbox for one-dimensional layouts.',
    tags: ['css', 'grid', 'css grid', 'frameworks', 'layout'],
    reference: [
      {
        label: 'MDN Web Docs: CSS Grid Layout',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout',
      },
      {
        label: 'Bootstrap Grid System',
        url: 'https://getbootstrap.com/docs/5.3/layout/grid/#example',
      },
    ],
  },
  {
    id: 'css-14',
    categoryId: 'css',
    question:
      'Have you used or implemented media queries or mobile-specific layouts/CSS?',
    answer:
      'Yes, I regularly use media queries to create responsive, mobile-first designs. This includes adjusting layouts, font sizes, and visibility of elements based on screen size to ensure a smooth experience across devices.',
    code: '',
    hint: 'Think adapting design to different screen sizes.',
    expanded:
      'Media queries allow CSS to adapt styles depending on device characteristics like width or resolution. Using them early in development ensures designs work well on mobile devices and scale up for larger screens.',
    tags: ['css', 'media queries', 'responsive design', 'mobile-first'],
    reference: [
      {
        label: 'MDN Web Docs: Using media queries',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries',
      },
      {
        label: 'Google Developers: Responsive Web Design Basics',
        url: 'https://web.dev/responsive-web-design-basics/',
      },
    ],
  },
  {
    id: 'css-15',
    categoryId: 'css',
    question: 'Are you familiar with styling SVG?',
    answer:
      'Yes, I usually import SVGs as React components or inline them when I need to style or animate parts, like on hover. Inline SVG lets me directly target elements with CSS or manipulate them with JavaScript.',
    code: '',
    hint: 'Think React imports and inline SVG for styling control.',
    expanded:
      'Importing SVG as React components allows easy integration and styling via props or CSS. Inline SVG provides full control over shapes and allows dynamic styling and animations using CSS or JS, making it ideal for interactive icons or graphics.',
    tags: ['css', 'svg', 'react', 'inline svg', 'styling'],
    reference: [
      {
        label: 'MDN Web Docs: SVG Styling',
        url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/style',
      },
      {
        label: 'Log Rocket: Loading SVGs in React',
        url: 'https://blog.logrocket.com/guide-svgs-react/',
      },
    ],
  },
  {
    id: 'css-16',
    categoryId: 'css',
    question:
      'Can you give an example of an @media property other than screen?',
    answer:
      'Yes, for example, the `print` media type targets styles when printing a page. You can adjust layout, font size, and colors specifically for print output.',
    code: '',
    hint: 'Think about how pages look when printed.',
    expanded:
      'Media queries can target different media types like screen, print, speech, etc. Using `@media print` lets you define styles that only apply when a user prints the page, improving print readability and layout.',
    tags: ['css', 'media-queries', 'print', 'responsive-design'],
    reference: [
      {
        label: 'MDN Web Docs: Media Queries',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries',
      },
    ],
  },
  {
    id: 'css-17',
    categoryId: 'css',
    question: 'What are some of the "gotchas" for writing efficient CSS?',
    answer:
      'Common gotchas include using overly specific selectors, deep nesting, redundant rules, and ignoring browser rendering performance. Also, large CSS files without modularity can slow down load times and maintenance.',
    code: '',
    hint: 'Think specificity, redundancy, and performance.',
    expanded:
      'Efficient CSS avoids unnecessarily specific selectors that increase complexity, limits nesting depth for readability, removes duplicate styles, and considers how browsers parse and render styles. Modular CSS and minimizing file size help maintain performance and ease of updates.',
    tags: ['css', 'performance', 'specificity', 'modularity', 'best-practices'],
    reference: [
      {
        label: 'MDN: Writing Efficient CSS',
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/CSS',
      },
      {
        label: 'W3Schools: Performance tips',
        url: 'https://www.w3schools.com/css/css_performance.asp',
      },
    ],
  },
  {
    id: 'css-18',
    categoryId: 'css',
    question:
      'What are the advantages and disadvantages of using CSS preprocessors? Describe what you like and dislike about the CSS preprocessors you have used.',
    answer:
      'I’ve used Sass with SCSS syntax. I like that it gives you variables, nesting, mixins, and functions—it makes organizing styles much easier and keeps code DRY. The downside is adding a build step and that debugging compiled CSS can sometimes be less straightforward. I know of Less but haven’t worked with it directly.',
    code: '',
    hint: 'Think convenience vs extra complexity.',
    expanded:
      'Sass (especially SCSS syntax) is still widely used and adds many features that help manage larger stylesheets. It improves maintainability but adds tooling complexity. As native CSS adds similar features, the need for preprocessors is shrinking, but they’re still helpful in many cases.',
    tags: ['css', 'sass', 'scss', 'preprocessors', 'less'],
    reference: [
      {
        label: 'MDN Web Docs: CSS Preprocessors',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor',
      },
      {
        label: 'W3Schools: Sass Basics',
        url: 'https://www.w3schools.com/sass/sass_intro.asp',
      },
    ],
  },
  {
    id: 'css-19',
    categoryId: 'css',
    question:
      'How would you implement a web design comp that uses non-standard fonts?',
    answer:
      'I’d load the custom fonts using `@font-face` if I have the files, or through a service like Google Fonts. I use `font-family` in CSS with proper fallbacks, and I often preload key fonts in the <head> to improve performance and reduce layout shifts.',
    code: '',
    hint: 'Think about loading, fallback fonts, and performance.',
    expanded:
      'Non-standard fonts aren’t guaranteed to be available on a user’s system, so they must be loaded from a server. `@font-face` lets you define font sources locally or via CDN. Always include fallback fonts to maintain legibility and test for performance impact, especially on mobile networks.',
    tags: ['css', 'fonts', 'typography', 'web-fonts', '@font-face'],
    reference: [
      {
        label: 'MDN Web Docs: @font-face',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face',
      },
      {
        label: 'Google Fonts: Getting Started',
        url: 'https://fonts.google.com/knowledge/getting_started',
      },
    ],
  },
  {
    id: 'css-20',
    categoryId: 'css',
    question:
      'Explain how a browser determines what elements match a CSS selector.',
    answer:
      'The browser parses the CSS and then matches selectors against elements in the DOM, usually right to left—from the most specific part of the selector back to its ancestors.',
    code: '',
    hint: 'Think about how the DOM is matched by selectors.',
    expanded:
      'Browsers optimize selector matching by starting from the rightmost part of a selector (the key element) and working backward through the DOM tree. For example, in `article h2 span`, the browser first finds all `span` elements, then checks if they’re inside an `h2` inside an `article`. This is why overly complex or inefficient selectors can hurt performance.',
    tags: ['css', 'selectors', 'dom', 'rendering', 'performance'],
    reference: [
      {
        label: 'MDN Web Docs: CSS Selectors',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors',
      },
      {
        label: 'Geeks for Geeks: Determining CSS Selector',
        url: 'https://www.geeksforgeeks.org/css/how-does-a-browser-determine-what-elements-match-a-css-selector/',
      },
    ],
  },
  {
    id: 'css-21',
    categoryId: 'css',
    question:
      'Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.',
    answer:
      'The box model describes how elements are rendered as rectangular boxes made up of content, padding, border, and margin. By default, width and height only apply to the content area. To change this, I use `box-sizing: border-box` so padding and border are included inside the declared width and height.',
    code: '',
    hint: 'Think content + padding + border + margin.',
    expanded:
      'In the standard (content-box) model, padding and border are added to the content width, which can affect layout size unexpectedly. Setting `box-sizing: border-box` tells the browser to include padding and border inside the set width/height, which helps with predictable sizing and layout control.',
    tags: ['css', 'box model', 'layout', 'box-sizing'],
    reference: [
      {
        label: 'MDN Web Docs: Box Model',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model',
      },
      {
        label: 'CSS-Tricks: Box-Sizing',
        url: 'https://css-tricks.com/box-sizing/',
      },
    ],
  },
  {
    id: 'css-22',
    categoryId: 'css',
    question:
      'What does * { box-sizing: border-box; } do? What are its advantages?',
    answer:
      'It tells the browser to include padding and border within an element’s total width and height. This makes sizing more predictable and easier to manage when building layouts.',
    code: '',
    hint: 'Think about how width and padding interact.',
    expanded:
      'By default, browsers use `box-sizing: content-box`, which does not include padding or border in the element’s width. Setting `box-sizing: border-box` globally means when you set a width, it includes content, padding, and border—avoiding layout overflow issues and simplifying calculations.',
    tags: ['css', 'box-model', 'layout', 'border-box'],
    reference: [
      {
        label: 'MDN Web Docs: box-sizing',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing',
      },
      {
        label: 'CSS-Tricks: Box-Sizing',
        url: 'https://css-tricks.com/box-sizing/',
      },
    ],
  },
  {
    id: 'css-23',
    categoryId: 'css',
    question:
      'What is the CSS display property and can you give a few examples of its use?',
    answer:
      'The display property controls how an element is displayed on the page, determining its box type and layout behavior. Examples include `block`, `inline`, `inline-block`, `flex`, and `grid`.',
    code: '',
    hint: 'Think block vs inline vs flex vs grid.',
    expanded:
      'Display sets whether an element generates a block box, inline box, flex container, grid container, or is hidden (`none`). For example, `display: block` makes the element take full width and start on a new line, while `inline` keeps it within a line. `flex` and `grid` enable advanced layout techniques.',
    tags: ['css', 'display', 'layout', 'flexbox', 'grid'],
    reference: [
      {
        label: 'MDN Web Docs: display',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/display',
      },
      {
        label: 'CSS-Tricks: The display property',
        url: 'https://css-tricks.com/almanac/properties/d/display/',
      },
    ],
  },
  {
    id: 'css-24',
    categoryId: 'css',
    question: "What's the difference between inline and inline-block?",
    answer:
      'Inline elements flow within text and cannot have width or height set, while inline-block elements also flow inline but can have width, height, padding, and margins.',
    code: '',
    hint: 'Think text flow and box sizing.',
    expanded:
      'Inline elements like `<span>` don’t accept width or height, and their box is only as big as their content. Inline-block elements behave like inline elements in flow but act like blocks in allowing box model properties like width, height, and vertical margins.',
    tags: ['css', 'display', 'inline', 'inline-block', 'layout'],
    reference: [
      {
        label: 'MDN Web Docs: display',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/display',
      },
      {
        label: 'W3Schools: Inline vs Inline-Block',
        url: 'https://www.w3schools.com/css/css_inline-block.asp',
      },
    ],
  },
  {
    id: 'css-25',
    categoryId: 'css',
    question:
      "What's the difference between the nth-of-type() and nth-child() selectors?",
    answer:
      '`nth-child()` selects the nth child element regardless of type, while `nth-of-type()` selects the nth child of its type among siblings.',
    code: '',
    hint: 'Think element position vs element type position.',
    expanded:
      '`nth-child(n)` matches the nth child of its parent counting all types of elements. `nth-of-type(n)` counts only siblings of the same element type, so it’s more specific when you want to target elements by their type position.',
    tags: ['css', 'selectors', 'nth-child', 'nth-of-type'],
    reference: [
      {
        label: 'MDN Web Docs: :nth-child()',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child',
      },
      {
        label: 'MDN Web Docs: :nth-of-type()',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type',
      },
    ],
  },
  {
    id: 'css-26',
    categoryId: 'css',
    question:
      'What is the difference between relative, fixed, absolute, and statically positioned elements?',
    answer:
      'Static is the default positioning where elements follow normal document flow. Relative moves the element relative to its normal position without affecting others. Absolute positions the element relative to the nearest positioned ancestor, removing it from normal flow. Fixed positions the element relative to the viewport, staying put on scroll.',
    code: '',
    hint: 'Think document flow and reference points.',
    expanded:
      'Static elements are placed in normal flow with no offset. Relative elements shift relative to their original spot but keep space in the layout. Absolute elements are removed from the flow and positioned relative to the closest ancestor that has a position other than static. Fixed elements stay fixed relative to the viewport, unaffected by scrolling.',
    tags: [
      'css',
      'position',
      'layout',
      'static',
      'relative',
      'absolute',
      'fixed',
    ],
    reference: [
      {
        label: 'MDN Web Docs: position',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/position',
      },
    ],
  },
  {
    id: 'css-27',
    categoryId: 'css',
    question:
      'What existing CSS frameworks have you used locally or in production? How would you change or improve them?',
    answer:
      'I’ve used Bootstrap and Tailwind CSS in production. I like Bootstrap for quick prototyping but find it heavy and sometimes restrictive. Tailwind offers great utility-first flexibility, but I’d improve it by optimizing bundle size and adding better defaults for accessibility.',
    code: '',
    hint: 'Think Bootstrap, Tailwind, pros and cons.',
    expanded:
      'Bootstrap provides a solid grid and components but can add extra unused CSS, impacting performance. Tailwind’s utility classes offer customization but may require a learning curve and tooling to remove unused styles. Improvements often focus on performance optimization and accessibility enhancements.',
    tags: [
      'css',
      'frameworks',
      'bootstrap',
      'tailwind',
      'performance',
      'accessibility',
    ],
    reference: [
      {
        label: 'Bootstrap Documentation',
        url: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/',
      },
      {
        label: 'Tailwind CSS Documentation',
        url: 'https://tailwindcss.com/docs/installation/using-vite',
      },
    ],
  },

  {
    id: 'css-28',
    categoryId: 'css',
    question: 'Have you used CSS Grid?',
    answer:
      'Yes, I use CSS Grid regularly for creating two-dimensional layouts. It offers precise control over rows and columns, making complex designs easier to build and maintain compared to older layout methods. Its also more accepted across browsers over flex',
    code: '',
    hint: 'Think two-dimensional layout system.',
    expanded:
      'CSS Grid allows defining rows and columns explicitly and placing items anywhere within that grid. It simplifies layout creation that was previously complex with floats or flexbox alone, especially for grid-based and magazine-style designs.',
    tags: ['css', 'grid', 'layout'],
    reference: [
      {
        label: 'MDN Web Docs: CSS Grid',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout',
      },
      {
        label: 'CSS-Tricks: A Complete Guide to Grid',
        url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
      },
    ],
  },
  {
    id: 'css-29',
    categoryId: 'css',
    question:
      'Have you ever worked with retina graphics? If so, when and what techniques did you use?',
    answer:
      'Yes, I have. To support retina displays, I provide higher resolution images, typically at 2x or 3x the normal size, and use `srcset` and `sizes` attributes in `<img>` tags. I also optimize image formats and use SVGs when possible for scalability.',
    code: '',
    hint: 'Think high resolution and responsive images.',
    expanded:
      'Retina or high-density displays require images with more pixels to appear crisp. Using `srcset` allows the browser to select the appropriate image resolution based on device capabilities. SVGs are ideal for graphics because they scale without loss of quality, reducing the need for multiple versions.',
    tags: ['css', 'images', 'retina', 'responsive', 'srcset', 'svg'],
    reference: [
      {
        label: 'MDN Web Docs: Responsive Images',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images',
      },
      {
        label: 'CSS-Tricks: Retina Images',
        url: 'https://css-tricks.com/snippets/css/retina-display-media-query/',
      },
    ],
  },
  {
    id: 'css-30',
    categoryId: 'css',
    question:
      "Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?",
    answer:
      '`translate()` is better when you want smoother animations or to avoid affecting layout, while `position: absolute` is used to place elements precisely within a container. Use `translate()` for movement without triggering reflow, and `absolute` when layout placement is critical.',
    code: '',
    hint: 'Think layout vs performance.',
    expanded:
      '`translate()` works in the transform layer, so it doesn’t trigger layout recalculations, which makes it great for performant animations and transitions. Absolute positioning removes the element from normal flow and places it relative to a positioned ancestor, which is more layout-focused. The choice depends on whether you care more about performance or structural layout.',
    tags: ['css', 'positioning', 'translate', 'absolute', 'performance'],
    reference: [
      {
        label: 'MDN Web Docs: transform',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform',
      },
      {
        label: 'Geeks for Geeks: translate vs absolute',
        url: 'https://www.geeksforgeeks.org/css/explain-the-scenario-to-use-translate-instead-of-absolute-positioning-in-css/',
      },
    ],
  },
  {
    id: 'css-31',
    categoryId: 'css',
    question: 'How is the clearfix CSS property useful?',
    answer:
      'Clearfix is used to clear floated child elements so the parent can properly wrap around them. Without it, the parent’s height may collapse.',
    code: '',
    hint: 'Think float layout issues.',
    expanded:
      'When child elements are floated, their parent may not expand to contain them, leading to layout issues. The clearfix method adds a pseudo-element (`::after`) that clears the float, allowing the parent to correctly calculate its height. It’s commonly used in older float-based layouts or when mixing floated elements in modern code.',
    tags: ['css', 'clearfix', 'float', 'layout'],
    reference: [
      {
        label: 'CSS-Tricks: Clearfix',
        url: 'https://css-tricks.com/snippets/css/clear-fix/',
      },
      {
        label: 'MDN Web Docs: Clearing floats',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/clear',
      },
    ],
  },

  // Javascript ---------------------------------------

  {
    id: 'js-1',
    categoryId: 'javascript',
    question: 'Explain event delegation.',
    answer:
      'Event delegation is when you attach a single event listener to a parent element to handle events from its child elements. It works by taking advantage of event bubbling.',
    code: '',
    hint: 'Think bubbling from child to parent.',
    expanded:
      'Instead of adding event listeners to many child elements, you attach one listener to a common ancestor. When an event happens, it bubbles up through the DOM, and you can check `event.target` to see which child triggered it. This improves performance and is useful for dynamic content.',
    tags: ['javascript', 'dom', 'delegation', 'event-bubbling'],
    reference: [
      {
        label: 'MDN Web Docs: Event delegation',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation',
      },
      {
        label: 'JavaScript.info: Event delegation',
        url: 'https://javascript.info/event-delegation',
      },
    ],
  },
  {
    id: 'js-2',
    categoryId: 'javascript',
    question:
      'Explain how this works in JavaScript. Can you give an example of one of the ways that working with this has changed in ES6?',
    answer:
      '`this` refers to the object that’s currently executing the function. In ES6, arrow functions were introduced, which don’t have their own `this` — they inherit it from their surrounding scope.',
    code: '',
    hint: 'Think function context and arrow functions.',
    expanded:
      '`this` behaves differently depending on how a function is called. In regular functions, `this` depends on the calling context. In ES6, arrow functions help avoid confusion by capturing the `this` value of their lexical scope, which is especially useful in callbacks or event handlers.',
    tags: ['javascript', 'this', 'arrow-functions', 'es6'],
    reference: [
      {
        label: 'MDN Web Docs: this',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this',
      },
      {
        label: 'JavaScript.info: Arrow functions and this',
        url: 'https://javascript.info/arrow-functions#arrow-functions-have-no-this',
      },
    ],
  },
  {
    id: 'js-3',
    categoryId: 'javascript',
    question: 'Explain how prototypal inheritance works.',
    answer:
      'Prototypal inheritance allows objects to inherit properties and methods from other objects through a prototype chain. Every object in JavaScript has an internal [[Prototype]] property, which points to another object. When you access a property on an object and it doesn’t exist on the object itself, the JavaScript engine looks up the chain to its prototype, and so on, until it either finds the property or reaches the end of the chain (`null`). You can create inheritance using constructor functions with `prototype`, with `Object.create()`, or with ES6 `class` syntax, which is syntactic sugar over prototype-based inheritance.',
    code: '',
    hint: 'Think "lookup chain" and shared methods.',
    expanded:
      'Prototypal inheritance enables efficient memory usage and method sharing across object instances. Instead of copying methods onto each object, shared behavior lives on the prototype. For example, functions defined on `ConstructorFunction.prototype` will be available to all instances created with `new ConstructorFunction()`. Similarly, objects created with `Object.create(parentObj)` will delegate property access to `parentObj` via the prototype chain.',
    tags: ['javascript', 'inheritance', 'prototypes', 'oop'],
    reference: [
      {
        label: 'MDN Web Docs: Inheritance and the prototype chain',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain',
      },
      {
        label: 'JavaScript.info: Prototypal Inheritance',
        url: 'https://javascript.info/prototype-inheritance',
      },
    ],
  },
  {
    id: 'js-4',
    categoryId: 'javascript',
    question:
      "What's the difference between a variable that is: null, undefined, or undeclared? How would you go about checking for any of these states?",
    answer:
      '`undefined` means a variable has been declared but not assigned a value. `null` is an intentional absence of any value. An undeclared variable hasn’t been declared in any scope and throws a ReferenceError if accessed.',
    code: '',
    hint: 'Think assigned vs unassigned vs not declared at all.',
    expanded:
      '`undefined` happens when you declare a variable but don’t assign anything to it. `null` is explicitly assigned by a developer to indicate "no value." An undeclared variable hasn’t been defined at all — trying to access it results in a `ReferenceError`. To check: use `typeof` to safely check if a variable is undeclared (`typeof foo === "undefined"`), compare directly to `null`, and use strict equality (`===`) when testing for either.',
    tags: ['javascript', 'variables', 'null', 'undefined', 'scope'],
    reference: [
      {
        label: 'MDN Web Docs: undefined',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined',
      },
      {
        label: 'JavaScript.info: null vs undefined',
        url: 'https://javascript.info/types#null-and-undefined',
      },
    ],
  },
  {
    id: 'js-5',
    categoryId: 'javascript',
    question: 'What is a closure, and how/why would you use one?',
    answer:
      'A closure is a function that retains access to variables from its outer (enclosing) scope even after that outer function has finished executing. It’s useful for data privacy and maintaining state between function calls.',
    code: '',
    hint: 'Think inner function remembering outer variables.',
    expanded:
      'Closures are created whenever a function is defined inside another function and references variables from the outer function. Since the inner function retains access to that scope, you can use closures to encapsulate data, like in a counter or private state in a module. Closures are the foundation for many JavaScript patterns, including callbacks, function factories, and module patterns.',
    tags: ['javascript', 'closures', 'scope', 'functions'],
    reference: [
      {
        label: 'MDN Web Docs: Closures',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
      },
      {
        label: 'JavaScript.info: Closures',
        url: 'https://javascript.info/closure',
      },
    ],
  },
  {
    id: 'js-6',
    categoryId: 'javascript',
    question:
      'What language constructions do you use for iterating over object properties and array items?',
    answer:
      'For arrays, I use `for`, `for...of`, `forEach`, `map`, and other array methods. For objects, I use `for...in`, `Object.keys()`, `Object.entries()`, or `Object.values()` combined with array methods.',
    code: '',
    hint: 'Think arrays vs plain objects.',
    expanded:
      'Arrays offer several looping options: classic `for` loops, `for...of` for values, and array methods like `forEach`, `map`, and `reduce`. For objects, `for...in` iterates over all enumerable properties (including inherited ones), so it’s often safer to use `Object.keys()`, `Object.entries()`, or `Object.values()` with array iteration methods to avoid inherited keys.',
    tags: ['javascript', 'iteration', 'arrays', 'objects', 'loops'],
    reference: [
      {
        label: 'MDN Web Docs: Loops and iteration',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration',
      },
      {
        label: 'MDN Web Docs: Object static methods',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object',
      },
    ],
  },
  {
    id: 'js-7',
    categoryId: 'javascript',
    question:
      'Can you describe the main difference between the Array.forEach() loop and Array.map() methods and why you would pick one versus the other?',
    answer:
      '`forEach()` is used for executing a function on each array item when you don’t need a return value. `map()` is used when you want to transform an array and return a new one with the results.',
    code: '',
    hint: 'Think: forEach is side-effects, map returns a new array.',
    expanded:
      '`forEach()` is great when you just want to perform side effects, like logging or updating external state. It does not return anything useful. `map()` is used when you want to transform each element of the array and return a brand new array, leaving the original untouched. If you need a result, use `map`. If you just want to loop over items, use `forEach`.',
    tags: ['javascript', 'arrays', 'iteration', 'map', 'foreach'],
    reference: [
      {
        label: 'MDN Web Docs: Array.forEach()',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
      },
      {
        label: 'MDN Web Docs: Array.map()',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
      },
    ],
  },
  {
    id: 'js-8',
    categoryId: 'javascript',
    question: "What's a typical use case for anonymous functions?",
    answer:
      'Anonymous functions are often used as callbacks or when you need a function temporarily, like in array methods (`map`, `filter`, `forEach`) or event handlers.',
    code: '',
    hint: 'Think quick callbacks or one-time logic.',
    expanded:
      'Anonymous functions are functions without a name. They’re useful when you don’t need to reuse the function elsewhere. Common use cases include passing them directly into methods like `setTimeout()`, `addEventListener()`, or array methods. They keep your code concise when a named function isn’t necessary.',
    tags: ['javascript', 'functions', 'anonymous', 'callbacks'],
    reference: [
      {
        label: 'MDN Web Docs: Functions',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_expressions',
      },
      {
        label: 'JavaScript.info: Function expressions',
        url: 'https://javascript.info/function-expressions',
      },
      {
        label: 'Geeks for Geeks: Anonymous Functions',
        url: 'https://www.geeksforgeeks.org/javascript/javascript-anonymous-functions/',
      },
    ],
  },
  {
    id: 'js-9',
    categoryId: 'javascript',
    question: "What's the difference between host objects and native objects?",
    answer:
      'Native objects are built into the JavaScript language (like Array, Object, or Date). Host objects are provided by the environment, such as the browser or Node.js (like window, document, or process).',
    code: '',
    hint: 'Think: JS core vs environment-specific.',
    expanded:
      'Native objects are defined by the ECMAScript specification and are always available in any JS environment. Host objects, on the other hand, are provided by the runtime environment — for example, browsers expose host objects like `window`, `document`, and `XMLHttpRequest`, while Node.js provides objects like `fs` or `process`. The availability of host objects depends on where your code is running.',
    tags: ['javascript', 'environment-objects'],
    reference: [
      {
        label: 'MDN Web Docs: JavaScript objects',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects',
      },
      {
        label: 'JavaScript.info: Host environment',
        url: 'https://javascript.info/browser-environment',
      },
    ],
  },
  {
    id: 'js-10',
    categoryId: 'javascript',
    question:
      'Explain the difference between: function Person(){}, var person = Person(), and var person = new Person()?',
    answer:
      '`function Person(){}` declares a function. `Person()` calls that function like a regular function. `new Person()` creates a new object using the function as a constructor.',
    code: '',
    hint: 'Think declaration vs invocation vs instantiation.',
    expanded:
      '`function Person(){}` defines a reusable function. If you call `Person()` directly, it runs the function but doesn’t create a new object — any `this` inside it will refer to the global object (or be undefined in strict mode). When you use `new Person()`, it creates a new object, sets `this` to that new object, and links it to `Person.prototype`, making it act like a constructor. This is the correct way to create instances from a constructor function.',
    tags: ['javascript', 'functions', 'constructors', 'new', 'this'],
    reference: [
      {
        label: 'MDN Web Docs: new operator',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new',
      },
      {
        label: 'JavaScript.info: Constructor functions',
        url: 'https://javascript.info/constructor-new',
      },
    ],
  },
  {
    id: 'js-11',
    categoryId: 'javascript',
    question:
      'Explain the differences on the usage of foo between function foo() {} and var foo = function() {}',
    answer:
      '`function foo() {}` is a function declaration and is hoisted entirely. `var foo = function() {}` is a function expression and only the variable `foo` is hoisted, not the function itself.',
    code: '',
    hint: 'Think hoisting and when the function becomes usable.',
    expanded:
      'Function declarations (`function foo() {}`) are hoisted with their entire definition, so you can call `foo()` even before it’s defined in the code. Function expressions (`var foo = function() {}`) only hoist the variable `foo`, which is `undefined` until the assignment runs — calling `foo()` before that line will throw an error. Also, function expressions can be anonymous or named, and are often used for inline functions or to limit scope.',
    tags: ['javascript', 'functions', 'hoisting', 'declaration', 'expression'],
    reference: [
      {
        label: 'MDN Web Docs: Function declarations vs expressions',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#function_declarations_vs_function_expressions',
      },
      {
        label: 'JavaScript.info: Function expressions',
        url: 'https://javascript.info/function-expressions',
      },
    ],
  },
  {
    id: 'js-12',
    categoryId: 'javascript',
    question:
      "Can you explain what Function.call and Function.apply do? What's the notable difference between the two?",
    answer:
      '`call` and `apply` are methods to invoke functions with a specified `this` value. The difference is in how they accept arguments: `call` takes them as a comma-separated list, while `apply` takes them as an array.',
    code: '',
    hint: 'Think calling functions with custom this and different argument passing.',
    expanded:
      'Both `call` and `apply` let you invoke a function with an explicit `this` context. For example, `func.call(obj, arg1, arg2)` calls `func` with `this` set to `obj` and arguments `arg1`, `arg2`. `func.apply(obj, [arg1, arg2])` does the same but expects the arguments as an array. `apply` is useful when you have arguments in an array or array-like object, while `call` is more straightforward when you know each argument.',
    tags: ['javascript', 'functions', 'call-apply-bind', 'invocation', 'this'],
    reference: [
      {
        label: 'MDN Web Docs: Function.prototype.call',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call',
      },
      {
        label: 'MDN Web Docs: Function.prototype.apply',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply',
      },
    ],
  },
  {
    id: 'js-13',
    categoryId: 'javascript',
    question: 'Explain Function.prototype.bind.',
    answer:
      '`bind` creates a new function that, when called, has its `this` keyword set to the provided value, with optional arguments prepended.',
    code: '',
    hint: 'Think permanently setting this context.',
    expanded:
      '`bind` returns a new function that is like the original but with its `this` permanently set to the value you provide. This is helpful for passing methods as callbacks while keeping the correct `this`, or for partial function application by pre-setting some arguments. Unlike `call` or `apply`, `bind` does not invoke the function immediately; it returns a new function you can call later.',
    tags: ['javascript', 'functions', 'call-apply-bind', 'this', 'context'],
    reference: [
      {
        label: 'MDN Web Docs: Function.prototype.bind',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind',
      },
    ],
  },
  {
    id: 'js-14',
    categoryId: 'javascript',
    question:
      "What's the difference between feature detection, feature inference, and using the UA string?",
    answer:
      'Feature detection checks if a browser supports a feature directly by testing it. Feature inference guesses support based on related features. Using the UA string relies on identifying the browser from its user agent to decide compatibility.',
    code: '',
    hint: 'Think direct test vs guess vs browser sniffing.',
    expanded:
      'Feature detection is the most reliable method — it tests if a specific API or behavior exists before using it. Feature inference assumes support based on other known capabilities but can be unreliable. Using the UA (user agent) string means detecting the browser version and making assumptions, which is fragile because UA strings can be spoofed or change over time.',
    tags: [
      'javascript',
      'feature-detection',
      'browser-compatibility',
      'user-agent',
    ],
    reference: [
      {
        label: 'MDN Web Docs: Feature detection',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection',
      },
      {
        label: 'Modernizr: Feature detection library',
        url: 'https://modernizr.com/',
      },
    ],
  },
  {
    id: 'js-15',
    categoryId: 'javascript',
    question: 'Explain "hoisting".',
    answer:
      'Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before code execution. This means you can use functions and variables before they are declared in the code.',
    code: '',
    hint: 'Think declarations are “lifted” to the top.',
    expanded:
      'In JavaScript, variable declarations (`var`) and function declarations are processed before any code runs, so they’re “hoisted” to the top of their enclosing scope. However, only the declarations are hoisted, not initializations. For example, a `var` variable is hoisted but undefined until assigned, while function declarations are fully hoisted and can be called before their declaration. `let` and `const` are hoisted differently and are in a temporal dead zone until initialized.',
    tags: ['javascript', 'hoisting', 'variables', 'functions', 'scope'],
    reference: [
      {
        label: 'MDN Web Docs: Hoisting',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/Hoisting',
      },
      {
        label: 'Geeks for Geeks: Hoisting',
        url: 'https://www.geeksforgeeks.org/javascript/javascript-hoisting/',
      },
    ],
  },
  {
    id: 'js-16',
    categoryId: 'javascript',
    question: 'Describe event bubbling.',
    answer:
      'Event bubbling is the process where an event starts at the most specific element (the target) and then propagates upward through its ancestors in the DOM tree.',
    code: '',
    hint: 'Think event flows from child to parent elements.',
    expanded:
      'When an event occurs on an element, it first triggers any handlers on that element, then moves up to its parent, then the parent’s parent, and so on, until it reaches the root of the document. This propagation allows a single event listener on a parent to handle events from many child elements. Event bubbling is the default phase in most browsers.',
    tags: ['javascript', 'events', 'dom', 'event-bubbling', 'propagation'],
    reference: [
      {
        label: 'MDN Web Docs: Event bubbling',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles',
      },
      {
        label: 'JavaScript.info: Bubbling and capturing',
        url: 'https://javascript.info/bubbling-and-capturing',
      },
    ],
  },
  {
    id: 'js-17',
    categoryId: 'javascript',
    question: 'Describe event capturing.',
    answer:
      'Event capturing is the phase where an event propagates from the root of the DOM down to the target element before the event is handled.',
    code: '',
    hint: 'Think event flows from parent to child elements.',
    expanded:
      'In event capturing, the event starts at the top of the DOM tree and travels down through ancestor elements to the target element. This phase happens before event bubbling. You can listen for events during the capturing phase by setting the `capture` option to `true` when adding an event listener. Capturing is less commonly used than bubbling but useful for intercepting events early.',
    tags: ['javascript', 'events', 'dom', 'event-capturing', 'propagation'],
    reference: [
      {
        label: 'MDN Web Docs: Event capturing',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#parameters',
      },
      {
        label: 'JavaScript.info: Bubbling and capturing',
        url: 'https://javascript.info/bubbling-and-capturing',
      },
    ],
  },
  {
    id: 'js-18',
    categoryId: 'javascript',
    question: 'What\'s the difference between an "attribute" and a "property"?',
    answer:
      'Attributes are defined in the HTML markup and provide initial values for elements. Properties are part of the DOM and represent the current state of an element.',
    code: '',
    hint: 'Think HTML vs live DOM.',

    expanded: `Attributes are static and come from the HTML. For example, <input type="text" value="initial value" /> has a value attribute that sets the initial input content. Properties are dynamic and part of the DOM object. The input’s value property reflects the current content, which can change as the user types or via JavaScript.`,
    tags: ['javascript', 'dom', 'attributes', 'properties', 'html'],
    reference: [
      {
        label: 'Great FrontEnd: Attributes vs Properties',
        url: 'https://www.greatfrontend.com/questions/quiz/whats-the-difference-between-an-attribute-and-a-property',
      },
      {
        label: 'JavaScript.info: Attributes and properties',
        url: 'https://javascript.info/modifying-document#attributes-and-properties',
      },
    ],
  },
  {
    id: 'js-19',
    categoryId: 'javascript',
    question:
      'What are the pros and cons of extending built-in JavaScript objects?',
    answer:
      'Extending built-in objects lets you add custom methods or properties to native types like Array or String, which can make your code more expressive. However, it can lead to conflicts with future JavaScript versions or third-party libraries and can cause unexpected behavior.',
    code: '',
    hint: 'Think custom enhancements vs risks and conflicts.',
    expanded:
      'Pros: You can add useful utilities directly to native prototypes, making code cleaner and more intuitive. Cons: Modifying built-ins can cause compatibility issues if future JavaScript adds methods with the same names. It can also break code relying on standard behavior or cause conflicts with libraries that expect native objects to be unchanged. For these reasons, extending built-ins is generally discouraged unless done carefully.',
    tags: ['javascript', 'prototypes', 'extend', 'built-in-objects', 'risks'],
    reference: [
      {
        label: 'MDN Web Docs: Extending built-in prototypes',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#extending_built-in_prototypes',
      },
      {
        label: 'JavaScript.info: Extending built-in objects',
        url: 'https://javascript.info/native-prototypes#extending-built-in-objects',
      },
    ],
  },
  {
    id: 'js-20',
    categoryId: 'javascript',
    question: 'What is the difference between == and ===?',
    answer:
      '`==` compares values with type coercion, meaning it converts types to match before comparing. `===` compares values without type coercion, so both type and value must be the same.',
    code: '',
    hint: 'Think loose equality vs strict equality.',
    expanded:
      '`==` allows different types to be considered equal after conversion (e.g., 5 == "5" is true). `===` requires both type and value to match exactly (e.g., 5 === "5" is false). It’s generally recommended to use `===` to avoid unexpected bugs caused by type coercion.',
    tags: [
      'javascript',
      'equality',
      'comparison',
      'type-coercion',
      'strict-equality',
    ],
    reference: [
      {
        label: 'MDN Web Docs: Equality comparisons and sameness',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness',
      },
      {
        label: 'JavaScript.info: Comparison',
        url: 'https://javascript.info/comparison',
      },
    ],
  },
  {
    id: 'js-21',
    categoryId: 'javascript',
    question: 'Explain the same-origin policy with regards to JavaScript.',
    answer:
      'The same-origin policy is a security measure that prevents scripts running on one origin from accessing resources on a different origin. An origin is defined by the protocol, domain, and port.',
    code: '',
    hint: 'Think: protection between different websites.',
    expanded:
      'This policy helps prevent malicious scripts on one site from interacting with sensitive data on another. For example, a script on `https://example.com` can’t read cookies or make DOM changes on `https://other.com`. Cross-origin communication is possible but must be explicitly allowed via mechanisms like CORS (Cross-Origin Resource Sharing).',
    tags: ['javascript', 'security', 'same-origin', 'cors', 'browser-policy'],
    reference: [
      {
        label: 'MDN Web Docs: Same-origin policy',
        url: 'https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy',
      },
      {
        label: 'Geeks for Geeks: Same-Origin Policy',
        url: 'https://www.geeksforgeeks.org/javascript/what-is-same-origin-policy-with-regards-to-javascript/',
      },
    ],
  },
  {
    id: 'js-22',
    categoryId: 'javascript',
    question:
      'Why is it called a Ternary operator, what does the word "Ternary" indicate?',
    answer:
      'It’s called a "ternary" operator because it takes three operands: a condition, a value if true, and a value if false. The word "ternary" means composed of three parts.',
    code: '',
    hint: 'Think condition ? ifTrue : ifFalse.',
    expanded:
      'The ternary operator is a concise alternative to an `if...else` statement. The syntax is `condition ? expr1 : expr2`, where `expr1` runs if the condition is true, and `expr2` runs if it’s false. It’s called ternary because it’s the only JavaScript operator that takes three operands.',
    tags: ['javascript', 'ternary', 'operators', 'conditional'],
    reference: [
      {
        label: 'MDN Web Docs: Conditional (ternary) operator',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator',
      },
      {
        label: 'JavaScript.info: Conditional operator',
        url: 'https://javascript.info/ifelse#the-conditional-operator',
      },
    ],
  },
  {
    id: 'js-23',
    categoryId: 'javascript',
    question:
      'What is strict mode? What are some of the advantages/disadvantages of using it?',
    answer:
      'Strict mode is a way to opt into a more secure and error-checked version of JavaScript by adding "use strict" at the top of a script or function. It helps catch silent errors, disallows unsafe actions like using undeclared variables, and generally makes your code cleaner. A downside is that it can break older scripts and makes certain things (like `this` in functions) behave differently.',
    code: '',
    hint: 'Think: safer JavaScript, fewer silent bugs.',
    expanded:
      'Strict mode prevents the use of undeclared variables, disables `with` statements, makes assignments to non-writable properties throw errors, and changes how `this` behaves in functions (defaults to `undefined` instead of the global object). While it improves safety and helps avoid common bugs, it may also introduce compatibility issues with legacy code and has stricter rules that might confuse beginners at first.',
    tags: ['javascript', 'strict-mode', 'safety', 'debugging', 'this'],
    reference: [
      {
        label: 'MDN Web Docs: Strict mode',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode',
      },
      {
        label: 'JavaScript.info: Strict Mode',
        url: 'https://javascript.info/strict-mode',
      },
    ],
  },
  {
    id: 'js-24',
    categoryId: 'javascript',
    question:
      'What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?',
    answer:
      'Languages like TypeScript, CoffeeScript, or Elm compile to JavaScript and offer features JavaScript doesn’t natively support (or didn’t at the time), such as type checking, cleaner syntax, or better modularity. The main advantage is improved developer experience—features like static typing or modern syntax can reduce bugs and make code easier to maintain. On the downside, these tools add build complexity, may hide native JavaScript behavior, and require team familiarity and tooling support. Also, debugging can be harder if source maps are not used properly.',
    code: '',
    hint: 'Think TypeScript, build step, and developer ergonomics.',
    expanded:
      'Using a compile-to-JavaScript language can help enforce coding standards, catch errors at compile time, and introduce advanced abstractions or syntactic sugar. TypeScript, for instance, improves tooling with autocompletion and better refactoring support. However, it introduces a build step that adds overhead, may slow down development for small projects, and can make hiring or onboarding harder if your team is unfamiliar with the language. Additionally, debugging requires maintaining accurate source maps to trace back to the original code.',
    tags: [
      'javascript',
      'transpilation',
      'typescript',
      'developer-experience',
      'compilation',
      'tooling',
    ],
    reference: [
      {
        label:
          'Great Frontend: Advantages an Disadvantages of Transpilers in Javascript',
        url: 'https://www.greatfrontend.com/questions/quiz/what-are-some-of-the-advantages-disadvantages-of-writing-javascript-code-in-a-language-that-compiles-to-javascript',
      },
      {
        label: 'TypeScript Handbook',
        url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
      },
    ],
  },
  {
    id: 'js-25',
    categoryId: 'javascript',
    question: 'What tools and techniques do you use debugging JavaScript code?',
    answer:
      'I primarily use browser dev tools (like Chrome or Firefox DevTools) to inspect elements, set breakpoints, and step through code. I also use `console.log()` for quick insights, and tools like source maps when working with transpiled code. For more complex debugging, I might use a debugger statement, performance profiling, or third-party tools like ESLint for static code analysis.',
    code: '',
    hint: 'Think breakpoints, logs, and static analysis.',
    expanded:
      'Debugging often starts with narrowing down where the issue occurs. Browser developer tools let you pause execution, inspect variables, check call stacks, and evaluate expressions in real time. `console.log()` is fast and simple for checking values, but setting breakpoints and using the debugger allows for deeper analysis. Static analysis tools like ESLint help catch errors before they happen. Source maps are useful when debugging minified or compiled code like TypeScript or SCSS.',
    tags: ['javascript', 'debugging', 'tools', 'devtools', 'console', 'eslint'],
    reference: [
      {
        label: 'W3Schools: Debugging JavaScript',
        url: 'https://www.w3schools.com/js/js_debugging.asp',
      },
      {
        label: 'Google Developers: Chrome DevTools',
        url: 'https://developer.chrome.com/docs/devtools/',
      },
      {
        label: 'ESLint: Pluggable JavaScript linter',
        url: 'https://eslint.org/',
      },
    ],
  },
  {
    id: 'js-26',
    categoryId: 'javascript',
    question:
      'Explain the difference between mutable and immutable objects. What is an example of an immutable object in JavaScript? What are the pros and cons of immutability?  How can you achieve immutability in your own code?',
    answer:
      'A mutable object can be changed after it’s created—its properties or values can be modified. An immutable object cannot be changed once it’s created. In JavaScript, most objects and arrays are mutable, while primitives like strings, numbers, and booleans are immutable.\n\nAn example of an immutable object is a string. When you modify a string, you actually create a new one rather than changing the original.\n\nThe pros of immutability include easier debugging, safer state management (especially in React or Redux), and predictable behavior. The cons are that it can lead to performance costs due to creating new objects rather than modifying existing ones.\n\nYou can achieve immutability using techniques like `Object.freeze()` to prevent changes to an object, spreading objects or arrays to create copies (`{...obj}`, `[...arr]`), or using libraries like Immer or Immutable.js to enforce and manage immutability more efficiently.',
    code: '',
    hint: 'Think about strings vs objects. Also consider Redux state.',
    expanded:
      'Mutable structures are commonly used in JavaScript but can lead to side effects when state changes are shared across components. Immutability helps you track changes over time and avoid accidental mutations. Although `Object.freeze()` can prevent mutations, it only performs a shallow freeze. For deeper immutability or convenience, libraries like Immer allow you to write mutable-style code while maintaining immutability under the hood.',
    tags: [
      'javascript',
      'immutability',
      'mutable',
      'state-management',
      'functional-programming',
    ],
    reference: [
      {
        label: 'MDN Web Docs: Immutability',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/Immutable',
      },
      {
        label: 'JavaScript.info: Object references and copying',
        url: 'https://javascript.info/object-copy',
      },
      {
        label: 'Immer.js',
        url: 'https://immerjs.github.io/immer/',
      },
    ],
  },
  {
    id: 'js-27',
    categoryId: 'javascript',
    question:
      'Explain the difference between synchronous and asynchronous functions.',
    answer:
      'Synchronous functions run sequentially—each task must complete before the next begins. If one function takes a long time to finish, it blocks the rest of the code from running. Asynchronous functions, on the other hand, allow your code to start a task and continue running other code while waiting for that task to complete. They often rely on callbacks, promises, or async/await syntax to handle operations like network requests or file reading without blocking the main thread.',
    code: '',
    hint: 'Think blocking vs non-blocking, and how `await` works.',
    expanded:
      'In synchronous code, operations are executed one after another, which works fine for tasks that finish quickly. But for time-consuming operations (like fetching data), this can freeze your app. Asynchronous code solves this by using the event loop and task queue. With callbacks, promises, and async/await, you can run long tasks in the background and respond when they’re done—keeping the user experience smooth and responsive.',
    tags: [
      'javascript',
      'asynchronous',
      'synchronous',
      'async-await',
      'event-loop',
    ],
    reference: [
      {
        label: 'MDN Web Docs: Synchronous and asynchronous programming',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous',
      },
      {
        label: 'JavaScript.info: Async/await',
        url: 'https://javascript.info/async-await',
      },
    ],
  },
  {
    id: 'js-28',
    categoryId: 'javascript',
    question:
      'What is an event loop? What is the difference between call stack and task queue?',
    answer:
      'The event loop is a JavaScript mechanism that manages the execution of multiple tasks, allowing asynchronous operations to run without blocking the main thread. The call stack keeps track of the currently executing functions, while the task queue holds functions waiting to be executed after the stack is empty.',
    code: '',
    hint: 'Think of event loop as the manager between call stack and task queue.',
    expanded:
      'JavaScript is single-threaded, meaning it can execute only one task at a time using the call stack. When asynchronous operations (like timers, fetch requests) complete, their callback functions are pushed into the task queue. The event loop constantly checks if the call stack is empty; if it is, it moves the next task from the task queue onto the call stack for execution. This process enables non-blocking asynchronous behavior and keeps the UI responsive.',
    tags: [
      'javascript',
      'event-loop',
      'call-stack',
      'task-queue',
      'asynchronous',
    ],
    reference: [
      {
        label: 'MDN Web Docs: Event Loop',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop',
      },
      {
        label: 'JavaScript.info: Event loop',
        url: 'https://javascript.info/event-loop',
      },
    ],
  },
  {
    id: 'js-29',
    categoryId: 'javascript',
    question:
      'What are the differences between variables created using let, var, or const?',
    answer:
      '`var` is function-scoped and hoisted, allowing redeclaration and can lead to bugs. `let` and `const` are block-scoped, not hoisted in the same way, and help prevent redeclaration errors. `const` declares constants that cannot be reassigned, while `let` allows reassignment.',
    code: '',
    hint: 'Think scope, hoisting, and reassignment.',
    expanded:
      "`var` is hoisted and function-scoped, which means variables declared with `var` are accessible before their declaration (due to hoisting) and exist throughout the enclosing function. It also allows redeclaration, which can cause unexpected behavior. `let` and `const` were introduced in ES6 to address these issues; both are block-scoped, meaning they only exist within the nearest enclosing block (like loops or conditionals). `let` allows you to reassign the variable, but not redeclare it in the same scope. `const` must be assigned at declaration and cannot be reassigned, though if the value is an object, the object's properties can still be modified.",
    tags: [
      'javascript',
      'variables',
      'let',
      'var',
      'const',
      'scope',
      'hoisting',
    ],
    reference: [
      {
        label: 'MDN Web Docs: var',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var',
      },
      {
        label: 'MDN Web Docs: let',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let',
      },
      {
        label: 'MDN Web Docs: const',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const',
      },
    ],
  },
  {
    id: 'js-30',
    categoryId: 'javascript',
    question:
      'What are the differences between ES6 class and ES5 function constructors?',
    answer:
      'ES5 function constructors use regular functions to create objects and set up inheritance via prototypes manually. ES6 classes provide cleaner, more concise syntax for creating constructors and handling inheritance but are mostly syntactic sugar over the prototype system.',
    code: '',
    hint: 'Think syntax sugar and prototypes.',
    expanded:
      "Function constructors in ES5 involve defining a function and attaching methods to its prototype to share behavior across instances. ES6 classes introduced a clearer, more intuitive syntax for defining constructors, instance methods, and inheritance with `extends` and `super`. Although classes look like classical OOP constructs, under the hood they still use JavaScript's prototype-based inheritance. Classes also come with stricter rules, such as requiring the use of `new` for instantiation and methods being non-enumerable by default.",
    tags: [
      'javascript',
      'es6',
      'classes',
      'function-constructors',
      'oop',
      'inheritance',
    ],
    reference: [
      {
        label: 'MDN Web Docs: Classes',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes',
      },
      {
        label: 'JavaScript.info: Class vs Constructor',
        url: 'https://javascript.info/class',
      },
    ],
  },
  {
    id: 'js-31',
    categoryId: 'javascript',
    question:
      'Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?',
    answer:
      'Arrow functions provide a shorter syntax and don’t have their own `this` binding. They inherit `this` from their surrounding scope, making them great for callbacks or methods where you want to keep the current `this` context without using `.bind()`.',
    code: '',
    hint: 'Think concise syntax and lexical this.',
    expanded:
      'Unlike regular functions, arrow functions don’t create their own `this`, `arguments`, or `super`. This means `this` inside an arrow function is the same as the enclosing scope, which helps avoid common bugs with `this` in callbacks or event handlers. They are also more concise, especially for inline functions. However, arrow functions cannot be used as constructors and don’t have a `prototype` property.',
    tags: ['javascript', 'arrow-functions', 'this', 'syntax', 'callbacks'],
    reference: [
      {
        label: 'MDN Web Docs: Arrow functions',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions',
      },
      {
        label: 'JavaScript.info: Arrow functions',
        url: 'https://javascript.info/arrow-functions-basics',
      },
    ],
  },
  {
    id: 'js-32',
    categoryId: 'javascript',
    question:
      'What advantage is there for using the arrow syntax for a method in a constructor?',
    answer:
      'Using arrow functions for methods inside a constructor automatically binds `this` to the instance, so you don’t have to manually bind the method. This is especially helpful for passing methods as callbacks where the context might otherwise get lost.',
    code: '',
    hint: 'Think automatic binding of this.',
    expanded:
      'Normally, methods defined in constructors need explicit `.bind(this)` calls to keep the right context when passed around. Arrow functions capture the `this` value from their defining scope (the constructor instance), so they stay correctly bound without extra code. This reduces boilerplate and avoids common bugs with `this` in event handlers or async callbacks.',
    tags: ['javascript', 'arrow-functions', 'constructor', 'this', 'binding'],
    reference: [
      {
        label: 'MDN Web Docs: Arrow functions',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions',
      },
      {
        label: 'JavaScript.info: Arrow functions and this',
        url: 'https://javascript.info/arrow-functions#arrow-functions-have-no-this',
      },
    ],
  },
  {
    id: 'js-33',
    categoryId: 'javascript',
    question: 'What is the definition of a higher-order function?',
    answer:
      'A higher-order function is a function that takes one or more functions as arguments, or returns a function as its result.',
    code: '',
    hint: 'Think functions that work with other functions.',
    expanded:
      'Higher-order functions allow you to abstract and reuse behavior by accepting functions as parameters or returning new functions. Common examples include `map`, `filter`, and `reduce` which take callback functions to process data. They are a key concept in functional programming and help write cleaner, more flexible code.',
    tags: ['javascript', 'functions', 'higher-order', 'functional-programming'],
    reference: [
      {
        label: 'MDN Web Docs: Higher-order functions',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#higher-order_functions',
      },
      {
        label: 'Geeks for Geeks: Higher-order functions',
        url: 'https://www.geeksforgeeks.org/javascript/javascript-higher-order-functions/',
      },
    ],
  },
  {
    id: 'js-34',
    categoryId: 'javascript',
    question:
      'Can you give an example for destructuring an object or an array?',
    answer:
      'Destructuring lets you unpack values from objects or arrays into distinct variables in a concise way. For example, from an object: `const { name, age } = person;` or from an array: `const [first, second] = colors;`',
    code: '',
    hint: 'Think unpacking with curly braces for objects and square brackets for arrays.',
    expanded:
      'Destructuring is a convenient ES6 syntax that helps extract values from objects or arrays quickly and clearly. It improves readability and reduces the need to write repetitive code. You can also assign default values and rename variables during destructuring.',
    tags: ['javascript', 'destructuring', 'es6', 'syntax'],
    reference: [
      {
        label: 'MDN Web Docs: Destructuring assignment',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment',
      },
      {
        label: 'JavaScript.info: Destructuring assignment',
        url: 'https://javascript.info/destructuring-assignment',
      },
    ],
  },
  {
    id: 'js-35',
    categoryId: 'javascript',
    question:
      'Can you give an example of generating a string with ES6 Template Literals?',
    answer:
      'Template literals let you create strings with embedded expressions using backticks (`). For example: `const greeting = `Hello, ${name}!`;` This inserts the value of `name` directly into the string.',
    code: '',
    hint: 'Think backticks and ${expression} syntax.',
    expanded:
      'Template literals improve readability and ease of string creation compared to concatenation. They allow multiline strings and expression interpolation, making dynamic string building cleaner and less error-prone.',
    tags: ['javascript', 'es6', 'template-literals', 'strings', 'syntax'],
    reference: [
      {
        label: 'MDN Web Docs: Template literals',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals',
      },
    ],
  },
  {
    id: 'js-36',
    categoryId: 'javascript',
    question:
      'Can you give an example of a curry function and why this syntax offers an advantage?',
    answer:
      'Currying is transforming a function that takes multiple arguments into a sequence of functions each taking a single argument. For example: `const add = a => b => a + b;` allows calling `add(2)(3)` to get `5`.',
    code: '',
    hint: 'Think functions returning functions one argument at a time.',
    expanded:
      'Currying lets you create reusable, more modular functions by fixing some arguments and returning new functions that wait for the rest. This can improve code clarity, enable partial application, and support functional programming patterns.',
    tags: ['javascript', 'functions', 'currying', 'functional-programming'],
    reference: [
      {
        label: 'Geeks for Geeks: Currying',
        url: 'https://www.geeksforgeeks.org/javascript/what-is-currying-function-in-javascript/',
      },
      {
        label: 'JavaScript.info: Currying',
        url: 'https://javascript.info/currying-partials',
      },
    ],
  },
  {
    id: 'js-37',
    categoryId: 'javascript',
    question:
      'What are the benefits of using spread syntax and how is it different from rest syntax?',
    answer:
      'Spread syntax (`...`) expands iterable values (like arrays or objects) into individual elements, useful for copying or combining data. Rest syntax collects multiple elements into a single array parameter, handy for functions with variable arguments.',
    code: '',
    hint: 'Think: spread unpacks, rest packs.',
    expanded:
      'Spread syntax helps create shallow copies, merge arrays or objects, and pass elements as separate arguments. Rest syntax is used in function parameters to gather all remaining arguments into an array, enabling flexible argument handling. Though both use `...`, their usage context differs—spread in calls or literals, rest in parameter definitions.',
    tags: [
      'javascript',
      'syntax',
      'spread',
      'rest',
      'functions',
      'arrays',
      'objects',
    ],
    reference: [
      {
        label: 'MDN Web Docs: Spread syntax',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax',
      },
      {
        label: 'MDN Web Docs: Rest parameters',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters',
      },
    ],
  },
  {
    id: 'js-38',
    categoryId: 'javascript',
    question: 'How can you share code between files?',
    answer:
      'You can share code between files by using modules—exporting variables, functions, or classes from one file and importing them into another. In modern JavaScript, this is done using ES6 `export` and `import` statements.',
    code: '',
    hint: 'Think export/import and modular code.',
    expanded:
      'Modules help keep code organized and reusable by splitting functionality into separate files. You use `export` to expose parts of a file, and `import` to include them where needed. This promotes maintainability and avoids polluting the global scope. Before ES6, tools like CommonJS (`require`/`module.exports`) were used, especially in Node.js.',
    tags: ['javascript', 'modules', 'import', 'export', 'code-sharing', 'es6'],
    reference: [
      {
        label: 'MDN Web Docs: JavaScript modules',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules',
      },
      {
        label: 'JavaScript.info: Modules',
        url: 'https://javascript.info/modules-intro',
      },
    ],
  },
  {
    id: 'js-39',
    categoryId: 'javascript',
    question: 'Why might you want to create static class members?',
    answer:
      'Static class members belong to the class itself rather than any instance. They’re useful for utility functions, constants, or properties that should be shared across all instances without duplication.',
    code: '',
    hint: 'Think class-level properties and methods.',
    expanded:
      'Static members allow you to define methods or values that don’t rely on instance data and can be accessed without creating an object. For example, helper functions, configuration constants, or counters shared by all instances can be static. This keeps instance objects smaller and your API clear.',
    tags: ['javascript', 'classes', 'static', 'oop', 'design-patterns'],
    reference: [
      {
        label: 'MDN Web Docs: Static class features',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static',
      },
      {
        label: 'JavaScript.info: Static properties and methods',
        url: 'https://javascript.info/class#static-properties-and-methods',
      },
    ],
  },
  {
    id: 'js-40',
    categoryId: 'javascript',
    question:
      'What is the difference between while and do-while loops in JavaScript?',
    answer:
      '`while` loops test the condition before each iteration, so the loop body may not run at all if the condition is false initially. `do-while` loops run the loop body first and then test the condition, ensuring the loop executes at least once.',
    code: '',
    hint: 'Think: pre-check vs post-check loops.',
    expanded:
      '`while` loops are good when you want to run code only if a condition is true from the start. `do-while` loops are useful when the loop body must execute at least once regardless of the condition, like prompting for user input and then validating it.',
    tags: ['javascript', 'loops', 'while', 'do-while', 'control-flow'],
    reference: [
      {
        label: 'MDN Web Docs: while',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while',
      },
      {
        label: 'MDN Web Docs: do...while',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while',
      },
    ],
  },

  // Libraries ------------------------------------------------------------------

  {
    id: 'lib-1',
    categoryId: 'libraries',
    question: 'When would you use jQuery? Any reasons to not use jQuery?',
    answer:
      'jQuery was traditionally used to simplify DOM manipulation, event handling, and AJAX requests across browsers with inconsistent APIs. It’s still useful for legacy projects or when you need quick solutions in older codebases without modern JavaScript frameworks.',
    code: '',
    hint: 'Think older browser support and simpler syntax for common tasks.',
    expanded:
      'jQuery abstracts away browser inconsistencies and provides a concise syntax for common JavaScript tasks. However, with modern JavaScript (ES6+), native APIs have improved dramatically — querySelector, fetch, classList, etc. — reducing the need for jQuery. Additionally, it adds unnecessary weight to the bundle in modern apps and can encourage outdated coding practices if not used thoughtfully.',
    tags: ['jquery', 'legacy-support', 'dom', 'ajax', 'libraries'],
    reference: [
      {
        label: 'W3Schools: Introduction to jQuery',
        url: 'https://www.w3schools.com/jquery/jquery_intro.asp',
      },
      {
        label: 'jQuery Official Site',
        url: 'https://jquery.com/',
      },
      {
        label: 'You Might Not Need jQuery',
        url: 'https://youmightnotneedjquery.com/',
      },
    ],
  },
  {
    id: 'lib-2',
    categoryId: 'libraries',
    question:
      'How would you go about creating your own lightweight jQuery replacement library? What part(s) of the Web API would you use?',
    answer:
      'I’d focus on replicating the most common jQuery features using modern Web APIs — like element selection, event handling, and AJAX. I’d use `querySelectorAll` for DOM selection, `addEventListener` for event handling, and `fetch` for AJAX requests.',
    code: '',
    hint: 'Use built-in browser features available in modern JavaScript.',
    expanded:
      'A lightweight alternative to jQuery could be built by wrapping core Web APIs in a small utility library. For example, you might create a function like `$()` that uses `document.querySelectorAll()` to return elements, and prototype chain methods like `.on()` to simplify event binding. Modern methods like `classList`, `closest()`, and `fetch()` make it easy to replicate most jQuery functionality without the overhead. The idea is to give a cleaner API for the most commonly used tasks.',
    tags: ['jquery', 'dom', 'custom-library', 'web-api', 'modern-js'],
    reference: [
      {
        label: 'You Might Not Need jQuery',
        url: 'https://youmightnotneedjquery.com/',
      },
      {
        label: 'MDN: DOM API reference',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model',
      },
      {
        label: 'MDN: Fetch API',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API',
      },
    ],
  },
  {
    id: 'lib-3',
    categoryId: 'libraries',
    question:
      'What design decisions would influence whether you would choose to use Angular or React? How are the two libraries different?',
    answer:
      'I’d consider factors like project size, team experience, and long-term maintenance. Angular is a full-fledged framework with batteries-included, while React is a library that’s more flexible and lightweight but requires piecing together additional tools.',
    code: '',
    hint: 'Think framework vs library, opinionated vs flexible.',
    expanded:
      'Angular is a comprehensive framework with built-in solutions for routing, state management, form handling, and more. It uses TypeScript by default and follows a more structured, opinionated approach. React, on the other hand, focuses only on the view layer and gives you freedom to choose your own libraries for routing, state management, etc. React uses JSX and encourages functional components and hooks for logic reuse. You might choose Angular for enterprise-scale apps with large teams, or React if you want more flexibility, a smaller learning curve, or to build something incrementally.',
    tags: [
      'react',
      'angular',
      'frameworks',
      'design-decisions',
      'library-vs-framework',
    ],
    reference: [
      {
        label: 'Geeks for Geeks: React vs Angular: Key Differences',
        url: 'https://www.geeksforgeeks.org/reactjs/difference-between-react-js-and-angular-js/',
      },
      {
        label: 'Angular vs React: A Comparison',
        url: 'https://angular.dev/overview',
      },
    ],
  },
  {
    id: 'lib-4',
    categoryId: 'libraries',
    question:
      'How do you structure your component architectures in React? Where does MVC fit into the architecture?',
    answer:
      'In React, I structure components by breaking UI into reusable, self-contained pieces, often following a hierarchy of presentational (UI) and container (logic/state) components. React doesn’t strictly follow MVC; instead, components combine view and controller logic, while state management tools (like Redux or Context) handle the model layer.',
    code: '',
    hint: 'Think components as UI + controller, separate state management.',
    expanded:
      'React’s architecture centers around components which encapsulate both rendering and some controller logic. Presentational components focus on how things look and receive data via props, while container components manage state and business logic. Unlike traditional MVC where model, view, and controller are separate layers, React components blend view and controller roles. For complex state, external libraries manage the model/data layer. This approach promotes modularity, reusability, and easier maintenance.',
    tags: [
      'react',
      'component-architecture',
      'mvc',
      'state-management',
      'containers',
      'presentational',
    ],
    reference: [
      {
        label: 'React Docs: Thinking in React',
        url: 'https://reactjs.org/docs/thinking-in-react.html',
      },
      {
        label: 'Presentational and Container Components',
        url: 'https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0',
      },
    ],
  },
  {
    id: 'lib-5',
    categoryId: 'libraries',
    question: 'Why choose React over Angular or Vue?',
    answer:
      'React is often chosen for its flexibility, strong community support, and a component-based architecture that integrates well with various tools and libraries. Unlike Angular, which is a full-fledged framework, React focuses on the UI layer, giving developers more freedom in choosing their stack. Compared to Vue, React has a larger ecosystem and corporate backing from Facebook, which can mean better long-term support.',
    code: '',
    hint: 'Think flexibility, ecosystem, and control.',
    expanded:
      'React’s unopinionated nature allows developers to build their own architecture and choose libraries for routing, state management, and more, whereas Angular provides a more opinionated all-in-one solution. Vue is easier to get started with and offers a gentle learning curve, but React’s massive community and widespread adoption mean more resources, job opportunities, and third-party tools. React also emphasizes declarative programming and a virtual DOM for efficient rendering.',
    tags: [
      'react',
      'angular',
      'vue',
      'comparison',
      'frontend-frameworks',
      'ecosystem',
      'flexibility',
    ],
    reference: [
      {
        label: 'React vs Angular vs Vue',
        url: 'https://www.browserstack.com/guide/angular-vs-react-vs-vue',
      },
      {
        label: 'React Official Documentation',
        url: 'https://reactjs.org/',
      },
    ],
  },

  // Network --------------------------------------------------------

  {
    id: 'network-1',
    categoryId: 'network',
    question:
      'Traditionally, why has it been better to serve site assets from multiple domains?',
    answer:
      'Historically, browsers limited the number of concurrent connections they could make to a single domain (often around 6). By serving assets from multiple domains (also called domain sharding), websites could load resources like images, scripts, and stylesheets in parallel, improving page load times.',
    code: '',
    hint: 'Think about how browsers open connections.',
    expanded:
      'Older HTTP/1.1 limitations meant browsers could only open a few simultaneous requests to a domain. Using additional subdomains allowed more assets to load in parallel. However, with HTTP/2 and HTTP/3, this practice is now often discouraged since multiplexing allows multiple requests over a single connection, making domain sharding unnecessary and even potentially harmful due to extra DNS lookups and SSL handshakes.',
    tags: ['networking', 'performance', 'http', 'domain-sharding'],
    reference: [
      {
        label: 'MDN Web Docs: Optimizing performance',
        url: 'https://developer.mozilla.org/en-US/docs/Web/Performance/Understanding_latency#domain_sharding',
      },
      {
        label: 'MDN Web Docs: Domain sharding',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/Domain_sharding',
      },
    ],
  },
  {
    id: 'network-2',
    categoryId: 'network',
    question:
      "Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.",
    answer:
      'When you type a URL and hit enter, the browser first checks its cache or makes a DNS request to resolve the domain name to an IP address. Then, it initiates a TCP connection (or QUIC with HTTP/3), often followed by a TLS handshake for HTTPS. Once connected, the browser sends an HTTP request to the server, and the server responds with the HTML. The browser parses the HTML, makes additional requests for resources like CSS, JS, and images, and builds the DOM, CSSOM, and render tree. It then paints pixels to the screen while continuing to load and execute scripts. Modern browsers may progressively render content as it loads.',
    code: '',
    hint: 'Think DNS → TCP → TLS → HTTP → parse/render.',
    expanded:
      "This process involves many layers of networking and rendering. DNS resolution maps the domain to an IP address. The browser opens a connection, secures it if necessary, and makes an HTTP request. When the response comes back, parsing begins immediately. The browser constructs the DOM and CSSOM, merges them into a render tree, and begins rendering. JavaScript may block rendering depending on how it's loaded. As more resources arrive, the browser reflows/repaints as needed.",
    tags: ['networking', 'dns', 'http', 'rendering', 'browser'],
    reference: [
      {
        label: 'Amazon: What happens when you type a URL?',
        url: 'https://aws.amazon.com/blogs/mobile/what-happens-when-you-type-a-url-into-your-browser/',
      },
      {
        label: 'How Browsers Work',
        url: 'https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/',
      },
    ],
  },
  {
    id: 'network-3',
    categoryId: 'network',
    question:
      'What are the differences between Long-Polling, WebSockets, and Server-Sent Events?',
    answer:
      'Long-polling is a technique where the client repeatedly makes HTTP requests to the server, holding the connection open until new data is available. WebSockets provide full-duplex communication over a single persistent connection, allowing real-time bidirectional data transfer. Server-Sent Events (SSE) allow the server to push updates to the client over a single HTTP connection, but only in one direction (server → client).',
    code: '',
    hint: 'Think about the direction of data flow and how persistent the connection is.',
    expanded:
      'Long-polling emulates real-time by repeatedly opening and closing HTTP connections, which is resource-intensive. WebSockets use a persistent TCP connection for real-time two-way communication, ideal for chat apps or games. SSE uses a persistent connection for one-way updates, making it lightweight and simple for live feeds or notifications. WebSockets are more complex but powerful. SSE is easier to implement but only supports server-to-client streams.',
    tags: ['networking', 'realtime', 'websockets', 'sse', 'long-polling'],
    reference: [
      {
        label: 'MDN: Server-sent events',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events',
      },
      {
        label: 'MDN: WebSockets',
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
      },
      {
        label: 'Dev.tp: What is Long-polling',
        url: 'https://dev.to/pubnub/what-is-long-polling-521h',
      },
    ],
  },
  {
    id: 'network-4',
    categoryId: 'network',
    question:
      'Explain the following request and response headers: What’s the difference between Expires, Date, Age and If-Modified-Since? What about Do Not Track, Cache-Control, Transfer-Encoding, ETag, and X-Frame-Options?',
    answer:
      '`Expires`, `Date`, and `Age` are headers used for cache control. `Expires` sets a timestamp when the content is considered stale. `Date` is when the response was generated by the server. `Age` tells how long the content has been cached by a proxy or browser. `If-Modified-Since` is a request header that asks the server to return a 304 Not Modified response if the content hasn’t changed since the given date. `Do Not Track` is a request header sent by browsers to signal user tracking preferences. `Cache-Control` provides more flexible cache instructions than `Expires`. `Transfer-Encoding` specifies how the message body is formatted — for example, using `chunked` encoding. `ETag` is a unique identifier for a resource version, useful for validating caches. `X-Frame-Options` prevents your site from being embedded in an iframe, helping avoid clickjacking attacks.',
    code: '',
    hint: 'Think about which are for freshness, which are for security, and which help optimize communication between browser and server.',
    expanded:
      '`Expires`, `Date`, `Age`, and `If-Modified-Since` all deal with caching and content freshness. `Cache-Control` gives fine-grained cache rules like `max-age`, `no-store`, and `must-revalidate`. `ETag` helps with efficient revalidation by letting the browser send `If-None-Match`. `Transfer-Encoding: chunked` allows streaming content in pieces. `Do Not Track` (DNT) is a user preference header, but not all servers honor it. `X-Frame-Options` (`DENY`, `SAMEORIGIN`) defends against UI redress attacks by disallowing or restricting embedding in other pages.',
    tags: [
      'networking',
      'http-headers',
      'caching',
      'security',
      'etag',
      'cache-control',
      'iframes',
      'performance',
    ],
    reference: [
      {
        label: 'MDN: HTTP headers',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers',
      },
      {
        label: 'MDN: HTTP caching',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching',
      },
      {
        label: 'OWASP: Clickjacking Defense Cheat Sheet',
        url: 'https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html',
      },
    ],
  },
  {
    id: 'network-5',
    categoryId: 'network',
    question:
      'What are HTTP methods? List all HTTP methods that you know, and explain them.',
    answer:
      'HTTP methods define the type of action a client wants to perform on a resource. Common methods include:\n\n- `GET`: Retrieve data.\n- `POST`: Send data to the server to create a resource.\n- `PUT`: Update a resource completely.\n- `PATCH`: Partially update a resource.\n- `DELETE`: Remove a resource.\n- `HEAD`: Same as `GET`, but only returns headers.\n- `OPTIONS`: Describes allowed methods for a resource (often used in CORS).\n- `CONNECT`: Establish a tunnel, typically used for HTTPS.\n- `TRACE`: Echoes the request, mainly used for debugging.',
    code: '',
    hint: 'Think CRUD operations and how the client communicates intent.',
    expanded:
      'HTTP methods are verbs that describe how to interact with server-side resources. RESTful APIs are built around these methods to represent create, read, update, and delete operations. Understanding the difference between `PUT` and `PATCH`, or `GET` and `HEAD`, is crucial for building efficient and secure APIs.',
    tags: ['http', 'networking', 'http-methods', 'rest', 'crud'],
    reference: [
      {
        label: 'MDN: HTTP request methods',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods',
      },
      {
        label: 'REST API Tutorial: HTTP Methods',
        url: 'https://restfulapi.net/http-methods/',
      },
    ],
  },
  {
    id: 'network-6',
    categoryId: 'network',
    question:
      'What is domain pre-fetching and how does it help with performance?',
    answer:
      'Domain pre-fetching is a performance optimization technique where the browser is instructed to perform DNS lookups for specified domains ahead of time. This reduces latency when users eventually navigate to or request resources from those domains.',
    code: '',
    hint: 'Think DNS lookups done proactively.',
    expanded:
      'Browsers must perform a DNS lookup to resolve a domain name to an IP address before making a request. Domain pre-fetching uses the `<link rel="dns-prefetch" href="//example.com">` tag to tell the browser to resolve external domains early. This is helpful when loading assets from third-party sources like CDNs, fonts, or analytics tools. While it doesn’t download the resource, it gets the domain ready faster, improving perceived speed.',
    tags: ['performance', 'dns', 'prefetching', 'networking', 'html'],
    reference: [
      {
        label: 'MDN: dns-prefetch',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/dns-prefetch',
      },
      {
        label: 'Web.dev: Preconnect, prefetch, and preload',
        url: 'https://web.dev/uses-rel-preconnect/',
      },
    ],
  },
  {
    id: 'network-7',
    categoryId: 'network',
    question: 'What is a CDN and what is the benefit of using one?',
    answer:
      'A CDN (Content Delivery Network) is a network of distributed servers that deliver content to users based on their geographic location. The main benefit is faster load times by serving assets from a nearby server, reducing latency. CDNs also help reduce server load, handle traffic spikes, and improve reliability and security.',
    code: '',
    hint: 'Think edge caching and geographic distribution.',
    expanded:
      'When a user requests content, a CDN routes that request to the nearest edge node, serving static assets like images, CSS, and JavaScript files more quickly than a centralized origin server could. CDNs can also handle DDoS protection, TLS termination, and caching strategies that enhance both performance and scalability.',
    tags: ['cdn', 'performance', 'caching', 'delivery', 'networking'],
    reference: [
      {
        label: 'Cloudflare: What is a CDN?',
        url: 'https://www.cloudflare.com/learning/cdn/what-is-a-cdn/',
      },
      {
        label: 'MDN: Content Delivery Network',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/CDN',
      },
    ],
  },

  // Design Patterns ----------------------------------------

  {
    id: 'design-p-1',
    categoryId: 'design-patterns',
    question:
      'Why are global and static objects considered "evil"? Can you show it with a code example?',
    answer:
      'Global and static objects can lead to tightly coupled code, make testing difficult, and increase the risk of name collisions or unintended side effects. They can also be modified from anywhere, which makes behavior harder to predict. For example:\n\n```js\nvar globalConfig = { theme: "dark" };\n\nfunction render() {\n  console.log(globalConfig.theme);\n}\n```\n\nThis makes it hard to isolate and test `render()`, since it depends on a global. A better approach would be to pass the config as an argument.',
    code: '',
    hint: 'Think about scope, coupling, and testability. ',
    expanded:
      'Using global or static objects means that state is shared and accessible from anywhere in the application. This can introduce hidden dependencies, unexpected mutations, and makes unit testing harder because you can’t isolate behavior. Instead, it’s better to use dependency injection or modular patterns to manage state and access.',
    tags: [
      'design-patterns',
      'global-scope',
      'static-objects',
      'testability',
      'coupling',
    ],
    reference: [
      {
        label: 'MDN Web Docs: Global objects',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/Global_object',
      },
      {
        label: 'StackOverflow: Why is using global variables bad?',
        url: 'https://stackoverflow.com/questions/484635/are-global-variables-bad',
      },
    ],
  },
  {
    id: 'design-p-2',
    categoryId: 'design-patterns',
    question:
      'Tell me about Inversion of Control and how it improves the design of code.',
    answer:
      'Inversion of Control (IoC) is a design principle where the control of object creation and the flow of a program is inverted—from being handled by your own code to being managed by an external framework or component. This improves modularity and makes code easier to maintain, test, and extend.',
    code: '',
    hint: 'Think about control flow and who is responsible for what.',
    expanded:
      'Instead of your code manually managing dependencies or execution flow, IoC delegates that responsibility. A common form of IoC is Dependency Injection (DI), where objects are given their dependencies rather than creating them internally. This decouples components, promotes reusability, and makes unit testing easier by allowing mock implementations to be injected.',
    tags: [
      'design-patterns',
      'inversion-of-control',
      'dependency-injection',
      'architecture',
      'testability',
    ],
    reference: [
      {
        label: 'Martin Fowler: Inversion of Control',
        url: 'https://martinfowler.com/bliki/InversionOfControl.html',
      },
      {
        label: 'Wikipedia: Inversion of Control',
        url: 'https://en.wikipedia.org/wiki/Inversion_of_control',
      },
    ],
  },
  {
    id: 'design-p-3',
    categoryId: 'design-patterns',
    question:
      'The Law of Demeter (the Principle of Least Knowledge) states that each unit should have only limited knowledge about other units and it should only talk to its immediate friends (sometimes stated as "don\'t talk to strangers"). Would you write code violating this principle, show why it is a bad design and then fix it?',
    answer:
      'A violation of the Law of Demeter looks like this:\n\n```js\nuser.getProfile().getSettings().getTheme();\n```\n\nThis is bad design because it exposes the internal structure of objects and creates tight coupling between components. If any part of that chain changes, the code breaks. A better approach:\n\n```js\nuser.getTheme();\n```\n\nNow `user` encapsulates the traversal and provides a clear, stable interface.',
    code: '',
    hint: 'Think about chaining vs direct responsibility.',
    expanded:
      'The Law of Demeter promotes low coupling and better encapsulation by discouraging objects from navigating through the internals of other objects. When you "reach through" multiple layers to get data, your code becomes fragile and harder to maintain. Instead, expose necessary methods at the top level of each object and delegate internally. This reduces dependencies and makes objects easier to reuse and test.',
    tags: [
      'design-patterns',
      'law-of-demeter',
      'encapsulation',
      'coupling',
      'clean-code',
    ],
    reference: [
      {
        label: 'Wikipedia: Law of Demeter',
        url: 'https://en.wikipedia.org/wiki/Law_of_Demeter',
      },
      {
        label: 'StackOverflow: Law of Demeter example',
        url: 'https://stackoverflow.com/questions/4361242/what-is-the-law-of-demeter',
      },
      {
        label: 'Medium: Law of Demeter example',
        url: 'https://medium.com/vattenfall-tech/the-law-of-demeter-by-example-fd7adbf0c324',
      },
    ],
  },
  {
    id: 'design-p-4',
    categoryId: 'design-patterns',
    question:
      'Active-Record is the design pattern that promotes objects to include functions such as Insert, Update, and Delete, and properties that correspond to the columns in some underlying database table. In your opinion and experience, which are the limits and pitfalls of this pattern?',
    answer:
      'Active-Record tightly couples domain logic with database operations, which can lead to challenges in complex applications. It can make unit testing harder because business logic is mixed with persistence code. Also, it may not handle complex queries or relationships well, leading to bloated models and less flexibility.',
    code: '',
    hint: 'Think coupling, testability, and model bloat.',
    expanded:
      'While Active-Record is simple and convenient for CRUD operations, it mixes data access and business logic, violating separation of concerns. This can make the code harder to maintain, especially as applications grow in complexity. It often leads to "fat models" with too many responsibilities. Alternatives like Data Mapper patterns or Repository patterns can help decouple business logic from database details.',
    tags: [
      'design-patterns',
      'active-record',
      'separation-of-concerns',
      'testing',
      'database',
    ],
    reference: [
      {
        label: 'Martin Fowler: Active Record',
        url: 'https://martinfowler.com/eaaCatalog/activeRecord.html',
      },
      {
        label: 'StackOverflow: Active Record vs Data Mapper',
        url: 'https://stackoverflow.com/questions/4295217/active-record-vs-data-mapper',
      },
      {
        label: 'This dudes Blog: Active Record',
        url: 'https://www.yegor256.com/2016/07/26/active-record.html',
      },
    ],
  },
  {
    id: 'design-p-5',
    categoryId: 'design-patterns',
    question:
      'Data-Mapper is a design pattern that promotes the use of a layer of Mappers that moves data between objects and a database while keeping them independent of each other and the mapper itself. On the contrary, Active-Record objects directly incorporate operations for persisting themselves to a database, and properties corresponding to the underlying database tables. Do you have an opinion on those patterns? When would you use one instead of the other?',
    answer:
      'Active-Record is simpler and faster to implement, making it suitable for small to medium projects with straightforward CRUD needs. Data-Mapper provides better separation of concerns, making it ideal for complex domains, better testability, and when business logic must be decoupled from persistence.',
    code: '',
    hint: 'Think simplicity vs separation of concerns.',
    expanded:
      'Active-Record mixes data and behavior, which is convenient but can cause issues as complexity grows. Data-Mapper abstracts database interactions into a separate layer, allowing domain models to focus purely on business logic. Use Active-Record for simpler apps or rapid development, and Data-Mapper when you need flexibility, easier testing, or work with complex data relationships.',
    tags: [
      'design-patterns',
      'active-record',
      'data-mapper',
      'separation-of-concerns',
      'architecture',
    ],
    reference: [
      {
        label: 'Thoughtful Code: Data Mapper vs Active Record',
        url: 'https://www.thoughtfulcode.com/orm-active-record-vs-data-mapper/',
      },
      {
        label: 'Martin Fowler: Data Mapper',
        url: 'https://martinfowler.com/eaaCatalog/dataMapper.html',
      },
      {
        label: 'Martin Fowler: Active Record',
        url: 'https://martinfowler.com/eaaCatalog/activeRecord.html',
      },
    ],
  },
  {
    id: 'design-p-6',
    categoryId: 'design-patterns',
    question:
      "Many state that, in Object-Oriented Programming, composition is often a better option than inheritance. What's your opinion?",
    answer:
      'Composition favors building complex objects by combining simpler ones, promoting greater flexibility and reuse compared to inheritance, which creates tight coupling between parent and child classes. Composition allows changing behavior at runtime by swapping components, avoids problems like the fragile base class, and leads to more maintainable and modular code.',
    code: '',
    hint: 'Think flexibility, coupling, and reuse.',
    expanded:
      'Inheritance can lead to rigid hierarchies and tight coupling, making changes difficult and risking unintended side effects when parent classes change. Composition, by assembling behavior from smaller, reusable components, encourages loose coupling and better encapsulation. It enables easier testing and extension since components can be replaced or modified independently without affecting unrelated parts of the system.',
    tags: [
      'design-patterns',
      'oop',
      'composition',
      'inheritance',
      'code-maintainability',
    ],
    reference: [
      {
        label: 'Geeks for Geeks: Composition over Inheritance',
        url: 'https://www.geeksforgeeks.org/java/favoring-composition-over-inheritance-in-java-with-examples/',
      },
      {
        label: 'Stack Overflow: Composition vs inheritance',
        url: 'https://stackoverflow.com/questions/49002/prefer-composition-over-inheritance',
      },
    ],
  },
  {
    id: 'design-p-7',
    categoryId: 'design-patterns',
    question: 'What is an Anti-corruption Layer?',
    answer:
      'An Anti-corruption Layer (ACL) is a design pattern used to create a boundary between two different systems or bounded contexts, translating and adapting communication to prevent external systems from corrupting the internal domain model.',
    code: '',
    hint: 'Think integration, isolation, and translation between systems.',
    expanded:
      'The ACL acts as a protective barrier when integrating with legacy systems, third-party services, or other bounded contexts that have different models or assumptions. It translates data and operations between systems, allowing each to evolve independently without leaking unwanted complexity or inconsistencies. This improves maintainability and reduces coupling across system boundaries.',
    tags: [
      'design-patterns',
      'integration',
      'bounded-context',
      'anti-corruption-layer',
      'system-design',
    ],
    reference: [
      {
        label: 'Medium: Anti-Corruption Layer',
        url: 'https://medium.com/solutions-architecture-patterns/anti-corruption-layer-pattern-bd75e1f2be7f',
      },
      {
        label: 'Microsoft Docs: Anti-Corruption Layer',
        url: 'https://docs.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer',
      },
    ],
  },
  {
    id: 'design-p-8',
    categoryId: 'design-patterns',
    question:
      'Singleton is a design pattern that restricts the instantiation of a class to one single object. Writing a Thread-Safe Singleton class is not so obvious. Would you try?',
    answer:
      'A Singleton ensures only one instance of a class exists and provides a global access point to it. Thread safety means ensuring this property holds even when multiple threads attempt to create an instance simultaneously. In JavaScript, because it runs single-threaded, thread safety isn’t usually a concern, but in multi-threaded environments (like Java or C#), you need synchronization techniques.',
    code: 'public class Singleton {\n  private static volatile Singleton instance;\n  private Singleton() {}\n\n  public static Singleton getInstance() {\n    if (instance == null) {\n      synchronized(Singleton.class) {\n        if (instance == null) {\n          instance = new Singleton();\n        }\n      }\n    }\n    return instance;\n  }\n}',
    hint: 'Think instance control and thread synchronization.',
    expanded:
      'To write a thread-safe Singleton, you typically use locking mechanisms to ensure only one thread can create the instance at a time. The above example uses double-checked locking in Java to ensure lazy initialization with minimal synchronization overhead. In JavaScript, a module pattern or closure is typically sufficient due to its single-threaded runtime.',
    tags: [
      'design-patterns',
      'singleton',
      'thread-safety',
      'concurrency',
      'instantiation',
    ],
    reference: [
      {
        label: 'Wikipedia: Singleton Pattern',
        url: 'https://en.wikipedia.org/wiki/Singleton_pattern',
      },
      {
        label: 'Medium: Thread safe Singleton',
        url: 'https://medium.com/@cancerian0684/singleton-design-pattern-and-how-to-make-it-thread-safe-b207c0e7e368',
      },
    ],
  },
  {
    id: 'design-p-9',
    categoryId: 'design-patterns',
    question:
      'The ability to change implementation without affecting clients is called Data Abstraction. Produce an example violating this property, then fix it.',
    answer:
      'Violating data abstraction means clients depend directly on implementation details, making changes risky. Below is an example of violating this principle, followed by a corrected version that preserves abstraction.',
    code: '// Violating abstraction\nclass User {\n  constructor() {\n    this.details = { name: "Alice", age: 30 };\n  }\n}\n\nconst user = new User();\nconsole.log(user.details.name); // Client accesses internal structure directly\n\n//Preserving abstraction\nclass User {\n  constructor() {\n    this._details = { name: "Alice", age: 30 };\n  }\n\n  getName() {\n    return this._details.name;\n  }\n}\n\nconst user = new User();\nconsole.log(user.getName()); // Client uses abstraction, internal structure can change',
    hint: 'Think about hiding internal details behind methods.',
    expanded:
      'Data abstraction hides internal details, exposing only what clients need. This decouples clients from internal changes, making the code more maintainable. Violating this means clients depend on specific data shapes or properties, so refactoring breaks them. Using getter methods or interfaces preserves abstraction and flexibility.',
    tags: [
      'design-patterns',
      'data-abstraction',
      'encapsulation',
      'oop',
      'design-principles',
    ],
    reference: [
      {
        label: 'Wikipedia: Data Abstraction',
        url: 'https://en.wikipedia.org/wiki/Abstraction_(computer_science)',
      },
      {
        label: 'MDN: Object-Oriented Programming',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS',
      },
    ],
  },
  {
    id: 'design-p-10',
    categoryId: 'design-patterns',
    question:
      "Write a snippet of code violating the Don't Repeat Yourself (DRY) principle. Then, fix it.",
    answer:
      'Violating the DRY principle means duplicating logic or data in multiple places, which increases maintenance costs and the risk of bugs. Here’s an example of repeated logic, followed by a refactored version using a reusable function.',
    code: '// Violating DRY\nfunction getUserGreeting(user) {\n  return "Hello, " + user.firstName + " " + user.lastName;\n}\n\nfunction getUserFullName(user) {\n  return user.firstName + " " + user.lastName;\n}\n\n// Fixing DRY\nfunction getFullName(user) {\n  return user.firstName + " " + user.lastName;\n}\n\nfunction getUserGreeting(user) {\n  return "Hello, " + getFullName(user);\n}',
    hint: 'Look for repeated logic that could be extracted into a function.',
    expanded:
      'The DRY principle encourages reusing logic by extracting it into functions or modules. Repeating the same logic in multiple places makes code harder to maintain. In this example, the user’s full name was computed twice in different ways. By creating a single `getFullName()` function, you reduce duplication and improve maintainability.',
    tags: ['design-patterns', 'dry', 'clean-code', 'refactoring'],
    reference: [
      {
        label: 'Wikipedia: DRY Principle',
        url: 'https://en.wikipedia.org/wiki/Don%27t_repeat_yourself',
      },
      {
        label: 'Geeks for Geeks: DRY',
        url: 'https://www.geeksforgeeks.org/software-engineering/dont-repeat-yourselfdry-in-software-development/',
      },
    ],
  },
  {
    id: 'design-p-11',
    categoryId: 'design-patterns',
    question: 'How would you deal with Dependency Hell?',
    answer:
      'Dependency Hell arises when managing dependencies becomes complex due to version conflicts, incompatible updates, or deeply nested dependencies causing errors and failures.',
    code: '',
    hint: 'Think version conflicts, lockfiles, and modularization.',
    expanded:
      'To handle Dependency Hell, you can:\n' +
      '- Use package managers with lockfiles (like npm’s package-lock.json or yarn.lock) to ensure consistent dependency versions.\n' +
      '- Follow semantic versioning carefully to avoid breaking changes.\n' +
      '- Use deduplication tools and resolution overrides to flatten dependencies.\n' +
      '- Modularize code to limit dependency exposure.\n' +
      '- Adopt monorepos with tools like Lerna or Nx for shared dependency control.\n' +
      '- Regularly audit and update dependencies, testing thoroughly.\n' +
      '- Use containerization (e.g., Docker) to isolate environments and dependencies per project.',
    tags: [
      'dependency-management',
      'package-management',
      'npm',
      'yarn',
      'versioning',
      'dependency-hell',
    ],
    reference: [
      {
        label: 'npm Docs: package-lock.json',
        url: 'https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json',
      },
      {
        label: 'Yarn Docs: Resolutions',
        url: 'https://classic.yarnpkg.com/en/docs/selective-version-resolutions/',
      },
      {
        label: 'Medium: Dependency Hell',
        url: 'https://mandhan.medium.com/dependency-hell-79097a5d312f/',
      },
    ],
  },
  {
    id: 'design-p-12',
    categoryId: 'design-patterns',
    question:
      'Is goto evil? You may have heard of the famous paper "Go To Statement Considered Harmful" by Edsger Dijkstra, in which he criticized the use of the goto statement and advocated structured programming instead. The use of “GOTO” has always been controversial, so much that even Dijkstra\'s letter was criticized with articles such as "\'GOTO Considered Harmful\' Considered Harmful". What\'s your opinion on the use of GOTO?',
    answer:
      'The `goto` statement is generally discouraged because it can make code harder to read, reason about, and maintain. It breaks the structured flow of control, leading to "spaghetti code".',
    code: '',
    hint: 'Think about readability, maintainability, and structured flow.',
    expanded:
      'GOTO was once a common control structure, but overuse led to unpredictable and tangled code flows. Dijkstra’s criticism highlighted that structured alternatives like loops and conditionals make code more reliable and easier to understand.\n\nHowever, there are rare cases (such as in low-level programming, error handling in C, or optimizing performance-critical code) where `goto` can be justified.\n\nIn modern high-level languages like JavaScript, `goto` isn’t even supported, and structured constructs offer cleaner and safer alternatives. Overall, while not inherently evil, `goto` is usually a sign of poor design in higher-level programming.',
    tags: [
      'goto',
      'structured-programming',
      'control-flow',
      'code-quality',
      'best-practices',
    ],
    reference: [
      {
        label: 'Edsger W. Dijkstra: Go To Statement Considered Harmful',
        url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      },
      {
        label: 'Wikipedia: Goto',
        url: 'https://en.wikipedia.org/wiki/Goto',
      },
    ],
  },
  {
    id: 'design-p-13',
    categoryId: 'design-patterns',
    question:
      'The robustness principle is a general design guideline for software that recommends "be conservative in what you send, be liberal in what you accept". It is often re-worded as "be a tolerant reader and a careful writer". Would you like to discuss the rationale of this principle?',
    answer:
      'The robustness principle encourages developers to write code that communicates clearly and consistently while being flexible when interpreting inputs from others. This helps ensure systems remain interoperable even when one party is slightly non-compliant.',
    code: '',
    hint: 'Think about interoperability, fault tolerance, and graceful degradation.',
    expanded:
      'This principle originated in the context of network protocol design, where systems often had to interact with imperfect implementations. By being strict about what your software emits (e.g. well-formed data, standardized formats) and forgiving about what it receives (e.g. allowing optional fields or variations), you increase the chances of smooth communication across systems.\n\nHowever, some criticize this principle for potentially encouraging bad behavior in others—accepting invalid input may hide bugs. Therefore, it’s important to strike a balance: tolerate variation without allowing violations that could cause security issues or propagate broken data.',
    tags: [
      'design-principles',
      'robustness-principle',
      'interoperability',
      'fault-tolerance',
      'best-practices',
    ],
    reference: [
      {
        label: 'Wikipedia: Robustness principle',
        url: 'https://en.wikipedia.org/wiki/Robustness_principle',
      },
      {
        label: 'IETF RFC 1122',
        url: 'https://datatracker.ietf.org/doc/html/rfc1122#section-1.2.2',
      },
    ],
  },
  {
    id: 'design-p-14',
    categoryId: 'design-patterns',
    question:
      'Separation of Concerns is a design principle for separating a computer program into distinct areas, each one addressing a separate concern. There are a lot of different mechanisms for achieving Separation of Concerns (use of objects, functions, modules, or patterns such as MVC and the like). Would you discuss this topic?',
    answer:
      'Separation of Concerns (SoC) is about organizing code so that each part of a system deals with one specific responsibility. This makes software easier to develop, test, maintain, and scale.',
    code: '',
    hint: 'Think about modularity, readability, and maintainability.',
    expanded:
      'SoC helps reduce complexity by dividing a system into distinct sections, each with a single, well-defined role. For example, in web development, HTML handles structure, CSS handles styling, and JavaScript handles behavior—each concern is separated.\n\nCommon methods to achieve SoC include:\n- Functions to isolate logic.\n- Classes and objects to encapsulate behavior.\n- Modules to separate reusable units of code.\n- Architectural patterns like MVC (Model-View-Controller), where:\n  - The Model handles data and business logic,\n  - The View handles the UI,\n  - The Controller handles user input.\n\nGood SoC promotes cleaner codebases, makes onboarding easier, and allows teams to work in parallel without stepping on each other’s toes.',
    tags: [
      'design-patterns',
      'separation-of-concerns',
      'architecture',
      'modularity',
      'best-practices',
    ],
    reference: [
      {
        label: 'Wikipedia: Separation of concerns',
        url: 'https://en.wikipedia.org/wiki/Separation_of_concerns',
      },
      {
        label: 'Geeks for Geeks: Structuring your project',
        url: 'https://www.geeksforgeeks.org/software-engineering/separation-of-concerns-soc/',
      },
    ],
  },

  // Code Design -------------------------------

  {
    id: 'code-design-1',
    categoryId: 'code-design',
    question:
      'It is often said that one of the most important goals in Object-Oriented Design (and code design in general) is to have High Cohesion and Loose Coupling. What does it mean? Why is it that important and how is it achieved?',
    answer:
      'High cohesion means a component or class focuses on a single task or responsibility. Loose coupling means components or classes have minimal dependencies on each other. Together, they lead to modular, maintainable, and testable code.',
    code: '',
    hint: 'Focus on modular responsibilities and minimal interdependence.',
    expanded:
      'High cohesion ensures that the responsibilities of a component are tightly related, making the component easier to understand and maintain. Loose coupling minimizes the impact of changes by reducing dependencies between components.\n\nBenefits of high cohesion and loose coupling include:\n- Easier testing and debugging\n- Greater code reuse\n- Faster onboarding for new developers\n- Lower risk of introducing bugs when making changes\n\nHow to achieve it:\n- Use clear, single-purpose classes and functions (e.g., Single Responsibility Principle)\n- Use interfaces or abstractions to separate implementation from usage\n- Apply dependency injection instead of hardcoding dependencies\n- Favor composition over inheritance\n\nFor example, rather than having one large class that manages both user data and rendering, split it into separate classes: one for user logic, one for UI logic.',
    tags: [
      'code-design',
      'cohesion',
      'coupling',
      'oop',
      'modularity',
      'best-practices',
    ],
    reference: [
      {
        label: 'Wikipedia: Cohesion (computer science)',
        url: 'https://en.wikipedia.org/wiki/Cohesion_(computer_science)',
      },
      {
        label: 'Wikipedia: Coupling (computer programming)',
        url: 'https://en.wikipedia.org/wiki/Coupling_(computer_programming)',
      },
    ],
  },
  {
    id: 'code-design-2',
    categoryId: 'code-design',
    question: "Why do array indexes start with '0' in most languages?",
    answer:
      'Array indexing starts at 0 in most programming languages for historical and performance reasons. It aligns with how memory is addressed in low-level languages like C, where the index is treated as an offset from the start of the array.',
    code: '',
    hint: 'Think about how memory and pointers work in low-level languages.',
    expanded:
      "When arrays are implemented at a low level, they are blocks of contiguous memory. The index is used as an offset from the starting address of the array. So:\n\n`array[0]` = start of the array (`base_address + 0 * element_size`)\n\nIf arrays started at 1, you'd need to subtract 1 from the index internally, adding overhead and complexity. This zero-based indexing is efficient and consistent with pointer arithmetic, which is why it became the standard in many languages influenced by C.",
    tags: [
      'arrays',
      'indexing',
      'memory',
      'low-level-concepts',
      'performance',
      'code-design',
    ],
    reference: [
      {
        label: 'Geeks for Geeks: Why do arrays start from zero?',
        url: 'https://www.geeksforgeeks.org/dsa/why-array-index-starts-from-zero/',
      },
      {
        label: 'Wikipedia: Zero-based numbering',
        url: 'https://en.wikipedia.org/wiki/Zero-based_numbering',
      },
    ],
  },
  {
    id: 'code-design-3',
    categoryId: 'code-design',
    question: 'How do tests and TDD influence code design?',
    answer:
      'Tests—and especially Test-Driven Development (TDD)—encourage writing modular, loosely coupled, and well-encapsulated code. They influence design by requiring code to be easily testable, which naturally leads to better separation of concerns and smaller, single-responsibility components.',
    code: '',
    hint: 'Think about testability, modularity, and feedback loops.',
    expanded:
      'TDD guides development by writing tests before implementation, which helps define clear expectations for what the code should do. This leads to smaller units of functionality and encourages practices like dependency injection, interface segregation, and decoupling.\n\nAs a result, codebases tend to be more maintainable, easier to refactor, and better documented through tests. However, over-emphasis on testability can sometimes lead to over-abstraction or unnatural design decisions, so balance is key.',
    tags: [
      'tdd',
      'testing',
      'modularity',
      'clean-code',
      'code-design',
      'separation-of-concerns',
    ],
    reference: [
      {
        label: 'Martin Fowler: TDD and Design',
        url: 'https://martinfowler.com/bliki/TestDrivenDevelopment.html',
      },
      {
        label: 'Geeks for Geeks: TDD',
        url: 'https://www.geeksforgeeks.org/software-engineering/test-driven-development-tdd/',
      },
    ],
  },
  {
    id: 'code-design-4',
    categoryId: 'code-design',
    question:
      "Write a snippet of code violating the Don't Repeat Yourself (DRY) principle. Then, explain why it is a bad design, and fix it.",
    answer:
      'Violating the DRY principle means duplicating logic in multiple places. This makes maintenance harder and increases the chance of bugs when changes are needed. Here’s an example:',
    code: '// Repeating logic (violates DRY)\nfunction getAdminEmails(users) {\n  return users.filter(u => u.role === "admin").map(u => u.email);\n}\n\nfunction getAdminUsernames(users) {\n  return users.filter(u => u.role === "admin").map(u => u.username);\n}\n\n// DRY version\nfunction getAdmins(users) {\n  return users.filter(u => u.role === "admin");\n}\n\nfunction getAdminEmails(users) {\n  return getAdmins(users).map(u => u.email);\n}\n\nfunction getAdminUsernames(users) {\n  return getAdmins(users).map(u => u.username);\n}',
    hint: 'Look for repeated filtering logic or transformation.',
    expanded:
      'In the original code, the same filtering logic is repeated in two places. If the criteria for identifying an admin changes, you’d have to update both places, increasing maintenance overhead and the likelihood of errors. By centralizing shared logic into a single function (`getAdmins`), we reduce duplication and make the code more maintainable and expressive.',
    tags: ['dry', 'clean-code', 'code-design', 'refactoring'],
    reference: [
      {
        label: 'Wikipedia: Don’t Repeat Yourself',
        url: 'https://en.wikipedia.org/wiki/Don%27t_repeat_yourself',
      },
      {
        label: 'Geeks for Geeks: DRY Principle',
        url: 'https://www.geeksforgeeks.org/software-engineering/dont-repeat-yourselfdry-in-software-development/',
      },
    ],
  },
  {
    id: 'code-design-5',
    categoryId: 'code-design',
    question: "What's the difference between cohesion and coupling?",
    answer:
      'Cohesion refers to how closely related and focused the responsibilities of a single module are. Coupling describes how dependent modules are on each other.',
    code: '',
    hint: 'Think about internal unity vs. external dependency.',
    expanded:
      'High cohesion means a module does one thing well and its internal parts work together toward a common purpose. Low cohesion often indicates a module is trying to do too many unrelated things. Loose coupling means modules interact through well-defined interfaces and don’t rely heavily on each other’s internal details. Tightly coupled code is harder to maintain, test, and reuse. Ideally, strive for high cohesion and loose coupling to improve code readability, flexibility, and maintainability.',
    tags: ['code-design', 'cohesion', 'coupling', 'architecture', 'clean-code'],
    reference: [
      {
        label: 'Geeks for Geeks: Coupling and Cohesion',
        url: 'https://www.geeksforgeeks.org/software-engineering/software-engineering-coupling-and-cohesion/',
      },
      {
        label: 'Medium: Understanding Cohesion',
        url: 'https://medium.com/@ravipatel.it/understanding-cohesion-in-software-engineering-8fefc017de5c',
      },
    ],
  },
  {
    id: 'code-design-6',
    categoryId: 'code-design',
    question: 'What is refactoring useful for?',
    answer:
      'Refactoring is the process of restructuring existing code without changing its external behavior. It’s useful for improving the internal structure, readability, and maintainability of code.',
    code: '',
    hint: 'It doesn’t change what the code does, only how it’s written.',
    expanded:
      'Refactoring helps developers clean up messy or overly complex code, reduce duplication, improve naming and modularity, and make future changes easier. It supports better testing, debugging, and onboarding of new team members. Refactoring should be done in small steps, ideally alongside tests that ensure behavior stays the same. While it doesn’t add new features, it lays the groundwork for building features more reliably.',
    tags: ['code-design', 'refactoring', 'clean-code', 'maintenance'],
    reference: [
      {
        label: 'Martin Fowler: Refactoring',
        url: 'https://martinfowler.com/books/refactoring.html',
      },
      {
        label: 'Geeks for Geeks: Refactoring',
        url: 'https://www.geeksforgeeks.org/software-engineering/refactoring-introduction-and-its-techniques/',
      },
    ],
  },
  {
    id: 'code-design-7',
    categoryId: 'code-design',
    question:
      'Are comments in code useful? Some say they should be avoided as much as possible, and hopefully made unnecessary. Do you agree?',
    answer:
      'Comments can be useful, but they should not replace clean, self-explanatory code. Ideally, your code should be clear enough that comments are rarely needed.',
    code: '',
    hint: 'Consider why the code needs a comment in the first place.',
    expanded:
      'Comments are helpful when they explain “why” something is done, especially when the reasoning is non-obvious or business-driven. However, excessive comments or ones that explain “what” the code is doing (when the code is already readable) can become noise. Worse, outdated comments can mislead developers. Clean code, with good naming, modular functions, and clear logic, reduces the need for comments. In general: prefer code that doesn’t need comments, but don’t avoid comments when they clarify intent.',
    tags: ['code-design', 'comments', 'clean-code', 'documentation'],
    reference: [
      {
        label: 'Medium: Comments arent evil',
        url: 'https://dev.to/grantdotdev/code-comments-are-not-evil-20o9',
      },
      {
        label: 'StackOverflow: Are comments in code a bad practice?',
        url: 'https://stackoverflow.com/questions/184618/what-is-the-role-of-comments-in-code',
      },
    ],
  },
  {
    id: 'code-design-8',
    categoryId: 'code-design',
    question: 'What is the difference between design and architecture?',
    answer:
      'Design and architecture are both concerned with structuring software, but they differ in scale and abstraction. Architecture refers to the high-level structure and fundamental choices of a system, while design focuses on lower-level implementation details within that architecture.',
    code: '',
    hint: 'Think of architecture as the blueprint and design as the construction plan for each room.',
    expanded:
      'Software architecture deals with the major components, their responsibilities, and how they interact. It involves decisions like choosing microservices vs. monolith, defining layers (UI, business logic, data), and technology stacks. Design, on the other hand, focuses on classes, methods, algorithms, patterns, and object relationships within a component. Architecture is harder to change once in place, so it emphasizes scalability, maintainability, and robustness. Good design supports the architecture by making it easier to evolve and maintain.',
    tags: [
      'code-design',
      'architecture',
      'software-design',
      'system-structure',
    ],
    reference: [
      {
        label: 'Geeks for Geeks: Architecture vs Design',
        url: 'https://www.geeksforgeeks.org/system-design/difference-between-software-design-and-software-architecture/',
      },
      {
        label: 'Medium: Software Design and Architecture',
        url: 'https://medium.com/@concisesoftware/whats-the-difference-between-software-architecture-and-design-b705c2584631',
      },
    ],
  },
  {
    id: 'testing-1',
    categoryId: 'testing',
    question: 'In TDD, why are tests written before code?',
    answer:
      'Writing tests before code helps clarify requirements, define expected behavior upfront, and guide the development process. It ensures the code you write is directly aimed at passing the tests, promoting simpler, more focused implementations.',
    code: '',
    hint: 'Think about “Red-Green-Refactor” and how tests drive design.',
    expanded:
      'In Test-Driven Development (TDD), writing tests first encourages developers to think about the desired functionality and edge cases before implementation. This approach leads to better designed, more modular, and testable code. It also provides immediate feedback when changes break functionality, reducing bugs and regression issues. The TDD cycle — write a failing test (red), write code to pass it (green), then refactor — helps maintain code quality and prevents over-engineering.',
    tags: ['testing', 'tdd', 'test-driven-development', 'code-quality'],
    reference: [
      {
        label: 'Kent Beck: Test Driven Development',
        url: 'https://www.agilealliance.org/glossary/tdd/',
      },
      {
        label: 'Medium: TDD before coding',
        url: 'https://medium.com/@ferrohardian/tdd-write-tests-before-the-actual-code-b61f50142918',
      },
    ],
  },
  {
    id: 'design-p-11',
    categoryId: 'design-patterns',
    question:
      'C++ supports multiple inheritance, and Java allows a class to implement multiple interfaces. What impact does using these facilities have on orthogonality? Is there a difference in impact between using multiple inheritance and multiple interfaces? Is there a difference between using delegation and using inheritance?',
    answer:
      'Using multiple inheritance or multiple interfaces increases flexibility in composing behaviors but affects orthogonality differently. Multiple inheritance can introduce complexity and ambiguity (e.g., the diamond problem), potentially reducing orthogonality by creating tightly coupled and interdependent hierarchies. Multiple interfaces promote orthogonality by allowing classes to adopt multiple contracts without sharing implementation, keeping concerns separated and reducing coupling.',
    code: '',
    hint: 'Consider coupling, reuse, and code complexity differences between inheritance, interfaces, and delegation.',
    expanded:
      'Orthogonality means components can be changed independently without unexpected side effects. Multiple inheritance may violate this by intertwining behaviors and state, making the system harder to understand and maintain. Interfaces preserve orthogonality by separating "what" from "how", allowing independent implementations.\n\nDelegation differs from inheritance in that objects explicitly forward tasks to helper objects rather than inheriting behavior. Delegation promotes composition over inheritance, encouraging loose coupling, greater flexibility, and more modular, orthogonal designs that avoid the complexity of deep inheritance trees.',
    tags: [
      'design-patterns',
      'inheritance',
      'interfaces',
      'delegation',
      'orthogonality',
      'oop',
    ],
    reference: [
      {
        label: 'Medium: Orthogonality',
        url: 'https://medium.com/aimonks/orthogonality-in-programming-and-software-engineering-4991366f8a91',
      },
      {
        label: 'Geeks for Geeks: Multiple Inheritance using Interfaces JAVA',
        url: 'https://www.geeksforgeeks.org/java/how-to-implement-multiple-inheritance-by-using-interfaces-in-java/',
      },
    ],
  },
  {
    id: 'design-p-12',
    categoryId: 'design-patterns',
    question:
      'What are the pros and cons of holding domain logic in Stored Procedures?',
    answer:
      'Storing domain logic in Stored Procedures means placing business rules and operations directly inside the database layer rather than in application code.',
    code: '',
    hint: 'Think about performance, maintainability, and separation of concerns.',
    expanded:
      'Pros include improved performance due to execution close to the data, reduced network traffic, and potential for centralized logic that multiple applications can reuse. Stored Procedures can also encapsulate complex queries and enforce data integrity.\n\nCons involve tight coupling between business logic and the database, making it harder to version, test, and maintain. It can reduce portability across different database systems and lead to difficulties in scaling and deploying changes independently from the application code. Debugging and source control can also be more challenging compared to application-level logic.',
    tags: [
      'design-patterns',
      'stored-procedures',
      'domain-logic',
      'database',
      'performance',
      'maintainability',
    ],
    reference: [
      {
        label: 'Medium: Pros and cons stored procedures',
        url: 'https://medium.com/@chanukasuboth1/stored-procedures-advantages-and-disadvantages-c0aa2d50004b',
      },
      {
        label: 'Stored Procedures: Advantages and Disadvantages',
        url: 'https://www.geeksforgeeks.org/sql/advantages-and-disadvantages-of-using-stored-procedures-sql/',
      },
    ],
  },
  {
    id: 'design-p-13',
    categoryId: 'design-patterns',
    question:
      'In your opinion, why has Object-Oriented Design dominated the market for so many years?',
    answer:
      'Object-Oriented Design (OOD) has dominated because it naturally models real-world entities and relationships, making it intuitive and accessible for developers and stakeholders. It promotes code reuse through inheritance and composition, encapsulates data and behavior, and supports modular, maintainable, and extensible systems.',
    code: '',
    hint: 'Consider how OOD relates to problem modeling and software scalability.',
    expanded:
      'OOD aligns well with human thinking by representing software as interacting objects with clear responsibilities, which simplifies complex system design. Its principles like encapsulation, inheritance, and polymorphism encourage reusable and flexible code. The availability of mature languages, tools, and design patterns has reinforced its dominance. Moreover, OOD facilitates team collaboration by promoting clear interfaces and modular components, which is critical in large projects. While newer paradigms exist, OOD’s deep ecosystem and proven effectiveness have kept it central in software engineering.',
    tags: [
      'design-patterns',
      'object-oriented-design',
      'software-engineering',
      'modularity',
      'code-reuse',
      'scalability',
    ],
    reference: [
      {
        label: 'Object-Oriented Design - Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Object-oriented_design',
      },
      {
        label: 'Medium: Why OOP Still Relevant',
        url: 'https://medium.com/@itcgroup.io/is-object-oriented-programming-oop-still-relevant-today-3b67260acf2e',
      },
    ],
  },
  {
    id: 'design-p-14',
    categoryId: 'design-patterns',
    question: 'What would you do to understand if your code has a bad design?',
    answer:
      'To determine if your code has a bad design, look for common symptoms like high coupling, low cohesion, duplicated code, lack of modularity, poor readability, and difficulty in testing or extending the code.',
    code: '',
    hint: 'Consider maintainability, readability, testability, and flexibility.',
    expanded:
      'Bad design often manifests as code that is hard to change, understand, or reuse. Signs include large monolithic functions or classes, frequent code duplication, tight dependencies between modules, and violation of design principles like SOLID. Tools like code reviews, static analysis, and design metrics (e.g., cyclomatic complexity, code smells) help identify problems. Regular refactoring and adherence to design best practices can prevent or fix bad design.',
    tags: [
      'design-patterns',
      'code-quality',
      'maintainability',
      'refactoring',
      'code-smells',
    ],
    reference: [
      {
        label: 'Code Smells - Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Code_smell',
      },
      {
        label: 'Writing bad code',
        url: 'https://crocoblock.com/blog/writing-clean-code-tips/',
      },
    ],
  },

  // Languages -----------------

  {
    id: 'languages-1',
    categoryId: 'languages',
    question: 'Tell me the 3 worst defects of your preferred language.',
    answer:
      'Every programming language has its drawbacks, including my preferred one. Here are three common defects often cited:',
    code: '// Example for JavaScript\n// 1. Dynamic typing can lead to runtime errors\nlet value = "10";\nvalue = value + 5; // Results in "105" (string concatenation)\n\n// 2. Lack of true integer types can cause precision issues\nconst largeNumber = 9007199254740991 + 1;\nconsole.log(largeNumber); // May not behave as expected\n\n// 3. Asynchronous programming model complexity\nfetch("url").then(response => response.json())\n  .catch(err => console.error(err));\n',
    hint: 'Think about language quirks, runtime behavior, and developer experience.',
    expanded:
      "Dynamic typing, while flexible, can cause bugs that are hard to detect early. JavaScript's numeric precision limits may lead to unexpected results with large integers. Also, handling asynchronous code requires understanding of promises or async/await, which can add complexity. These defects are balanced by language strengths like flexibility and ubiquity, but awareness helps write better code.",
    tags: ['languages', 'javascript', 'language-defects', 'programming'],
    reference: [
      {
        label: 'Geeks for Geeks: JavaScript advantages & disadvantages',
        url: 'https://www.geeksforgeeks.org/javascript/advantages-and-disadvantages-of-javascript/',
      },
      {
        label: 'Web Developers: Javascript limitations',
        url: 'https://www.webdevelopersjournal.com/javascript-limitations/',
      },
    ],
  },
  {
    id: 'languages-2',
    categoryId: 'languages',
    question: 'Why is there a rising interest in Functional Programming?',
    answer:
      'Functional Programming (FP) emphasizes pure functions, immutability, and declarative code, making programs easier to test, reason about, and maintain. Its principles help avoid side effects and promote predictability.',
    code: '// Example of a pure function in JavaScript\nfunction add(a, b) {\n  return a + b;\n}\n\n// This function is pure: no side effects, same output for same input\nconsole.log(add(2, 3)); // 5\n',
    hint: 'Think about state management, side effects, and predictability.',
    expanded:
      'As software systems grow more complex and multi-threaded, avoiding side effects and managing shared state becomes increasingly important. FP’s focus on immutability and stateless functions aligns well with modern development challenges, such as building reliable UI components or working with concurrency. Libraries like Redux and frameworks like React encourage a more functional style, further driving interest. Additionally, FP concepts help reduce bugs and improve modularity, making it a popular paradigm for modern developers.',
    tags: [
      'functional-programming',
      'languages',
      'paradigms',
      'immutability',
      'side-effects',
    ],
    reference: [
      {
        label: 'Dev: Functional programming',
        url: 'https://dev.to/alexmercedcoder/deep-dive-into-functional-programming-in-javascript-851',
      },
      {
        label: 'Geeks for Geeks: Functional Programming ',
        url: 'https://www.geeksforgeeks.org/javascript/functional-programming-in-javascript/',
      },
    ],
  },
  {
    id: 'languages-3',
    categoryId: 'languages',
    question:
      'What is a closure, and what is it useful for? What’s in common between closures and classes?',
    answer:
      'A closure is a function that retains access to its lexical scope even when executed outside of that scope. It’s useful for encapsulating state, creating private variables, and building factory functions.',
    code: '// Closure example\nfunction makeCounter() {\n  let count = 0;\n  return function () {\n    return ++count;\n  };\n}\n\nconst counter = makeCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n',
    hint: 'Closures can be used to preserve state without using global variables.',
    expanded:
      'Closures allow functions to “remember” variables from their surrounding scope. This makes them powerful for managing state in a controlled, encapsulated way—similar to how classes manage state with private fields. Both closures and classes support encapsulation: closures via lexical scope, and classes via object instances. However, closures are generally lighter-weight and are often used in functional programming patterns, while classes provide a formal structure for creating objects and behavior in object-oriented programming.',
    tags: [
      'closures',
      'functions',
      'lexical-scope',
      'classes',
      'encapsulation',
      'javascript',
    ],
    reference: [
      {
        label: 'MDN: Closures',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
      },
      {
        label: 'JavaScript.info: Closures',
        url: 'https://javascript.info/closure',
      },
    ],
  },
  {
    id: 'languages-4',
    categoryId: 'languages',
    question: 'What are generics useful for?',
    answer:
      'Generics allow you to create reusable, type-safe code that works with a variety of data types without sacrificing type safety.',
    code: '// TypeScript generic function example\nfunction identity<T>(arg: T): T {\n  return arg;\n}\n\nconst num = identity<number>(42);\nconst str = identity<string>("hello");',
    hint: 'Think about how you might avoid repeating similar code for different types.',
    expanded:
      'Generics are a feature of statically typed languages like TypeScript, Java, or C# that enable functions, classes, and interfaces to operate on a variety of types without rewriting code for each one. They help ensure type safety by allowing the compiler to catch type mismatches at compile time. This improves code maintainability, reusability, and documentation. Without generics, developers would need to use type `any` or create multiple versions of the same function for different types, which increases redundancy and risk of errors.',
    tags: [
      'generics',
      'type-safety',
      'typescript',
      'reusability',
      'code-design',
    ],
    reference: [
      {
        label: 'TypeScript Handbook: Generics',
        url: 'https://www.typescriptlang.org/docs/handbook/generics.html',
      },
      {
        label: 'Dev: Coding Generics',
        url: 'https://dev.to/chris_bertrand/coding-concepts---generics-34cf',
      },
    ],
  },
  {
    id: 'languages-5',
    categoryId: 'languages',
    question:
      'What are higher-order functions? What are they useful for? Write one, in your preferred language.',
    answer:
      'A higher-order function is a function that either takes one or more functions as arguments, returns a function, or both. They are useful for abstraction, reusability, and functional programming patterns like composition, currying, and callbacks.',
    code: '// JavaScript higher-order function example\nfunction repeat(n, action) {\n  for (let i = 0; i < n; i++) {\n    action(i);\n  }\n}\n\nrepeat(3, console.log); // Logs 0, 1, 2',
    hint: 'Think functions that work with or return other functions.',
    expanded:
      'Higher-order functions treat functions as first-class citizens, allowing them to be passed around like any other value. This enables powerful programming patterns such as callbacks (e.g., `setTimeout`, `map`, `filter`), decorators, and function composition. For example, `Array.prototype.map()` is a built-in higher-order function that transforms arrays by applying a function to each element. Using higher-order functions can lead to cleaner, more expressive, and reusable code.',
    tags: [
      'higher-order-functions',
      'functional-programming',
      'javascript',
      'first-class-functions',
      'abstraction',
    ],
    reference: [
      {
        label: 'MDN: First-class functions',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function',
      },
      {
        label: 'Eloquent JavaScript - Higher-Order Functions',
        url: 'https://eloquentjavascript.net/05_higher_order.html',
      },
    ],
  },
  {
    id: 'languages-6',
    categoryId: 'languages',
    question:
      'Write a loop, then transform it into a recursive function, using only immutable structures (i.e. avoid using variables). Discuss.',
    answer:
      'A loop often uses mutable variables (like counters or accumulators). Recursion can replace loops by carrying state through function parameters instead of mutation, aligning better with functional programming practices.',
    code: `// Loop version
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Recursive version using immutability
function printNums(n, limit) {
  if (n >= limit) return;
  console.log(n);
  printNums(n + 1, limit);
}

printNums(0, 5);`,
    hint: 'Pass state through parameters instead of using mutable variables.',
    expanded:
      'Using recursion with immutable structures encourages purity and reduces side effects. Each recursive call receives a new set of parameters rather than modifying shared state. This improves testability and avoids issues like race conditions. However, recursion can be less readable and may cause stack overflow if not optimized (e.g., with tail call optimization). In languages like JavaScript, iteration is often more efficient due to lack of guaranteed tail-call support.',
    tags: [
      'recursion',
      'functional-programming',
      'immutability',
      'loop-to-recursion',
      'javascript',
    ],
    reference: [
      {
        label: 'MDN: Recursion',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/Recursion',
      },
      {
        label: 'Eloquent JavaScript - Recursion',
        url: 'https://eloquentjavascript.net/03_functions.html#h_z9x9p2p6y7',
      },
    ],
  },
  {
    id: 'languages-7',
    categoryId: 'languages',
    question:
      'What does it mean when a language treats functions as first-class citizens?',
    answer:
      'It means functions in that language are treated like any other value—they can be assigned to variables, passed as arguments, and returned from other functions. This feature is fundamental to functional programming and allows for powerful abstractions and flexible code structures.',
    code: 'const sayHello = () => console.log("Hello");\n\nfunction runTwice(fn) {\n  fn();\n  fn();\n}\n\nrunTwice(sayHello); // Outputs "Hello" twice',
    hint: 'Think about using a function as a value.',
    expanded:
      'In a language where functions are first-class citizens, you can store them in data structures, assign them to variables, and pass them around like strings or numbers. This enables higher-order functions, callbacks, currying, and many other functional programming techniques. It also supports cleaner, more modular code by treating behavior as data.',
    tags: [
      'languages',
      'first-class-functions',
      'functional-programming',
      'higher-order',
      'javascript',
    ],
    reference: [
      {
        label: 'MDN: First-class functions',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function',
      },
      {
        label: 'Wikipedia: First-class function',
        url: 'https://en.wikipedia.org/wiki/First-class_function',
      },
    ],
  },
  {
    id: 'languages-8',
    categoryId: 'languages',
    question: 'Show me an example where an anonymous function can be useful.',
    answer:
      'Anonymous functions are useful when you need a function for a short period, usually as an argument to another function, without the need to name it. They help keep code concise and readable, especially for callbacks, event handlers, or immediately invoked function expressions (IIFEs).',
    code: 'const numbers = [1, 2, 3, 4, 5];\n\n// Using an anonymous function as a callback\nconst doubled = numbers.map(function(num) {\n  return num * 2;\n});\n\nconsole.log(doubled); // [2, 4, 6, 8, 10]',
    hint: 'Think about callbacks and inline functions.',
    expanded:
      'Anonymous functions let you define behavior right where it’s needed without cluttering the scope with a function name. They’re often used in functional programming patterns and event-driven code, allowing you to write short, inline functions that don’t require reuse elsewhere.',
    tags: ['languages', 'anonymous-functions', 'callbacks', 'javascript'],
    reference: [
      {
        label: 'MDN: Function expressions',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_expressions',
      },
      {
        label: 'Geeks for Geeks: Anonymous Functions',
        url: 'https://www.geeksforgeeks.org/javascript/what-is-a-typical-use-case-for-anonymous-functions-in-javascript/s',
      },
    ],
  },
  {
    id: 'languages-9',
    categoryId: 'languages',
    question:
      "There are a lot of different type systems. Let's talk about static and dynamic type systems, and about strong and weak ones. You surely have an opinion and a preference about this topic. Would you like to share about them, and discuss why and when would you promote one particular type system for developing an enterprise software?",
    answer:
      'Static type systems check types at compile time, catching many errors early before running the program. Dynamic type systems check types at runtime, offering flexibility but potentially more runtime errors. Strong typing enforces strict type rules and conversions, while weak typing allows implicit coercion that can lead to unpredictable behavior.',
    code: '// Static typing example (TypeScript)\nfunction add(a: number, b: number): number {\n  return a + b;\n}\n\n// Dynamic typing example (JavaScript)\nfunction add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(5, "10")); // "510" due to implicit coercion in JS',
    hint: 'Consider safety versus flexibility, and error detection timing.',
    expanded:
      'Static typing is often preferred in enterprise environments for its early error detection, better tooling (like autocomplete and refactoring), and clearer API contracts, which improve maintainability and collaboration. Dynamic typing favors rapid prototyping and flexibility but requires thorough testing to avoid runtime errors.\n\nStrong typing reduces bugs caused by unintended type coercion, making code more predictable. Weak typing can speed up development but risks subtle bugs.\n\nChoosing depends on project needs: safety and scalability favor static, strong typing; quick iteration and scripting may favor dynamic typing.',
    tags: [
      'languages',
      'type-systems',
      'static-typing',
      'dynamic-typing',
      'strong-typing',
      'weak-typing',
    ],
    reference: [
      {
        label: 'Static vs Dynamic Typing',
        url: 'https://en.wikipedia.org/wiki/Type_system#Static_and_dynamic_typing',
      },
      {
        label: 'NetGuru: Static vs Dynamic Typing',
        url: 'https://www.netguru.com/blog/static-vs-dynamic-typing',
      },
      {
        label: 'Site Point: Static, Dynamic Typing,x Weak and Strong',
        url: 'https://www.sitepoint.com/typing-versus-dynamic-typing/',
      },
    ],
  },
  {
    id: 'languages-10',
    categoryId: 'languages',
    question: 'What are namespaces useful for? Invent an alternative.',
    answer:
      'Namespaces provide a way to group and organize code entities (such as classes, functions, and variables) under a unique name to avoid naming collisions and improve modularity. They help maintain a clean global scope, especially in large codebases or when integrating multiple libraries.',
    code: '// Example of a namespace in TypeScript\nnamespace Geometry {\n  export function areaCircle(radius: number): number {\n    return Math.PI * radius * radius;\n  }\n}\n\nconsole.log(Geometry.areaCircle(5)); // 78.5398...',
    hint: 'Think about preventing naming conflicts in large projects.',
    expanded:
      'Without namespaces, different parts of a large program might use the same names for variables or functions, leading to conflicts and bugs. Namespaces logically group related code and clarify ownership.\n\nAn alternative approach could be to use module systems (like ES Modules) that isolate code within files and expose only selected parts. Another alternative is prefixing identifiers manually (e.g., using unique prefixes) or using object literals as containers to simulate namespaces.',
    tags: ['languages', 'namespaces', 'code-organization', 'modules', 'scope'],
    reference: [
      {
        label: 'MDN Web Docs: Namespaces',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/Namespace',
      },
      {
        label: 'Geeks for Geeks: Namespaces',
        url: 'https://www.geeksforgeeks.org/javascript/javascript-namespace/',
      },
    ],
  },
  {
    id: 'languages-11',
    categoryId: 'languages',
    question:
      'Talk about interoperability between Java and C# (in alternative, choose 2 other arbitrary languages).',
    answer:
      'Interoperability between Java and C# is challenging because they run on different virtual machines (JVM vs. CLR) and use different runtime environments. Directly calling C# code from Java or vice versa is not straightforward, requiring bridges or intermediate communication methods like web services, REST APIs, or message queues.\n\nSome tools and approaches to bridge these worlds include:\n- Using web services or REST APIs for communication over HTTP.\n- JNI (Java Native Interface) combined with C++ to interact with .NET code.\n- Projects like IKVM (a JVM implementation on .NET) that attempt to bridge bytecode compatibility.\n\nAlternative interoperability examples include Python and C integration, where Python can call C libraries via ctypes or Cython, enabling high performance and seamless extension of Python with C.',
    code: '',
    hint: 'Consider virtual machines, runtime differences, and communication bridges.',
    expanded:
      'Java and C# are both statically typed, object-oriented languages with similar syntax, but their ecosystems and runtimes differ. This divergence means interoperability usually happens through loosely coupled mechanisms (APIs, services) rather than direct code sharing.\n\nIn contrast, languages like Python and C have well-established interoperability using foreign function interfaces, allowing Python programs to leverage performant C code. Understanding these approaches helps design systems that integrate diverse technologies effectively.',
    tags: [
      'languages',
      'interoperability',
      'java',
      'csharp',
      'runtime',
      'integration',
    ],
    reference: [
      {
        label: 'Net Curu: Java vs C#',
        url: 'https://www.netguru.com/blog/java-vs-c-sharp',
      },
      {
        label: 'Microsoft Docs: .NET Interoperability',
        url: 'https://learn.microsoft.com/en-us/dotnet/standard/native-interop/',
      },
      {
        label: 'Digital Commons: Interoperability in Programming Languages',
        url: 'https://digitalcommons.morris.umn.edu/cgi/viewcontent.cgi?article=1014&context=horizons',
      },
    ],
  },
  {
    id: 'languages-12',
    categoryId: 'languages',
    question: 'Why do many software engineers not like Java?',
    answer:
      'Many developers criticize Java for its verbosity, boilerplate-heavy syntax, and sometimes slow compilation times. Its strict static typing and checked exceptions can lead to verbose error handling. Additionally, older versions of Java lacked modern language features, making the code less expressive compared to newer languages.',
    code: '',
    hint: 'Think about syntax verbosity, error handling, and language evolution.',
    expanded:
      'Java’s verbosity requires writing a lot of repetitive code for simple tasks, which can reduce developer productivity and readability. Checked exceptions, while designed for robustness, often lead to cluttered code due to mandatory try-catch blocks. Although Java has evolved significantly (e.g., lambdas in Java 8, records in Java 14+), some engineers feel it still lags behind more modern languages in expressiveness and developer ergonomics. Despite these critiques, Java remains popular due to its performance, ecosystem, and cross-platform capabilities.',
    tags: [
      'languages',
      'java',
      'verbosity',
      'static-typing',
      'developer-experience',
    ],
    reference: [
      {
        label: 'Medium: Why Java is unliked',
        url: 'https://medium.com/codex/why-java-was-loved-20-years-ago-and-disliked-today-ef45f7a53740',
      },
      {
        label: 'Medium: Why developers dislike Java',
        url: 'https://medium.com/codex/why-java-was-loved-20-years-ago-and-disliked-today-ef45f7a53740',
      },
    ],
  },
  {
    id: 'languages-13',
    categoryId: 'languages',
    question: 'What makes a good language good and a bad language bad?',
    answer:
      'A good programming language enables developers to write clear, efficient, and maintainable code with minimal effort, while a bad language introduces unnecessary complexity, ambiguity, or restrictions that hinder productivity and code quality.',
    code: '',
    hint: 'Consider readability, expressiveness, tooling, community, and learning curve.',
    expanded:
      'Good languages have clear syntax, powerful abstractions, strong tooling, and active communities, making development smoother and less error-prone. They balance performance, safety, and flexibility, allowing developers to focus on solving problems rather than language quirks. Bad languages often suffer from poor design choices like inconsistent syntax, lack of abstractions, insufficient tooling, or obscure error messages, which can frustrate developers and lead to buggy, hard-to-maintain code. Ultimately, a language’s goodness depends on how well it fits the problem domain and the developers’ needs.',
    tags: [
      'languages',
      'programming-languages',
      'language-design',
      'developer-experience',
    ],
    reference: [
      {
        label: 'Medium: Characteristics of a Good programming language',
        url: 'https://medium.com/@learnwithakshay/characteristics-of-good-programming-language-7163e554faec',
      },
      {
        label: 'CDG: What makes a good programming language',
        url: 'https://cdg.dev/tech/2019/08/what-makes-a-good-programming-language/',
      },
    ],
  },
  {
    id: 'languages-14',
    categoryId: 'languages',
    question:
      'Write two functions, one referentially transparent and the other one referentially opaque. Discuss.',
    answer:
      'Referential transparency means a function always returns the same output given the same input, without causing side effects. Referentially opaque functions may produce different results or have side effects, making reasoning harder.',
    code: `// Referentially transparent function
function add(a, b) {
  return a + b;
}

// Referentially opaque function
let counter = 0;
function increment() {
  counter += 1;
  return counter;
}`,
    hint: 'Think pure functions vs functions with side effects.',
    expanded:
      'The "add" function is referentially transparent because for any inputs a and b, it always returns the same result without modifying external state. This predictability helps with testing and reasoning about code. The "increment" function depends on and modifies an external variable "counter", making it referentially opaque — its output depends on external state and it causes side effects. Referential transparency is a key concept in functional programming, promoting safer and more maintainable code.',
    tags: [
      'languages',
      'functional-programming',
      'referential-transparency',
      'pure-functions',
      'side-effects',
    ],
    reference: [
      {
        label: 'Wikipedia: Referential Transparency',
        url: 'https://en.wikipedia.org/wiki/Referential_transparency',
      },
      {
        label: 'Geeks for Geeks: Pure Functions',
        url: 'https://www.geeksforgeeks.org/javascript/pure-functions-in-javascript/',
      },
    ],
  },
  {
    id: 'languages-15',
    categoryId: 'languages',
    question: "What is a stack and what is a heap? What's a stack overflow?",
    answer:
      'The stack and the heap are two areas of memory used for different purposes during program execution. The stack stores function calls, local variables, and control flow data in a last-in, first-out (LIFO) order. The heap is a larger, more flexible memory area used for dynamic memory allocation, where objects live until explicitly freed (or garbage collected). A stack overflow occurs when the stack exceeds its allocated size, often due to excessively deep or infinite recursion, causing a program crash or undefined behavior.',
    code: `// Example of stack usage:
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// Heap example: dynamically allocated objects
const obj = { name: "Alice", age: 30 }; // stored in heap`,

    hint: 'Think about memory management and function calls.',
    expanded:
      "The stack manages memory for function execution contexts: when a function is called, a stack frame with local variables and return address is pushed onto the stack, and popped off when the function returns. This makes stack allocation very fast but limited in size. The heap stores objects and data that need to persist beyond function calls or vary in size. A stack overflow happens if too many nested calls occur without returning, exhausting the stack's fixed size. Understanding the stack vs heap is key to grasping memory management and program performance.",
    tags: ['languages', 'memory-management', 'stack', 'heap', 'stack-overflow'],
    reference: [
      {
        label: 'Geeks for Geeks: Stack and Heap Memory',
        url: 'https://www.geeksforgeeks.org/javascript/memory-management-in-javascript/',
      },
      {
        label: 'Wikipedia: Stack Overflow',
        url: 'https://en.wikipedia.org/wiki/Stack_overflow',
      },
    ],
  },
  {
    id: 'languages-16',
    categoryId: 'languages',
    question:
      'Why is it important that in a language functions are first-class citizens?',
    answer:
      'Having functions as first-class citizens means functions can be treated like any other variable — assigned to variables, passed as arguments, returned from other functions, and stored in data structures. This enables powerful programming paradigms such as functional programming, higher-order functions, and callbacks, increasing code flexibility and expressiveness.',
    code: `// Example: passing a function as an argument
function greet(name) {
  return 'Hello, ' + name;
}

function sayHello(fn, name) {
  console.log(fn(name));
}

sayHello(greet, 'Alice'); // Hello, Alice`,

    hint: 'Think about functions as values and their flexible use.',
    expanded:
      'First-class functions allow programs to treat behavior as data, enabling concise, reusable, and modular code. They support callbacks, event handlers, functional composition, and declarative programming styles. Without this, many advanced and elegant coding techniques would be cumbersome or impossible, limiting language expressiveness and developer productivity.',
    tags: [
      'languages',
      'functions',
      'first-class-citizens',
      'functional-programming',
    ],
    reference: [
      {
        label: 'MDN: Functions as First-Class Objects',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#functions_as_first-class_objects',
      },
      {
        label: 'Wikipedia: First-Class Function',
        url: 'https://en.wikipedia.org/wiki/First-class_function',
      },
    ],
  },
  {
    id: 'languages-17',
    categoryId: 'languages',
    question:
      'Some languages, especially the ones that promote a functional approach, allow a technique called pattern matching. Do you know it? How is pattern matching different from switch clauses?',
    answer:
      'Pattern matching is a powerful control structure found in functional languages (and some modern multi-paradigm languages) that allows checking a value against a series of patterns and executing code based on which pattern matches. Unlike traditional switch statements, pattern matching can destructure complex data types, perform deep comparisons, and bind variables within patterns, making it more expressive and concise.',
    code: `// Example of pattern matching in JavaScript (using hypothetical syntax)
/*
match (value) {
  case { type: 'circle', radius }:
    console.log('Circle with radius', radius);
    break;
  case { type: 'square', size }:
    console.log('Square with size', size);
    break;
  default:
    console.log('Unknown shape');
}
*/

// Equivalent switch statement is limited to simple value checks
switch (shape.type) {
  case 'circle':
    console.log('Circle with radius', shape.radius);
    break;
  case 'square':
    console.log('Square with size', shape.size);
    break;
  default:
    console.log('Unknown shape');
}`,
    hint: 'Think about matching complex data structures and extracting values.',
    expanded:
      'Switch statements typically compare simple values (e.g., numbers or strings) for equality and execute corresponding code blocks. Pattern matching goes beyond this by enabling matching of complex data shapes (like tuples, lists, or objects), supporting nested and conditional patterns, and allowing direct extraction of values within the matched pattern. This leads to clearer, less error-prone, and more expressive code, especially in handling algebraic data types common in functional programming.',
    tags: [
      'languages',
      'pattern-matching',
      'switch',
      'functional-programming',
      'control-structures',
    ],
    reference: [
      {
        label: 'Medium: Pattern Matching',
        url: 'https://lokesh-prajapati.medium.com/a-new-era-for-javascript-pattern-matching-unveiled-8f00980210b1',
      },
      {
        label: 'MDN: switch statement',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch',
      },
    ],
  },
  {
    id: 'languages-18',
    categoryId: 'languages',
    question:
      'Why do some languages have no exceptions by design? What are the pros and cons?',
    answer:
      'Some languages avoid exceptions altogether to simplify error handling and promote explicit, predictable control flow. Instead of exceptions, they use alternative mechanisms like return codes, option types, or result objects to represent errors. This design aims to make error handling more visible and manageable, reducing hidden side effects.',
    code: `// Example in Rust using Result type instead of exceptions

fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err(String::from("Division by zero"))
    } else {
        Ok(a / b)
    }
}

match divide(4.0, 0.0) {
    Ok(result) => println!("Result: {}", result),
    Err(e) => println!("Error: {}", e),
}`,
    hint: 'Consider control flow, readability, and error visibility.',
    expanded:
      'Pros of no-exception design include clearer control flow, as all errors must be explicitly handled; better compiler checks for unhandled errors; and avoiding unexpected runtime crashes caused by uncaught exceptions. However, it can lead to verbose code, requiring manual error checking after every operation. In contrast, exceptions simplify propagating errors up the call stack but can obscure control flow and cause hidden bugs if not carefully managed.',
    tags: [
      'languages',
      'error-handling',
      'exceptions',
      'control-flow',
      'rust',
      'design-decisions',
    ],
    reference: [
      {
        label: 'DEV: Errors are not Exceptional',
        url: 'https://dev.to/swyx/errors-are-not-exceptional-1g0b',
      },
      {
        label: 'Stack Overflow: Why some languages do not have exceptions',
        url: 'https://stackoverflow.com/questions/4619446/why-do-some-languages-not-have-exceptions',
      },
    ],
  },
  {
    id: 'languages-19',
    categoryId: 'languages',
    question: 'If Cat is an Animal, is TakeCare<Cat> a TakeCare<Animal>?',
    answer:
      'Not necessarily. This is a question of *variance* in generic types—specifically, whether `TakeCare<Cat>` can be used where `TakeCare<Animal>` is expected. The answer depends on how the type system handles generics: covariant, contravariant, or invariant.',
    code: `// TypeScript example (generics are invariant by default)
class Animal {
  speak() { console.log("Animal speaks"); }
}

class Cat extends Animal {
  meow() { console.log("Meow"); }
}

class TakeCare<T> {
  subject: T;
  constructor(subject: T) {
    this.subject = subject;
  }
}

const catCare = new TakeCare<Cat>(new Cat());
const animalCare: TakeCare<Animal> = catCare; // Error in most languages unless explicitly allowed
`,
    hint: 'This relates to generics and type variance (covariance, contravariance, invariance).',
    expanded:
      'In most statically typed languages like Java and TypeScript, generics are *invariant* by default. That means `TakeCare<Cat>` is **not** considered a subtype of `TakeCare<Animal>`, even though `Cat` is a subtype of `Animal`. Covariance would allow this substitution, but only if the generic is read-only (like `List<? extends Animal>` in Java). Contravariance works in reverse: `TakeCare<Animal>` could be used as `TakeCare<Cat>` only if the generic is write-only. This prevents type errors that can arise from writing the wrong type into a container.',
    tags: [
      'generics',
      'variance',
      'type-systems',
      'inheritance',
      'oop',
      'typescript',
      'java',
    ],
    reference: [
      {
        label: 'TypeScript Handbook: Generics',
        url: 'https://www.typescriptlang.org/docs/handbook/2/generics.html',
      },
      {
        label: 'Geeks for Geeks: Java Generics and Variance',
        url: 'https://www.geeksforgeeks.org/java/variance-in-java/',
      },
    ],
  },
  {
    id: 'languages-20',
    categoryId: 'languages',
    question:
      'In Java, C# and many other languages, why are constructors not part of the interface?',
    answer:
      'Constructors are not included in interfaces because interfaces define a contract for behavior, not instantiation. Interfaces describe what an object can do, not how it is created.',
    code: `// Java-style example
interface Animal {
  void speak();
}

class Dog implements Animal {
  public Dog() {
    // Constructor logic
  }

  public void speak() {
    System.out.println("Woof");
  }
}

// The interface does not (and cannot) declare: Dog()
`,
    hint: 'Interfaces are about behavior, while constructors are about object creation.',
    expanded:
      'Interfaces in Java, C#, and similar languages are meant to define capabilities or behaviors that a class must implement. They are not concerned with how objects are created, which is what constructors handle. Including constructors would break abstraction and make interfaces harder to decouple from specific implementations. Object creation is typically handled through patterns like dependency injection or factories, keeping interfaces clean and focused only on what objects *do*, not how they are built.',
    tags: [
      'interfaces',
      'oop',
      'constructors',
      'abstraction',
      'java',
      'csharp',
      'design-principles',
    ],
    reference: [
      {
        label: 'Geeks for Geeks: Java Interface',
        url: 'https://www.geeksforgeeks.org/interfaces-in-java/',
      },
      {
        label: 'Microsoft Learn: Interface (C# Reference)',
        url: 'https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface',
      },
    ],
  },
  {
    id: 'languages-21',
    categoryId: 'languages',
    question:
      "In the last years there has been a lot of hype around Node.js. What's your opinion on using a language that was initially conceived to run in the browser in the backend?",
    answer:
      "Using JavaScript on the backend via Node.js offers several advantages, including a unified language across the stack, a vibrant ecosystem, and strong performance for I/O-bound tasks. However, JavaScript's original design for front-end scripting brings challenges when applied to server-side needs, such as lack of static typing and limited concurrency models.",
    code: `// Node.js example: simple HTTP server
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello from Node.js backend!');
});

server.listen(3000);`,
    hint: 'Consider performance, developer experience, and ecosystem.',
    expanded:
      'Node.js made JavaScript viable on the backend by introducing an event-driven, non-blocking I/O model, which is ideal for scalable network applications. It enables full-stack development with a single language, reducing context switching and enabling code reuse (e.g., validation logic). Its massive npm ecosystem also accelerates development. However, JavaScript’s lack of type safety and historical single-threaded model can pose maintainability and performance concerns for CPU-bound or enterprise-scale applications. Tools like TypeScript and worker threads help mitigate these drawbacks.',
    tags: [
      'nodejs',
      'javascript',
      'backend',
      'full-stack',
      'event-loop',
      'typescript',
      'ecosystem',
    ],
    reference: [
      {
        label: 'Node.js Official Docs',
        url: 'https://nodejs.org/en/docs',
      },
      {
        label: 'Mozilla Developer Network: Introduction to Node.js',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework',
      },
    ],
  },
  {
    id: 'languages-22',
    categoryId: 'languages',
    question:
      "Pretend you have a time machine and the opportunity to go to a particular point in time during Python's development. What would you try to convince its core architects to do differently?",
    answer:
      "If I could go back in time during Python's evolution, I would advocate for earlier implementation of true multithreading support and a more efficient runtime for CPU-bound tasks. Specifically, I would ask the core team to rethink the Global Interpreter Lock (GIL) or provide an alternative path for true parallelism.",
    code: `# Example of Python's threading bottleneck
import threading

def task():
    for _ in range(10**6):
        pass

threads = [threading.Thread(target=task) for _ in range(4)]
for t in threads:
    t.start()
for t in threads:
    t.join()

# Despite using 4 threads, GIL prevents true parallel CPU execution`,
    hint: 'Focus on concurrency and performance limitations in Python.',
    expanded:
      "The Global Interpreter Lock (GIL) limits Python's ability to utilize multiple CPU cores in standard CPython, which makes it less ideal for high-performance, CPU-bound applications. While Python shines in readability, rapid development, and flexibility, its concurrency model has long been a known pain point. Removing the GIL or redesigning Python with better native concurrency support (as seen in languages like Go or Rust) could have made Python more viable for system-level programming and heavy computational tasks.",
    tags: [
      'python',
      'language-design',
      'gil',
      'concurrency',
      'performance',
      'interpreters',
    ],
    reference: [
      {
        label: 'Geeks for Geeks: Disadvantages of Python',
        url: 'https://www.geeksforgeeks.org/python/disadvantages-of-python/',
      },
      {
        label: 'Netguru: Python Pros and Cons',
        url: 'https://www.netguru.com/blog/python-pros-and-cons',
      },
    ],
  },

  // Web Development ----------------------------------
  {
    id: 'webdev-1',
    categoryId: 'web-development',
    question:
      'Why are first-party cookies and third-party cookies treated so differently?',
    answer:
      'First-party cookies are created by the website a user is directly visiting, while third-party cookies are created by other domains (usually ad networks or analytics tools) embedded in the site. The key difference lies in privacy and control.',
    code: '',
    hint: 'Consider privacy concerns and browser policy changes.',
    expanded:
      'First-party cookies are generally considered safer because they are controlled by the domain the user is interacting with. They’re used for things like remembering login status or preferences. In contrast, third-party cookies can track users across many sites, leading to concerns over surveillance and privacy violations. As a result, browsers like Safari and Firefox have blocked third-party cookies by default, and Chrome is phasing them out. This shift is part of a broader effort to protect user privacy and give users more control over their data.',
    tags: [
      'cookies',
      'privacy',
      'first-party',
      'third-party',
      'web-development',
      'browser-security',
    ],
    reference: [
      {
        label: 'MDN Web Docs: HTTP cookies',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies',
      },
      {
        label: 'Tech Target: First vs Third-party Cookies',
        url: 'https://www.techtarget.com/searchcustomerexperience/tip/First-party-vs-third-party-cookies-Whats-the-difference',
      },
    ],
  },
  {
    id: 'webdev-2',
    categoryId: 'web-development',
    question: 'How would you manage Web Services API versioning?',
    answer:
      'API versioning is crucial for evolving your API without breaking existing clients. You can version APIs through the URL path, request headers, or query parameters. Each approach has trade-offs, but the goal is to ensure backward compatibility while allowing incremental improvements.',
    code: '',
    hint: 'Think about client compatibility and long-term maintainability.',
    expanded:
      'Common strategies include:\n\n- **URI Versioning** (e.g., `/api/v1/users`): Clear and simple, often preferred for public APIs.\n- **Header Versioning** (e.g., custom `Accept` header like `application/vnd.api+json;version=1`): Keeps URLs clean but can be harder to test/debug.\n- **Query Parameter Versioning** (e.g., `/users?version=1`): Easy to implement but less standard.\n\nBest practices include deprecating old versions with clear communication, providing change logs, and minimizing breaking changes. Good versioning allows different clients to coexist while your API evolves over time.',
    tags: ['api', 'versioning', 'web-services', 'rest', 'web-development'],
    reference: [
      {
        label: 'Microsoft Docs: API Versioning Best Practices',
        url: 'https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#versioning-a-restful-web-api',
      },
      {
        label: 'Postman: API Versioning best practices',
        url: 'https://www.postman.com/api-platform/api-versioning/',
      },
    ],
  },
  {
    id: 'webdev-3',
    categoryId: 'web-development',
    question:
      'From a backend perspective, are there any disadvantages or drawbacks on the adoption of Single Page Applications (SPAs)?',
    answer:
      'Yes, Single Page Applications (SPAs) introduce several backend-related challenges, especially when compared to traditional multi-page applications (MPAs). These include SEO limitations, more complex authentication flows, and a shift of rendering responsibility to the frontend.',
    code: '',
    hint: 'Think about authentication, SEO, and request/response handling.',
    expanded:
      'From a backend point of view, SPAs bring drawbacks such as:\n\n- **SEO Challenges**: Since content is rendered on the client side, it can be harder for search engine crawlers to index pages properly unless server-side rendering (SSR) or pre-rendering is used.\n- **Increased API Load**: SPAs rely heavily on APIs for fetching data. This increases the number of requests and may require more sophisticated rate limiting and caching.\n- **Authentication Complexity**: Handling tokens (like JWT) and protecting endpoints in SPAs often involves more complexity than session-based auth.\n- **Routing and Error Handling**: The frontend controls routing, so traditional HTTP status codes and redirects need special handling by the backend to cooperate with the SPA’s logic.\n- **Initial Load Time**: SPAs often require loading a large JavaScript bundle upfront, which can delay rendering unless backend and frontend teams coordinate optimizations.\n\nDespite these drawbacks, SPAs offer a smooth user experience. Backend developers must adapt to a more service-oriented, API-first mindset to support SPAs effectively.',
    tags: ['spa', 'web-development', 'backend', 'api', 'seo', 'authentication'],
    reference: [
      {
        label: 'MDN Web Docs: Single-page applications',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/SPA',
      },
      {
        label: 'Hacker News: SPAs',
        url: 'https://news.ycombinator.com/item?id=29781187',
      },
    ],
  },
  {
    id: 'webdev-4',
    categoryId: 'web-development',
    question:
      'Why do we usually put so much effort into having stateless services? What’s so good about stateless code, and why and when is statefulness bad?',
    answer:
      'Stateless services are simpler to scale, easier to test, and more resilient. By not relying on internal memory between requests, they avoid issues with concurrency, session management, and server affinity. Statelessness is especially useful in distributed systems like microservices or serverless environments.',
    code: '',
    hint: 'Think scalability, testability, and reliability.',
    expanded:
      'Stateless services treat every request as independent, containing all the information needed to process it. This approach offers several benefits:\n\n- **Scalability**: New instances can be added or removed without worrying about local memory/state synchronization.\n- **Resilience**: If one instance fails, another can take over without losing state.\n- **Simplicity**: Stateless logic is easier to reason about, test, and debug because the outcome of a request doesn’t depend on prior interactions.\n- **Load balancing**: Any server can handle any request without needing sticky sessions.\n\nStateful services can introduce challenges:\n- They require session persistence (often in memory or databases), which complicates horizontal scaling.\n- Failure recovery is harder if the state is lost.\n\n**When statefulness is needed**: For features like shopping carts, real-time collaboration, or user sessions, where continuity is required, state can be stored in external systems (e.g., Redis, databases) to preserve flexibility while keeping the core service stateless.',
    tags: [
      'stateless',
      'stateful',
      'scalability',
      'web-services',
      'architecture',
      'microservices',
    ],
    reference: [
      {
        label: 'REST API Tutorial: Statelessness',
        url: 'https://restfulapi.net/statelessness/',
      },
      {
        label: 'Martin Fowler: Microservice Trade-Offs',
        url: 'https://martinfowler.com/articles/microservice-trade-offs.html',
      },
      {
        label: 'Red Hat: Stateful vs Stateless',
        url: 'https://www.redhat.com/en/topics/cloud-native-apps/stateful-vs-stateless',
      },
    ],
  },
  {
    id: 'webdev-5',
    categoryId: 'web-development',
    question: 'What is REST and how does it work?',
    answer:
      'REST (Representational State Transfer) is an architectural style for designing networked applications. It uses standard HTTP methods to perform CRUD operations on resources, which are identified by URIs (Uniform Resource Identifiers).',
    code: '',
    hint: 'Think about resources, HTTP methods, and stateless interactions.',
    expanded:
      'REST is based on a set of principles that define how web standards like HTTP should be used:\n\n- **Resources**: Data is treated as resources (e.g., `/users/123`) that can be accessed and manipulated using URIs.\n- **HTTP Methods**: Common actions are mapped to HTTP verbs:\n  - `GET`: Retrieve a resource\n  - `POST`: Create a new resource\n  - `PUT`/`PATCH`: Update a resource\n  - `DELETE`: Remove a resource\n- **Statelessness**: Each request must contain all the information needed to understand and process it. The server does not store client context between requests.\n- **Representations**: Resources can be returned in multiple formats (usually JSON or XML).\n- **Uniform Interface**: A consistent structure across the API improves usability and understanding.\n\nRESTful APIs are widely adopted for their simplicity, scalability, and alignment with HTTP standards.',
    tags: [
      'rest',
      'web-development',
      'http',
      'api',
      'architecture',
      'stateless',
    ],
    reference: [
      {
        label: 'MDN Web Docs: REST APIs',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/REST',
      },
      {
        label: 'REST API Tutorial: What is REST?',
        url: 'https://restfulapi.net/',
      },
    ],
  },
  {
    id: 'webdev-6',
    categoryId: 'web-development',
    question: 'REST and SOAP: when would you choose one, and when the other?',
    answer:
      'REST and SOAP are both web service communication protocols, but they have different use cases. REST is simpler, more lightweight, and ideal for web-based, stateless, resource-oriented APIs. SOAP is more rigid and feature-rich, better suited for enterprise-level services where formal contracts, security, and ACID-compliance are critical.',
    code: '',
    hint: 'Compare flexibility and simplicity vs. features and robustness.',
    expanded:
      'REST (Representational State Transfer):\n- **Best for**: Public web APIs, mobile applications, microservices.\n- **Advantages**: Lightweight, uses standard HTTP methods, easily readable (usually JSON), cacheable, scalable.\n- **Drawbacks**: No built-in standard for security, transactions, or state.\n\nSOAP (Simple Object Access Protocol):\n- **Best for**: Enterprise applications, financial services, operations requiring high security and strict contracts.\n- **Advantages**: Built-in standards for security (WS-Security), ACID-compliant transactions, retry logic, and formal service contracts via WSDL.\n- **Drawbacks**: More verbose, relies on XML, more complex setup, not ideal for mobile or lightweight communication.\n\nChoose **REST** for performance and simplicity, especially in web and mobile apps. Choose **SOAP** when you need high reliability, strict contracts, or integration with legacy systems.',
    tags: [
      'rest',
      'soap',
      'api',
      'web-development',
      'enterprise',
      'protocols',
      'architecture',
    ],
    reference: [
      {
        label: 'MDN Web Docs: REST',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/REST',
      },
      {
        label: 'Geeks for Geeks: REST vs. SOAP APIs',
        url: 'https://www.geeksforgeeks.org/websites-apps/difference-between-rest-api-and-soap-api/',
      },
    ],
  },
  {
    id: 'webdev-7',
    categoryId: 'web-development',
    question:
      'In web development, Model-View Controller and Model-View-View-Model approaches are very common, both in the backend and in the frontend. What are they, and why are they advisable?',
    answer:
      'MVC and MVVM are architectural patterns that help organize code by separating concerns. They improve maintainability, scalability, and testability by dividing application logic into distinct layers: data (Model), user interface (View), and logic/control (Controller or ViewModel).',
    code: '',
    hint: 'Focus on separation of concerns and how each component communicates.',
    expanded:
      '**MVC (Model-View-Controller):**\n- **Model**: Represents the data and business logic.\n- **View**: Displays the data (UI).\n- **Controller**: Handles user input, updates the model, and selects the view.\n- **Used in**: Frameworks like Ruby on Rails, Express (Node), Laravel.\n\n**MVVM (Model-View-ViewModel):**\n- **Model**: Data and business logic.\n- **View**: UI elements.\n- **ViewModel**: Acts as a binding layer between the Model and View; handles presentation logic and data binding.\n- **Used in**: Frameworks like Angular, Vue, and Knockout.\n\n**Why advisable:**\n- Promotes **separation of concerns**, allowing developers to work independently on UI, logic, and data.\n- Makes applications more **testable and maintainable**.\n- Encourages **reusability** of components.\n\nChoose the right pattern based on your framework, team structure, and project complexity.',
    tags: [
      'mvc',
      'mvvm',
      'architecture',
      'frontend',
      'backend',
      'web-development',
      'design-patterns',
    ],
    reference: [
      {
        label: 'Microsoft Learn: Design patterns - MVC and MVVM',
        url: 'https://learn.microsoft.com/en-us/aspnet/mvc/overview/older-versions-1/overview/asp-net-mvc-overview',
      },
      {
        label: 'Geeks for Geeks: MCV and MVVM patterns',
        url: 'https://www.geeksforgeeks.org/android/difference-between-mvc-and-mvvm-architecture-pattern-in-android/',
      },
    ],
  },

  // Databases ---------------------------------------------

  {
    id: 'db-1',
    categoryId: 'databases',
    question:
      'How would you migrate an application from a database to another, for example from MySQL to PostgreSQL? If you had to manage that project, which issues would you expect to face?',
    answer:
      'Database migration involves transferring schema, data, and application logic from one system to another. A typical process includes assessing compatibility, exporting schema/data, transforming SQL dialects, testing, and deploying with validation.',
    code: '',
    hint: 'Think about schema differences, data types, SQL dialects, and testing.',
    expanded:
      'Migrating from MySQL to PostgreSQL requires careful planning and testing:\n\n**Steps:**\n1. **Assess differences** in data types, indexes, default behaviors (e.g., `AUTO_INCREMENT` vs `SERIAL`).\n2. Use tools like `pgloader` or `AWS DMS` to automate the migration.\n3. **Convert SQL dialects** and stored procedures/functions (PostgreSQL uses PL/pgSQL).\n4. Refactor application queries that are vendor-specific (e.g., `LIMIT`/`OFFSET` nuances, string comparisons, date/time functions).\n5. **Migrate schema**, then **migrate and validate data integrity**.\n6. Test all data access and business logic thoroughly.\n7. Set up replication or change data capture (CDC) for a smooth cutover, especially in production.\n\n**Challenges:**\n- Data type mismatches (e.g., `TINYINT(1)` in MySQL vs `BOOLEAN` in PostgreSQL).\n- SQL function differences.\n- Character encoding issues.\n- Performance tuning and index strategy might need to change.\n\nSuccessful migration often involves both DBAs and application developers working closely to identify incompatibilities early.',
    tags: [
      'databases',
      'migration',
      'mysql',
      'postgresql',
      'data-integrity',
      'schema-conversion',
    ],
    reference: [
      {
        label: 'Estuary: Step by step MySQL to PostgreSQL',
        url: 'https://estuary.dev/blog/mysql-to-postgresql/',
      },
      {
        label: 'Pgloader: Documentation',
        url: 'https://pgloader.io/',
      },
      {
        label: 'AWS DMS: Database Migration Service',
        url: 'https://aws.amazon.com/dms/',
      },
    ],
  },
  {
    id: 'db-2',
    categoryId: 'databases',
    question:
      'Why do databases treat null as a special case? For example, why does SELECT * FROM table WHERE field = null not match records with null field in SQL?',
    answer:
      'In SQL, `NULL` represents an unknown or missing value, not a concrete value like an empty string or zero. Comparisons involving `NULL` using `=` or `!=` will not return true because `NULL` is not equal to anything, not even itself.',
    code: '-- Incorrect: this will not match NULLs\nSELECT * FROM users WHERE email = NULL;\n\n-- Correct: use IS NULL\nSELECT * FROM users WHERE email IS NULL;',
    hint: 'Think of NULL as "unknown", and unknown values can’t be compared using standard operators.',
    expanded:
      'Databases treat `NULL` as a marker for "missing" or "unknown" information. Since it’s not a specific value, logical comparisons like `= NULL` or `!= NULL` do not work as expected. Instead, SQL uses `IS NULL` or `IS NOT NULL` to test for null values. This behavior ensures that queries behave consistently with the concept of unknown data—e.g., you can’t say two unknowns are equal because you don’t know what either is. This logic follows the rules of three-valued logic (true, false, unknown), which SQL uses when dealing with `NULL`.',
    tags: [
      'databases',
      'sql',
      'null',
      'three-valued-logic',
      'querying',
      'data-integrity',
    ],
    reference: [
      {
        label: 'PostgreSQL: NULLs and Three-Valued Logic',
        url: 'https://www.postgresql.org/docs/current/functions-comparison.html#FUNCTIONS-COMPARISON-NULL',
      },
      {
        label: 'Geeks for Geeks: NULL in SQL',
        url: 'https://www.geeksforgeeks.org/sql-null-values/',
      },
    ],
  },
  {
    id: 'db-3',
    categoryId: 'databases',
    question:
      'ACID is an acronym that refers to Atomicity, Consistency, Isolation and Durability, 4 properties guaranteed by a database transaction in most database engines. What do you know about this topic? Would you like to elaborate?',
    answer:
      'ACID is a set of properties that ensure reliable processing of database transactions. Each letter represents a key guarantee that prevents data corruption or inconsistency during operations.',
    code: '-- Example: Transferring money between two accounts\nBEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;',
    hint: 'Think about what ensures a transaction either fully completes or doesn’t affect the system at all.',
    expanded:
      'ACID stands for:\n- **Atomicity**: Transactions are all-or-nothing. If any part fails, the entire transaction is rolled back.\n- **Consistency**: Transactions move the database from one valid state to another, preserving all rules and constraints.\n- **Isolation**: Concurrent transactions don’t interfere with each other. Results are the same as if run sequentially.\n- **Durability**: Once a transaction commits, its changes are permanent—even in the case of system failure.\n\nThese guarantees are crucial in systems where data integrity matters, like banking, inventory, or reservation systems.',
    tags: [
      'databases',
      'acid',
      'transactions',
      'data-integrity',
      'reliability',
    ],
    reference: [
      {
        label: 'PostgreSQL Docs: Transactions and ACID',
        url: 'https://www.postgresql.org/docs/current/tutorial-transactions.html',
      },
      {
        label: 'Geeks for Geeks: ACID Properties in DBMS',
        url: 'https://www.geeksforgeeks.org/acid-properties-in-dbms/',
      },
    ],
  },
  {
    id: 'db-4',
    categoryId: 'databases',
    question:
      'How would you manage database schema migrations? That is, how would you automate changes to database schema, as the application evolves, version after version?',
    answer:
      'Database schema migrations are managed by applying incremental, versioned changes to the schema using migration scripts or tools that track which migrations have been applied.',
    code: '-- Example of a simple migration script (SQL)\nALTER TABLE users ADD COLUMN last_login TIMESTAMP;\n\n-- Using migration tools (e.g., with Node.js Sequelize CLI)\n// sequelize migration:generate --name add-last-login\n// sequelize db:migrate',
    hint: 'Think about version control for your database schema and rollback strategies.',
    expanded:
      'Schema migrations help evolve the database schema safely and predictably over time.\n\nCommon practices include:\n- Using migration files/scripts that describe changes (add/drop columns, indexes, tables).\n- Keeping track of applied migrations in a dedicated table to avoid reapplying.\n- Supporting forward and backward migrations (up/down) to apply or rollback changes.\n- Integrating migrations into the deployment process for automation.\n\nPopular tools: Liquibase, Flyway, Django Migrations, Rails ActiveRecord Migrations, Sequelize CLI.\n\nAutomating migrations reduces manual errors, keeps schema in sync with code, and supports team collaboration.',
    tags: ['databases', 'schema', 'migrations', 'automation', 'devops'],
    reference: [
      {
        label: 'Liquibase Documentation',
        url: 'https://www.liquibase.org/documentation/index.html',
      },
      {
        label: 'Bytebase: Database Migrations',
        url: 'https://www.bytebase.com/blog/how-to-handle-database-schema-change/',
      },
    ],
  },
  {
    id: 'db-5',
    categoryId: 'databases',
    question:
      'How is lazy loading achieved? When is it useful? What are its pitfalls?',
    answer:
      'Lazy loading is a technique where resources (e.g., related records or large blobs) are fetched only when needed rather than upfront, deferring data retrieval until it is actually required by the application.',
    code: '// Example: Lazy loading in ORM (e.g., Sequelize in Node.js)\nconst user = await User.findByPk(1);\n// Related posts are loaded only when requested\nconst posts = await user.getPosts();',
    hint: 'Think about optimizing performance by delaying data fetching.',
    expanded:
      'Lazy loading helps reduce initial database load and memory usage by fetching only necessary data. It is especially useful when dealing with large datasets or relations that may not always be accessed.\n\nPitfalls include:\n- Potentially increased number of database queries, leading to the "N+1 query problem".\n- Added complexity in code management.\n- Possible performance degradation if overused or improperly implemented.',
    tags: ['databases', 'lazy-loading', 'performance', 'orm', 'optimization'],
    reference: [
      {
        label: 'Martin Fowler: Lazy Load',
        url: 'https://martinfowler.com/eaaCatalog/lazyLoad.html',
      },
      {
        label: 'CloudFlare: Lazy Loading pros and cons',
        url: 'https://www.cloudflare.com/learning/performance/what-is-lazy-loading/',
      },
    ],
  },
  {
    id: 'db-6',
    categoryId: 'databases',
    question:
      'The so called "N + 1 problem" is an issue that occurs when code needs to load the children of a parent-child relationship with ORMs that have lazy-loading enabled, and that therefore issue a query for the parent record, and then one query for each child record. How to fix it?',
    answer:
      'The "N + 1 problem" happens when an ORM lazily loads related data by issuing one query to fetch parent records, then N additional queries for each parent’s children. This leads to performance bottlenecks due to excessive database calls.',
    code: '// Fix with eager loading (example with Sequelize):\nconst usersWithPosts = await User.findAll({\n  include: [Post] // loads posts together with users in a single query\n});',
    hint: 'Use eager loading or batch queries to minimize round-trips.',
    expanded:
      'To fix the N + 1 problem, use eager loading to fetch related records in a single query or a minimal number of queries. Most ORMs support this via "include", "join", or "fetch" options. This reduces database round-trips and improves performance.\n\nAlternatively, batch queries or manual joins can be used. However, eager loading must be balanced against fetching unnecessary data when relationships are large or rarely accessed.',
    tags: [
      'databases',
      'n+1-problem',
      'orm',
      'performance',
      'lazy-loading',
      'eager-loading',
    ],
    reference: [
      {
        label: 'Planet Scale: N+1 problem',
        url: 'https://planetscale.com/blog/what-is-n-1-query-problem-and-how-to-solve-it',
      },
      {
        label: 'Medium: N + 1 Problem explained',
        url: 'https://medium.com/databases-in-simple-words/the-n-1-database-query-problem-a-simple-expanded-and-solutions-ef11751aef8a',
      },
    ],
  },
  {
    id: 'db-7',
    categoryId: 'databases',
    question:
      'How would you find the most expensive queries in an application?',
    answer:
      'To find the most expensive queries, you can analyze query performance metrics using database-provided tools and logs that track execution time, resource usage, and frequency.',
    code: '',
    hint: 'Look for slow query logs, execution plans, and monitoring tools.',
    expanded:
      'Most database systems provide ways to identify expensive queries. For example, enabling slow query logs in MySQL or PostgreSQL captures queries exceeding a threshold time. You can also use EXPLAIN or EXPLAIN ANALYZE to see query execution plans and understand inefficiencies.\n\nAdditionally, database monitoring tools (like pg_stat_statements for PostgreSQL, or performance schema for MySQL) aggregate query statistics such as execution count, total time, and average time.\n\nProfiling queries helps prioritize optimization efforts, such as adding indexes or rewriting queries for better performance.',
    tags: [
      'databases',
      'query-optimization',
      'performance',
      'monitoring',
      'slow-queries',
    ],
    reference: [
      {
        label: 'Microsoft: Capturing expensive queries',
        url: 'https://learn.microsoft.com/en-us/answers/questions/1347095/what-is-the-right-way-of-capturing-expensive-queri',
      },
      {
        label: 'MySQL Documentation: Slow Query Log',
        url: 'https://dev.mysql.com/doc/refman/8.0/en/slow-query-log.html',
      },
    ],
  },
  {
    id: 'db-8',
    categoryId: 'databases',
    question:
      'In your opinion, is it always needed to use database normalization? When is it advisable to use denormalized databases?',
    answer:
      'Normalization is essential for reducing data redundancy and ensuring data integrity, but it is not always required. Denormalization can be advisable when performance optimization and faster read access are priorities.',
    code: '',
    hint: 'Consider trade-offs between data consistency and query performance.',
    expanded:
      'Database normalization organizes data into related tables to minimize duplication and maintain integrity, which simplifies updates and reduces anomalies.\n\nHowever, normalization can lead to complex joins and slower read performance in certain scenarios, such as in reporting, analytics, or high-read applications.\n\nDenormalization duplicates some data intentionally to speed up read queries and simplify data retrieval at the cost of increased storage and potential data inconsistency.\n\nChoosing normalization vs denormalization depends on use cases: transactional systems benefit from normalization, while analytical or caching layers may benefit from denormalization.',
    tags: [
      'databases',
      'normalization',
      'denormalization',
      'performance',
      'data-integrity',
    ],
    reference: [
      {
        label:
          'Geeks for Geeks: What is data normalization and why is it important',
        url: 'http://geeksforgeeks.org/dbms/what-is-data-normalization-and-why-is-it-important/',
      },
      {
        label: 'Airbyte: Data denormalization',
        url: 'https://airbyte.com/data-engineering-resources/data-denormalization',
      },
    ],
  },
  {
    id: 'db-9',
    categoryId: 'databases',
    question:
      "Continuous Integration's technique is called Blue-Green Deployment: it consists in having two production environments, as identical as possible, and in performing the deployment in one of them while the other one is still operating, and then in safely switching the traffic to the second one after some convenient testing. This technique becomes more complicated when the deployment includes changes to the database structure or content. Discuss this topic.",
    answer:
      'Blue-Green Deployment allows seamless releases with minimal downtime by switching traffic between two identical production environments. However, when database schema or data changes are involved, the process becomes more complex due to the need for data consistency and backward compatibility.',
    code: '',
    hint: 'Think about database migrations, compatibility, and rollback strategies.',
    expanded:
      'Deploying database changes during Blue-Green Deployment requires careful planning to maintain data integrity and system availability. Key considerations include:\n\n- Applying backward-compatible schema changes that support both old and new versions simultaneously (e.g., additive schema changes).\n- Using feature toggles to control the exposure of new features relying on database changes.\n- Running data migration scripts carefully in phases.\n- Planning rollback strategies that include reverting database and application code changes.\n- Coordinating closely between developers, DBAs, and ops teams.\n\nAutomation and extensive testing help reduce risks during this complex deployment process.',
    tags: [
      'databases',
      'blue-green-deployment',
      'database-migration',
      'continuous-integration',
      'release-management',
    ],
    reference: [
      {
        label: 'Martin Fowler: Blue-Green Deployment',
        url: 'https://martinfowler.com/bliki/BlueGreenDeployment.html',
      },
      {
        label: 'Database Migrations with Zero Downtime - ThoughtWorks',
        url: 'https://martinfowler.com/articles/evodb.html',
      },
    ],
  },

  // NoSQL -----------------------------------

  {
    id: 'nosql-1',
    categoryId: 'nosql',
    question: 'What is eventual consistency?',
    answer:
      'Eventual consistency is a consistency model used in distributed systems where updates to a data item will propagate to all nodes over time, and eventually, all replicas will reflect the same value. It does not guarantee immediate consistency after a write, but rather that the system will become consistent if no new updates are made.',
    code: '',
    hint: 'Think about distributed systems that prioritize availability over strict consistency.',
    expanded:
      'In systems like NoSQL databases (e.g., Amazon DynamoDB, Cassandra), availability and partition tolerance are prioritized (as per the CAP theorem). Eventual consistency allows these systems to handle high volumes of data and continue operating despite network partitions. However, it means that a read may temporarily return stale data until the system reaches a consistent state. This model is suitable for applications that can tolerate slight delays in consistency, such as social media feeds or shopping carts.',
    tags: [
      'nosql',
      'eventual-consistency',
      'distributed-systems',
      'cap-theorem',
      'consistency-models',
    ],
    reference: [
      {
        label: 'AWS: Eventual Consistency',
        url: 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html',
      },
      {
        label: 'Geeks for Geeks: Eventual vs Strong Consistency',
        url: 'https://www.geeksforgeeks.org/dbms/eventual-vs-strong-consistency-in-distributed-databases/',
      },
    ],
  },
  {
    id: 'nosql-2',
    categoryId: 'nosql',
    question:
      "Brewer's Theorem, most commonly known as the CAP theorem, states that in the presence of a network partition (the P in CAP), a system's designer has to choose between consistency (the C in CAP) and availability (the A in CAP). Can you think about examples of CP, AP and CA systems?",
    answer:
      "The CAP theorem says that in a distributed system, it's impossible to guarantee all three: Consistency, Availability, and Partition Tolerance simultaneously. Systems must choose two:\n\n- **CP (Consistency + Partition Tolerance)**: Prioritize accuracy over availability. If a network partition occurs, the system will reject requests rather than risk inconsistent data.\n- **AP (Availability + Partition Tolerance)**: Ensure availability even at the cost of consistency. Data might be temporarily inconsistent.\n- **CA (Consistency + Availability)**: Only achievable in systems that do not partition—typically centralized systems or those with strong network guarantees.",
    code: '',
    hint: 'Think about real-world distributed systems and what tradeoffs they make.',
    expanded:
      "**CP systems** (e.g., HBase, MongoDB in some configurations) ensure consistency and tolerate partitioning, but may become unavailable under network failure.\n\n**AP systems** (e.g., CouchDB, Cassandra, DynamoDB) prioritize uptime even during partitions, but might return stale or inconsistent data temporarily.\n\n**CA systems** (e.g., traditional relational databases like PostgreSQL or MySQL running on a single node) can provide consistency and availability because partition tolerance isn't required in a non-distributed setup. In truly distributed environments, CA is theoretically unachievable.",
    tags: [
      'nosql',
      'cap-theorem',
      'distributed-systems',
      'consistency',
      'availability',
      'partition-tolerance',
    ],
    reference: [
      {
        label: 'Geeks for Geeks: Understanding the CAP Theorem',
        url: 'https://www.geeksforgeeks.org/system-design/cap-theorem-in-system-design/',
      },
      {
        label: 'Medium: How to use CAP Theorem',
        url: 'https://medium.com/@hksrise/how-to-use-cap-theorem-to-choose-the-right-database-a-simple-guide-with-examples-4882d9f60311',
      },
    ],
  },
  {
    id: 'nosql-3',
    categoryId: 'nosql',
    question: 'How would you explain the recent rise in interest in NoSQL?',
    answer:
      'The rise of NoSQL is largely driven by the need for scalability, flexibility, and high availability in modern web and cloud applications. Traditional relational databases can struggle with horizontal scaling and dynamic data structures, which NoSQL databases handle more naturally.',
    code: '',
    hint: 'Think about modern app needs: speed, scale, and flexible schemas.',
    expanded:
      'NoSQL databases have gained popularity due to several factors:\n\n- **Scalability**: NoSQL databases are designed to scale out horizontally across distributed systems, making them suitable for large-scale applications.\n- **Flexible schemas**: They allow dynamic and nested data structures (e.g., JSON), which makes it easier to evolve applications over time.\n- **Performance**: For certain workloads (e.g., real-time analytics, caching, event logging), NoSQL can outperform traditional RDBMS.\n- **Big Data and cloud computing**: The growth of large-scale, cloud-native apps has created demand for databases that are optimized for distributed, unstructured, or semi-structured data.',
    tags: [
      'nosql',
      'scalability',
      'databases',
      'schema-design',
      'big-data',
      'modern-architecture',
    ],
    reference: [
      {
        label: 'MongoDB: NoSQL Explained',
        url: 'https://www.mongodb.com/nosql-explained',
      },
      {
        label: 'Geeks for Geeks: Advantages and Disadvantages of NoSQL',
        url: 'https://www.geeksforgeeks.org/data-engineering/what-are-the-advantages-and-disadvantages-of-using-sql-vs-nosql-databases/',
      },
    ],
  },
  {
    id: 'nosql-4',
    categoryId: 'nosql',
    question: 'How does NoSQL tackle scalability challenges?',
    answer:
      'NoSQL databases are designed to scale horizontally, meaning they can distribute data across multiple servers (nodes) instead of relying on a single powerful machine. This allows them to handle large volumes of traffic and data efficiently.',
    code: '',
    hint: 'Think about distributed systems and horizontal scaling.',
    expanded:
      'NoSQL databases handle scalability by embracing horizontal scaling—spreading data across a cluster of machines. This is often achieved using techniques such as **sharding** (partitioning data across nodes), **replication** (copying data to ensure fault tolerance), and **eventual consistency** models that trade strict consistency for high availability and partition tolerance. These approaches help systems grow elastically with demand and reduce bottlenecks, making NoSQL ideal for high-traffic, big data, and cloud-native applications.',
    tags: [
      'nosql',
      'scalability',
      'horizontal-scaling',
      'distributed-systems',
      'sharding',
      'replication',
    ],
    reference: [
      {
        label: 'AWS: What is NoSQL?',
        url: 'https://aws.amazon.com/nosql/',
      },
      {
        label: 'MongoDB Docs: Sharding',
        url: 'https://www.mongodb.com/docs/manual/sharding/',
      },
    ],
  },
  {
    id: 'nosql-5',
    categoryId: 'nosql',
    question:
      'When would you use a document database like MongoDB instead of a relational database like MySQL or PostgreSQL?',
    answer:
      'A document database like MongoDB is ideal when you need flexible schemas, rapid development, and horizontal scalability. It works well with hierarchical or nested data that doesn’t fit neatly into tables.',
    code: '',
    hint: 'Think about data structure flexibility and evolving schemas.',
    expanded:
      'Document databases store data in JSON-like formats, making them suitable for applications with varying or evolving data structures—such as content management systems, product catalogs, and user-generated content. Unlike relational databases, document stores don’t require predefined schemas, allowing for faster iteration. They are also better suited for workloads with high read/write demands, large-scale data distribution, or complex object-like data. However, if you need strict relationships, ACID transactions, or strong data integrity guarantees, a relational database may be more appropriate.',
    tags: [
      'nosql',
      'document-database',
      'mongodb',
      'relational-database',
      'mysql',
      'postgresql',
      'schema-design',
    ],
    reference: [
      {
        label: 'MongoDB: When to Use MongoDB',
        url: 'https://www.mongodb.com/use-cases',
      },
      {
        label: 'MongoDB: SQL vs MySQL',
        url: 'https://www.mongodb.com/resources/basics/databases/nosql-explained/nosql-vs-sql',
      },
    ],
  },

  // Code Versioning ----------------------------------

  {
    id: 'code-versioning-1',
    categoryId: 'code-versioning',
    question: 'Why is branching with Mercurial or Git easier than with SVN?',
    answer:
      'Branching with Git or Mercurial is easier because these systems are distributed, and branches are lightweight, local, and fast to create and manage compared to SVN.',
    code: '',
    hint: 'Think about local repositories, lightweight branches, and merging tools.',
    expanded:
      'In Git and Mercurial, each developer has a full local repository with complete version history, making branch operations like creation, switching, and merging fast and independent of a central server. Branches are simply pointers to commits, so they are lightweight and cost almost nothing to create. In contrast, SVN branches are implemented as directories in the central repository, making them heavier, harder to track, and more dependent on network operations. Git and Mercurial also offer more advanced merging and history visualization tools, which simplify working with multiple branches.',
    tags: ['git', 'mercurial', 'svn', 'branching', 'version-control', 'dvcs'],
    reference: [
      {
        label: 'Atlassian: Comparing Git and SVN',
        url: 'https://www.atlassian.com/git/tutorials/svn-to-git-prepping-migration',
      },
      {
        label: 'Geeks for Geeks: Git vs SVN',
        url: 'https://www.geeksforgeeks.org/git/difference-between-git-and-svn/',
      },
    ],
  },

  {
    id: 'code-versioning-2',
    categoryId: 'code-versioning',
    question:
      'What are the pros and cons of distributed version control systems like Git over centralized ones like SVN?',
    answer:
      'Distributed version control systems (DVCS) like Git provide better flexibility, offline capabilities, and faster operations, but they can be more complex to learn and manage in large teams compared to centralized systems like SVN.',
    code: '',
    hint: 'Think about collaboration models, network dependency, and workflow complexity.',
    expanded:
      'In DVCS like Git, every user has a complete copy of the repository, including full history, which allows commits, diffs, and branches to be handled locally without needing a network connection. This improves speed and enables offline work. It also encourages more flexible workflows, such as feature branching and pull requests.\n\nHowever, Git’s complexity, especially around concepts like rebasing, staging, and multiple remotes, can create a steeper learning curve. SVN, being centralized, is simpler and can be easier to manage for small teams with straightforward needs, but it lacks the performance and flexibility of DVCS, and network reliance can slow down or block development work.',
    tags: [
      'git',
      'svn',
      'version-control',
      'dvcs',
      'centralized-vcs',
      'collaboration',
    ],
    reference: [
      {
        label: 'Atlassian: Centralized vs Distributed Version Control',
        url: 'https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow',
      },
      {
        label: 'Git SCM: About Distributed Version Control',
        url: 'https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control',
      },
    ],
  },
  {
    id: 'code-versioning-3',
    categoryId: 'code-versioning',
    question: 'Could you describe GitHub Flow and GitFlow workflows?',
    answer:
      'GitHub Flow is a lightweight, branch-based workflow ideal for continuous deployment and frequent releases. GitFlow is a more structured workflow that separates development and production code, using long-lived branches like `develop` and `main` along with supporting branches like `feature`, `release`, and `hotfix`.',
    code: '',
    hint: 'Think about project size, release frequency, and complexity when comparing workflows.',
    expanded:
      'GitHub Flow works well for teams that deploy often. It involves creating a feature branch from `main`, working on it, opening a pull request, reviewing, testing, and then merging it back into `main`. Every change can be deployed after merge.\n\nGitFlow is better suited for projects with scheduled releases and larger teams. It uses multiple primary branches: `main` for production-ready code and `develop` for ongoing development. Features are built in `feature/*` branches, tested and merged into `develop`, then prepared for release in `release/*` branches. Urgent fixes are handled in `hotfix/*` branches and merged into both `main` and `develop`.',
    tags: [
      'git',
      'github-flow',
      'gitflow',
      'version-control',
      'workflow',
      'deployment',
      'branching-strategies',
    ],
    reference: [
      {
        label: 'GitHub Docs: Understanding the GitHub flow',
        url: 'https://docs.github.com/en/get-started/quickstart/github-flow',
      },
      {
        label: 'Atlassian: GitFlow Workflow',
        url: 'https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow',
      },
    ],
  },
  {
    id: 'code-versioning-4',
    categoryId: 'code-versioning',
    question: "What's a rebase?",
    answer:
      'Rebase is a Git command that moves or “replays” a sequence of commits from one branch onto another, creating a linear commit history. It rewrites commit history by changing the parent of commits.',
    code: '',
    hint: 'Think about linear history and avoiding unnecessary merge commits.',
    expanded:
      'When you run `git rebase`, Git moves the base of your branch to a new starting point (usually the latest commit of the target branch) and re-applies your commits on top of it. This results in a cleaner, linear history without merge commits. It’s often used to integrate changes from `main` into a feature branch before merging back.\n\nHowever, since it rewrites history, rebase should be used with caution on shared branches. For example:\n\n1. `git checkout feature`\n2. `git rebase main`\n\nNow, your `feature` branch contains the latest `main` changes, and your changes are replayed on top of them.',
    tags: [
      'git',
      'rebase',
      'version-control',
      'commit-history',
      'merge-vs-rebase',
    ],
    reference: [
      {
        label: 'Git SCM: git-rebase Documentation',
        url: 'https://git-scm.com/docs/git-rebase',
      },
      {
        label: 'Atlassian: Git rebase',
        url: 'https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase',
      },
      {
        label: 'Geeks for Geeks: Git rebase',
        url: 'https://www.geeksforgeeks.org/git/rebasing-of-branches-in-git/',
      },
    ],
  },
  {
    id: 'code-versioning-5',
    categoryId: 'code-versioning',
    question:
      'Why are merges easier with Mercurial and Git than with SVN and CVS?',
    answer:
      'Merges are easier with Git and Mercurial because they are distributed version control systems that track changesets and entire project history locally, allowing more intelligent and accurate merge handling.',
    code: '',
    hint: 'Consider how Git and Mercurial record changes versus SVN and CVS.',
    expanded:
      'Git and Mercurial manage merging more effectively by storing snapshots (rather than just file diffs) and using a directed acyclic graph (DAG) to track branching and merging history. This allows them to automatically identify the common ancestor during a merge, making it less error-prone and more automatic.\n\nSVN and CVS, being centralized and less sophisticated in their branching models, often lack a complete view of the commit history. They rely more heavily on manual intervention and are prone to conflicts due to weaker merge-tracking capabilities.',
    tags: [
      'git',
      'mercurial',
      'svn',
      'cvs',
      'merging',
      'version-control',
      'dvcs',
    ],
    reference: [
      {
        label: 'Git SCM: Branching and Merging',
        url: 'https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging',
      },
      {
        label: 'Atlassian: DVCS vs CVCS',
        url: 'https://www.atlassian.com/git/tutorials/syncing/git-push',
      },
    ],
  },

  // Concurrency ------------------------------

  {
    id: 'concurrency-1',
    categoryId: 'concurrency',
    question: 'Why do we need concurrency, anyway? Explain.',
    answer:
      'Concurrency allows a system to handle multiple tasks at once, improving efficiency, responsiveness, and resource utilization—especially important in modern applications with I/O-bound or CPU-bound operations.',
    code: '',
    hint: 'Think about responsiveness, resource sharing, and parallelism.',
    expanded:
      'Concurrency is essential for designing systems that remain responsive and performant. It enables tasks like UI rendering, file I/O, or network communication to run alongside one another without blocking. In multicore systems, concurrency can also mean true parallelism, which maximizes CPU usage. Without concurrency, applications would perform tasks one at a time, potentially freezing or delaying user interactions while waiting for long-running operations to complete.',
    tags: [
      'concurrency',
      'performance',
      'parallelism',
      'async',
      'multitasking',
      'resource-management',
    ],
    reference: [
      {
        label: 'Wikipedia: Concurrency (computer science)',
        url: 'https://en.wikipedia.org/wiki/Concurrency_(computer_science)',
      },
      {
        label: 'MDN Web Docs: Concurrency model and the event loop',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop',
      },
    ],
  },
  {
    id: 'concurrency-2',
    categoryId: 'concurrency',
    question: 'Why is testing multithreaded/concurrent code so difficult?',
    answer:
      'Testing multithreaded or concurrent code is difficult because of nondeterministic behavior caused by thread scheduling, race conditions, and timing issues, which can lead to unpredictable and hard-to-reproduce bugs.',
    code: '',
    hint: 'Think about timing, thread interaction, and race conditions.',
    expanded:
      'Concurrent code involves multiple threads or processes executing simultaneously, which introduces nondeterminism—different executions can produce different outcomes. Bugs like race conditions, deadlocks, and livelocks can appear only under certain timing scenarios, making them hard to detect and reproduce in tests. This complexity requires specialized testing approaches like stress testing, thread sanitizers, deterministic schedulers, and careful synchronization to ensure correctness.',
    tags: [
      'concurrency',
      'testing',
      'multithreading',
      'race-conditions',
      'nondeterminism',
      'debugging',
    ],
    reference: [
      {
        label: 'Geeks for Geeks: Multithreading',
        url: 'https://www.geeksforgeeks.org/operating-systems/multithreading-in-operating-system/',
      },
      {
        label: 'Wikipedia: Race Condition',
        url: 'https://en.wikipedia.org/wiki/Race_condition',
      },
    ],
  },
  {
    id: 'concurrency-3',
    categoryId: 'concurrency',
    question:
      'What is a race condition? Code an example, using whatever language you like.',
    answer:
      'A race condition occurs when multiple threads or processes access and modify shared data concurrently, and the final outcome depends on the timing or sequence of their execution. This can lead to unpredictable and erroneous behavior.',
    code: '// JavaScript example simulating a race condition using async operations\nlet counter = 0;\n\nfunction increment() {\n  let temp = counter;\n  // Simulate some async work\n  setTimeout(() => {\n    counter = temp + 1;\n    console.log("Counter:", counter);\n  }, Math.random() * 100);\n}\n\n// Two increments started almost simultaneously\nincrement();\nincrement();\n\n// Output might be:\n// Counter: 1\n// Counter: 1\n// Instead of expected 2, due to race condition',
    hint: 'Race conditions happen when shared state is accessed without proper synchronization.',
    expanded:
      "When two or more concurrent operations read and write shared data without coordination, they may overwrite each other's changes. In the example, both increments read the same initial value, increment it separately, and write back the same result, losing one increment. Proper synchronization or atomic operations prevent race conditions.",
    tags: [
      'concurrency',
      'race-condition',
      'threading',
      'async',
      'synchronization',
    ],
    reference: [
      {
        label: 'Wikipedia: Race Condition',
        url: 'https://en.wikipedia.org/wiki/Race_condition',
      },
      {
        label: 'MDN: Concurrency model and Event Loop',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop',
      },
    ],
  },

  {
    id: 'concurrency-4',
    categoryId: 'concurrency',
    question:
      'What is a deadlock? Would you be able to write some code that is affected by deadlocks?',
    answer:
      'A deadlock is a situation in concurrent programming where two or more threads (or async tasks) are blocked forever, each waiting for the other to release a resource, causing the program to hang indefinitely.',
    code: `// JavaScript example simulating deadlock using async locks

class Lock {
  constructor() {
    this._locked = false;
    this._waitingResolvers = [];
  }
  
  acquire() {
    return new Promise(resolve => {
      if (!this._locked) {
        this._locked = true;
        resolve();
      } else {
        this._waitingResolvers.push(resolve);
      }
    });
  }
  
  release() {
    if (this._waitingResolvers.length > 0) {
      const resolve = this._waitingResolvers.shift();
      resolve();
    } else {
      this._locked = false;
    }
  }
}

const lockA = new Lock();
const lockB = new Lock();

async function task1() {
  await lockA.acquire();
  console.log('Task 1 acquired lock A');
  // Simulate some async work
  await new Promise(r => setTimeout(r, 100));
  
  console.log('Task 1 waiting for lock B');
  await lockB.acquire(); // Waits here indefinitely if task2 holds lockB
  console.log('Task 1 acquired lock B');

  // Critical section
  lockB.release();
  lockA.release();
}

async function task2() {
  await lockB.acquire();
  console.log('Task 2 acquired lock B');
  // Simulate some async work
  await new Promise(r => setTimeout(r, 100));

  console.log('Task 2 waiting for lock A');
  await lockA.acquire(); // Waits here indefinitely if task1 holds lockA
  console.log('Task 2 acquired lock A');

  // Critical section
  lockA.release();
  lockB.release();
}

// Start tasks concurrently
task1();
task2();

// Result: Task 1 holds lockA and waits for lockB,
// Task 2 holds lockB and waits for lockA,
// causing a deadlock (no further progress).
`,
    hint: 'Deadlocks often happen when two async tasks wait on each other’s locks.',
    expanded:
      'In this JavaScript example, each task acquires one lock and then waits for another lock held by the other task, resulting in a circular wait condition and deadlock. JavaScript’s async nature allows simulating this scenario with Promises. Deadlocks can be avoided by acquiring locks in a consistent order or by using timeout-based lock acquisition.',
    tags: ['concurrency', 'deadlock', 'async', 'locks', 'javascript'],
    reference: [
      {
        label: 'Geeks for Geeks: Deadlock in operating systems',
        url: 'https://www.geeksforgeeks.org/operating-systems/introduction-of-deadlock-in-operating-system/',
      },
      {
        label: 'Baeldung: Deadlock',
        url: 'https://www.baeldung.com/cs/os-deadlock',
      },
    ],
  },
  {
    id: 'concurrency-5',
    categoryId: 'concurrency',
    question:
      "What is process starvation? If you need, let's review its definition.",
    answer:
      'Process starvation occurs when a process (or thread) waits indefinitely because other higher-priority processes keep getting resources first, preventing it from making progress.',
    code: `// Example in JavaScript simulating starvation via priority scheduling (conceptual)

class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  
  enqueue(task, priority) {
    this.queue.push({ task, priority });
    this.queue.sort((a, b) => b.priority - a.priority); // Higher priority first
  }
  
  dequeue() {
    return this.queue.shift()?.task;
  }
}

const scheduler = new PriorityQueue();

function runTask(name, priority) {
  scheduler.enqueue(() => {
    console.log(\`Running task: \${name} with priority \${priority}\`);
  }, priority);
}

// High priority tasks keep arriving
setInterval(() => runTask('High Priority Task', 10), 100);

// Low priority task is enqueued once
runTask('Low Priority Task', 1);

// Run tasks every 200ms
setInterval(() => {
  const task = scheduler.dequeue();
  if (task) task();
}, 200);

// In this scenario, the low priority task may never get CPU time,
// because high priority tasks keep preempting it — this is starvation.
`,
    hint: 'Starvation happens due to unfair resource allocation, often with priority-based scheduling.',
    expanded:
      'Starvation is a problem where low-priority processes wait indefinitely because higher-priority processes monopolize the resources. Unlike deadlocks, starvation is caused by scheduling policies that don’t guarantee fairness. Solutions include aging (gradually increasing priority of waiting tasks) or fair scheduling algorithms to ensure all processes get a chance to run.',
    tags: [
      'concurrency',
      'starvation',
      'scheduling',
      'priority',
      'resource-allocation',
    ],
    reference: [
      {
        label: 'Wikipedia: Starvation (computing)',
        url: 'https://en.wikipedia.org/wiki/Starvation_(computing)',
      },
      {
        label: 'Geeks for Geeks: Process Starvation',
        url: 'https://www.geeksforgeeks.org/operating-systems/starvation-and-aging-in-operating-systems/',
      },
    ],
  },
  {
    id: 'concurrency-6',
    categoryId: 'concurrency',
    question: 'What is a wait-free algorithm?',
    answer:
      'A wait-free algorithm guarantees that every thread or process will complete its operation in a finite number of steps, regardless of the behavior of other threads. It ensures system-wide progress without any thread ever having to wait for others, avoiding issues like deadlocks or starvation.',
    code: `// Conceptual example: Atomic increment using JavaScript's Atomics (simulated wait-free behavior)

const sharedBuffer = new SharedArrayBuffer(4);
const counter = new Int32Array(sharedBuffer);

function waitFreeIncrement() {
  let done = false;
  while (!done) {
    const oldValue = Atomics.load(counter, 0);
    done = Atomics.compareExchange(counter, 0, oldValue, oldValue + 1) === oldValue;
  }
}

// Multiple threads calling waitFreeIncrement concurrently will complete without waiting indefinitely.
`,
    hint: 'Wait-free algorithms guarantee completion in a bounded number of steps for all threads.',
    expanded:
      'Wait-free algorithms are the strongest type of non-blocking synchronization. They guarantee system progress by ensuring each thread can complete its operation independently of others, preventing delays caused by locks or waiting. This makes them highly desirable for concurrent programming but often complex to design and implement.',
    tags: [
      'concurrency',
      'wait-free',
      'non-blocking',
      'algorithms',
      'parallelism',
    ],
    reference: [
      {
        label: 'Wikipedia: Wait-free',
        url: 'https://en.wikipedia.org/wiki/Non-blocking_algorithm#Wait-freedom',
      },
      {
        label: 'Intel Developer Zone: Non-blocking Synchronization',
        url: 'https://software.intel.com/content/www/us/en/develop/articles/introduction-to-non-blocking-synchronization.html',
      },
    ],
  },
  {
    id: 'concurrency-6',
    categoryId: 'concurrency',
    question: 'What is a wait-free algorithm?',
    answer:
      'A wait-free algorithm guarantees that every thread or process will complete its operation in a finite number of steps, regardless of the behavior of other threads. It ensures system-wide progress without any thread ever having to wait for others, avoiding issues like deadlocks or starvation.',
    code: `// Conceptual example: Atomic increment using JavaScript's Atomics (simulated wait-free behavior)

const sharedBuffer = new SharedArrayBuffer(4);
const counter = new Int32Array(sharedBuffer);

function waitFreeIncrement() {
  let done = false;
  while (!done) {
    const oldValue = Atomics.load(counter, 0);
    done = Atomics.compareExchange(counter, 0, oldValue, oldValue + 1) === oldValue;
  }
}

// Multiple threads calling waitFreeIncrement concurrently will complete without waiting indefinitely.
`,
    hint: 'Wait-free algorithms guarantee completion in a bounded number of steps for all threads.',
    expanded:
      'Wait-free algorithms are the strongest type of non-blocking synchronization. They guarantee system progress by ensuring each thread can complete its operation independently of others, preventing delays caused by locks or waiting. This makes them highly desirable for concurrent programming but often complex to design and implement.',
    tags: [
      'concurrency',
      'wait-free',
      'non-blocking',
      'algorithms',
      'parallelism',
    ],
    reference: [
      {
        label: 'Wikipedia: Wait-free',
        url: 'https://en.wikipedia.org/wiki/Non-blocking_algorithm#Wait-freedom',
      },
      {
        label: 'RethinkDB: Lock-free vs Wait-free concurrency',
        url: 'https://rethinkdb.com/blog/lock-free-vs-wait-free-concurrency/',
      },
    ],
  },

  // Distributed Systems ---------------------------------
  {
    id: 'dist-sys-1',
    categoryId: 'dist-sys',
    question: 'How would you test a distributed system?',
    answer:
      "Testing distributed systems involves validating the system's behavior across multiple independent nodes that communicate over a network, which introduces challenges such as network failures, latency, concurrency, and partial failures. Testing strategies must cover functional correctness, fault tolerance, and performance under various conditions.",
    code: '',
    hint: 'Consider the complexity of distributed interactions, failure modes, and consistency.',
    expanded:
      'Effective testing of distributed systems requires multiple approaches: unit tests for individual components, integration tests for communication and data exchange between nodes, and end-to-end tests simulating real-world scenarios including network partitions, node failures, and message delays. Techniques such as chaos engineering intentionally introduce faults to observe system resilience. Monitoring and logging help detect issues in production. Due to the nondeterministic nature of distributed systems, tests often include retries, timeouts, and assertions on eventual consistency rather than immediate consistency.',
    tags: [
      'distributed-systems',
      'testing',
      'fault-tolerance',
      'integration-testing',
      'chaos-engineering',
    ],
    reference: [
      {
        label: 'Geeks for Geeks: Testing Strategies for Distributed Systems',
        url: 'https://www.geeksforgeeks.org/system-design/testing-distributed-systems/',
      },
      {
        label: 'Codemia: Testing Distributed Systems',
        url: 'https://codemia.io/knowledge-hub/path/distributed_systems_testing',
      },
    ],
  },
  {
    id: 'dist-sys-2',
    categoryId: 'dist-sys',
    question:
      'When would you apply asynchronous communication between two systems?',
    answer:
      'Asynchronous communication is used when the sender and receiver systems operate independently and do not require an immediate response. It enables decoupling, improves scalability, and allows the sender to continue processing without waiting for the receiver to respond.',
    code: '',
    hint: 'Think about system decoupling, latency tolerance, and load handling.',
    expanded:
      'You would apply asynchronous communication in scenarios where real-time interaction is not critical, such as processing jobs in a queue, event-driven architectures, or handling high throughput where blocking would degrade performance. It is ideal when systems need to be loosely coupled, improving fault tolerance by allowing retries and buffering messages during downtime. Examples include messaging systems (e.g., RabbitMQ, Kafka), email sending, or background processing tasks. However, it introduces complexity in error handling, ordering, and eventual consistency that must be managed.',
    tags: [
      'distributed-systems',
      'asynchronous-communication',
      'messaging',
      'scalability',
      'decoupling',
    ],
    reference: [
      {
        label: 'Geeks for Geeks: Asynchronous vs Synchronous communication',
        url: 'https://www.geeksforgeeks.org/system-design/synchronous-vs-asynchronous-communication-system-design/',
      },
      {
        label: 'Atlassian: When to use Asynchronous vs Synchronous',
        url: 'https://www.atlassian.com/blog/loom/synchronous-vs-asynchronous#:~:text=Ask%20yourself%20if%20your%20message,t%20require%20an%20immediate%20response.',
      },
    ],
  },
  {
    id: 'dist-sys-3',
    categoryId: 'dist-sys',
    question: 'What are the general pitfalls of remote procedure calls?',
    answer:
      'Remote Procedure Calls (RPC) abstract communication between distributed systems by allowing one system to invoke methods on another as if they were local. However, this abstraction can hide the complexities and unreliability of the network, leading to pitfalls.',
    code: '',
    hint: 'Consider network unreliability, latency, and failure modes.',
    expanded:
      'Common pitfalls of RPC include:\n\n1. **Network Failures:** Unlike local calls, RPCs can fail due to network issues, leading to partial failures and timeouts.\n2. **Latency:** Remote calls are significantly slower than local ones, which can degrade performance if not managed carefully.\n3. **Tight Coupling:** RPC encourages synchronous communication and can lead to tightly coupled systems, reducing scalability and fault tolerance.\n4. **Complex Error Handling:** Network errors, retries, and partial failures require sophisticated handling.\n5. **Versioning Issues:** Different versions of client and server can cause compatibility problems.\n6. **Serialization Overhead:** Data must be serialized and deserialized, adding overhead.\n\nDesigners often mitigate these pitfalls by using asynchronous messaging, timeouts, retries, and designing for eventual consistency.',
    tags: [
      'distributed-systems',
      'rpc',
      'network',
      'pitfalls',
      'error-handling',
    ],
    reference: [
      {
        label: 'Geeks for Geeks: Remote Procedure Invocation',
        url: 'https://www.geeksforgeeks.org/operating-systems/remote-procedure-call-rpc-in-operating-system/',
      },
      {
        label: 'DEV: RPC calls clearly explained',
        url: 'https://dev.to/ralphsebastian/rpc-call-clearly-explained-3ine',
      },
    ],
  },
  {
    id: 'dist-sys-4',
    categoryId: 'dist-sys',
    question:
      "If you are building a distributed system for scalability and robustness, what are the different things you'd think of if you are working in a closed and secure network environment versus when you are working in a geographically distributed and public system?",
    answer:
      'Designing distributed systems in closed environments differs significantly from designing them in public, globally distributed settings. In closed, secure networks, you can optimize for performance and internal trust. In public, distributed systems, you must design for untrusted environments, higher latency, and fault tolerance.',
    code: '',
    hint: 'Focus on trust, latency, fault tolerance, and security assumptions.',
    expanded:
      'In a **closed, secure network environment**, you can:\n- Assume **low latency** and **high reliability**.\n- Trust nodes more easily, requiring **less stringent security**.\n- Use **simpler coordination and consensus algorithms**.\n- Optimize aggressively for **performance** without heavy encryption or access control.\n\nIn a **geographically distributed, public system**, you must:\n- Account for **high latency** and **network partitions**.\n- Design for **partial failures** and **asynchronous communication**.\n- Emphasize **security**: encrypt data in transit, authenticate nodes, prevent attacks.\n- Use **robust consensus mechanisms** like Raft or Paxos.\n- Build with **fault-tolerance** and **resilient failover mechanisms**.\n- Handle **data replication** and **eventual consistency** across zones.\n\nThese environmental differences influence choices in architecture, protocols, data handling, and reliability strategies.',
    tags: [
      'distributed-systems',
      'scalability',
      'fault-tolerance',
      'public-vs-private',
      'system-design',
      'security',
    ],
    reference: [
      {
        label: 'Inseego: Private vs Public Networks',
        url: 'https://inseego.com/resources/blog/private-vs-public-networks/',
      },
      {
        label: 'Geeks for Geeks: Distributed Systems Tutorial',
        url: 'https://www.geeksforgeeks.org/computer-networks/distributed-systems-tutorial/',
      },
    ],
  },
  {
    id: 'dist-sys-5',
    categoryId: 'dist-sys',
    question:
      'How would you manage fault tolerance in a web application? What about in a desktop one?',
    answer:
      'Fault tolerance ensures that applications continue to function correctly even when components fail. In web and desktop applications, fault tolerance is handled differently due to architectural differences. Web apps emphasize redundancy and distributed resilience, while desktop apps rely more on local recovery and state preservation.',
    code: '',
    hint: 'Compare distributed vs local failure handling.',
    expanded:
      '**In a web application**, fault tolerance is achieved by:\n- **Redundancy**: Deploying multiple instances behind load balancers.\n- **Graceful degradation**: Maintaining partial functionality if some services fail.\n- **Retries and timeouts**: Retrying failed requests with backoff strategies.\n- **Circuit breakers**: Preventing cascading failures.\n- **Failover**: Automatically switching to backup systems or regions.\n- **Monitoring and alerts**: Detecting issues early and triggering auto-recovery.\n- **Statelessness**: Making services easier to replicate and recover.\n\n**In a desktop application**, fault tolerance includes:\n- **Autosaving state**: Recovering user data after a crash.\n- **Error boundaries**: Catching and handling exceptions to prevent full app crashes.\n- **Isolating modules**: Preventing failures in one component from affecting others.\n- **Graceful exits**: Saving logs and user context for debugging or recovery.\n- **Background updates and rollback**: Ensuring failed updates can be reversed.\n\nEach platform uses techniques suited to its environment, but both aim to preserve user experience and minimize data loss.',
    tags: [
      'fault-tolerance',
      'web-application',
      'desktop-application',
      'error-handling',
      'reliability',
      'system-design',
    ],
    reference: [
      {
        label: 'Geeks for Geeks: Fault Tolerance in System Design',
        url: 'https://www.geeksforgeeks.org/system-design/fault-tolerance-in-system-design/',
      },
      {
        label: 'Geeks for Geeks: Fault Tolerance Software Techniques',
        url: 'https://www.geeksforgeeks.org/software-engineering/basic-fault-tolerant-software-techniques/',
      },
    ],
  },
  {
    id: 'dist-sys-6',
    categoryId: 'dist-sys',
    question: 'How would you deal with failures in a distributed system?',
    answer:
      'Failures in distributed systems are inevitable, so the system must be designed to detect, isolate, and recover from them gracefully. Strategies vary depending on the type of failure—network, hardware, software, or data inconsistency.',
    code: '',
    hint: 'Think about detection, isolation, recovery, and resilience patterns.',
    expanded:
      "To deal with failures in a distributed system:\n\n1. **Failure Detection**: Use health checks, heartbeats, and monitoring tools to identify failing nodes or services.\n\n2. **Timeouts and Retries**: Set appropriate timeouts and implement retry mechanisms with exponential backoff to handle temporary issues.\n\n3. **Circuit Breakers**: Prevent cascading failures by temporarily cutting off requests to a failing service.\n\n4. **Redundancy and Replication**: Duplicate critical services and data to ensure availability even if some nodes fail.\n\n5. **Graceful Degradation**: Allow the system to continue operating in a reduced capacity when some components are unavailable.\n\n6. **Idempotency**: Ensure that retrying an operation doesn't cause unintended effects.\n\n7. **Fallbacks and Defaults**: Provide default responses or cached data when live data is unavailable.\n\n8. **Monitoring and Alerting**: Continuously observe system behavior and notify operators when something breaks.\n\n9. **Logging and Tracing**: Enable detailed logs and distributed tracing to diagnose and debug issues.\n\n10. **Partition Tolerance**: Design the system to handle network splits (CAP theorem) by choosing between consistency and availability based on the context.\n\nThese practices help make distributed systems more robust and resilient to partial or total service disruptions.",
    tags: [
      'distributed-systems',
      'resilience',
      'fault-tolerance',
      'error-handling',
      'system-design',
    ],
    reference: [
      {
        label: 'AWS Well-Architected Framework: Reliability Pillar',
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/',
      },
      {
        label: 'Google SRE Book: Handling Overload',
        url: 'https://sre.google/sre-book/handling-overload/',
      },
    ],
  },
  {
    id: 'dist-sys-7',
    categoryId: 'dist-sys',
    question:
      "Let's talk about the several approaches to reconciliation after network partitions.",
    answer:
      'After a network partition heals, systems need to reconcile divergent data or state between the partitions. There are several reconciliation strategies depending on system requirements for consistency, availability, and performance.',
    code: '',
    hint: 'Think about consistency models, conflict resolution, and data synchronization.',
    expanded:
      "When a network partition occurs (P in the CAP theorem), parts of a distributed system may become isolated and make independent changes. Once the partition heals, reconciling differences is critical.\n\nHere are common reconciliation strategies:\n\n1. **Last-Write-Wins (LWW)**: The system chooses the most recent update based on timestamps. It's simple but can lead to data loss if concurrent updates occur.\n\n2. **Vector Clocks**: Each node keeps track of version history to detect conflicts. When conflicts are detected, the system can merge or ask for human intervention.\n\n3. **Operational Transformation / CRDTs**: Used in collaborative systems (like Google Docs), these allow concurrent changes to be merged automatically and deterministically without conflicts.\n\n4. **Manual Resolution**: In critical systems (e.g., banking), reconciliation might involve audits or user intervention to ensure accuracy.\n\n5. **Application-Level Merging**: The application defines custom logic to resolve conflicting updates based on domain knowledge (e.g., merging two versions of a shopping cart).\n\n6. **Consensus Protocols**: Systems using protocols like Paxos or Raft avoid divergence altogether by blocking writes during a partition, ensuring strong consistency at the cost of availability.\n\nChoosing the right approach depends on your consistency model (eventual vs strong), the criticality of the data, and user expectations.",
    tags: [
      'distributed-systems',
      'network-partition',
      'data-consistency',
      'conflict-resolution',
      'CAP-theorem',
      'reconciliation',
    ],
    reference: [
      {
        label: 'Geeks for Geeks: Handling Network Partitions',
        url: 'https://www.geeksforgeeks.org/computer-networks/handling-network-partitions-in-distributed-systems/',
      },
      {
        label: 'Medium: Network Partitions',
        url: 'https://medium.com/@awinas270597/network-partition-in-distributed-systems-5a9dbe9a9173',
      },
    ],
  },
  {
    id: 'dist-sys-8',
    categoryId: 'dist-sys',
    question: 'What are the fallacies of distributed computing?',
    answer:
      'The fallacies of distributed computing are a set of common assumptions that developers often make when designing distributed systems. These assumptions usually turn out to be incorrect and lead to fragile, inefficient, or insecure systems if not accounted for.',
    code: '',
    hint: 'Think about assumptions related to networks, latency, bandwidth, and reliability.',
    expanded:
      'Originally proposed by Peter Deutsch and expanded by others at Sun Microsystems, there are eight classic fallacies:\n\n1. **The network is reliable** – Networks fail, and systems must be built to detect and recover from these failures.\n\n2. **Latency is zero** – Network delays are real and must be accounted for, especially in geographically distributed systems.\n\n3. **Bandwidth is infinite** – Bandwidth has limits, especially with large data transfers or under network congestion.\n\n4. **The network is secure** – Data can be intercepted or tampered with. Security should be explicitly designed into all distributed communications.\n\n5. **Topology doesn’t change** – Nodes may come and go, and IP addresses or paths can change, especially in cloud environments.\n\n6. **There is one administrator** – Distributed systems often span different organizations and administrative domains.\n\n7. **Transport cost is zero** – Moving data over the network incurs costs in time, CPU, and money (especially in cloud platforms).\n\n8. **The network is homogeneous** – Real-world networks consist of a mix of hardware, protocols, latencies, and failure modes.\n\nRecognizing and designing around these fallacies is critical to building resilient and scalable distributed systems.',
    tags: [
      'distributed-systems',
      'fallacies',
      'networking',
      'architecture',
      'resilience',
    ],
    reference: [
      {
        label: 'Wikipedia: Fallacies of Distributed Computing',
        url: 'https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing',
      },
      {
        label: 'Geeks for Geeks: Fallacies of Distributed Sytems',
        url: 'https://www.geeksforgeeks.org/system-design/fallacies-of-distributed-systems/',
      },
    ],
  },
  {
    id: 'dist-sys-9',
    categoryId: 'dist-sys',
    question: 'When would you use request/reply and when publish/subscribe?',
    answer:
      'Request/reply is best when a client needs a specific response from a known service, while publish/subscribe is ideal for broadcasting information to multiple receivers without expecting a direct response.',
    code: '',
    hint: 'Think about one-to-one communication vs. one-to-many event distribution.',
    expanded:
      'Request/reply is a synchronous or asynchronous communication pattern in which a requester sends a message and waits for a direct response. It’s useful in tightly coupled interactions such as:\n- Querying a service for data (e.g., requesting user details)\n- Performing actions that require confirmation (e.g., payment processing)\n\nPublish/subscribe (pub/sub), on the other hand, is an asynchronous, event-driven model. A publisher emits messages to a topic or channel, and multiple subscribers can independently receive and handle those messages. This model works well when:\n- Events need to be broadcast to many listeners (e.g., chat messages, logging systems)\n- Components are loosely coupled and should not know about each other\n\nIn summary:\n- **Use request/reply** when you need a direct answer.\n- **Use pub/sub** when you want to decouple components and enable broad communication.',
    tags: [
      'distributed-systems',
      'request-reply',
      'publish-subscribe',
      'messaging-patterns',
      'communication',
    ],
    reference: [
      {
        label: 'DEV: Request-Reply vs Pub/Sub',
        url: 'https://dev.to/mazenr/request-response-vs-message-queues-vs-publish-subscribe-patterns-3l0l',
      },
      {
        label: 'Opto22: Request-response vs. publish-subscribe',
        url: 'https://blog.opto22.com/optoblog/request-response-vs-pub-sub-part-1',
      },
    ],
  },
  {
    id: 'dist-sys-10',
    categoryId: 'dist-sys',
    question:
      'Suppose the system you are working on does not support transactionality. How would you implement it from scratch?',
    answer:
      "To implement transactionality from scratch, you'd need to create mechanisms for atomicity, consistency, isolation, and durability (ACID) manually. This often involves using patterns like the Unit of Work or Saga pattern, along with write-ahead logs, retries, and compensation mechanisms.",
    code: '',
    hint: 'Think about guaranteeing ACID properties without native DB or framework support.',
    expanded:
      'When native transaction support is unavailable, you must emulate transactional behavior. Here’s how you might approach it:\n\n**1. Atomicity**: Use a Unit of Work pattern to group multiple operations into a logical transaction. If any part fails, roll back the entire group. In distributed systems, this might require a Saga pattern, where each step has a compensating action to undo its effect if something fails.\n\n**2. Consistency**: Implement validation before and after transactions to ensure the system never enters an invalid state. You may also need to write checkpoints or snapshots.\n\n**3. Isolation**: Use locking mechanisms or versioning (optimistic/pessimistic) to prevent race conditions and ensure concurrent processes don’t interfere.\n\n**4. Durability**: Use write-ahead logs or event sourcing to persist changes before applying them, so that operations can be replayed if interrupted.\n\nYou may also need to handle retries, idempotency, and state tracking for partial failures in multi-step workflows.',
    tags: [
      'distributed-systems',
      'transactions',
      'acidity',
      'saga-pattern',
      'unit-of-work',
      'durability',
    ],
    reference: [
      {
        label: 'ThreeDots: Distributed Transactions',
        url: 'https://threedots.tech/post/distributed-transactions-in-go/',
      },
      {
        label:
          'Microsoft Docs: Implementing Transactions Without a Transaction Coordinator',
        url: 'https://learn.microsoft.com/en-us/azure/architecture/patterns/saga',
      },
    ],
  },

  // Software Culture ----------------------------------

  {
    id: 'software-culture-1',
    categoryId: 'software-culture',
    question: 'What is agility?',
    answer:
      'Agility refers to the ability of a software development team or organization to quickly adapt to change, respond to feedback, and deliver value incrementally. It’s about flexibility, collaboration, and continuous improvement over rigid planning or processes.',
    code: '',
    hint: 'Think about responsiveness, adaptability, and iterative development.',
    expanded:
      'In the context of software, agility means embracing short development cycles, cross-functional teams, and constant communication with stakeholders. Agile methodologies (like Scrum, Kanban, XP) emphasize working software, customer collaboration, and adapting to change rather than strictly following a plan. Agility helps teams deliver better software faster by continuously refining both the product and the process.',
    tags: [
      'agile',
      'software-culture',
      'development-process',
      'adaptability',
      'teamwork',
    ],
    reference: [
      {
        label: 'Agile Manifesto',
        url: 'https://agilemanifesto.org/',
      },
      {
        label: 'Agile Software Development – Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Agile_software_development',
      },
    ],
  },
  {
    id: 'software-culture-2',
    categoryId: 'software-culture',
    question: 'How would you deal with legacy code?',
    answer:
      'Dealing with legacy code requires understanding, stabilizing, and gradually improving it without introducing regressions. Start by identifying the business-critical areas, adding tests, and documenting behavior before making changes.',
    code: '',
    hint: 'Think about safety, testing, and incremental refactoring.',
    expanded:
      'Legacy code often lacks tests, documentation, or modern patterns. The first step is to treat it with care—avoid rewriting everything. Instead, focus on high-value areas and surround them with characterization tests (tests that describe what the code does). Once you have test coverage, you can safely refactor or modularize the code. It’s also important to communicate with the team and avoid introducing unnecessary complexity while improving maintainability.',
    tags: [
      'legacy-code',
      'software-culture',
      'refactoring',
      'technical-debt',
      'testing',
    ],
    reference: [
      {
        label:
          'Understanding Legacy Code: Working efficiently with legacy code',
        url: 'https://understandlegacycode.com/blog/key-points-of-working-effectively-with-legacy-code/',
      },
      {
        label: 'Perforce: Tips of working with legacy code',
        url: 'https://www.perforce.com/blog/qac/tips-working-legacy-code',
      },
    ],
  },
  {
    id: 'software-culture-3',
    categoryId: 'software-culture',
    question:
      "Say I'm your project manager, and I'm no expert in programming. Would you try explaining to me what legacy code is and why should I care about code quality?",
    answer:
      'Yes, I would definitely explain it. Legacy code is existing software that’s hard to change or maintain, often because it’s poorly documented, lacks tests, or was written with outdated practices. I’d emphasize that code quality impacts project timelines, costs, and product reliability, so understanding this helps prioritize technical debt and refactoring efforts.',
    code: '',
    hint: 'Explain clearly and focus on business impact.',
    expanded:
      'When talking to a non-technical manager, I’d avoid jargon and relate code quality to real project outcomes — like delays, bugs, and cost overruns. I’d explain that legacy code slows down adding new features and fixing issues, which impacts delivery and customer satisfaction. Framing it this way helps non-technical stakeholders appreciate why investing in code quality is critical for the product’s success.',
    tags: [
      'legacy-code',
      'software-culture',
      'code-quality',
      'communication',
      'technical-debt',
    ],
    reference: [
      {
        label: 'IBM: What Is Legacy Code?',
        url: 'https://www.ibm.com/think/topics/legacy-code',
      },
      {
        label: 'Adabeat: Why Code Quality Matters',
        url: 'https://adabeat.com/insight/the-importance-of-code-quality/',
      },
    ],
  },
  {
    id: 'software-culture-4',
    categoryId: 'software-culture',
    question: 'What is the biggest difference between Agile and Waterfall?',
    answer:
      'The biggest difference is that Waterfall is a linear, sequential approach where each phase (requirements, design, implementation, testing, deployment) happens one after the other, while Agile is an iterative and incremental approach focused on flexibility, continuous feedback, and adapting to change.',
    code: '',
    hint: 'Think about project phases versus iterative cycles.',
    expanded:
      'Waterfall assumes all requirements are known upfront and emphasizes completing each phase before moving on, which can make adapting to changes difficult. Agile breaks work into smaller chunks called sprints, allowing frequent reassessment of priorities and delivering working software continuously. This makes Agile better suited for projects where requirements evolve or are unclear.',
    tags: [
      'software-culture',
      'agile',
      'waterfall',
      'project-management',
      'methodologies',
    ],
    reference: [
      {
        label: 'Agile Alliance: What is Agile?',
        url: 'https://www.agilealliance.org/agile101/',
      },
      {
        label: 'Atlassian: Agile vs Waterfall',
        url: 'https://www.atlassian.com/agile/project-management/project-management-intro',
      },
    ],
  },
  {
    id: 'software-culture-5',
    categoryId: 'software-culture',
    question:
      'Being a team manager, how would you deal with the problem of having too many meetings?',
    answer:
      'I would evaluate the purpose and necessity of each meeting, consolidate overlapping meetings, set clear agendas and time limits, and encourage asynchronous communication where possible to reduce meeting load.',
    code: '',
    hint: 'Focus on meeting effectiveness and alternative communication methods.',
    expanded:
      'Too many meetings can reduce productivity and cause burnout. By auditing meetings, canceling unnecessary ones, combining similar topics, and using tools like email, chat, or collaborative documents for updates and discussions, you can keep the team focused. Also, ensuring meetings have clear goals and strict timing helps maintain efficiency.',
    tags: ['software-culture', 'team-management', 'meetings', 'productivity'],
    reference: [
      {
        label: 'Harvard Business Review: Stop the Meeting Madness',
        url: 'https://hbr.org/2017/07/stop-the-meeting-madness',
      },
      {
        label: 'Atlassian: How to reduce meetings',
        url: 'https://www.atlassian.com/blog/teamwork/how-to-run-effective-meetings',
      },
    ],
  },
  {
    id: 'software-culture-6',
    categoryId: 'software-culture',
    question: 'How would you manage a very late project?',
    answer:
      'I would start by assessing the current status, identifying the main causes of delay, and reprioritizing tasks to focus on critical features. Clear communication with stakeholders about realistic timelines and scope adjustments is key. Implementing incremental deliveries and increasing collaboration helps regain momentum.',
    code: '',
    hint: 'Focus on transparency, prioritization, and incremental progress.',
    expanded:
      'Managing a late project requires diagnosing root causes such as scope creep, resource constraints, or technical debt. Then, adjusting scope, timelines, and resources helps set achievable goals. Regular progress tracking and transparent communication build trust. Agile practices like iterative releases enable early value delivery, reducing risk and improving morale.',
    tags: [
      'software-culture',
      'project-management',
      'risk-management',
      'agile',
    ],
    reference: [
      {
        label: 'Medium: Managing Late Projects',
        url: 'https://onix-systems.medium.com/how-to-deal-with-software-project-delays-practical-tips-and-tricks-2a884cd8d632',
      },
      {
        label: 'Geeks for Geeks: How to handle late projects',
        url: 'https://www.geeksforgeeks.org/software-engineering/what-causes-project-delay-how-to-avoid-them/',
      },
    ],
  },
  {
    id: 'software-culture-7',
    categoryId: 'software-culture',
    question:
      '"Individuals and interactions over processes and tools" and "Customer collaboration over contract negotiation" comprise half of the values of the Agile Manifesto. Discuss.',
    answer:
      'These values emphasize the importance of people and communication in software development. Agile prioritizes flexible, face-to-face collaboration and responsiveness to change rather than rigid adherence to processes or formal contracts. This human-centric approach fosters adaptability, trust, and better alignment with customer needs.',
    code: '',
    hint: 'Focus on why human relationships and collaboration matter more than strict procedures or paperwork.',
    expanded:
      'The Agile Manifesto recognizes that even the best tools and processes can’t replace effective communication and collaboration among team members and with customers. Prioritizing individuals ensures that teams can adapt quickly, solve problems creatively, and deliver value faster. Customer collaboration encourages ongoing feedback, reducing misunderstandings and enabling solutions that better meet real needs, while strict contracts can hinder flexibility.',
    tags: [
      'software-culture',
      'agile',
      'collaboration',
      'customer-focus',
      'communication',
    ],
    reference: [
      {
        label: 'Agile Manifesto',
        url: 'https://agilemanifesto.org/',
      },
      {
        label: 'Scrumalliance: Agile values and principles',
        url: 'https://resources.scrumalliance.org/Article/key-values-principles-agile-manifesto',
      },
    ],
  },
  {
    id: 'software-culture-8',
    categoryId: 'software-culture',
    question:
      'Tell me what decisions you would take if you could be the CTO of your company.',
    answer:
      'As CTO, I would focus on fostering a culture of innovation, ensuring technical excellence, and aligning technology strategy with business goals. Key decisions would include investing in scalable infrastructure, prioritizing developer experience, adopting modern tools and practices like CI/CD and automated testing, and promoting continuous learning within the team.',
    code: '',
    hint: 'Think about technical leadership, team culture, and aligning tech with business.',
    expanded:
      'The CTO role requires balancing technology vision with practical delivery. Decisions should empower teams to build reliable, maintainable, and scalable products. Emphasizing collaboration, transparency, and user-centric development helps keep the company agile and competitive. Additionally, I would advocate for diversity, inclusion, and supporting professional growth to retain top talent and foster creativity.',
    tags: [
      'software-culture',
      'leadership',
      'technology-strategy',
      'team-culture',
      'innovation',
    ],
    reference: [
      {
        label: 'Made With Love: How a CTO make technology decisions',
        url: 'https://madewithlove.com/blog/how-a-cto-makes-technology-decisions/',
      },
      {
        label: 'Medium: The Role of the CTO',
        url: 'https://medium.com/@riaanfnel/the-new-ctos-guide-a-world-of-responsibilities-94bc8ef374bc',
      },
    ],
  },
  {
    id: 'software-culture-9',
    categoryId: 'software-culture',
    question: 'Are program managers useful?',
    answer:
      'Yes, program managers play a crucial role in coordinating multiple related projects, aligning them with business objectives, managing risks, and ensuring communication among teams and stakeholders. They help keep complex initiatives on track and facilitate strategic decision-making.',
    code: '',
    hint: 'Think about coordination, communication, and strategic alignment.',
    expanded:
      'Program managers oversee the broader scope beyond individual projects, focusing on how multiple projects interrelate and contribute to organizational goals. They handle resource allocation, timelines, and stakeholder expectations, reducing friction and helping teams deliver value effectively. Without program managers, teams might face misaligned priorities, duplicated efforts, or missed deadlines.',
    tags: [
      'software-culture',
      'program-management',
      'team-coordination',
      'project-management',
    ],
    reference: [
      {
        label: 'Atlassian: Program Manager vs Project Manager?',
        url: 'https://www.atlassian.com/agile/project-management/program-vs-project-manager',
      },
      {
        label: 'Atlassian: What is a Program Manager?',
        url: 'https://www.atlassian.com/agile/project-management/program-management#:~:text=Program%20managers%20also%20help%20to,implement%20DevOps%20practices%20and%20principles.',
      },
    ],
  },
  {
    id: 'software-culture-10',
    categoryId: 'software-culture',
    question:
      'Organize a development team using flexible schedules (that is, no imposed working hours) and "take as you need" vacation policy.',
    answer:
      'To organize a development team with flexible schedules and unlimited vacation, focus on clear communication, trust, and outcome-oriented goals rather than micromanagement of hours. Set expectations around deliverables and collaboration windows, and empower team members to manage their own time and work-life balance.',
    code: '',
    hint: 'Think about accountability, communication norms, and measuring output over hours worked.',
    expanded:
      'Flexible schedules and unlimited vacation policies work best when paired with a culture of trust and responsibility. Teams should agree on core hours or overlapping times for meetings and collaboration. Deliverables and milestones should be clearly defined so progress can be tracked without constant supervision. This approach improves morale and reduces burnout but requires strong communication and transparency to avoid misunderstandings and ensure project goals are met.',
    tags: [
      'software-culture',
      'team-management',
      'flexible-schedules',
      'vacation-policy',
      'trust',
    ],
    reference: [
      {
        label: 'Forbes: Implementing flexible work schedule',
        url: 'https://www.forbes.com/councils/forbeshumanresourcescouncil/2020/08/25/13-techniques-for-implementing-a-flexible-work-schedule-policy-efficiently/',
      },
      {
        label: 'HRMorning: Unlimited PTO',
        url: 'https://www.hrmorning.com/articles/unlimited-pto/',
      },
    ],
  },
  {
    id: 'software-culture-11',
    categoryId: 'software-culture',
    question:
      'How would you manage a very high turnover and convince developers not to leave the team, without increasing compensation? What could a company improve to make them stay?',
    answer:
      'To reduce high turnover without raising pay, focus on improving work environment, career growth, recognition, and work-life balance. Foster a positive culture, provide learning opportunities, empower autonomy, and encourage open communication. Making developers feel valued and supported often outweighs compensation alone.',
    code: '',
    hint: 'Think beyond salary: culture, growth, recognition, autonomy, and support.',
    expanded:
      'Developers tend to stay where they feel engaged, respected, and challenged. Providing mentorship, clear career paths, flexible work options, meaningful projects, and regular feedback creates loyalty. Recognizing contributions and promoting psychological safety reduces burnout and dissatisfaction. Ultimately, investing in people and culture builds retention even when budgets are tight.',
    tags: [
      'software-culture',
      'team-management',
      'retention',
      'employee-engagement',
      'work-culture',
    ],
    reference: [
      {
        label: 'Invene: Limiting developer turnover',
        url: 'https://www.invene.com/blog/limiting-developer-turnover',
      },
      {
        label: 'Stack Overflow Developer Survey 2024 - Job Satisfaction',
        url: 'https://survey.stackoverflow.co/2024/developer-profile',
      },
    ],
  },
  {
    id: 'software-culture-12',
    categoryId: 'software-culture',
    question:
      'What are the top 3 qualities you look for in colleagues, beyond their code?',
    answer:
      'Beyond coding skills, I look for collaboration, communication, and a growth mindset. Great colleagues work well with others, communicate clearly, and are eager to learn and adapt.',
    code: '',
    hint: 'Think about teamwork, clarity, and continuous improvement.',
    expanded:
      'Technical skills are important, but the ability to collaborate fosters better team dynamics and project outcomes. Clear communication reduces misunderstandings and speeds up progress. A growth mindset means they embrace feedback, learn from mistakes, and evolve, which benefits the whole team over time.',
    tags: [
      'software-culture',
      'teamwork',
      'communication',
      'growth-mindset',
      'soft-skills',
    ],
    reference: [
      {
        label:
          'We Are Devleopers: The Top Qualities of an Excellent Software Developer',
        url: 'https://www.wearedevelopers.com/en/magazine/166/characteristics-of-a-software-engineer-strengths-and-traits',
      },
      {
        label: 'Geeks for Geeks: Characteristics of a good software engineer',
        url: 'https://www.geeksforgeeks.org/software-engineering/characteristics-of-a-good-software-engineer/',
      },
    ],
  },
  {
    id: 'software-culture-13',
    categoryId: 'software-culture',
    question:
      'What are the top 3 things you wish non-technical people knew about code?',
    answer:
      'First, code is not magic — it’s built through thoughtful planning and problem solving. Second, changing one small thing can have unexpected ripple effects. Third, good code takes time — rushed development often leads to long-term maintenance issues.',
    code: '',
    hint: 'Think about complexity, impact, and timelines.',
    expanded:
      'Understanding these points helps non-technical stakeholders have realistic expectations. Code is a complex system, and changes often require careful consideration. What may seem small can affect many parts of the system. And writing maintainable, scalable code requires more than just “getting it to work” — it involves testing, readability, and long-term thinking.',
    tags: [
      'software-culture',
      'communication',
      'non-technical-awareness',
      'engineering-expectations',
      'code-quality',
    ],
    reference: [
      {
        label: 'LevelUP: 3 things non programmers should know',
        url: 'https://levelup.gitconnected.com/3-most-important-things-non-programmers-should-know-about-programming-73da00ac4437',
      },
    ],
  },
  {
    id: 'software-culture-14',
    categoryId: 'software-culture',
    question:
      "Imagine your company gives you 1 month and some budget to improve your and your colleagues' daily life. What would you do?",
    answer:
      "I'd focus on both comfort and collaboration. This might include upgrading ergonomic equipment, improving our shared tools (like automating common dev tasks), setting up a mental health day or wellness week, and maybe organizing a mini internal hackathon to explore fun or pain-relieving ideas together.",
    code: '',
    hint: 'Think comfort, morale, and lasting team impact.',
    expanded:
      'Improving developer experience goes beyond perks — it’s about removing friction and supporting well-being. Even small investments in tooling, communication processes, or physical comfort (e.g., chairs, screens) can boost morale and productivity. Creating space for team bonding or cross-project experimentation also builds a stronger, more resilient culture.',
    tags: [
      'software-culture',
      'developer-experience',
      'team-health',
      'productivity',
      'wellbeing',
    ],
    reference: [
      {
        label: 'GitHub: Developer Happiness',
        url: 'https://github.blog/engineering/engineering-principles/the-ultimate-guide-to-developer-happiness/https://github.blog/2022-04-12-developer-happiness-is-productivity/',
      },
      {
        label: 'ATlassian: Developer Experience Matters',
        url: 'https://www.atlassian.com/blog/devops/developer-experience-more-important',
      },
    ],
  },

  // Algorithms and Logic ---------------------------

  {
    id: 'algos-logic-1',
    categoryId: 'algos-logic',
    question:
      'Make a FIFO queue using only LIFO stacks. Then build a LIFO stack using only FIFO queues.',
    answer:
      'You can simulate a FIFO queue using two LIFO stacks by pushing to one and popping from the other, transferring elements only when necessary. To simulate a LIFO stack using FIFO queues, enqueue elements and rotate the queue after each insertion so the most recent item stays at the front.',
    code: '// FIFO Queue using two LIFO Stacks\nclass Queue {\n  constructor() {\n    this.inStack = [];\n    this.outStack = [];\n  }\n\n  enqueue(val) {\n    this.inStack.push(val);\n  }\n\n  dequeue() {\n    if (!this.outStack.length) {\n      while (this.inStack.length) {\n        this.outStack.push(this.inStack.pop());\n      }\n    }\n    return this.outStack.pop();\n  }\n}\n\n// LIFO Stack using two FIFO Queues\nclass Stack {\n  constructor() {\n    this.q1 = [];\n    this.q2 = [];\n  }\n\n  push(val) {\n    this.q2.push(val);\n    while (this.q1.length) {\n      this.q2.push(this.q1.shift());\n    }\n    [this.q1, this.q2] = [this.q2, this.q1];\n  }\n\n  pop() {\n    return this.q1.shift();\n  }\n}',
    hint: 'Think about transferring elements between two stacks or queues to simulate the opposite behavior.',
    expanded:
      'Stacks and queues are opposites in how they manage order—LIFO vs FIFO. By cleverly transferring elements between two structures, you can simulate the opposite behavior. For the queue with stacks, delay the reversal until necessary (lazy transfer). For the stack with queues, force order on every push (eager rotation). These techniques allow for structural inversion.',
    tags: [
      'data-structures',
      'stack',
      'queue',
      'interview',
      'algorithms',
      'javascript',
    ],
    reference: [
      {
        label: 'Geeks for Geeks: Implement Queue using Stacks',
        url: 'https://www.geeksforgeeks.org/dsa/queue-using-stacks/',
      },
      {
        label: 'Geeks for Geeks: Implement Stack using Queues',
        url: 'https://www.geeksforgeeks.org/implement-stack-using-queue/',
      },
    ],
  },
  {
    id: 'algos-logic-2',
    categoryId: 'algos-logic',
    question: 'Write a snippet of code affected by a stack overflow.',
    answer:
      'A stack overflow occurs when a program uses more stack memory than is available—usually by excessive or infinite recursion.',
    code: '// Infinite recursion leading to stack overflow\nfunction recurse() {\n  return recurse();\n}\n\nrecurse(); // ⚠️ Maximum call stack size exceeded',
    hint: 'Think about recursion without a base case.',
    expanded:
      'Each function call in JavaScript (and most languages) consumes stack space. Recursive functions must have base cases to stop calling themselves. Without one, like in this example, the call stack grows until the runtime throws an error (often "Maximum call stack size exceeded"). This is a stack overflow.',
    tags: [
      'recursion',
      'stack-overflow',
      'call-stack',
      'algorithms',
      'errors',
      'javascript',
    ],
    reference: [
      {
        label: 'MDN: Call stack',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/Call_stack',
      },
      {
        label: 'Geeks for Geeks: Stack overflow',
        url: 'https://www.geeksforgeeks.org/cpp/heap-overflow-stack-overflow/',
      },
    ],
  },
  {
    id: 'algos-logic-3',
    categoryId: 'algos-logic',
    question: 'Write a tail-recursive version of the factorial function.',
    answer:
      'A tail-recursive function performs the recursive call as its final action. This allows some languages (not JavaScript) to optimize and reuse the same stack frame.',
    code: '// Tail-recursive factorial (ES6+ style, not optimized in JS engines)\nfunction factorial(n, acc = 1) {\n  if (n <= 1) return acc;\n  return factorial(n - 1, n * acc);\n}\n\nconsole.log(factorial(5)); // Output: 120',
    hint: 'Use an accumulator to carry the result through recursive calls.',
    expanded:
      'In tail recursion, the recursive call is the last statement executed. Some languages (like Scheme, Scala, or newer versions of Python with optimizations) support Tail Call Optimization (TCO), which allows efficient recursion. JavaScript currently lacks guaranteed TCO, so the optimization may not apply, but the style is still useful for understanding recursion principles.',
    tags: [
      'recursion',
      'tail-recursion',
      'factorial',
      'optimization',
      'javascript',
      'algorithms',
    ],
    reference: [
      {
        label: 'MDN: Recursion',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/Recursion',
      },
      {
        label: 'Geeks for geeks: Tail recursion',
        url: 'https://www.geeksforgeeks.org/dsa/tail-recursion/',
      },
    ],
  },

  {
    id: 'algos-logic-4',
    categoryId: 'algos-logic',
    question:
      'Using your preferred language, write a REPL that echoes your inputs. Evolve it to make it an RPN calculator.',
    answer:
      'A REPL (Read-Eval-Print Loop) continuously reads user input, evaluates it, and prints the result. Starting with an echo REPL is a good base. An RPN (Reverse Polish Notation) calculator uses a stack to evaluate expressions without parentheses.',
    code: "// Simple echo REPL (Node.js only)\nconst readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nconsole.log('Echo REPL: Type something');\nrl.on('line', (input) => {\n  console.log(`You said: ${input}`);\n});\n\n// RPN Calculator (e.g. input: '3 4 +')\nrl.on('line', (input) => {\n  const tokens = input.trim().split(' ');\n  const stack = [];\n\n  for (let token of tokens) {\n    if (!isNaN(token)) {\n      stack.push(Number(token));\n    } else {\n      const b = stack.pop();\n      const a = stack.pop();\n      switch (token) {\n        case '+': stack.push(a + b); break;\n        case '-': stack.push(a - b); break;\n        case '*': stack.push(a * b); break;\n        case '/': stack.push(a / b); break;\n        default: console.log(`Unknown operator: ${token}`);\n      }\n    }\n  }\n\n  console.log('Result:', stack[0]);\n});",
    hint: 'Start with a readline loop. Then add a stack and evaluate operations from left to right.',
    expanded:
      'A REPL provides an interactive command-line interface. In JavaScript, this is done using Node’s `readline` module. To convert it into an RPN calculator, maintain a stack, push numbers onto it, and perform operations by popping values off. This demonstrates stack usage and control flow.',
    tags: ['javascript', 'repl', 'stack', 'rpn', 'nodejs', 'algorithms'],
    reference: [
      {
        label: 'Node.js: Readline module',
        url: 'https://nodejs.org/api/readline.html',
      },
      {
        label: 'Wikipedia: Reverse Polish Notation',
        url: 'https://en.wikipedia.org/wiki/Reverse_Polish_notation',
      },
    ],
  },
  {
    id: 'algos-logic-5',
    categoryId: 'algos-logic',
    question: 'How would you design a "defragger" utility?',
    answer:
      'A "defragger" rearranges fragmented files on disk to occupy contiguous blocks, improving read/write performance. Designing one involves analyzing disk layout, identifying fragmented files, and moving their parts to contiguous spaces while updating file system metadata safely.',
    code: '',
    hint: 'Think about how files are stored in blocks and what fragmentation means for performance.',
    expanded:
      'File fragmentation occurs when files are split into scattered blocks on disk due to frequent modifications, deletions, or space limitations. A defragger scans the file system, identifies non-contiguous file blocks, and moves them into adjacent free blocks to make access faster. Key concerns include ensuring data integrity, minimizing downtime, and coordinating with the operating system to lock or schedule file movements safely. For SSDs, defragmentation is often discouraged, as it doesn’t improve performance and may reduce drive lifespan.',
    tags: [
      'algorithms',
      'file-systems',
      'optimization',
      'disk-management',
      'performance',
    ],
    reference: [
      {
        label: 'Wikipedia: Disk defragmentation',
        url: 'https://en.wikipedia.org/wiki/Defragmentation',
      },
      {
        label: 'CCRComputing: Defragmentation',
        url: 'https://ccrcomputing.weebly.com/defragmentation.html',
      },
    ],
  },
  {
    id: 'algos-logic-6',
    categoryId: 'algos-logic',
    question: 'Write a program that builds random mazes.',
    answer:
      'A program that builds random mazes can use algorithms like recursive backtracking, Prim’s algorithm, or Kruskal’s algorithm. These algorithms start with a grid and carve out paths randomly while ensuring the maze remains solvable with no isolated sections.',
    code: `// Recursive Backtracking Maze Generator (JavaScript)
const createMaze = (width, height) => {
  const maze = Array.from({ length: height }, () => Array(width).fill('█'));
  const directions = [
    [0, -2], [2, 0], [0, 2], [-2, 0]
  ];
  const isValid = (x, y) =>
    x > 0 && x < width - 1 && y > 0 && y < height - 1;

  const carve = (x, y) => {
    maze[y][x] = ' ';
    directions.sort(() => Math.random() - 0.5);
    for (const [dx, dy] of directions) {
      const nx = x + dx, ny = y + dy;
      if (isValid(nx, ny) && maze[ny][nx] === '█') {
        maze[y + dy / 2][x + dx / 2] = ' ';
        carve(nx, ny);
      }
    }
  };

  carve(1, 1);
  return maze.map(row => row.join('')).join('\\n');
};

console.log(createMaze(21, 21));`,
    hint: 'Use depth-first search or another spanning tree algorithm to carve paths in a grid.',
    expanded:
      'Maze generation algorithms create complex paths while ensuring there is one or more ways to get from start to end. Recursive backtracking is a common approach where the algorithm carves out a path from a starting point and backtracks when it hits a dead end. Randomized Prim’s or Kruskal’s algorithms work by building a minimum spanning tree over the grid cells. These algorithms avoid loops and ensure that the resulting maze has a single connected component.',
    tags: [
      'algorithms',
      'mazes',
      'recursion',
      'backtracking',
      'data-structures',
      'pathfinding',
    ],
    reference: [
      {
        label: 'Wikipedia: Maze generation algorithm',
        url: 'https://en.wikipedia.org/wiki/Maze_generation_algorithm',
      },
      {
        label: 'Medium: Maze Generation',
        url: 'https://medium.com/swlh/how-to-create-a-maze-with-javascript-36f3ad8eebc1',
      },
    ],
  },
  {
    id: 'algos-logic-7',
    categoryId: 'algos-logic',
    question: 'Write a sample program that produces a memory leak.',
    answer:
      'Memory leaks occur when allocated memory is never released, often because objects are unintentionally kept in memory due to lingering references. In JavaScript, this commonly happens with global variables, closures, or forgotten DOM elements.',
    code: `// Memory leak example in JavaScript
const leaks = [];

function leakMemory() {
  const largeData = new Array(1e6).fill('leak'); // 1 million items
  leaks.push(() => largeData); // closure keeps reference alive
}

// Call repeatedly to simulate leak over time
setInterval(leakMemory, 1000);`,
    hint: 'Think about what happens when memory is referenced but never released.',
    expanded:
      'This example creates a large array and captures it inside a closure, which is then pushed into a global array. Because the reference to the data is never removed, the garbage collector cannot reclaim the memory. Over time, this will increase memory usage indefinitely. To avoid leaks, ensure objects no longer needed are dereferenced or removed from long-lived structures.',
    tags: [
      'memory',
      'javascript',
      'leak',
      'closures',
      'debugging',
      'performance',
    ],
    reference: [
      {
        label: 'MDN Web Docs: Memory Management',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management',
      },
      {
        label: 'Geeks for Geeks: JavaScript Memory Leaks',
        url: 'https://www.geeksforgeeks.org/javascript/how-to-handle-memory-leaks-in-javascript/',
      },
    ],
  },
  {
    id: 'algos-logic-8',
    categoryId: 'algos-logic',
    question: 'Generate a sequence of unique random numbers.',
    answer:
      'To generate a sequence of unique random numbers, you need to ensure no duplicates are included. A common approach is to shuffle an array of numbers and then pick from it, or use a Set to track uniqueness while generating.',
    code: `// Generate unique random numbers between 1 and 100 (inclusive)
function generateUniqueRandomNumbers(count, max) {
  if (count > max) throw new Error("Count cannot be greater than max");

  const numbers = Array.from({ length: max }, (_, i) => i + 1);
  // Fisher-Yates shuffle
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  return numbers.slice(0, count);
}

// Example usage:
const uniqueRandoms = generateUniqueRandomNumbers(10, 100);
console.log(uniqueRandoms);`,
    hint: 'Shuffling an array is often easier than generating and checking for duplicates.',
    expanded:
      'By shuffling an array of numbers from 1 to max, you randomize the order without duplicates. Then, by slicing the first count numbers, you get a unique sequence. This approach is efficient and guarantees uniqueness without extra checks.',
    tags: [
      'random',
      'unique',
      'javascript',
      'algorithm',
      'shuffle',
      'fisher-yates',
    ],
    reference: [
      {
        label: 'Wikipedia: Fisher–Yates shuffle',
        url: 'https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle',
      },
      {
        label: 'MDN: Array.prototype.sort() and random shuffling',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#random_shuffle',
      },
    ],
  },
  {
    id: 'algos-logic-9',
    categoryId: 'algos-logic',
    question: 'Write a simple garbage collection system.',
    answer:
      'Garbage collection automatically frees memory that is no longer reachable. One simple approach is the mark-and-sweep algorithm: it marks all reachable objects, then sweeps away unmarked (unreachable) ones.',
    code: `// Simple mark-and-sweep GC simulation in JS

class GCObject {
  constructor(name) {
    this.name = name;
    this.references = [];
    this.marked = false;
  }
}

class SimpleGC {
  constructor() {
    this.objects = [];
    this.roots = [];
  }

  addObject(obj) {
    this.objects.push(obj);
  }

  addRoot(obj) {
    this.roots.push(obj);
  }

  mark(obj) {
    if (obj.marked) return;
    obj.marked = true;
    obj.references.forEach(ref => this.mark(ref));
  }

  sweep() {
    this.objects = this.objects.filter(obj => {
      if (!obj.marked) {
        console.log(\`Collecting \${obj.name}\`);
        return false; // Remove unmarked objects
      }
      obj.marked = false; // Reset for next GC cycle
      return true;
    });
  }

  collect() {
    this.roots.forEach(root => this.mark(root));
    this.sweep();
  }
}

// Example usage
const gc = new SimpleGC();

const objA = new GCObject('A');
const objB = new GCObject('B');
const objC = new GCObject('C');
const objD = new GCObject('D');

objA.references.push(objB);
objB.references.push(objC);

gc.addObject(objA);
gc.addObject(objB);
gc.addObject(objC);
gc.addObject(objD);

gc.addRoot(objA);

gc.collect(); // Should collect D because it is unreachable
`,
    hint: 'Think about marking reachable objects first, then removing the rest.',
    expanded:
      'The mark-and-sweep garbage collector starts from root objects and marks all reachable objects recursively. Then it removes all objects that were not marked, freeing memory. This simple simulation helps illustrate the concept but real-world GCs are much more complex and optimized.',
    tags: [
      'garbage-collection',
      'memory-management',
      'mark-and-sweep',
      'algorithm',
      'javascript',
    ],
    reference: [
      {
        label: 'Wikipedia: Garbage Collection',
        url: 'https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)',
      },
      {
        label: 'Geeks for Geeks: Garbage Collection',
        url: 'https://www.geeksforgeeks.org/javascript/garbage-collection-in-javascript/',
      },
    ],
  },
  {
    id: 'algos-logic-10',
    categoryId: 'algos-logic',
    question: 'Write a basic message broker, using whatever language you like.',
    answer:
      'A message broker acts as an intermediary that allows different parts of a system to communicate asynchronously by publishing and subscribing to messages.',
    code: `// Basic Message Broker in JavaScript (Pub/Sub pattern)
class MessageBroker {
  constructor() {
    this.topics = {};
  }

  subscribe(topic, listener) {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    this.topics[topic].push(listener);
  }

  unsubscribe(topic, listener) {
    if (!this.topics[topic]) return;
    this.topics[topic] = this.topics[topic].filter(l => l !== listener);
  }

  publish(topic, message) {
    if (!this.topics[topic]) return;
    this.topics[topic].forEach(listener => listener(message));
  }
}

// Usage Example
const broker = new MessageBroker();

function subscriber1(msg) {
  console.log('Subscriber 1 received:', msg);
}

function subscriber2(msg) {
  console.log('Subscriber 2 received:', msg);
}

broker.subscribe('news', subscriber1);
broker.subscribe('news', subscriber2);

broker.publish('news', 'Hello subscribers!');

broker.unsubscribe('news', subscriber2);

broker.publish('news', 'Second message');`,
    hint: 'Think about topics, subscriptions, and publishing messages.',
    expanded:
      'This simple broker maintains a list of topics and their subscribers. Subscribers register callback functions to topics. When a message is published to a topic, all subscribed callbacks are invoked with the message. This decouples senders and receivers, enabling asynchronous communication.',
    tags: [
      'message-broker',
      'pub-sub',
      'asynchronous',
      'event-driven',
      'javascript',
    ],
    reference: [
      {
        label: 'Wikipedia: Message Broker',
        url: 'https://en.wikipedia.org/wiki/Message_broker',
      },
      {
        label: 'TSH: Message broker',
        url: 'https://tsh.io/blog/message-broker/',
      },
    ],
  },
  {
    id: 'algos-logic-11',
    categoryId: 'algos-logic',
    question:
      'Write a very basic web server. Draw a roadmap for features to be implemented in the future.',
    answer:
      'A very basic web server listens for HTTP requests and sends back responses. Below is a simple example using Node.js built-in http module.',
    code: `// Basic HTTP Web Server in Node.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200; // OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!\\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log('Server running at http://localhost:' + PORT);
});`,
    hint: 'Start simple: listen on a port, respond to any request.',
    expanded:
      'This server listens on port 3000 and responds with "Hello, world!" for any HTTP request. It forms the foundation for building more complex web servers. Future improvements include routing, static file serving, middleware, template rendering, REST API support, security, and performance enhancements.',
    tags: ['web-server', 'nodejs', 'http', 'backend', 'javascript'],
    reference: [
      {
        label: 'Node.js HTTP Module',
        url: 'https://www.w3schools.com/nodejs/nodejs_http.asp',
      },
      {
        label: 'MDN: HTTP Server',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework',
      },
    ],
  },
  {
    id: 'algos-logic-12',
    categoryId: 'algos-logic',
    question:
      'How would you sort a 10GB file? How would your approach change with a 10TB one?',
    answer:
      'Sorting a 10GB file typically exceeds available RAM, so an external sorting algorithm is needed, like External Merge Sort. For a 10TB file, the approach must handle even larger data and possibly distributed storage and processing.',
    code: `// Pseudocode for External Merge Sort:
// 1. Break the large file into smaller chunks that fit into memory.
// 2. Sort each chunk in memory and write it back to disk as a sorted "run".
// 3. Merge sorted runs in passes until one sorted file remains.

function externalMergeSort(file, chunkSize) {
  // Step 1: Read file in chunks of chunkSize
  // Step 2: Sort each chunk and write to temp files
  // Step 3: Merge temp files pairwise until one remains
}`,
    hint: 'Think about memory limits and disk I/O; merge sorted chunks.',
    expanded:
      'For 10GB, external merge sort divides the file into manageable chunks, sorts them individually, and merges sorted chunks efficiently. For 10TB, single-machine external sort becomes impractical; you might use distributed systems like Hadoop or Spark to parallelize sorting across many nodes. Also, storage, network, and fault tolerance become critical factors.',
    tags: [
      'external-sort',
      'big-data',
      'file-sorting',
      'merge-sort',
      'distributed-systems',
    ],
    reference: [
      {
        label: 'Wikipedia: External Sorting',
        url: 'https://en.wikipedia.org/wiki/External_sorting',
      },
      {
        label: 'W3Schools: Storage Key',
        url: 'https://www.w3schools.com/jsref/met_storage_key.asp',
      },
    ],
  },
  {
    id: 'algos-logic-13',
    categoryId: 'algos-logic',
    question: 'How would you programmatically detect file duplicates?',
    answer:
      'To detect file duplicates, you can compare files using their content hashes. The process involves computing a hash (like MD5, SHA-1, or SHA-256) for each file and grouping files with identical hashes as duplicates. This approach is efficient because comparing hashes is faster than comparing entire file contents.',
    code: `const crypto = require('crypto');
const fs = require('fs');

function hashFile(filePath) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);
    stream.on('data', chunk => hash.update(chunk));
    stream.on('end', () => resolve(hash.digest('hex')));
    stream.on('error', err => reject(err));
  });
}

async function findDuplicates(files) {
  const hashMap = {};
  for (const file of files) {
    const hash = await hashFile(file);
    if (hashMap[hash]) {
      hashMap[hash].push(file);
    } else {
      hashMap[hash] = [file];
    }
  }
  return Object.values(hashMap).filter(group => group.length > 1);
}

// Usage example:
// findDuplicates(['file1.txt', 'file2.txt', 'file3.txt']).then(console.log);
`,
    hint: 'Use file hashing to identify identical content without comparing full files directly.',
    expanded:
      'Computing cryptographic hashes uniquely represents file content. Files with matching hashes are likely duplicates. To optimize, you might first compare file sizes to avoid hashing files that differ in size, and only hash files with the same size. For large datasets, incremental or chunked hashing and caching results can improve performance.',
    tags: ['file-duplicates', 'hashing', 'crypto', 'file-system', 'efficiency'],
    reference: [
      {
        label: 'Wikipedia: Cryptographic Hash Function',
        url: 'https://en.wikipedia.org/wiki/Cryptographic_hash_function',
      },
      {
        label: 'Node.js crypto module',
        url: 'https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options',
      },
    ],
  },

  // Software Architecture ----------------------------------

  {
    id: 'software-arch-1',
    categoryId: 'software-architecture',
    question: 'When is a cache not useful or even dangerous?',
    answer:
      'A cache is not useful when the data changes very frequently, or when the cost of retrieving fresh data is low compared to the complexity and overhead of maintaining the cache. It can be dangerous if it serves stale data that leads to incorrect application behavior, or if it consumes too much memory or resources without clear benefits.',
    code: '',
    hint: 'Think about data freshness, consistency, and resource costs.',
    expanded:
      'Caching is beneficial when data is read often but updated infrequently. If data changes frequently or requires strong consistency, caching risks serving outdated or incorrect information, leading to bugs or security issues. Additionally, improperly managed caches can consume excessive memory or CPU, degrade performance, or introduce cache coherence problems. Therefore, caching strategies must balance performance gains with potential consistency and complexity costs.',
    tags: [
      'software-architecture',
      'caching',
      'performance',
      'consistency',
      'design-considerations',
    ],
    reference: [
      {
        label: 'Momento: Think before you cache',
        url: 'https://www.gomomento.com/blog/think-first-cache-later/',
      },
      {
        label: 'Geeks for Geeks: Why Caching isnt always useful',
        url: 'https://www.geeksforgeeks.org/system-design/why-caching-does-not-always-improve-performance/',
      },
    ],
  },
  {
    id: 'software-arch-2',
    categoryId: 'software-architecture',
    question: 'Why does Event-Driven Architecture improve scalability?',
    answer:
      'Event-Driven Architecture (EDA) improves scalability by decoupling producers and consumers of data, allowing systems to handle events asynchronously and independently, which enables horizontal scaling and better resource utilization.',
    code: '',
    hint: 'Think about decoupling, asynchronous processing, and independent scaling.',
    expanded:
      'In an Event-Driven Architecture, components communicate by emitting and reacting to events, rather than calling each other directly. This loose coupling means that components can evolve and scale independently. Since events are often handled asynchronously (e.g., via message queues or pub/sub systems), the system can process workloads in parallel and buffer spikes in demand. This allows for better fault isolation, load balancing, and the ability to scale consumers up or down based on event volume.',
    tags: [
      'software-architecture',
      'event-driven-architecture',
      'scalability',
      'asynchronous',
      'microservices',
    ],
    reference: [
      {
        label: 'Martin Fowler: Event-Driven Architecture',
        url: 'https://martinfowler.com/articles/201701-event-driven.html',
      },
      {
        label: 'AWS: Event-driven architecture',
        url: 'http://aws.amazon.com/event-driven-architecture/',
      },
    ],
  },
  {
    id: 'software-arch-3',
    categoryId: 'software-architecture',
    question:
      'How would you approach setting up a scalable server architecture?',
    answer:
      'Setting up a scalable server architecture involves designing systems that can handle increased load by adding resources efficiently. This includes using load balancers, stateless services, horizontal scaling, caching, and database optimization.',
    code: '',
    hint: 'Think in layers: load balancing, stateless services, horizontal scaling, data stores.',
    expanded:
      'A scalable server architecture typically begins with a **load balancer** to distribute traffic across multiple instances. Services should be **stateless** so they can be replicated or restarted without affecting the system. You should design for **horizontal scaling**, allowing the system to handle increased traffic by adding more servers. Use **caching** at different levels (CDN, in-memory caches like Redis) to reduce repeated computations and database load. For data storage, consider **read replicas**, **sharding**, or **NoSQL** solutions based on access patterns. Monitoring, auto-scaling, and infrastructure as code (IaC) tools help maintain scalability as demand changes.',
    tags: [
      'software-architecture',
      'scalability',
      'load-balancing',
      'stateless',
      'horizontal-scaling',
      'caching',
      'infrastructure',
    ],
    reference: [
      {
        label: 'DigitalOcean: How To Scale a Web Application',
        url: 'https://www.digitalocean.com/resources/articles/scale-web-app',
      },
      {
        label: 'Geeks for Geeks: Guide for scalable systems',
        url: 'https://www.geeksforgeeks.org/system-design/guide-for-designing-highly-scalable-systems/',
      },
    ],
  },
  {
    id: 'software-arch-4',
    categoryId: 'software-architecture',
    question: 'What makes code readable?',
    answer:
      'Readable code is clear, consistent, and easy to understand by others (or your future self). It uses meaningful names, follows consistent formatting, avoids deep nesting, and separates concerns.',
    code: '',
    hint: 'Think about naming, formatting, comments, and simplicity.',
    expanded:
      'Readable code follows principles that prioritize human understanding over cleverness. Good naming conventions help express purpose and intent. Consistent indentation and formatting make structure clear. Simplicity over complexity reduces cognitive load. Clear separation of concerns keeps functions and components focused on a single task. Comments, where necessary, explain why something is done, not what is done. Following established conventions and linters also improves readability across teams.',
    tags: [
      'software-architecture',
      'readability',
      'clean-code',
      'naming-conventions',
      'code-style',
    ],
    reference: [
      {
        label: 'Fellow: Guide to readable code',
        url: 'https://fellow.app/blog/the-complete-guide-to-readable-code/',
      },
      {
        label: 'Geeks for Geeks: Writing readable code',
        url: 'https://www.geeksforgeeks.org/blogs/tips-to-write-clean-and-better-code/',
      },
    ],
  },
  {
    id: 'software-arch-5',
    categoryId: 'software-architecture',
    question:
      'What is the difference between emergent design and evolutionary architecture?',
    answer:
      'Emergent design is about allowing the software’s internal structure to evolve as the system grows, using principles like refactoring and continuous feedback. Evolutionary architecture, on the other hand, focuses on enabling the *overall* architecture to evolve to meet changing business and technical requirements over time.',
    code: '',
    hint: 'Think of design as internal structure and architecture as high-level system shape.',
    expanded:
      'Emergent design happens at the code and component level, encouraging simplicity and flexibility through practices like TDD, YAGNI, and constant refactoring. It avoids over-engineering by letting the best design emerge naturally through iterations.\n\nEvolutionary architecture is a higher-level concept concerned with enabling large-scale system changes, such as switching databases, decomposing monoliths, or adapting to new protocols. It involves building in change as a core principle—e.g., using fitness functions, loose coupling, and modular components.\n\nBoth approaches aim to create systems that can adapt, but they operate at different layers.',
    tags: [
      'software-architecture',
      'emergent-design',
      'evolutionary-architecture',
      'agile',
      'refactoring',
      'modularity',
    ],
    reference: [
      {
        label: 'ThoughtWorks: Evolutionary Architecture',
        url: 'https://www.thoughtworks.com/en-us/radar/techniques/evolutionary-architecture',
      },
      {
        label: 'Medium: Agile Architecture',
        url: 'https://medium.com/@stefano.rossini.mail/agile-architecture-intentional-emergent-evolutionary-architectures-da77905098fc',
      },
    ],
  },
  {
    id: 'software-arch-6',
    categoryId: 'software-architecture',
    question:
      'Scale out vs scale up: how are they different? When to apply one, when the other?',
    answer:
      'Scaling up means upgrading existing hardware (e.g., more CPU, RAM), while scaling out means adding more machines to distribute the load. Scaling out is often preferred for horizontal scalability and fault tolerance, especially in cloud environments.',
    code: '',
    hint: 'Think vertical (scale up) vs horizontal (scale out).',
    expanded:
      'Scaling up (vertical scaling) increases the capacity of a single server or system by adding more resources. It’s simpler but limited by hardware constraints and can create a single point of failure.\n\nScaling out (horizontal scaling) adds more servers to handle increased load. It offers better fault tolerance and elasticity, especially in distributed systems. However, it introduces complexity, like data distribution and consistency challenges.\n\nUse scale up for quick, low-complexity performance boosts. Use scale out for web-scale applications, systems with high availability needs, or when elasticity is a key concern.',
    tags: [
      'software-architecture',
      'scaling',
      'performance',
      'cloud',
      'infrastructure',
      'horizontal-scaling',
      'vertical-scaling',
    ],
    reference: [
      {
        label: 'Microsoft: Scaling up vs scaling out',
        url: 'https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/scaling-out-vs-scaling-up',
      },
      {
        label: 'Portworx: Scaling up vs Scaling out',
        url: 'https://portworx.com/blog/scale-up-vs-scale-out/',
      },
    ],
  },
  {
    id: 'software-arch-7',
    categoryId: 'software-architecture',
    question: 'How to deal with failover and user sessions?',
    answer:
      'To ensure reliability and a good user experience during failover, user sessions should be decoupled from any single server and managed in a shared, persistent storage system. This way, if one server fails, another can resume the session seamlessly.',
    code: '',
    hint: 'Think about stateful vs stateless designs and external session storage.',
    expanded:
      'Failover is the ability of a system to switch to a backup component when one fails. If user sessions are stored in-memory on a single server (stateful), users will be logged out or lose progress during failover.\n\nTo prevent this, sessions should be managed externally using:\n- Distributed caches like Redis or Memcached\n- Databases (SQL or NoSQL)\n- Token-based authentication (like JWTs) for stateless session handling\n\nFor high availability, combine session replication, health checks, load balancing, and clustering. Stateless designs with token-based auth offer the most scalability but have limitations (e.g., token revocation).',
    tags: [
      'software-architecture',
      'sessions',
      'failover',
      'high-availability',
      'state-management',
      'scalability',
    ],
    reference: [
      {
        label: 'NGINX: Session Persistence',
        url: 'https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/#session-persistence',
      },
      {
        label: 'EnterpriseDB: Session State Failover',
        url: 'https://www.enterprisedb.com/blog/session-state-failover',
      },
    ],
  },
  {
    id: 'software-arch-8',
    categoryId: 'software-architecture',
    question:
      'What is CQRS (Command Query Responsibility Segregation)? How is it different from the oldest Command-Query Separation Principle?',
    answer:
      'CQRS is an architectural pattern that separates read and write operations into different models to optimize performance, scalability, and maintainability. The older Command-Query Separation (CQS) principle simply states that a method should either perform an action (command) or return data (query), but not both.',
    code: '',
    hint: 'Think about the scale of application and system architecture vs individual method design.',
    expanded:
      'Command Query Responsibility Segregation (CQRS) applies at the architectural level: it separates the models used for reading (queries) from those used for writing (commands). This allows independent scaling, optimization, and security strategies for each side. For example, reads may use denormalized data optimized for performance, while writes enforce business rules and validations.\n\nCommand-Query Separation (CQS), proposed by Bertrand Meyer, is a design principle at the method level. It says that a function should either change state or return data—but never both. CQS supports code clarity and predictability.\n\nCQRS can be seen as applying CQS at a larger, system-wide scale, but with additional concerns like event sourcing and distributed processing.',
    tags: [
      'software-architecture',
      'cqrs',
      'cqs',
      'read-write-separation',
      'design-principles',
      'architecture-patterns',
    ],
    reference: [
      {
        label: 'Microsoft Docs: Introduction to CQRS',
        url: 'https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs',
      },
      {
        label: 'Martin Fowler: CQRS',
        url: 'https://martinfowler.com/bliki/CQRS.html',
      },
    ],
  },
  {
    id: 'software-arch-9',
    categoryId: 'software-architecture',
    question:
      'The so-called "multi tier architecture" is an approach to design a client–server system aimed to keep physically and logically separated presentation, application processing, data management and other functions. The most widespread of the multi tier architectures is the three-tier architecture. Would you discuss the pros and cons of such an approach?',
    answer:
      'Three-tier architecture separates an application into presentation, business logic, and data storage layers. This separation promotes modularity, scalability, and maintainability but also introduces complexity and potential performance overhead.',
    code: '',
    hint: 'Think about modularity, scalability, complexity, and deployment.',
    expanded:
      'Pros:\n' +
      '- **Modularity:** Each layer focuses on a specific responsibility, making the system easier to develop, test, and maintain.\n' +
      '- **Scalability:** Layers can be scaled independently depending on load, improving resource utilization.\n' +
      '- **Reusability:** Business logic can be reused across multiple user interfaces.\n' +
      '- **Separation of concerns:** Encourages clear boundaries and team specialization.\n\n' +
      'Cons:\n' +
      '- **Increased complexity:** Managing multiple layers can complicate development and debugging.\n' +
      '- **Performance overhead:** Communication between layers may introduce latency.\n' +
      '- **Deployment challenges:** Coordinating deployments across layers requires careful planning.\n' +
      '- **Potential over-engineering:** For small or simple applications, three-tier may be unnecessarily complex.\n\n' +
      'Overall, three-tier architecture works well for medium to large applications requiring clear separation, scalability, and maintainability, but may be excessive for simpler projects.',
    tags: [
      'software-architecture',
      'multi-tier',
      'three-tier',
      'modularity',
      'scalability',
      'design-patterns',
    ],
    reference: [
      {
        label: 'Geeks for Geeks: Multi-tier architecture',
        url: 'https://www.geeksforgeeks.org/system-design/multitiered-architectures-in-distributed-system/',
      },
      {
        label: 'GeeksforGeeks: Three Tier Architecture',
        url: 'https://www.geeksforgeeks.org/computer-networks/three-tier-client-server-architecture-in-distributed-system/',
      },
      {
        label: 'Medium: Multi-tier Architecture',
        url: 'https://medium.com/software-architecture-patterns-and-styles/software-architecture-patterns-and-styles-part-1-multi-tier-architecture-bc5064ea6329',
      },
    ],
  },
  {
    id: 'software-arch-10',
    categoryId: 'software-architecture',
    question: 'How would you design a software system for scalability?',
    answer:
      'Designing for scalability means building a system that can handle increased load gracefully by adding resources or distributing work efficiently.',
    code: '',
    hint: 'Think about horizontal scaling, statelessness, caching, and decoupling components.',
    expanded:
      'Key strategies include:\n' +
      '- **Horizontal scaling:** Add more machines or instances rather than relying on bigger hardware.\n' +
      '- **Stateless design:** Keep services stateless so requests can be handled by any instance.\n' +
      '- **Load balancing:** Distribute incoming traffic evenly among servers.\n' +
      '- **Caching:** Use caches (in-memory, CDN) to reduce load on databases and services.\n' +
      '- **Decoupling components:** Use message queues or event-driven architectures to reduce tight coupling.\n' +
      '- **Database scaling:** Employ techniques like sharding, replication, and optimized indexing.\n' +
      '- **Asynchronous processing:** Offload heavy or long-running tasks to background workers.\n\n' +
      'By combining these approaches, systems can grow in capacity and reliability as demand increases.',
    tags: [
      'software-architecture',
      'scalability',
      'load-balancing',
      'caching',
      'distributed-systems',
      'design-principles',
    ],
    reference: [
      {
        label: 'Geeks for Geeks: Guide for Designing Scalable Systems',
        url: 'https://www.geeksforgeeks.org/system-design/guide-for-designing-highly-scalable-systems/',
      },
      {
        label: 'Statsig: Disgning for Scalability',
        url: 'https://www.statsig.com/perspectives/designing-for-scalability-principles',
      },
    ],
  },
  {
    id: 'software-arch-11',
    categoryId: 'software-architecture',
    question:
      'Someone gave the name "The "C10k problem" to the problem of optimizing network sockets to handle over 10.000 open connections at once. While handling 10.000 concurrent clients is not the same as handling 10.000 open connections, the context is similar. It\'s a tough challenge anyway, and no one is expected to know every single detail to solve it. It may be interesting to discuss the strategies you know to deal with that problem. Would you like to try?',
    answer:
      'Yes. The C10k problem focuses on efficiently managing thousands of simultaneous connections without exhausting system resources or degrading performance. It requires moving beyond traditional blocking I/O and thread-per-connection models.',
    code: '',
    hint: 'Think about event-driven I/O, non-blocking sockets, and resource management.',
    expanded:
      'Key strategies include:\n' +
      '- **Event-driven architectures:** Use non-blocking I/O with event loops (e.g., `epoll`, `kqueue`, or IOCP) to efficiently handle many connections with a small number of threads.\n' +
      '- **Asynchronous programming:** Avoid blocking calls; use async APIs and callbacks or futures/promises.\n' +
      '- **Connection lifecycle management:** Implement timeouts, keep-alive handling, and backpressure to prevent overload.\n' +
      '- **Thread and process efficiency:** Avoid creating one thread per connection. Use thread pools, coroutines, or fibers (e.g., goroutines).\n' +
      '- **Load balancing:** Use reverse proxies or load balancers (like HAProxy or Nginx) to spread the load across multiple servers.\n' +
      '- **Kernel tuning:** Increase file descriptor limits, tune socket buffers, and optimize TCP stack settings.\n' +
      '- **Efficient protocols:** Use multiplexed or connection-efficient protocols like HTTP/2 or QUIC.\n\n' +
      'These techniques allow modern systems to scale to tens or even hundreds of thousands of concurrent open connections without significant performance degradation.',
    tags: [
      'software-architecture',
      'networking',
      'concurrency',
      'performance',
      'scalability',
      'c10k-problem',
    ],
    reference: [
      {
        label: 'Wikipedia: The C10k problem',
        url: 'https://en.wikipedia.org/wiki/C10k_problem',
      },
      {
        label: 'Stack Overflow: The C10k problem',
        url: 'https://stackoverflow.com/questions/17593699/tcp-ip-solving-the-c10k-with-the-thread-per-client-approach',
      },
    ],
  },
  {
    id: 'software-arch-12',
    categoryId: 'software-architecture',
    question:
      'How would you design a decentralized (that is, with no central server) P2P system?',
    answer:
      'To design a decentralized peer-to-peer (P2P) system:\n' +
      '- **Peer discovery:** Use a Distributed Hash Table (DHT) like Kademlia to enable nodes to find each other without a central server.\n' +
      '- **Data distribution:** Break large data into chunks and replicate them across peers for fault tolerance and availability (similar to BitTorrent).\n' +
      '- **Routing:** Implement an efficient routing algorithm like XOR-based lookup to minimize hops between nodes.\n' +
      '- **Consistency and state:** Use eventual consistency or CRDTs if shared state is required.\n' +
      '- **Security:** Encrypt communication between peers, sign data for authenticity, and validate peers through public key infrastructure.\n' +
      '- **Fault tolerance:** Account for node churn by periodically verifying active peers and redistributing data when needed.\n' +
      '- **Scalability:** Ensure that network overhead stays low as more peers join by distributing metadata and routing responsibilities.\n\n' +
      'This design enables a system with no single point of failure, high availability, and resilience across unreliable nodes.',
    code: '',
    hint: 'Break the problem into how peers find each other, how data is shared, and how the system tolerates churn.',
    expanded:
      'A strong P2P design requires decentralized discovery, fault-tolerant data replication, scalable routing, and robust security. Technologies like Kademlia DHT, CRDTs, and encrypted peer communication play a key role.',
    tags: [
      'software-architecture',
      'p2p',
      'distributed-systems',
      'scalability',
      'networking',
      'resilience',
    ],
    reference: [
      {
        label: '30DaysCoding: Designing for P2P Decentralized Networks',
        url: 'https://30dayscoding.com/blog/designing-for-peer-to-peer-and-decentralized-networks',
      },
      {
        label: 'Geeks for Geeks: Designing for P2P architecture',
        url: 'https://www.geeksforgeeks.org/system-design/peer-to-peer-p2p-architecture/',
      },
      {
        label:
          'Kademlia: A Peer-to-peer Information System Based on the XOR Metric',
        url: 'https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf',
      },
    ],
  },
  {
    id: 'software-arch-13',
    categoryId: 'software-architecture',
    question:
      'You may recall that Common Gateway Interface (CGI) is a standard protocol for web servers to execute programs (CGI scripts) that execute as Command-line programs on a server, and that dynamically generate HTML pages when invoked by a HTTP request. Perl and PHP used to be common languages for such scripts. In CGI, a HTTP request generally causes the invocation of a new process on the server, but FastCGI, SCGI and other approaches improved the mechanism, raising the performance, with techniques such as preforking processes. Can you discuss why CGI became obsolete, and was instead replaced with other architectural approaches?',
    answer:
      'CGI became obsolete primarily due to performance limitations, scalability challenges, and modern alternatives offering more efficient resource use:\n' +
      '- **Process spawning overhead:** Each HTTP request required spawning a new OS process, which is expensive in terms of CPU and memory.\n' +
      '- **Poor scalability:** As traffic increased, the server struggled under the load of managing thousands of concurrent processes.\n' +
      '- **Limited reusability:** CGI scripts didn’t maintain state across requests and had to reload and reinitialize everything each time.\n' +
      '- **Concurrency limitations:** No native support for handling multiple requests simultaneously in the same process.\n' +
      "- **Security concerns:** Spawning shell processes exposed risks, especially if input wasn't sanitized properly.\n" +
      'Modern alternatives like FastCGI, WSGI (Python), Node.js, or frameworks like Django, Rails, and Express use persistent processes, thread pools, and asynchronous I/O to handle multiple requests efficiently without the overhead of constant process creation. These models support better modularity, faster execution, and are more resource-efficient, making them well-suited for today’s high-traffic web environments.',
    code: '',
    hint: 'Think about performance, process creation overhead, and how modern frameworks and languages manage web requests.',
    expanded:
      'CGI was innovative for its time, enabling dynamic content on the web, but its design was tightly coupled to a model where each request spawned a fresh process. This doesn’t scale well. Over time, as web applications grew in complexity and traffic demands increased, alternatives that reused persistent processes, shared memory, or event loops became preferred. Approaches like FastCGI and application servers (e.g., Gunicorn, Puma) built on this by decoupling the web server from the app logic and introducing better resource management. Modern web architectures embrace concurrency, reusability, and separation of concerns — all things CGI lacked natively.',
    tags: [
      'software-architecture',
      'cgi',
      'fastcgi',
      'web-servers',
      'performance',
      'scalability',
      'obsolete-tech',
    ],
    reference: [
      {
        label: 'Wikipedia: Common Gateway Interface',
        url: 'https://en.wikipedia.org/wiki/Common_Gateway_Interface',
      },
      {
        label: 'FastCGI Specification',
        url: 'https://fastcgi-archives.github.io/',
      },
    ],
  },
  {
    id: 'software-arch-14',
    categoryId: 'software-architecture',
    question:
      'How would you defend the design of your systems against vendor Lock-in?',
    answer:
      "Defending against vendor lock-in involves designing systems that maximize flexibility, portability, and interoperability to avoid dependency on a single vendor's proprietary technologies or services. Key strategies include:\n" +
      '- **Use open standards and protocols:** Favor widely adopted, open-source technologies and industry standards to ensure compatibility and ease of migration.\n' +
      '- **Abstraction layers:** Introduce abstraction between your application and vendor-specific APIs (e.g., using adapter or facade patterns), so components can be swapped without large rewrites.\n' +
      '- **Modular architecture:** Design loosely coupled, modular components to isolate vendor-specific logic and minimize impact if changes are required.\n' +
      '- **Multi-cloud or hybrid cloud strategies:** Avoid relying solely on one cloud provider; design for portability across providers using tools like Kubernetes or Terraform.\n' +
      '- **Data portability and open formats:** Store data in portable, open formats that can be easily exported and imported.\n' +
      '- **Thorough documentation and testing:** Maintain clear documentation and automated tests to reduce friction during migration.\n\n' +
      'By incorporating these practices, systems can be more resilient to vendor changes, pricing shifts, or discontinuations, ensuring long-term maintainability and freedom of choice.',
    code: '',
    hint: 'Think about design abstractions, modularity, open standards, and multi-vendor strategies.',
    expanded:
      'Vendor lock-in can restrict future flexibility and increase costs. Designing defensively means acknowledging that no vendor lasts forever and that business needs evolve. Using abstraction layers (such as interfaces or service wrappers) decouples your business logic from vendor-specific implementations. Open standards like REST, OpenAPI, and standard database query languages help keep options open. Modular design allows swapping parts with minimal impact. Employing containerization and orchestration (e.g., Docker, Kubernetes) promotes portability. Data should never be trapped in proprietary formats. Regularly testing migration scenarios can identify hidden dependencies early. This proactive approach helps safeguard your architecture against lock-in risks.',
    tags: [
      'software-architecture',
      'vendor-lock-in',
      'portability',
      'modularity',
      'open-standards',
      'cloud',
      'design-principles',
    ],
    reference: [
      {
        label: 'ISC2: Vendor Lock-In',
        url: 'https://www.isc2.org/Insights/2024/04/Cloud-Exit-Strategies-Avoiding-Vendor-Lock-in',
      },
      {
        label: 'AWS: 6 Lock-In Considerations',
        url: 'https://docs.aws.amazon.com/whitepapers/latest/unpicking-vendor-lock-in/six-lock-in-considerations.html',
      },
    ],
  },
  {
    id: 'software-arch-15',
    categoryId: 'software-architecture',
    question:
      'What are the disadvantages of the publish-subscribe pattern at scale?',
    answer:
      'While the publish-subscribe (pub-sub) pattern decouples senders and receivers and scales well for many asynchronous use cases, it also introduces challenges at scale:\n' +
      '- **Message ordering:** Maintaining message order across distributed consumers can be difficult or impossible without extra coordination.\n' +
      '- **Delivery guarantees:** Ensuring at-least-once or exactly-once delivery can increase complexity and overhead.\n' +
      '- **Debugging and tracing:** With loose coupling, it’s harder to trace message flows or identify failures across publishers, brokers, and subscribers.\n' +
      '- **Subscriber overload:** A spike in messages can overwhelm subscribers unless they implement effective throttling or backpressure.\n' +
      '- **Dead-letter handling:** Unprocessed messages can accumulate without proper handling mechanisms, leading to resource issues.\n' +
      '- **Operational complexity:** Scaling message brokers (e.g., Kafka, RabbitMQ) introduces networking, replication, and partitioning complexities.\n\n' +
      'At scale, pub-sub systems require careful design of observability, reliability mechanisms, and consumer strategies to avoid degraded performance or message loss.',
    code: '',
    hint: 'Think about ordering, backpressure, and delivery guarantees.',
    expanded:
      "The publish-subscribe model excels in decoupling components and enabling event-driven architecture, but its downsides become more pronounced with high throughput or many subscribers. Since publishers don't know their consumers, error tracing becomes harder. If one subscriber misbehaves, it won’t affect the publisher but could cause unnoticed data loss. Message duplication or disorder can occur, particularly in distributed environments. Some messaging platforms offer tools to address these issues, but those tools introduce trade-offs like increased latency or complexity. Observability, testing, and failover strategies must be integral to any pub-sub implementation at scale.",
    tags: [
      'software-architecture',
      'publish-subscribe',
      'messaging',
      'event-driven',
      'scalability',
      'microservices',
      'distributed-systems',
    ],
    reference: [
      {
        label: 'Martin Fowler: Event-Driven Architecture',
        url: 'https://martinfowler.com/articles/201701-event-driven.html',
      },
      {
        label: 'RedHat: Pros and Cons of Pub Sub',
        url: 'https://www.redhat.com/en/blog/pub-sub-pros-and-cons',
      },
      {
        label: 'Confluent: Kafka Design and Limitations',
        url: 'https://docs.confluent.io/platform/current/kafka/design.html',
      },
    ],
  },
  {
    id: 'software-arch-16',
    categoryId: 'software-architecture',
    question:
      "What's new in CPUs since the 80s, and how does it affect programming?",
    answer:
      'Modern CPUs have seen major changes since the 1980s, affecting how software is designed and optimized:\n' +
      '- **Multi-core processors:** Instead of increasing clock speed indefinitely, CPUs now use multiple cores. This requires programs to be written with concurrency and parallelism in mind.\n' +
      '- **Instruction pipelining and out-of-order execution:** Modern CPUs execute instructions more efficiently, but performance depends on branch prediction and cache-friendly code.\n' +
      '- **SIMD and vector instructions:** CPUs support instructions that operate on multiple data points at once (e.g., SSE, AVX), pushing programmers to use data-parallel algorithms.\n' +
      '- **Large, hierarchical caches:** Memory access patterns now have a huge impact on performance. Efficient use of L1/L2/L3 caches is key.\n' +
      '- **Hardware threads (e.g., Hyper-threading):** Threads share core resources, requiring careful workload balancing.\n' +
      '- **Energy efficiency & thermal limits:** CPUs throttle under thermal stress, so code efficiency affects not just speed but power use too.\n' +
      '- **Security mitigations (e.g., Spectre, Meltdown):** Speculative execution vulnerabilities have led to patches that impact performance.\n\n' +
      'These developments mean modern programmers must consider concurrency, memory hierarchy, vectorization, and power use to write performant code.',
    code: '',
    hint: 'Think beyond just clock speed—consider concurrency, memory, and hardware acceleration.',
    expanded:
      'In the 1980s, improvements in performance were largely driven by increases in clock speed and instruction throughput. But due to physical limits like heat and power, that strategy plateaued. Since then, CPUs evolved with multiple cores, deeper cache hierarchies, and smarter execution models. This has shifted the performance bottleneck from raw speed to how efficiently code utilizes CPU resources. Writing software today often requires understanding memory locality, avoiding cache misses, using parallel patterns, and leveraging platform-specific instructions. Tools like profilers and vector libraries are critical in optimizing for modern CPUs. Meanwhile, security issues like speculative execution have introduced new trade-offs between speed and safety.',
    tags: [
      'software-architecture',
      'hardware-awareness',
      'performance',
      'concurrency',
      'cpu-design',
      'systems-programming',
    ],
    reference: [
      {
        label: 'Dan Luu: New CPU features',
        url: 'https://danluu.com/new-cpu-features/',
      },
      {
        label: 'Mechanical Sympathy by Martin Thompson',
        url: 'https://mechanical-sympathy.blogspot.com/',
      },
    ],
  },

  {
    id: 'software-arch-17',
    categoryId: 'software-architecture',
    question:
      'At which stages of the software development lifecycle should performance be taken into consideration, and how?',
    answer:
      'Performance should be considered at **every stage** of the software development lifecycle:\n' +
      '\n' +
      '- **Requirements & Design:** Establish performance goals early. Choose scalable architecture patterns (e.g., microservices, event-driven systems).\n' +
      '- **Development:** Write efficient algorithms, minimize I/O blocking, reduce unnecessary computation, and be aware of memory use.\n' +
      '- **Testing:** Include performance testing (load, stress, soak) in your test suite.\n' +
      '- **Deployment:** Monitor real-world usage using observability tools (APM, logging, metrics).\n' +
      '- **Maintenance:** Continuously review performance metrics to guide refactoring and scaling decisions.\n' +
      '\n' +
      'Treating performance as an afterthought often leads to expensive rework. Instead, make it a first-class concern throughout development.',
    code: '',
    hint: 'Performance isn’t just a post-launch concern—it begins during planning.',
    expanded:
      'Thinking about performance only at the end of a project often results in fragile, hard-to-optimize systems. By incorporating performance awareness throughout design, development, testing, and operations, teams can build software that remains reliable and responsive as user demand grows.',
    tags: ['performance', 'software-lifecycle', 'architecture', 'scalability'],
    reference: [
      {
        label: 'Google: Web Fundamentals - Performance',
        url: 'https://developers.google.com/web/fundamentals/performance',
      },
      {
        label: 'AWS: What is SDLC',
        url: 'https://aws.amazon.com/what-is/sdlc/',
      },
    ],
  },
  {
    id: 'software-arch-18',
    categoryId: 'software-architecture',
    question:
      'How could a denial of service arise not maliciously but due to a design or architectural problem?',
    answer:
      'A denial of service (DoS) can happen unintentionally due to poor architectural or design decisions:\n' +
      '\n' +
      '- **Synchronous bottlenecks:** Blocking I/O or long-running operations can tie up threads or processes.\n' +
      '- **Lack of resource limits:** Unbounded memory or CPU usage (e.g., large file uploads, in-memory queues) can exhaust system resources.\n' +
      '- **Inefficient algorithms:** Algorithms with poor time or space complexity can cause delays or crashes under load.\n' +
      '- **Contention and locking:** Excessive locking or database contention can degrade responsiveness.\n' +
      '- **Single points of failure:** Relying on a single service for a critical path can bring down the whole system.\n' +
      '\n' +
      'Such issues may emerge during traffic spikes, batch jobs, or unexpected user behavior—creating a DoS without malicious intent.',
    code: '',
    hint: 'Think about resource exhaustion, unbounded queues, and long processing times.',
    expanded:
      'Denial of service isn’t always caused by attackers. Even normal usage patterns—like many users uploading files or triggering expensive operations simultaneously—can overwhelm a system if it lacks rate limiting, timeouts, or asynchronous processing. Good architecture anticipates these risks and mitigates them through backpressure, isolation, and graceful degradation.',
    tags: [
      'architecture',
      'dos',
      'fault-tolerance',
      'resource-management',
      'availability',
    ],
    reference: [
      {
        label:
          'Science Direct: DoS and DDoS attacks in Software Defined Networks: A survey of existing solutions and research challenges',
        url: 'https://www.sciencedirect.com/science/article/pii/S0167739X21000911',
      },
      {
        label: 'AWS: Well-Architected Framework Reliability Pillar',
        url: 'https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html',
      },
    ],
  },
  {
    id: 'software-arch-19',
    categoryId: 'software-architecture',
    question: 'What’s the relationship between performance and scalability?',
    answer:
      'Performance and scalability are related but distinct:\n' +
      '\n' +
      '- **Performance** refers to how fast a system performs under a given load (e.g., response time, throughput).\n' +
      '- **Scalability** is the system’s ability to maintain or improve performance as the workload increases.\n' +
      '\n' +
      'A system with good performance might not scale well if it hits bottlenecks with higher load. Conversely, a scalable system might initially perform worse than a tightly optimized one but can handle growth gracefully. Designing for both involves trade-offs and requires measurement, load testing, and thoughtful architecture.',
    code: '',
    hint: 'Think about load vs speed: performance is “how fast?”, scalability is “how well does it stay fast?”',
    expanded:
      'Performance is often measured at a fixed load, while scalability considers how the system behaves under increasing load. Improving one can impact the other—for example, caching can improve performance but might introduce consistency challenges when scaling. Choosing appropriate patterns (e.g., stateless services, horizontal scaling) and monitoring both metrics in production is key.',
    tags: [
      'performance',
      'scalability',
      'architecture',
      'system-design',
      'load-testing',
    ],
    reference: [
      {
        label: 'Geeks for Geeks: Performance vs Scalability',
        url: 'https://www.geeksforgeeks.org/system-design/performance-vs-scalability-in-system-design/',
      },
      {
        label: 'Dynatrace: Performance and Scalability',
        url: 'https://www.dynatrace.com/resources/ebooks/javabook/performance-and-scalability/',
      },
    ],
  },
  {
    id: 'software-arch-20',
    categoryId: 'software-architecture',
    question: 'When is it OK (if ever) to use tight coupling?',
    answer:
      'Tight coupling can be acceptable or even beneficial in some cases:\n' +
      '\n' +
      '- **Performance-critical components**: When two components must interact extremely fast with minimal overhead.\n' +
      '- **Intra-module cohesion**: Within a single module or bounded context, tight coupling can make code simpler and more efficient.\n' +
      '- **Short-lived or experimental projects**: Where maintainability and extensibility are not primary concerns.\n' +
      '- **Platform-specific integrations**: Like OS drivers or embedded systems, where abstractions may add unnecessary complexity.\n' +
      '\n' +
      'However, tight coupling increases risk during changes and reduces testability and reuse. Use it consciously and document the reasons.',
    code: '',
    hint: 'Sometimes avoiding abstraction saves time—when change is unlikely or the parts are deeply related.',
    expanded:
      'Tight coupling means components are closely dependent on each other’s internal structure or behavior. While generally avoided in modern software design, it can reduce overhead and improve clarity in certain scenarios—especially when performance is critical or components evolve together. In layered or microservices architectures, though, loose coupling is almost always preferred.',
    tags: [
      'coupling',
      'software-design',
      'architecture',
      'performance',
      'trade-offs',
    ],
    reference: [
      {
        label: 'Nacelle: Downside of tight coupling',
        url: 'https://nacelle.com/blog/the-downside-of-tight-coupling-in-business-operations',
      },
      {
        label: 'We Need to Talk About Coupling',
        url: 'https://frontendatscale.com/issues/27/',
      },
    ],
  },
  {
    id: 'software-arch-21',
    categoryId: 'software-architecture',
    question: 'What characteristic should a system have to be cloud ready?',
    answer:
      'A cloud-ready system should have the following characteristics:\n' +
      '\n' +
      '- **Scalability**: The ability to scale horizontally and vertically to match resource demand.\n' +
      '- **Statelessness**: Business logic should avoid relying on in-memory state across requests.\n' +
      '- **Resilience**: Tolerance to failure, with retry logic, graceful degradation, and circuit breakers.\n' +
      '- **Elasticity**: Can automatically grow/shrink resource usage in response to demand.\n' +
      '- **Observability**: Includes logging, metrics, and tracing to monitor and debug in distributed environments.\n' +
      '- **Externalized configuration**: Uses environment variables or external configuration services instead of hardcoded values.\n' +
      '- **Automation-ready**: Easily deployed and managed through CI/CD pipelines and Infrastructure-as-Code.\n' +
      '- **Security by design**: Applies principles like least privilege, encryption, and secure defaults.',
    code: '',
    hint: 'Think about how the system behaves in a distributed, ephemeral environment.',
    expanded:
      'To be cloud-ready, a system must be designed for the characteristics of cloud environments, including dynamic provisioning, network-based service communication, and shared infrastructure. Stateless services allow for easier scaling and fault tolerance. Observability and automation support rapid iteration and recovery. Security and configuration practices should assume infrastructure can change at any time.',
    tags: [
      'cloud-ready',
      'cloud-computing',
      'devops',
      'distributed-systems',
      'architecture',
    ],
    reference: [
      {
        label:
          'Gibraltar Solutions: Becoming Cloud-Ready: 10 Key Considerations',
        url: 'https://gibraltarsolutions.com/blog/becoming-cloud-ready/',
      },
      {
        label:
          'CloudThat: Cloud Ready vs. Cloud Native: Unveiling the Distinctions in Application Evolution',
        url: 'https://www.cloudthat.com/resources/blog/cloud-ready-vs-cloud-native-unveiling-the-distinctions-in-application-evolution',
      },
    ],
  },
  {
    id: 'software-arch-22',
    categoryId: 'software-architecture',
    question:
      'Does unity of design imply an aristocracy of architects? Putting it simple: can good design emerge from a collective effort of all developers?',
    answer:
      'Good design can absolutely emerge from a collective effort of all developers, but it requires strong coordination, shared principles, and clear communication. Unity of design doesn’t necessarily demand an "aristocracy" of architects, but some centralized architectural leadership often helps maintain consistency.\n\n' +
      '- **Collective ownership** can foster innovation and broader understanding of the system.\n' +
      '- **Architectural guidance** (from experienced leaders) ensures alignment and avoids fragmentation.\n' +
      '- **Design principles and patterns** should be documented and discussed openly, not dictated.\n' +
      '- **Code reviews, design reviews, and architecture guilds** help balance collective input with coherence.\n\n' +
      'So while a small group may set the vision or boundaries, good design can and often should evolve through collective participation when structure and communication are strong.',
    code: '',
    hint: 'Consider how open source communities or cross-functional teams maintain coherent design.',
    expanded:
      'Unity of design is about coherence, not control. While a singular vision can simplify consistency, inclusive collaboration often leads to more resilient, context-aware designs. Practices like documented guidelines, shared review processes, and mentoring allow teams to maintain unity without enforcing hierarchy. Success lies in balancing architectural leadership with inclusive, ongoing collaboration.',
    tags: [
      'architecture',
      'collaboration',
      'design-principles',
      'team-dynamics',
      'software-design',
    ],
    reference: [
      {
        label:
          'Net Solutions: Why You Should Pursue Collaborative Design to Build Products',
        url: 'https://www.netsolutions.com/insights/why-collaborative-design-to-build-products/',
      },
      {
        label: 'Team Topologies: Matthew Skelton & Manuel Pais',
        url: 'https://teamtopologies.com/',
      },
    ],
  },
  {
    id: 'software-arch-23',
    categoryId: 'software-architecture',
    question:
      "What's the difference between design, architecture, functionality and aesthetic? Discuss.",
    answer:
      'These four concepts describe different but interconnected aspects of a system:\n\n' +
      '- **Architecture**: The high-level structure of the system—its components, their relationships, and how they interact. It defines the foundational decisions that are hard to change later.\n' +
      '- **Design**: More detailed planning of how individual components are implemented, structured, and interact. This sits closer to the code level than architecture.\n' +
      '- **Functionality**: The actual capabilities and features the system provides—what it does, regardless of how it’s built.\n' +
      '- **Aesthetic**: The visual or experiential qualities—how the system looks and feels to users, influencing usability and emotional impact.\n\n' +
      'In short: architecture is the blueprint, design refines the blueprint into buildable plans, functionality is the purpose, and aesthetic is the polish and user experience.',
    code: '',
    hint: 'Think about "what it does" vs "how it’s structured" vs "how it feels."',
    expanded:
      'Architecture answers *"What are the main parts and how do they connect?"*; design answers *"How will each part work in detail?"*; functionality answers *"What can it do for the user?"*; aesthetic answers *"How pleasing or usable is it to interact with?"*. In software, these often overlap—architecture influences design, design affects functionality, and aesthetic can shape perceived quality. Strong systems balance all four so that technical soundness and user satisfaction reinforce each other.',
    tags: [
      'architecture',
      'design',
      'functionality',
      'aesthetic',
      'software-principles',
      'ux',
    ],
    reference: [
      {
        label: 'IEEE Standard 1471: Architecture Description',
        url: 'https://standards.ieee.org/standard/1471-2000.html',
      },
      {
        label: 'Medium: Design Functionality and Aesthetics',
        url: 'https://elloralph.medium.com/not-all-created-are-equal-design-functionality-vs-aesthetics-d4647aaf0c29',
      },
    ],
  },

  // Service Oriented Architecture and Microservices -------------------------------------
  {
    id: 'soa-micro-1',
    categoryId: 'soa-microservices',
    question:
      'Why, in a SOA, are long-lived transactions discouraged and sagas are suggested instead?',
    answer:
      'In Service-Oriented Architectures (SOA), long-lived transactions are discouraged because they often require distributed, two-phase commits (2PC) that lock resources across multiple services for extended periods. This creates scalability bottlenecks, increases coupling, and reduces system availability. Instead, sagas are preferred—they break a large transaction into a sequence of smaller, local transactions coordinated asynchronously. Each step has a compensating action to undo it if a later step fails, avoiding the need for global locks and enabling higher resilience.',
    code: '',
    hint: 'Think about distributed transactions, resource locking, and compensating actions.',
    expanded:
      'In a SOA environment, services are typically autonomous and may span multiple databases or systems, making traditional ACID transactions across them problematic. Long-lived transactions using two-phase commit introduce:\n' +
      '- **Resource locking:** Holding locks across services can severely limit concurrency.\n' +
      '- **High coupling:** Services must coordinate tightly, reducing flexibility.\n' +
      '- **Failure sensitivity:** A single failure can stall the entire operation until rollback.\n\n' +
      'Sagas offer an alternative by implementing a **sequence of local transactions** where each service updates its own data independently. Coordination happens through events or a saga orchestrator. If something goes wrong, previously completed steps are undone using **compensating transactions** rather than rolling back a single global transaction. This allows:\n' +
      '- Better scalability\n' +
      '- Loose coupling between services\n' +
      '- Improved fault tolerance and eventual consistency\n\n' +
      'Sagas fit well with asynchronous messaging patterns and are widely used in microservices to maintain data consistency without the drawbacks of distributed 2PC.',
    tags: [
      'soa',
      'microservices',
      'transactions',
      'sagas',
      'distributed-systems',
      'consistency',
    ],
    reference: [
      {
        label: 'Microservices Patterns: Saga Pattern',
        url: 'https://microservices.io/patterns/data/saga.html',
      },
      {
        label: 'Medium: Transactions vs Sagas',
        url: 'https://medium.com/@vadym.zakusylo.if/sagas-vs-transactions-adaa874f765',
      },
      {
        label: 'Geeks for Geeks: Saga Design Pattern',
        url: 'https://www.geeksforgeeks.org/system-design/saga-design-pattern/',
      },
    ],
  },
  {
    id: 'soa-micro-2',
    categoryId: 'soa-microservices',
    question: 'What are the differences between SOA and microservice?',
    answer:
      'SOA (Service-Oriented Architecture) and microservices both focus on building systems from reusable, loosely coupled services, but differ in scope, granularity, and implementation. SOA is a broader architectural style that organizes business functions into interoperable services, often mediated by an enterprise service bus (ESB) and using standard protocols. Microservices is a more granular, decentralized approach where each service is small, independently deployable, and often communicates via lightweight protocols like HTTP/REST or messaging, without a central ESB.',
    code: '',
    hint: 'Think about service size, communication style, and deployment independence.',
    expanded:
      'Key differences include:\n' +
      '- **Scope:** SOA is typically applied at the enterprise level, integrating large subsystems; microservices focus on smaller, independently deployable services.\n' +
      '- **Granularity:** SOA services can be large and multi-functional; microservices are narrowly scoped around a single capability.\n' +
      '- **Communication:** SOA often uses enterprise-grade protocols like SOAP over HTTP and an ESB; microservices favor lightweight protocols (HTTP/REST, gRPC, messaging) and avoid a central broker.\n' +
      '- **Deployment:** SOA services may be deployed together and share infrastructure; microservices are independently deployable and scalable.\n' +
      '- **Data management:** SOA may share a central database; microservices typically own their data storage.\n' +
      '- **Governance:** SOA often involves centralized governance; microservices embrace decentralized governance and polyglot technology choices.\n\n' +
      'While microservices can be seen as an evolution of SOA principles, they trade some of SOA’s centralized integration features for increased agility, resilience, and scalability.',
    tags: [
      'soa',
      'microservices',
      'architecture',
      'distributed-systems',
      'service-design',
    ],
    reference: [
      {
        label: 'Martin Fowler: Microservices vs. SOA',
        url: 'https://martinfowler.com/articles/microservices.html#MicroservicesAndSoa',
      },
      {
        label: 'Talend: Microservices vs SOA',
        url: 'https://www.talend.com/resources/microservices-vs-soa/#:~:text=While%20SOA%20is%20based%20on,the%20need%20to%20share%20components.',
      },
    ],
  },
  {
    id: 'soa-micro-3',
    categoryId: 'soa-microservices',
    question:
      "Let's talk about web services versioning, version compatibility and breaking changes.",
    answer:
      'Web service versioning ensures that changes to a service do not unexpectedly break existing clients. Compatibility is about whether older clients can still interact with newer versions of a service without errors. Breaking changes occur when an update alters the contract or behavior in a way that existing clients cannot handle without modification.',
    code: '',
    hint: 'Think about backward compatibility, semantic versioning, and strategies to manage evolving APIs.',
    expanded:
      'Key considerations include:\n' +
      '- **Backward compatibility:** Changes should preserve existing functionality so older clients continue to work.\n' +
      '- **Forward compatibility:** Clients can interact with newer service versions even if they do not use new features.\n' +
      '- **Breaking changes:** Modifications like removing fields, changing data formats, or altering response structures can disrupt clients.\n' +
      '- **Versioning strategies:**\n' +
      '  - **URI versioning:** Include version in the URL (e.g., `/v1/resource`).\n' +
      '  - **Header-based versioning:** Indicate version in HTTP headers.\n' +
      '  - **Content negotiation:** Use `Accept` headers for version control.\n' +
      '- **Deprecation policies:** Communicate changes clearly and allow clients time to adapt.\n' +
      '- **Semantic versioning:** Use MAJOR.MINOR.PATCH to signal breaking changes, new features, and bug fixes.\n\n' +
      'Good versioning and compatibility practices allow services to evolve without causing widespread client disruption, balancing innovation with stability.',
    tags: [
      'soa',
      'microservices',
      'web-services',
      'versioning',
      'compatibility',
      'api-design',
    ],
    reference: [
      {
        label: 'Oracle: Web Services Versioning',
        url: 'https://www.oracle.com/technical-resources/articles/web-services-versioning.html',
      },
      {
        label: 'Microsoft API Versioning Guidelines',
        url: 'https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#versioning-a-restful-web-api',
      },
    ],
  },
  {
    id: 'soa-micro-4',
    categoryId: 'soa-microservices',
    question:
      "What's the difference between a transaction and a compensation operation in a saga, in SOA?",
    answer:
      'In a saga, a transaction is a local, atomic operation performed by a single service that moves the overall process forward. A compensation operation is the undo step that reverses the effects of a previously completed transaction when part of the saga fails.',
    code: '',
    hint: 'Think of transactions as “do” steps and compensations as “undo” steps in a distributed process.',
    expanded:
      'In the context of SOA and sagas:\n' +
      '- **Transaction:**\n' +
      '  - A local unit of work within a single service.\n' +
      '  - Completes atomically at the service level (all-or-nothing for that service).\n' +
      '  - Moves the overall workflow closer to completion.\n' +
      '  - Example: Reserve inventory in the Inventory Service.\n' +
      '- **Compensation operation:**\n' +
      '  - A separate action designed to reverse the effects of a previously successful transaction.\n' +
      '  - Triggered when a later step in the saga fails, requiring rollback.\n' +
      '  - Example: Release previously reserved inventory if payment fails.\n' +
      '- **Key difference:** Transactions perform the forward progress; compensation operations provide eventual consistency by undoing work instead of using a distributed rollback.\n\n' +
      'Sagas use this approach because distributed ACID transactions are impractical across multiple services—compensations achieve consistency in a more scalable, fault-tolerant way.',
    tags: [
      'soa',
      'microservices',
      'saga-pattern',
      'transactions',
      'compensation',
      'distributed-systems',
    ],
    reference: [
      {
        label: 'Microservices: Saga Pattern',
        url: 'https://microservices.io/patterns/data/saga.html',
      },
      {
        label: 'Compensating Transaction pattern',
        url: 'https://learn.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction',
      },
    ],
  },
  {
    id: 'soa-micro-5',
    categoryId: 'soa-microservices',
    question: 'When is a microservice too micro?',
    answer:
      'A microservice is too micro when its scope is so narrow that it causes excessive operational overhead, communication complexity, and coordination challenges without delivering clear business or technical value as a standalone service.',
    code: '',
    hint: 'Think about service boundaries, cohesion, and the trade-off between granularity and maintainability.',
    expanded:
      'Signs a microservice is too micro include:\n' +
      '- **Excessive service count:** You have many tiny services that could be combined without violating the single responsibility principle.\n' +
      '- **High communication overhead:** Services spend more time making network calls to each other than doing useful work.\n' +
      '- **Deployment and monitoring burden:** Managing builds, deployments, and observability for each service becomes unwieldy.\n' +
      '- **Loss of cohesion:** The service’s functionality feels incomplete or meaningless without constant calls to other services.\n' +
      '- **Minimal business value:** The service doesn’t encapsulate a significant business capability.\n' +
      '- **Frequent changes across services:** A single feature requires touching multiple tiny services, reducing development speed.\n\n' +
      'A healthy microservice should encapsulate a cohesive business capability, operate largely independently, and justify its operational cost. If the service boundaries are drawn too finely, the architecture suffers from *over-fragmentation*, hurting maintainability and performance.',
    tags: [
      'microservices',
      'soa',
      'service-design',
      'granularity',
      'architecture',
    ],
    reference: [
      {
        label: 'Martin Fowler: When to break up a microservice',
        url: 'https://martinfowler.com/articles/microservice-trade-offs.html',
      },
      {
        label: 'Microservice boundaries: Microservices.io',
        url: 'https://microservices.io/patterns/microservices.html',
      },
      {
        label: 'Altoros: When microservices are too micro',
        url: 'https://www.altoros.com/blog/over-engineering-when-microservices-are-too-micro/',
      },
    ],
  },
  {
    id: 'soa-micro-6',
    categoryId: 'soa-microservices',
    question: 'What are the pros and cons of microservice architecture?',
    answer:
      'Microservice architecture offers benefits such as scalability, independent deployment, and better alignment with business domains, but introduces challenges like operational complexity, distributed systems issues, and higher infrastructure costs.',
    code: '',
    hint: 'Think about benefits for development teams versus operational trade-offs.',
    expanded:
      '**Pros:**\n' +
      '- **Independent deployability:** Teams can release features or fixes without coordinating with other services.\n' +
      '- **Scalability per service:** You can scale only the services that need it, optimizing resource usage.\n' +
      '- **Technology flexibility:** Each service can use the most appropriate language, framework, or database.\n' +
      '- **Better fault isolation:** Failures are contained within a single service, reducing impact.\n' +
      '- **Business domain alignment:** Services often map well to bounded contexts in Domain-Driven Design.\n\n' +
      '**Cons:**\n' +
      '- **Operational complexity:** More services mean more deployments, monitoring, logging, and alerting.\n' +
      '- **Distributed systems challenges:** Network latency, retries, eventual consistency, and debugging across services.\n' +
      '- **Data management difficulties:** Maintaining data integrity and avoiding tight coupling can be harder.\n' +
      '- **Higher infrastructure cost:** Each service may require its own runtime, container, or VM.\n' +
      '- **Complex testing:** End-to-end integration testing across many services can be slow and brittle.\n\n' +
      'Microservices excel in large, complex systems with multiple teams, but for small or simple applications, the overhead may outweigh the benefits.',
    tags: [
      'microservices',
      'soa',
      'architecture',
      'distributed-systems',
      'trade-offs',
    ],
    reference: [
      {
        label:
          'Geeks for Geeks: What are the Advantages and Disadvantages of Microservices Architecture?',
        url: 'https://www.geeksforgeeks.org/system-design/what-are-the-advantages-and-disadvantages-of-microservices-architecture/',
      },
      {
        label:
          'Atlassian: Advantages of microservices and disadvantages to know',
        url: 'https://www.atlassian.com/microservices/cloud-computing/advantages-of-microservices',
      },
    ],
  },
];
