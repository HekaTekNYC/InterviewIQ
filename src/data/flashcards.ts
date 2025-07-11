export interface Flashcard {
  id: string;
  categoryId: string;
  question: string;
  answer: string;
  tags?: string[];
  hint?: string;
  explanation?: string;
  reference?: {
    label: string;
    url: string;
  }[];
}

export const flashcards: Flashcard[] = [
  // HTML
  {
    id: 'html-1',
    categoryId: 'html',
    question:
      'With the introduction of HTML5 we now have the ability to write semantic HTML. Talk for a moment about your experiences writing semantic HTML. What is it? Where do you see the benefits of using semantics?',
    answer:
      "With the introduction of HTML5, semantic HTML has become a foundational best practice in how I structure web applications. Semantic HTML refers to using elements that convey meaning about the content they wrap — such as <article>, <section>, <header>, <footer>, <main>, <nav>, and so on — rather than relying on generic containers like <div> or <span>.  I've used it to improve accessibility, SEO, and code clarity. It makes content easier to navigate for screen readers, better indexed by search engines, and more maintainable for devs.",
    explanation: '',
    tags: ['html', 'semantic', 'accessibility', 'seo'],
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
    explanation:
      'Web APIs are built into the browser and expose functionality like DOM manipulation, HTTP requests, local storage, media playback, and device access. They are grouped by purpose—e.g., DOM for document interaction, Fetch for HTTP requests, and Storage APIs for client-side persistence.',
    tags: ['api', 'dom', 'browser', 'html'],
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
    explanation:
      'The <!DOCTYPE html> declaration at the top of an HTML file prevents the browser from falling back to old, non-standard rendering behavior (quirks mode). It helps ensure consistent rendering across browsers.',
    tags: ['html', 'doctype', 'html5', 'browser'],
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
    explanation:
      'The `lang` attribute helps screen readers and search engines understand the language. For full language support, sites may use routing or subdomains (e.g. /en/, /fr/, or en.example.com).',
    tags: ['html', 'lang', 'accessibility', 'i18n'],
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
    explanation:
      'Different languages can change layout needs: some take more space (e.g. German), others flip direction (e.g. Arabic). Avoid hardcoding content; instead, use translation files and locale-aware components.',
    tags: ['html', 'i18n', 'rtl', 'accessibility', 'localization'],
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
    explanation:
      'Data attributes provide a flexible way to embed extra information on elements. They keep HTML valid while enabling scripts to read/write data easily, often used for dynamic UI behavior or tracking.',
    tags: ['html', 'data-attributes', 'javascript', 'metadata'],
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
    explanation:
      'HTML5 provides new structural tags for better semantics, native media playback, 2D/3D graphics, and JavaScript APIs that enable rich, interactive web apps without plugins.',
    tags: ['html', 'html5', 'web-platform', 'api', 'multimedia'],
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
    explanation:
      'Cookies are used for server communication (like auth) but have size limits and security considerations. sessionStorage is temporary and per tab. localStorage persists until cleared and is good for client-side data caching.',
    tags: ['html', 'storage', 'cookie', 'sessionstorage', 'localstorage'],
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
    explanation:
      'Using async or defer helps improve page performance by not blocking the HTML parser. async is good for independent scripts, while defer is better when scripts need the full DOM ready.',
    tags: ['html', 'script', 'performance', 'async', 'defer'],
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
    explanation:
      'CSS is render-blocking, so loading it early helps the browser paint styled pages sooner. Scripts can block rendering, so placing them at the end lets the page load and display before running JavaScript.',
    tags: ['html', 'css', 'javascript', 'performance', 'render-blocking'],
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
    explanation:
      'By prioritizing critical content first and loading other resources later, progressive rendering improves user experience, especially on slow connections or large pages.',
    tags: ['html', 'performance', 'rendering', 'progressive'],
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
    explanation:
      'When `loading="lazy"` is set, the browser defers fetching the image until the user scrolls near it. This saves bandwidth and reduces CPU/memory usage for images that may never be seen immediately.',
    tags: ['html', 'performance', 'lazy-loading', 'images'],
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
    explanation:
      'JSX and Angular templates enable declarative UI building by mixing markup with code. They help manage complex interfaces efficiently compared to classic templating engines.',
    tags: ['html', 'templating', 'react', 'jsx', 'angular'],
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
    explanation:
      'Understanding this helps with layout control. Block elements define structure, while inline elements are typically used for formatting or links inside text.',
    tags: ['html', 'block', 'inline', 'layout'],
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
    explanation:
      'ARIA can add roles, states, and properties to HTML elements to describe their behavior to screen readers, especially in custom components. It should be used carefully and only when semantic HTML isn’t enough.',
    tags: ['html', 'accessibility', 'aria', 'a11y'],
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
  // CSS
  {
    id: 'css-1',
    categoryId: 'css',
    question:
      'Please tell me about your strategy for creating responsive designs. What is it, and how do you approach the problem?',
    answer:
      'I use a mobile-first approach—starting with a base layout for small screens and scaling up with media queries. I use flexible layouts with percentage widths, relative units like rem/em, and tools like Flexbox and Grid. I also make sure spacing, typography, and images scale well across breakpoints.',
    hint: 'Think small screen first, then enhance.',
    explanation:
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
    hint: 'Think about adapting to screen size and styling specific states or positions.',
    explanation:
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
    hint: 'Think layers, consistency, and reusability.',
    explanation:
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
    hint: 'Think of it like a scoring system for which rule wins.',
    explanation:
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
    hint: 'Think blank slate vs consistent baseline.',
    explanation:
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
    hint: 'Think about content wrapping around an element.',
    explanation:
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
    hint: 'Think about layers and which elements appear in front.',
    explanation:
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
    hint: 'Think of it as an isolated layout container.',
    explanation:
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
    hint: 'Think about preventing container collapse caused by floats.',
    explanation:
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
    hint: 'Think testing early and choosing reliable CSS features.',
    explanation:
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
    hint: 'Think progressive enhancement and fallback strategies.',
    explanation:
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
    hint: 'Think hiding visually but keeping for assistive tech.',
    explanation:
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
    hint: 'Think native CSS Grid vs frameworks.',
    explanation:
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
    hint: 'Think adapting design to different screen sizes.',
    explanation:
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
    hint: 'Think React imports and inline SVG for styling control.',
    explanation:
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
    hint: 'Think about how pages look when printed.',
    explanation:
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
    hint: 'Think specificity, redundancy, and performance.',
    explanation:
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
    hint: 'Think convenience vs extra complexity.',
    explanation:
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
    hint: 'Think about loading, fallback fonts, and performance.',
    explanation:
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
    hint: 'Think about how the DOM is matched by selectors.',
    explanation:
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
    hint: 'Think content + padding + border + margin.',
    explanation:
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
    hint: 'Think about how width and padding interact.',
    explanation:
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
    hint: 'Think block vs inline vs flex vs grid.',
    explanation:
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
    hint: 'Think text flow and box sizing.',
    explanation:
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
    hint: 'Think element position vs element type position.',
    explanation:
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
    hint: 'Think document flow and reference points.',
    explanation:
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
    hint: 'Think Bootstrap, Tailwind, pros and cons.',
    explanation:
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
    hint: 'Think two-dimensional layout system.',
    explanation:
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
    hint: 'Think high resolution and responsive images.',
    explanation:
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
    hint: 'Think layout vs performance.',
    explanation:
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
    hint: 'Think float layout issues.',
    explanation:
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

  // Javascript
  {
    id: 'js-1',
    categoryId: 'javascript',
    question: 'Explain event delegation.',
    answer:
      'Event delegation is when you attach a single event listener to a parent element to handle events from its child elements. It works by taking advantage of event bubbling.',
    hint: 'Think bubbling from child to parent.',
    explanation:
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
    hint: 'Think function context and arrow functions.',
    explanation:
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
    hint: 'Think "lookup chain" and shared methods.',
    explanation:
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
    hint: 'Think assigned vs unassigned vs not declared at all.',
    explanation:
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
    hint: 'Think inner function remembering outer variables.',
    explanation:
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
    hint: 'Think arrays vs plain objects.',
    explanation:
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
    hint: 'Think: forEach is side-effects, map returns a new array.',
    explanation:
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
    hint: 'Think quick callbacks or one-time logic.',
    explanation:
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
    hint: 'Think: JS core vs environment-specific.',
    explanation:
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
    hint: 'Think declaration vs invocation vs instantiation.',
    explanation:
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
    hint: 'Think hoisting and when the function becomes usable.',
    explanation:
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
    hint: 'Think calling functions with custom this and different argument passing.',
    explanation:
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
    hint: 'Think permanently setting this context.',
    explanation:
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
    hint: 'Think direct test vs guess vs browser sniffing.',
    explanation:
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
    hint: 'Think declarations are “lifted” to the top.',
    explanation:
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
    hint: 'Think event flows from child to parent elements.',
    explanation:
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
    hint: 'Think event flows from parent to child elements.',
    explanation:
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
    hint: 'Think HTML vs live DOM.',

    explanation: `Attributes are static and come from the HTML. For example, <input type="text" value="initial value" /> has a value attribute that sets the initial input content. Properties are dynamic and part of the DOM object. The input’s value property reflects the current content, which can change as the user types or via JavaScript.`,
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
    hint: 'Think custom enhancements vs risks and conflicts.',
    explanation:
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
    hint: 'Think loose equality vs strict equality.',
    explanation:
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
    hint: 'Think: protection between different websites.',
    explanation:
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
    hint: 'Think condition ? ifTrue : ifFalse.',
    explanation:
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
    hint: 'Think: safer JavaScript, fewer silent bugs.',
    explanation:
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
    hint: 'Think TypeScript, build step, and developer ergonomics.',
    explanation:
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
    hint: 'Think breakpoints, logs, and static analysis.',
    explanation:
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
    hint: 'Think about strings vs objects. Also consider Redux state.',
    explanation:
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
    hint: 'Think blocking vs non-blocking, and how `await` works.',
    explanation:
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
    hint: 'Think of event loop as the manager between call stack and task queue.',
    explanation:
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
    hint: 'Think scope, hoisting, and reassignment.',
    explanation:
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
    hint: 'Think syntax sugar and prototypes.',
    explanation:
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
    hint: 'Think concise syntax and lexical this.',
    explanation:
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
    hint: 'Think automatic binding of this.',
    explanation:
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
    hint: 'Think functions that work with other functions.',
    explanation:
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
    hint: 'Think unpacking with curly braces for objects and square brackets for arrays.',
    explanation:
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
    hint: 'Think backticks and ${expression} syntax.',
    explanation:
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
    hint: 'Think functions returning functions one argument at a time.',
    explanation:
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
    hint: 'Think: spread unpacks, rest packs.',
    explanation:
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
    hint: 'Think export/import and modular code.',
    explanation:
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
    hint: 'Think class-level properties and methods.',
    explanation:
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
    hint: 'Think: pre-check vs post-check loops.',
    explanation:
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
  // Network
  {
    id: 'network-1',
    categoryId: 'network',
    question:
      'Traditionally, why has it been better to serve site assets from multiple domains?',
    answer:
      'Historically, browsers limited the number of concurrent connections they could make to a single domain (often around 6). By serving assets from multiple domains (also called domain sharding), websites could load resources like images, scripts, and stylesheets in parallel, improving page load times.',
    hint: 'Think about how browsers open connections.',
    explanation:
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
    hint: 'Think DNS → TCP → TLS → HTTP → parse/render.',
    explanation:
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
    hint: 'Think about the direction of data flow and how persistent the connection is.',
    explanation:
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
    hint: 'Think about which are for freshness, which are for security, and which help optimize communication between browser and server.',
    explanation:
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
    hint: 'Think CRUD operations and how the client communicates intent.',
    explanation:
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
    hint: 'Think DNS lookups done proactively.',
    explanation:
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
    hint: 'Think edge caching and geographic distribution.',
    explanation:
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
];
