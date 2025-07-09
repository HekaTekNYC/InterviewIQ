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

  {
    id: 'css-1',
    categoryId: 'css',
    question:
      'Please tell me about your strategy for creating responsive designs. What is it, and how do you approach the problem?',
    answer:
      'I use a mobile-first approach, starting with a base layout for small screens and scaling up using media queries. I rely on flexible layouts, percentage widths, and relative units like rem and em. I also use CSS Grid and Flexbox for structure, and make sure typography and spacing adapt well across breakpoints.',
    hint: 'Think small screen first, then enhance.',
    explanation:
      'Responsive design means adapting layouts to work across all screen sizes. Mobile-first strategy ensures that your layout is usable on small screens, with enhancements layered in for larger displays.',
    tags: ['responsive design', 'mobile-first'],
    reference: [],
  },
  {
    id: 'css-2',
    categoryId: 'css',
    question: 'What are media queries? What are pseudo-selectors?',
    answer:
      'Media queries apply styles based on the device’s characteristics, like screen width or resolution, using syntax like @media (min-width: 768px) {}. Pseudo-selectors target specific element states or relationships, like :hover, :focus, :nth-child(), or :not().',
    hint: 'One changes styles by screen size, the other targets element states.',
    explanation:
      'Media queries help you apply different CSS rules based on the viewing environment. Pseudo-selectors let you style specific states or positions of elements.',
    tags: ['media queries', 'pseudo-selectors'],
    reference: [],
  },
  {
    id: 'css-3',
    categoryId: 'css',
    question: 'How do you approach organizing your CSS?',
    answer:
      'I use a modular approach with components grouped by function or feature. I often use BEM naming or utility-first classes. In larger projects, I might use a preprocessor like SCSS with partials and consistent naming conventions. I separate base styles, layout, and component styles to improve maintainability.',
    hint: 'Think modular, scalable, and readable.',
    explanation:
      'Organizing CSS well improves maintainability. Using methodologies like BEM and preprocessors allows for clean separation of concerns.',
    tags: ['css architecture', 'scss', 'bem'],
    reference: [],
  },
  {
    id: 'css-4',
    categoryId: 'css',
    question: 'What is CSS selector specificity and how does it work?',
    answer:
      "Specificity determines which CSS rule applies when multiple rules target the same element. It's calculated based on the type of selectors: inline styles (highest), then IDs, then classes/attributes/pseudo-classes, and lastly element selectors. More specific selectors override less specific ones.",
    hint: 'Think: inline > ID > class > element.',
    explanation:
      'Understanding specificity helps avoid style conflicts. Use it to control which styles win without relying on !important.',
    tags: ['specificity', 'selectors'],
    reference: [],
  },
  {
    id: 'css-5',
    categoryId: 'css',
    question:
      'What\'s the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?',
    answer:
      'Resetting removes all default browser styles, while normalizing preserves useful defaults and fixes inconsistencies across browsers. I usually prefer Normalize.css or a modern CSS reset like modern-normalize because it offers a balanced starting point without removing useful styles like button defaults.',
    hint: 'One wipes the slate, one smooths the edges.',
    explanation:
      'Normalization gives you consistency without sacrificing useful defaults. Resets can lead to more styling work from scratch.',
    tags: ['reset', 'normalize', 'browser defaults'],
    reference: [],
  },
  {
    id: 'css-6',
    categoryId: 'css',
    question: 'Describe Floats and how they work.',
    answer:
      'Floats were originally used to wrap text around images but became a layout tool. An element set to float: left or right is taken out of normal flow and pushed to the specified side. The surrounding content flows around it unless cleared.',
    hint: 'Think old-school layout or text wrapping.',
    explanation:
      'Floats affect element positioning by removing them from the document flow, which can lead to layout issues if not properly cleared.',
    tags: ['float', 'layout', 'positioning'],
    reference: [],
  },
  {
    id: 'css-7',
    categoryId: 'css',
    question: 'Describe z-index and how stacking context is formed.',
    answer:
      'z-index controls stacking order of elements, but only within the same stacking context. A stacking context is created when an element has a position other than static and a z-index, or other properties like opacity < 1. Contexts are nested, so z-index values don’t always compare across them.',
    hint: 'Higher z-index means on top—but only in the same context.',
    explanation:
      'z-index works within stacking contexts, so two elements may not compare if they’re in different isolated contexts.',
    tags: ['z-index', 'stacking context', 'positioning'],
    reference: [],
  },
  // CSS
  {
    id: 'css-8',
    categoryId: 'css',
    question: 'Describe BFC (Block Formatting Context) and how it works.',
    answer:
      'BFC is an isolated layout context that contains floated elements and prevents margin collapsing with outside elements. You can trigger a BFC by setting properties like overflow: hidden, display: flow-root, or using floats. It helps in layout and float containment.',
    hint: 'Think overflow: hidden or flow-root.',
    explanation:
      'BFCs isolate layout behavior, helping with float containment and avoiding margin collapse between siblings.',
    tags: ['bfc', 'layout', 'margin collapse'],
    reference: [],
  },
  {
    id: 'css-9',
    categoryId: 'css',
    question:
      'What are the various clearing techniques and which is appropriate for what context?',
    answer:
      'Common clearing techniques include: using clear: both on a following element; the clearfix hack (::after with content: "", display: block, clear: both); and using overflow: hidden or flow-root on the parent. flow-root is a modern, clean solution when you want to clear floats without side effects.',
    hint: 'Try using flow-root or clearfix.',
    explanation:
      'Clearing floats ensures parent elements wrap floated children. Each technique has its place based on markup and layout needs.',
    tags: ['float', 'clearfix', 'flow-root'],
    reference: [],
  },
  {
    id: 'css-10',
    categoryId: 'css',
    question: 'How would you approach fixing browser-specific styling issues?',
    answer:
      'I use feature detection with tools like Modernizr or CSS @supports, and rely on progressive enhancement. When necessary, I use browser-specific prefixes or conditional stylesheets. I test in a range of browsers and use tools like BrowserStack for coverage.',
    hint: 'Think @supports, Modernizr, and vendor prefixes.',
    explanation:
      'Addressing browser inconsistencies involves detecting support and applying fallbacks, not relying solely on user-agent detection.',
    tags: ['browser support', 'feature detection', 'progressive enhancement'],
    reference: [],
  },
  {
    id: 'css-11',
    categoryId: 'css',
    question:
      'How do you serve your pages for feature-constrained browsers? What techniques/processes do you use?',
    answer:
      'I use progressive enhancement—build the simplest, most functional version first, then layer on features as supported. I may polyfill features using libraries or check for support with @supports. I also keep performance in mind, optimizing for low-power or slow-network devices.',
    hint: 'Start basic, layer up.',
    explanation:
      'Progressive enhancement ensures usability in all browsers, while allowing modern features where supported.',
    tags: ['progressive enhancement', 'accessibility', 'performance'],
    reference: [],
  },
  {
    id: 'css-12',
    categoryId: 'css',
    question:
      'What are the different ways to visually hide content (and make it available only for screen readers)?',
    answer:
      'Techniques include using .sr-only classes with position: absolute, left: -9999px, or clip-path. Modern versions use visually-hidden patterns that keep content accessible but hidden visually. Avoid display: none or visibility: hidden if you want screen readers to access it.',
    hint: 'Use visually-hidden, not display: none.',
    explanation:
      'You want to hide content visually while preserving accessibility, especially for screen readers.',
    tags: ['accessibility', 'screen readers', 'visibility'],
    reference: [],
  },
  {
    id: 'css-13',
    categoryId: 'css',
    question:
      'Have you ever used a grid system, and if so, what do you prefer?',
    answer:
      'Yes, I’ve used frameworks like Bootstrap and CSS Grid. I prefer CSS Grid for full control and native browser support. It allows for complex layouts with minimal markup and better readability compared to predefined framework grids.',
    hint: 'Grid vs. frameworks.',
    explanation:
      'Native CSS Grid provides better control than framework-based grids, though both have their uses depending on project needs.',
    tags: ['css grid', 'bootstrap', 'layout'],
    reference: [],
  },
  {
    id: 'css-14',
    categoryId: 'css',
    question:
      'Have you used or implemented media queries or mobile-specific layouts/CSS?',
    answer:
      'Yes, frequently. I use mobile-first media queries (min-width) to progressively enhance layouts. I adjust typography, spacing, layout columns, and visibility of elements across breakpoints to create optimized experiences for different screen sizes.',
    hint: 'Min-width = mobile-first.',
    explanation:
      'Mobile-first design starts with small screens and adds enhancements, which typically leads to more efficient CSS.',
    tags: ['responsive design', 'media queries', 'breakpoints'],
    reference: [],
  },
  {
    id: 'css-15',
    categoryId: 'css',
    question: 'Are you familiar with styling SVG?',
    answer:
      'Yes. I’ve styled inline SVGs using CSS for fill, stroke, and animations. For external SVGs, I typically style them via attributes or embed them inline if styling is required. CSS can also target parts of SVGs using classes or IDs.',
    hint: 'Inline gives more styling control.',
    explanation:
      'SVGs offer flexible styling options, especially when embedded inline, allowing full use of CSS selectors and animations.',
    tags: ['svg', 'styling', 'graphics'],
    reference: [],
  },
  {
    id: 'css-16',
    categoryId: 'css',
    question:
      'Can you give an example of an @media property other than screen?',
    answer:
      'Yes. For example, @media print is used to define styles for print layout. Another is @media (prefers-reduced-motion: reduce) to support users who prefer reduced animations.',
    hint: 'Think beyond screen: print, accessibility.',
    explanation:
      '@media rules allow targeting specific media types or user preferences, like printing or motion sensitivity.',
    tags: ['media queries', 'print', 'reduced motion'],
    reference: [],
  },
  {
    id: 'css-17',
    categoryId: 'css',
    question: 'What are some of the "gotchas" for writing efficient CSS?',
    answer:
      'Avoid overly specific selectors, deep nesting, and large CSS files. Reuse utility classes when possible, and avoid unused styles. Minimize reflows by grouping style changes and be cautious of expensive selectors like universal selectors (*) or overly complex descendant selectors.',
    hint: 'Avoid complexity and reflow.',
    explanation:
      'Efficient CSS is readable, maintainable, and avoids unnecessary overhead. Poor practices can affect performance.',
    tags: ['performance', 'selectors', 'efficiency'],
    reference: [],
  },
  {
    id: 'css-18',
    categoryId: 'css',
    question:
      'What are the advantages/disadvantages of using CSS preprocessors? Describe what you like and dislike about the CSS preprocessors you have used.',
    answer:
      'Preprocessors like SCSS offer nesting, variables, mixins, and better modularity, which improves maintainability. However, over-nesting can create overly specific selectors, and compilation adds build complexity. I like SCSS for its balance between power and readability.',
    hint: 'SCSS adds power, but beware deep nesting.',
    explanation:
      'Preprocessors make large codebases easier to manage, but they can introduce complexity if not used carefully.',
    tags: ['scss', 'preprocessors', 'modularity'],
    reference: [],
  },
  {
    id: 'css-19',
    categoryId: 'css',
    question:
      'How would you implement a web design comp that uses non-standard fonts?',
    answer:
      'I’d use @font-face to load custom fonts, or include them via a service like Google Fonts. I’d define fallback fonts in the font-family stack for graceful degradation. Performance and licensing are also factors I consider.',
    hint: 'Think @font-face and fallbacks.',
    explanation:
      'Non-standard fonts can be embedded using @font-face or external services. Always include fallbacks and consider performance.',
    tags: ['fonts', 'typography', 'performance'],
    reference: [],
  },
  {
    id: 'css-20',
    categoryId: 'css',
    question:
      'Explain how a browser determines what elements match a CSS selector.',
    answer:
      'The browser parses the CSS and builds a rule tree. It traverses the DOM and applies styles by matching elements to selectors, considering specificity and cascade order. Matching is optimized by parsing selectors right-to-left.',
    hint: 'Right-to-left traversal.',
    explanation:
      'The browser uses an optimized matching strategy to improve performance while applying styles based on specificity and cascade.',
    tags: ['selectors', 'specificity', 'performance'],
    reference: [],
  },
  {
    id: 'css-21',
    categoryId: 'css',
    question:
      'Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.',
    answer:
      'The box model includes content, padding, border, and margin. By default, width and height apply to content only. Using box-sizing: border-box; tells the browser to include padding and border in the element’s total width and height.',
    hint: 'box-sizing: border-box;',
    explanation:
      'The default box model can lead to layout issues, so border-box is often used to simplify calculations.',
    tags: ['box model', 'layout', 'css properties'],
    reference: [],
  },
  {
    id: 'css-22',
    categoryId: 'css',
    question:
      'What does * { box-sizing: border-box; } do? What are its advantages?',
    answer:
      'It makes all elements include padding and border within the specified width and height. This simplifies layout calculations, avoids box overflows, and makes responsive design more predictable.',
    hint: 'Simplifies layout math.',
    explanation:
      'Using border-box globally reduces the risk of overflow and inconsistent sizing across components.',
    tags: ['box-sizing', 'layout', 'best practices'],
    reference: [],
  },
  {
    id: 'css-23',
    categoryId: 'css',
    question:
      'What is the CSS display property and can you give a few examples of its use?',
    answer:
      'It defines how an element behaves in the document flow. For example, block makes the element take up full width; inline lets it flow with text; inline-block behaves like inline but allows width/height; flex and grid enable layout systems; none hides the element.',
    hint: 'Think block, inline, flex, grid.',
    explanation:
      'The display property is fundamental to how elements are laid out and interact with other elements.',
    tags: ['display', 'layout', 'css properties'],
    reference: [],
  },
  {
    id: 'css-24',
    categoryId: 'css',
    question: "What's the difference between inline and inline-block?",
    answer:
      'inline elements don’t accept width or height and flow with text, while inline-block elements also flow inline but can have set dimensions.',
    hint: 'Only one allows width/height.',
    explanation:
      'inline-block gives layout flexibility while maintaining inline flow.',
    tags: ['inline', 'inline-block', 'layout'],
    reference: [],
  },
  {
    id: 'css-25',
    categoryId: 'css',
    question:
      "What's the difference between the nth-of-type() and nth-child() selectors?",
    answer:
      'nth-child() targets the nth child regardless of type, while nth-of-type() targets the nth occurrence of a specific tag type among siblings.',
    hint: 'child vs. type match.',
    explanation:
      'Use nth-of-type for targeting elements by tag type; nth-child works by position only.',
    tags: ['selectors', 'pseudo-classes', 'css targeting'],
    reference: [],
  },
  {
    id: 'css-26',
    categoryId: 'css',
    question:
      "What's the difference between a relative, fixed, absolute and statically positioned element?",
    answer:
      'static is the default flow. relative shifts an element from its normal position. absolute positions it based on the nearest positioned ancestor. fixed positions it relative to the viewport, staying in place on scroll.',
    hint: 'Think context and behavior.',
    explanation:
      'CSS position values define how elements are placed and which context they’re relative to.',
    tags: ['positioning', 'css properties', 'layout'],
    reference: [],
  },
  {
    id: 'css-27',
    categoryId: 'css',
    question:
      'What existing CSS frameworks have you used locally, or in production? How would you change/improve them?',
    answer:
      'I’ve used Bootstrap, Tailwind, and Foundation. I like Tailwind’s flexibility but would improve its verbosity. With Bootstrap, I’d reduce bloat and make it more modular. I’d improve all of them with better accessibility defaults and reduced global scope interference.',
    hint: 'Think real-world usage.',
    explanation:
      'Each framework has trade-offs; improvements often focus on customization and accessibility.',
    tags: ['frameworks', 'tailwind', 'bootstrap'],
    reference: [],
  },
  {
    id: 'css-28',
    categoryId: 'css',
    question: 'Have you used CSS Grid?',
    answer:
      'Yes, I use it for building two-dimensional layouts, especially when precise row/column control is needed. It’s useful for complex, responsive structures without relying on extra wrappers.',
    hint: '2D layout power tool.',
    explanation:
      'CSS Grid is ideal for layouts requiring row and column control without added markup.',
    tags: ['css grid', 'layout', 'responsive design'],
    reference: [],
  },
  {
    id: 'css-29',
    categoryId: 'css',
    question:
      'Can you explain the difference between coding a website to be responsive versus using a mobile-first strategy?',
    answer:
      'Responsive design adapts to all screen sizes. A mobile-first strategy starts with styles for small screens and adds enhancements with min-width media queries, leading to better performance and scalability.',
    hint: 'Start small, scale up.',
    explanation:
      'Mobile-first ensures performance and simplicity, while responsive design ensures adaptability.',
    tags: ['mobile-first', 'responsive design', 'media queries'],
    reference: [],
  },
  {
    id: 'css-30',
    categoryId: 'css',
    question:
      'Have you ever worked with retina graphics? If so, when and what techniques did you use?',
    answer:
      'Yes, I’ve used srcset, SVGs, and @2x images to serve high-resolution assets on retina displays, especially for icons, logos, and product photos, to ensure sharp visuals.',
    hint: 'Think about high DPI.',
    explanation:
      'Retina graphics ensure clarity on high-density screens and are critical for branding and UI clarity.',
    tags: ['retina', 'graphics', 'responsive images'],
    reference: [],
  },
  {
    id: 'css-31',
    categoryId: 'css',
    question:
      "Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?",
    answer:
      'translate() is better for performance and smooth animations since it uses GPU acceleration and doesn’t trigger layout reflow. Absolute positioning is more suitable for static layout needs.',
    hint: 'GPU vs layout reflow.',
    explanation:
      'translate() is preferred in animations for smoother rendering; absolute is for fixed spatial layout.',
    tags: ['performance', 'animations', 'layout'],
    reference: [],
  },
  {
    id: 'css-32',
    categoryId: 'css',
    question: 'How is the clearfix CSS property useful?',
    answer:
      'It prevents parent elements from collapsing when they contain floated children. The clearfix uses a pseudo-element (::after) to clear floats, maintaining structural integrity without extra markup.',
    hint: 'It fixes float-collapse.',
    explanation:
      'Floated children don’t expand their parent’s height—clearfix ensures layout integrity.',
    tags: ['clearfix', 'floats', 'css techniques'],
    reference: [],
  },
];
