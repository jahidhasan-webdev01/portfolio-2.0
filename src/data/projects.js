export const projects = [
    {
        slug: "blogpilot-ai",
        title: "BlogPilot AI",
        description:
            "An AI-powered blogging platform that enables users to generate, refine, and publish high-quality blog content using the Grok AI API. It features secure authentication with Firebase Admin, a responsive and modern interface, rich blog management, and a scalable backend for seamless content creation and publishing.",
        image: "/blogpilot-ai.png",
        tech: [
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase Admin",
            "Grok AI API",
        ],
        challenges: [
            "Integrating the Grok AI API while handling rate limits and unpredictable AI responses.",
            "Implementing secure authentication and protected routes using Firebase Admin.",
            "Designing a scalable backend architecture for blog management and AI content generation.",
        ],
        future: [
            "Add Markdown editor with live preview.",
            "Implement AI-powered blog summarization and SEO optimization.",
            "Introduce comments, likes, bookmarks, and user following.",
        ],
        live: "https://blogpilot-ai-client.vercel.app/",
        github:
            "https://github.com/jahidhasan-webdev01/blogpilot-ai-client",
    },

    {
        slug: "docappoint",
        title: "DocAppoint",
        description:
            "A modern doctor appointment management system where users can browse doctors, book appointments, manage bookings, and update their profiles with secure authentication using Better Auth.",
        image: "/doc-appoint.png",
        tech: [
            "Next.js",
            "Tailwind CSS",
            "Better Auth",
            "Express.js",
            "MongoDB",
        ],
        challenges: [
            "Managing doctor availability and preventing appointment conflicts.",
            "Implementing secure authentication and authorization.",
            "Creating an intuitive booking workflow for patients.",
        ],
        future: [
            "Integrate online payment gateways.",
            "Add video consultation support.",
            "Implement email and SMS appointment reminders.",
        ],
        live: "https://doc-appoint-client-sigma.vercel.app",
        github:
            "https://github.com/jahidhasan-webdev01/doc-appoint-client",
    },

    {
        slug: "qurbani-hat",
        title: "QurbaniHat",
        description:
            "An online Qurbani animal marketplace where users can browse available animals, view detailed information, and book animals securely with a responsive and user-friendly interface.",
        image: "/qurbani-hat.png",
        tech: [
            "Next.js",
            "Tailwind CSS",
            "DaisyUI",
            "Better Auth",
            "MongoDB",
            "React Hook Form",
        ],
        challenges: [
            "Designing an attractive marketplace UI with filtering options.",
            "Managing booking flow while preventing duplicate reservations.",
            "Maintaining responsive layouts across all devices.",
        ],
        future: [
            "Add online payment integration.",
            "Enable seller dashboard and inventory management.",
            "Implement advanced search and location-based filtering.",
        ],
        live: "https://qurbani-hat-nu.vercel.app",
        github:
            "https://github.com/jahidhasan-webdev01/qurbani-hat",
    },

    {
        slug: "the-dragon-news",
        title: "The Dragon News",
        description:
            "A responsive news portal that delivers the latest articles with secure user authentication, category-based browsing, and an intuitive reading experience.",
        image: "/the-dragon-news.png",
        tech: [
            "Next.js",
            "Tailwind CSS",
            "Better Auth",
            "Express.js",
            "Node.js",
        ],
        challenges: [
            "Implementing authentication with protected news content.",
            "Optimizing page loading and responsiveness.",
            "Organizing articles into reusable UI components.",
        ],
        future: [
            "Add personalized news recommendations.",
            "Implement bookmarking and reading history.",
            "Integrate real-time breaking news notifications.",
        ],
        live: "https://the-dragon-news-tawny.vercel.app",
        github:
            "https://github.com/jahidhasan-webdev01/the-dragon-news",
    },

    {
        slug: "influencer-gear",
        title: "Influencer Gear",
        description:
            "An e-commerce frontend application for influencer equipment featuring product browsing, brand filtering, shopping cart management, and persistent storage using LocalStorage and SessionStorage.",
        image: "/influencer-gear.png",
        tech: [
            "React",
            "React Router",
            "DaisyUI",
            "React Hot Toast",
        ],
        challenges: [
            "Managing cart state across multiple pages.",
            "Implementing filtering and search efficiently.",
            "Persisting cart data without a backend.",
        ],
        future: [
            "Integrate a backend and payment gateway.",
            "Add user authentication.",
            "Implement product reviews and wishlist features.",
        ],
        live: "https://influencer-gears01.netlify.app",
        github:
            "https://github.com/jahidhasan-webdev01/influencer-gears",
    },
];