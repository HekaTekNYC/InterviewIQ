export interface Flashcard {
  id: string;
  categoryId: string;
  question: string;
  answer: string;
  code: string;
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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

  // Javascript ---------------------------------------

  {
    id: 'js-1',
    categoryId: 'javascript',
    question: 'Explain event delegation.',
    answer:
      'Event delegation is when you attach a single event listener to a parent element to handle events from its child elements. It works by taking advantage of event bubbling.',
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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

  // Libraries ------------------------------------------------------------------

  {
    id: 'lib-1',
    categoryId: 'libraries',
    question: 'When would you use jQuery? Any reasons to not use jQuery?',
    answer:
      'jQuery was traditionally used to simplify DOM manipulation, event handling, and AJAX requests across browsers with inconsistent APIs. It’s still useful for legacy projects or when you need quick solutions in older codebases without modern JavaScript frameworks.',
    code: '',
    hint: 'Think older browser support and simpler syntax for common tasks.',
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    code: '',
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
    explanation:
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
];
