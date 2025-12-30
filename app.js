/**
 * Personal Dashboard - Main JavaScript
 */

// ========================================
// Configuration
// ========================================
const CONFIG = {
    github: {
        username: 'itsdokha',
        token: typeof SECRETS !== 'undefined' ? SECRETS.github.token : null,
        pinnedRepos: 6,
        useRealAPI: true,
    },
    telegram: {
        botToken: typeof SECRETS !== 'undefined' ? SECRETS.telegram.botToken : null,
        userId: typeof SECRETS !== 'undefined' ? SECRETS.telegram.userId : null,
        useRealAPI: true,
    },
    lastfm: {
        apiKey: typeof SECRETS !== 'undefined' ? SECRETS.lastfm.apiKey : null,
        username: 'itsdokha',
        useRealAPI: true,
    },
    tmdb: {
        apiKey: typeof SECRETS !== 'undefined' ? SECRETS.tmdb.apiKey : null,
        watchingListId: '8581019',
        watchedListId: '8581018',
        useRealAPI: true,
    },
    books: {
        useOpenLibrary: true,
        // Add books by Open Library edition key (OL...M) from URL
        // Example: openlibrary.org/books/OL26375433M -> 'OL26375433M'
        reading: [
            'OL22007893M',  // Le Petit Prince
            'OL38290995M',  // Atomic Habits
        ],
        finished: [
            'OL26375433M',  // An Ember in the Ashes
            'OL27213819M',  // A Torch Against the Night
            'OL26956755M',  // A Reaper at the Gates
            'OL37760229M',  // A Sky Beyond the Storm
        ],
    },
    profile: {
        name: 'Ghoibov Dokha',
        role: 'Backend Developer',
        timezone: 'UTC+3',
        avatar: 'https://avatars.githubusercontent.com/u/0?v=4',
        quote: 'with great power comes great responsibility',
    },
    socials: [
        { name: 'GitHub', url: 'https://github.com/itsdokha', icon: 'github' },
        { name: 'Telegram', url: 'https://t.me/dokha', icon: 'telegram' },
        { name: 'Email', url: 'mailto:itsdokha@gmail.com', icon: 'email', copy: true },
        { name: 'Twitter', url: 'https://twitter.com/itsdokha', icon: 'twitter' },
        { name: 'Discord', url: 'https://discord.com/users/itsdokha', icon: 'discord' },
	{ name: 'Instagram', url: 'https://www.instagram.com/itsdokha', icon: 'instagram'},
    ],
    status: {
        current: 'online', // online, away, busy, sleeping, offline
        text: 'Available for work',
    },
};

// Language colors for GitHub
const LANG_COLORS = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Go: '#00ADD8',
    Rust: '#dea584',
    Java: '#b07219',
    'C++': '#f34b7d',
    C: '#555555',
    'C#': '#178600',
    PHP: '#4F5D95',
    Ruby: '#701516',
    Swift: '#F05138',
    Kotlin: '#A97BFF',
    Dart: '#00B4AB',
    Vue: '#41b883',
    HTML: '#e34c26',
    CSS: '#563d7c',
    SCSS: '#c6538c',
    Shell: '#89e051',
    Dockerfile: '#384d54',
};

// ========================================
// Icons SVG
// ========================================
const ICONS = {
    github: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    telegram: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
    email: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    twitter: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    discord: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>`,
    instagram: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    star: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    fork: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/><path d="M6 9a9 9 0 0 0 9 9"/></svg>`,
    push: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>`,
    pr: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>`,
    create: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>`,
    play: `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
};

// ========================================
// Mock Data
// ========================================
const MOCK_DATA = {
    stats: {
        repos: 42,
        stars: 156,
        followers: 89,
        following: 34,
    },
    pinnedRepos: [
        {
            name: 'awesome-project',
            description: 'A collection of awesome tools and resources for developers',
            language: 'TypeScript',
            stars: 45,
            forks: 12,
            updatedAt: '2024-12-28',
        },
        {
            name: 'react-dashboard',
            description: 'Modern dashboard template built with React and TailwindCSS',
            language: 'JavaScript',
            stars: 32,
            forks: 8,
            updatedAt: '2024-12-25',
        },
        {
            name: 'go-microservice',
            description: 'Microservice boilerplate with Go, gRPC, and Docker',
            language: 'Go',
            stars: 28,
            forks: 5,
            updatedAt: '2024-12-20',
        },
        {
            name: 'python-ml-toolkit',
            description: 'Machine learning utilities and helpers for data science',
            language: 'Python',
            stars: 19,
            forks: 3,
            updatedAt: '2024-12-15',
        },
        {
            name: 'rust-cli-tools',
            description: 'Fast and efficient CLI tools written in Rust',
            language: 'Rust',
            stars: 15,
            forks: 2,
            updatedAt: '2024-12-10',
        },
        {
            name: 'dotfiles',
            description: 'My personal dotfiles and configurations',
            language: 'Shell',
            stars: 8,
            forks: 1,
            updatedAt: '2024-12-05',
        },
    ],
    languages: [
        { name: 'TypeScript', percent: 35 },
        { name: 'Python', percent: 25 },
        { name: 'Go', percent: 18 },
        { name: 'JavaScript', percent: 12 },
        { name: 'Rust', percent: 7 },
        { name: 'Other', percent: 3 },
    ],
    activity: [
        { type: 'push', repo: 'awesome-project', message: 'Pushed 3 commits', time: '2 hours ago' },
        { type: 'pr', repo: 'react-dashboard', message: 'Opened pull request #42', time: '5 hours ago' },
        { type: 'create', repo: 'new-experiment', message: 'Created repository', time: '1 day ago' },
        { type: 'push', repo: 'go-microservice', message: 'Pushed 1 commit', time: '2 days ago' },
        { type: 'pr', repo: 'python-ml-toolkit', message: 'Merged pull request #15', time: '3 days ago' },
    ],
    books: {
        reading: [
            {
                title: 'System Design Interview',
                author: 'Alex Xu',
                cover: 'https://m.media-amazon.com/images/I/71xLDGjPFnL._AC_UF1000,1000_QL80_.jpg',
                progress: 65,
                rating: null,
                link: 'https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF',
            },
            {
                title: 'Clean Architecture',
                author: 'Robert C. Martin',
                cover: 'https://m.media-amazon.com/images/I/61r4tYVsRVL._AC_UF1000,1000_QL80_.jpg',
                progress: 30,
                rating: null,
                link: 'https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164',
            },
        ],
        finished: [
            {
                title: 'The Pragmatic Programmer',
                author: 'David Thomas',
                cover: 'https://m.media-amazon.com/images/I/71VStSjZmpL._AC_UF1000,1000_QL80_.jpg',
                progress: 100,
                rating: 5,
                link: 'https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052',
            },
            {
                title: 'Designing Data-Intensive Applications',
                author: 'Martin Kleppmann',
                cover: 'https://m.media-amazon.com/images/I/91pzJFFTerL._AC_UF1000,1000_QL80_.jpg',
                progress: 100,
                rating: 5,
                link: 'https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321',
            },
            {
                title: 'You Don\'t Know JS Yet',
                author: 'Kyle Simpson',
                cover: 'https://m.media-amazon.com/images/I/71t-hy1BFDL._AC_UF1000,1000_QL80_.jpg',
                progress: 100,
                rating: 4,
                link: 'https://github.com/getify/You-Dont-Know-JS',
            },
        ],
    },
    movies: {
        watching: [
            {
                title: 'Breaking Bad',
                year: 2008,
                type: 'series',
                poster: 'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg',
                progress: 'S4E8',
                rating: 9.5,
                imdb_id: 'tt0903747',
            },
            {
                title: 'The Last of Us',
                year: 2023,
                type: 'series',
                poster: 'https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_.jpg',
                progress: 'S1E5',
                rating: 9.0,
                imdb_id: 'tt3581920',
            },
        ],
        watched: [
            {
                title: 'Oppenheimer',
                year: 2023,
                type: 'movie',
                poster: 'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg',
                rating: 9.0,
                imdb_id: 'tt15398776',
            },
            {
                title: 'Dune: Part Two',
                year: 2024,
                type: 'movie',
                poster: 'https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
                rating: 8.8,
                imdb_id: 'tt15239678',
            },
            {
                title: 'Interstellar',
                year: 2014,
                type: 'movie',
                poster: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
                rating: 9.5,
                imdb_id: 'tt0816692',
            },
            {
                title: 'Chernobyl',
                year: 2019,
                type: 'series',
                poster: 'https://m.media-amazon.com/images/M/MV5BNTdkN2QwMDItMjU2Zi00OGY2LTk4NzMtZjQ3NmExMjkxZDNlXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg',
                rating: 9.4,
                imdb_id: 'tt7366338',
            },
        ],
    },
    servers: {
        servers_up: 4,
        servers_total: 5,
        processes_up: 12,
        processes_total: 14,
        items: [
            { name: 'Production API', status: 'up', latency: 45, uptime: 99.9 },
            { name: 'Database Cluster', status: 'up', latency: 12, uptime: 99.99 },
            { name: 'CDN Edge', status: 'up', latency: 8, uptime: 100 },
            { name: 'Analytics Worker', status: 'degraded', latency: 230, uptime: 98.5 },
            { name: 'Backup Storage', status: 'up', latency: 156, uptime: 99.8 },
        ],
    },
    spotify: [
        {
            name: 'Blinding Lights',
            artist: 'The Weeknd',
            album: 'After Hours',
            cover: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
            time: '10 min ago',
            url: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b',
        },
        {
            name: 'Bohemian Rhapsody',
            artist: 'Queen',
            album: 'A Night at the Opera',
            cover: 'https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b',
            time: '25 min ago',
            url: 'https://open.spotify.com/track/4u7EnebtmKWzUH433cf5Qv',
        },
        {
            name: 'Starboy',
            artist: 'The Weeknd, Daft Punk',
            album: 'Starboy',
            cover: 'https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452',
            time: '1 hour ago',
            url: 'https://open.spotify.com/track/7MXVkk9YMctZqd1Srtv4MB',
        },
        {
            name: 'Shape of You',
            artist: 'Ed Sheeran',
            album: '÷',
            cover: 'https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96',
            time: '2 hours ago',
            url: 'https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3',
        },
        {
            name: 'Levitating',
            artist: 'Dua Lipa',
            album: 'Future Nostalgia',
            cover: 'https://i.scdn.co/image/ab67616d0000b273bd26ede1ae69327010d49946',
            time: '3 hours ago',
            url: 'https://open.spotify.com/track/39LLxExYz6ewLAcYrzQQyP',
        },
    ],
    skills: [
        // Languages & Web
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'ASM x86-64', icon: 'https://cdn.simpleicons.org/assemblyscript/007ACC' },
        // Tools & Infrastructure
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
        { name: 'Cloudflare', icon: 'https://cdn.simpleicons.org/cloudflare/F38020' },
        // Protocols & APIs
        { name: 'REST API', icon: 'https://cdn.simpleicons.org/openapiinitiative/6BA539' },
        { name: 'Networking', icon: 'https://cdn.simpleicons.org/cisco/1BA0D7' },
        // Mathematics
        { name: 'Algebra', icon: 'https://cdn.simpleicons.org/wolframmathematica/DD1100' },
        { name: 'Probability', icon: 'https://cdn.simpleicons.org/googleanalytics/E37400' },
        { name: 'Combinatorics', icon: 'https://cdn.simpleicons.org/hackthebox/9FEF00' },
        { name: 'Statistics', icon: 'https://cdn.simpleicons.org/scipy/8CAAE6' },
        { name: 'Logic', icon: 'https://cdn.simpleicons.org/probot/00B0D8' },
        { name: 'Diff. Equations', icon: 'https://cdn.simpleicons.org/sympy/3B5526' },
        { name: 'Discrete Math', icon: 'https://cdn.simpleicons.org/graphql/E10098' },
    ],
};

// ========================================
// GitHub API Functions
// ========================================
const GitHubAPI = {
    baseUrl: 'https://api.github.com',

    async fetch(endpoint) {
        const headers = {
            'Accept': 'application/vnd.github.v3+json',
        };
        if (CONFIG.github.token) {
            headers['Authorization'] = `token ${CONFIG.github.token}`;
        }

        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, { headers });
            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('GitHub API fetch error:', error);
            return null;
        }
    },

    async getUser() {
        return await this.fetch(`/users/${CONFIG.github.username}`);
    },

    async getRepos() {
        return await this.fetch(`/users/${CONFIG.github.username}/repos?per_page=100&sort=updated`);
    },

    async getEvents() {
        return await this.fetch(`/users/${CONFIG.github.username}/events/public?per_page=15`);
    },

    async getPinnedRepos() {
        // GraphQL query for pinned repos
        const query = `
            query {
                user(login: "${CONFIG.github.username}") {
                    pinnedItems(first: 6, types: REPOSITORY) {
                        nodes {
                            ... on Repository {
                                name
                                description
                                url
                                stargazerCount
                                forkCount
                                primaryLanguage {
                                    name
                                    color
                                }
                                updatedAt
                            }
                        }
                    }
                }
            }
        `;

        try {
            const response = await fetch('https://api.github.com/graphql', {
                method: 'POST',
                headers: {
                    'Authorization': `bearer ${CONFIG.github.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query }),
            });

            const data = await response.json();
            if (data.data?.user?.pinnedItems?.nodes) {
                return data.data.user.pinnedItems.nodes;
            }
            return null;
        } catch (error) {
            console.error('GitHub GraphQL error:', error);
            return null;
        }
    },

    async getLanguages() {
        // Use GraphQL to get languages from all repos
        const query = `
            query {
                user(login: "${CONFIG.github.username}") {
                    repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
                        nodes {
                            languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
                                edges {
                                    size
                                    node {
                                        name
                                        color
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `;

        try {
            const response = await fetch('https://api.github.com/graphql', {
                method: 'POST',
                headers: {
                    'Authorization': `bearer ${CONFIG.github.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query }),
            });

            const data = await response.json();
            const repos = data.data?.user?.repositories?.nodes;
            if (!repos) return null;

            // Aggregate language bytes
            const langBytes = {};
            for (const repo of repos) {
                for (const edge of (repo.languages?.edges || [])) {
                    const name = edge.node.name;
                    langBytes[name] = (langBytes[name] || 0) + edge.size;
                }
            }

            const total = Object.values(langBytes).reduce((a, b) => a + b, 0);
            if (total === 0) return null;

            const languages = Object.entries(langBytes)
                .map(([name, bytes]) => ({
                    name,
                    percent: Math.round((bytes / total) * 100),
                }))
                .sort((a, b) => b.percent - a.percent)
                .slice(0, 6);

            // Ensure percentages sum to ~100
            const sum = languages.reduce((a, b) => a + b.percent, 0);
            if (sum < 100 && languages.length > 0) {
                languages[0].percent += (100 - sum);
            }

            return languages;
        } catch (error) {
            console.error('GitHub GraphQL languages error:', error);
            return null;
        }
    },

    async getStats() {
        const user = await this.getUser();
        const repos = await this.getRepos();

        if (!user || !repos) return null;

        const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);

        return {
            repos: user.public_repos,
            stars: totalStars,
            followers: user.followers,
            following: user.following,
            avatar: user.avatar_url,
            bio: user.bio,
        };
    },
};

// ========================================
// Telegram API Functions
// ========================================
const TelegramAPI = {
    baseUrl: 'https://api.telegram.org',

    async getChat() {
        try {
            const response = await fetch(
                `${this.baseUrl}/bot${CONFIG.telegram.botToken}/getChat?chat_id=${CONFIG.telegram.userId}`
            );
            const data = await response.json();
            if (data.ok) {
                return data.result;
            }
            return null;
        } catch (error) {
            console.error('Telegram API error:', error);
            return null;
        }
    },

    async getStatus() {
        // Telegram Bot API не даёт напрямую online/offline статус
        // Но мы можем получить bio и фото профиля
        // Для реального статуса нужен MTProto или Telegram Premium

        const chat = await this.getChat();
        if (chat) {
            return {
                firstName: chat.first_name,
                lastName: chat.last_name,
                username: chat.username,
                bio: chat.bio,
                photo: chat.photo,
                // Статус определяем по времени (можно настроить)
                status: this.getTimeBasedStatus(),
            };
        }
        return null;
    },

    getTimeBasedStatus() {
        // Автоматический статус по времени (UTC+3)
        const now = new Date();
        const hours = (now.getUTCHours() + 3) % 24; // UTC+3

        if (hours >= 0 && hours < 7) {
            return { status: 'sleeping', text: 'Sleeping...' };
        } else if (hours >= 7 && hours < 9) {
            return { status: 'away', text: 'Waking up...' };
        } else if (hours >= 9 && hours < 18) {
            return { status: 'online', text: 'Available for work' };
        } else if (hours >= 18 && hours < 22) {
            return { status: 'away', text: 'Chilling...' };
        } else {
            return { status: 'away', text: 'Winding down...' };
        }
    },
};

// ========================================
// Last.fm API Functions
// ========================================
const LastFmAPI = {
    baseUrl: 'https://ws.audioscrobbler.com/2.0/',

    async fetch(method, params = {}) {
        const url = new URL(this.baseUrl);
        url.searchParams.set('method', method);
        url.searchParams.set('user', CONFIG.lastfm.username);
        url.searchParams.set('api_key', CONFIG.lastfm.apiKey);
        url.searchParams.set('format', 'json');

        for (const [key, value] of Object.entries(params)) {
            url.searchParams.set(key, value);
        }

        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Last.fm API error:', error);
            return null;
        }
    },

    async getRecentTracks(limit = 10) {
        // Fetch more to filter duplicates
        const data = await this.fetch('user.getrecenttracks', { limit: 50 });
        if (data?.recenttracks?.track) {
            const seen = new Set();
            const uniqueTracks = [];

            for (const track of data.recenttracks.track) {
                const trackName = track.name;
                const artistName = track.artist['#text'] || track.artist.name;
                const key = `${trackName}-${artistName}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    // Create Spotify search URL
                    const spotifySearchUrl = `https://open.spotify.com/search/${encodeURIComponent(trackName + ' ' + artistName)}`;
                    uniqueTracks.push({
                        name: trackName,
                        artist: artistName,
                        album: track.album['#text'] || '',
                        cover: track.image?.[2]?.['#text'] || track.image?.[1]?.['#text'] || '',
                        url: spotifySearchUrl,
                        nowPlaying: track['@attr']?.nowplaying === 'true',
                        playedAt: track.date?.['#text'] || 'Now playing',
                    });
                    if (uniqueTracks.length >= limit) break;
                }
            }
            return uniqueTracks;
        }
        return null;
    },

    async getNowPlaying() {
        const tracks = await this.getRecentTracks(1);
        if (tracks && tracks[0]?.nowPlaying) {
            return tracks[0];
        }
        return null;
    },
};

// ========================================
// TMDB API Functions
// ========================================
const TMDB_API = {
    baseUrl: 'https://api.themoviedb.org/3',
    imageBaseUrl: 'https://image.tmdb.org/t/p/w500',

    async fetch(endpoint) {
        const url = `${this.baseUrl}${endpoint}`;
        const separator = endpoint.includes('?') ? '&' : '?';

        try {
            const response = await fetch(`${url}${separator}api_key=${CONFIG.tmdb.apiKey}`);
            if (!response.ok) {
                throw new Error(`TMDB API error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('TMDB API error:', error);
            return null;
        }
    },

    async getList(listId) {
        // TMDB lists can have multiple pages
        const firstPage = await this.fetch(`/list/${listId}?language=en-US&page=1`);
        if (!firstPage) return null;

        let allItems = [...(firstPage.items || [])];

        // Fetch additional pages if needed
        const totalPages = firstPage.total_pages || 1;
        for (let page = 2; page <= totalPages && page <= 5; page++) {
            const nextPage = await this.fetch(`/list/${listId}?language=en-US&page=${page}`);
            if (nextPage?.items) {
                allItems = [...allItems, ...nextPage.items];
            }
        }

        return allItems;
    },

    async getWatchingList() {
        const items = await this.getList(CONFIG.tmdb.watchingListId);
        if (!items) return null;

        return items.map(item => ({
            id: item.id,
            title: item.title || item.name,
            year: new Date(item.release_date || item.first_air_date).getFullYear() || null,
            type: item.media_type === 'tv' ? 'series' : 'movie',
            poster: item.poster_path ? `${this.imageBaseUrl}${item.poster_path}` : null,
            rating: item.vote_average ? item.vote_average.toFixed(1) : null,
            overview: item.overview,
            progress: null, // TMDB doesn't track episode progress
        }));
    },

    async getWatchedList() {
        const items = await this.getList(CONFIG.tmdb.watchedListId);
        if (!items) return null;

        return items.map(item => ({
            id: item.id,
            title: item.title || item.name,
            year: new Date(item.release_date || item.first_air_date).getFullYear() || null,
            type: item.media_type === 'tv' ? 'series' : 'movie',
            poster: item.poster_path ? `${this.imageBaseUrl}${item.poster_path}` : null,
            rating: item.vote_average ? item.vote_average.toFixed(1) : null,
            overview: item.overview,
        }));
    },

    // Get IMDB ID for a movie/series
    async getExternalIds(id, type) {
        const mediaType = type === 'series' ? 'tv' : 'movie';
        const data = await this.fetch(`/${mediaType}/${id}/external_ids`);
        return data?.imdb_id || null;
    },
};

// ========================================
// Open Library API Functions
// ========================================
const OpenLibraryAPI = {
    baseUrl: 'https://openlibrary.org',
    coversUrl: 'https://covers.openlibrary.org',

    async getBookByEditionKey(editionKey) {
        try {
            // Fetch edition data
            const response = await fetch(`${this.baseUrl}/books/${editionKey}.json`);
            if (!response.ok) return null;

            const data = await response.json();

            // Get author names
            let authors = [];
            if (data.authors) {
                for (const authorRef of data.authors) {
                    const authorKey = authorRef.key;
                    try {
                        const authorResponse = await fetch(`${this.baseUrl}${authorKey}.json`);
                        if (authorResponse.ok) {
                            const authorData = await authorResponse.json();
                            authors.push(authorData.name);
                        }
                    } catch (e) {
                        console.error('Error fetching author:', e);
                    }
                }
            }

            // Get cover - try edition ID first, then ISBN
            let coverUrl = `${this.coversUrl}/b/olid/${editionKey}-L.jpg`;

            return {
                title: data.title,
                author: authors.join(', ') || 'Unknown Author',
                cover: coverUrl,
                editionKey: editionKey,
                pages: data.number_of_pages || null,
                publishDate: data.publish_date || null,
                link: `${this.baseUrl}/books/${editionKey}`,
            };
        } catch (error) {
            console.error('Open Library API error:', error);
            return null;
        }
    },

    async getBooks(bookList) {
        const books = [];
        for (const item of bookList) {
            // Support both string key and object { key, progress, rating }
            const key = typeof item === 'string' ? item : item.key;
            const progress = typeof item === 'object' ? item.progress : null;
            const rating = typeof item === 'object' ? item.rating : null;

            const bookData = await this.getBookByEditionKey(key);
            if (bookData) {
                books.push({
                    ...bookData,
                    progress: progress,
                    rating: rating,
                });
            }
        }
        return books;
    },
};

// ========================================
// Utility Functions
// ========================================
function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

function formatRelativeTime(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return 'today';
    if (days === 1) return 'yesterday';
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    if (days < 365) return `${Math.floor(days / 30)} months ago`;
    return `${Math.floor(days / 365)} years ago`;
}

function showToast(message) {
    const container = $('#toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ========================================
// Render Functions
// ========================================
async function renderProfile() {
    const { name, role, timezone, avatar, quote } = CONFIG.profile;
    let statusData = CONFIG.status;

    $('#hero-name').textContent = name;
    $('#hero-role').textContent = role;
    $('#timezone').textContent = timezone;
    $('#avatar').src = avatar;
    $('#current-year').textContent = new Date().getFullYear();

    // Quote
    if (quote) {
        $('#hero-quote .quote-text').textContent = quote;
    }

    // Get Telegram status
    if (CONFIG.telegram.useRealAPI) {
        const telegramStatus = await TelegramAPI.getStatus();
        if (telegramStatus?.status) {
            statusData = telegramStatus.status;
        }
    }

    // Status
    const statusIndicator = $('#status-indicator');
    statusIndicator.classList.add(statusData.status || statusData.current);
    $('#status-text').textContent = statusData.text;

    // Social links
    const socialsContainer = $('#social-links');
    socialsContainer.innerHTML = CONFIG.socials.map(social => `
        <a href="${social.url}" class="social-link"
           title="${social.name}"
           target="_blank"
           rel="noopener noreferrer"
           ${social.copy ? `data-copy="${social.url.replace('mailto:', '')}"` : ''}>
            ${ICONS[social.icon] || ''}
        </a>
    `).join('');

    // Copy email on click
    socialsContainer.querySelectorAll('[data-copy]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigator.clipboard.writeText(link.dataset.copy);
            showToast('Email copied!');
        });
    });

    // GitHub profile link
    $('#github-profile-link').href = `https://github.com/${CONFIG.github.username}`;
}

async function renderStats() {
    let stats;

    if (CONFIG.github.useRealAPI) {
        stats = await GitHubAPI.getStats();
        if (stats) {
            // Update avatar with real GitHub avatar
            $('#avatar').src = stats.avatar;
        }
    }

    // Fallback to mock data if API fails
    if (!stats) {
        await delay(800);
        stats = MOCK_DATA.stats;
    }

    animateNumber($('#stat-repos'), stats.repos);
    animateNumber($('#stat-stars'), stats.stars);
    animateNumber($('#stat-followers'), stats.followers);
    animateNumber($('#stat-following'), stats.following);
}

function animateNumber(element, target) {
    let current = 0;
    const step = target / 30;
    const interval = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

async function renderPinnedRepos() {
    const container = $('#pinned-repos');
    let repos = null;

    if (CONFIG.github.useRealAPI) {
        const pinnedRepos = await GitHubAPI.getPinnedRepos();
        if (pinnedRepos && pinnedRepos.length > 0) {
            repos = pinnedRepos.map(repo => ({
                name: repo.name,
                description: repo.description,
                url: repo.url,
                language: repo.primaryLanguage?.name || 'Unknown',
                languageColor: repo.primaryLanguage?.color || '#8b5cf6',
                stars: repo.stargazerCount,
                forks: repo.forkCount,
                updatedAt: repo.updatedAt,
            }));
        } else {
            // If no pinned repos, get top starred repos
            const allRepos = await GitHubAPI.getRepos();
            if (allRepos) {
                repos = allRepos
                    .sort((a, b) => b.stargazers_count - a.stargazers_count)
                    .slice(0, 6)
                    .map(repo => ({
                        name: repo.name,
                        description: repo.description,
                        url: repo.html_url,
                        language: repo.language || 'Unknown',
                        languageColor: LANG_COLORS[repo.language] || '#8b5cf6',
                        stars: repo.stargazers_count,
                        forks: repo.forks_count,
                        updatedAt: repo.updated_at,
                    }));
            }
        }
    }

    // Fallback to mock data
    if (!repos) {
        await delay(1000);
        repos = MOCK_DATA.pinnedRepos.map(repo => ({
            ...repo,
            url: `https://github.com/${CONFIG.github.username}/${repo.name}`,
            languageColor: LANG_COLORS[repo.language] || '#8b5cf6',
        }));
    }

    container.innerHTML = repos.map(repo => `
        <div class="repo-card">
            <div class="repo-header">
                <a href="${repo.url}"
                   class="repo-name" target="_blank" rel="noopener">
                    ${repo.name}
                </a>
            </div>
            <p class="repo-desc">${repo.description || 'No description'}</p>
            <div class="repo-meta">
                ${repo.language ? `
                <span class="repo-lang">
                    <span class="lang-dot" style="background: ${repo.languageColor || LANG_COLORS[repo.language] || '#8b5cf6'}"></span>
                    ${repo.language}
                </span>
                ` : ''}
                <span class="repo-stat">${ICONS.star} ${repo.stars}</span>
                <span class="repo-stat">${ICONS.fork} ${repo.forks}</span>
                <span class="repo-time">${formatRelativeTime(repo.updatedAt)}</span>
            </div>
        </div>
    `).join('');
}

async function renderLanguages() {
    const bar = $('#languages-bar');
    const legend = $('#languages-legend');
    let languages = null;

    if (CONFIG.github.useRealAPI) {
        languages = await GitHubAPI.getLanguages();
    }

    // Fallback to mock data
    if (!languages) {
        await delay(1200);
        languages = MOCK_DATA.languages;
    }

    bar.innerHTML = languages.map(lang => `
        <div class="lang-segment"
             style="width: ${lang.percent}%; background: ${LANG_COLORS[lang.name] || '#8b5cf6'}">
        </div>
    `).join('');

    legend.innerHTML = languages.map(lang => `
        <div class="lang-item">
            <span class="lang-dot" style="background: ${LANG_COLORS[lang.name] || '#8b5cf6'}"></span>
            <span>${lang.name}</span>
            <span class="lang-percent">${lang.percent}%</span>
        </div>
    `).join('');
}

async function renderActivity() {
    const container = $('#activity-feed');
    const iconMap = {
        push: ICONS.push,
        PushEvent: ICONS.push,
        pr: ICONS.pr,
        PullRequestEvent: ICONS.pr,
        create: ICONS.create,
        CreateEvent: ICONS.create,
        WatchEvent: ICONS.star,
        ForkEvent: ICONS.fork,
        IssuesEvent: ICONS.create,
    };

    let activities = null;

    if (CONFIG.github.useRealAPI) {
        const events = await GitHubAPI.getEvents();
        if (events) {
            activities = events.slice(0, 10).map(event => {
                let message = '';
                let repo = event.repo?.name?.split('/')[1] || event.repo?.name || '';
                let repoUrl = `https://github.com/${event.repo?.name}`;

                switch (event.type) {
                    case 'PushEvent':
                        const commits = event.payload?.size || event.payload?.commits?.length || 1;
                        message = `Pushed ${commits} commit${commits !== 1 ? 's' : ''}`;
                        break;
                    case 'PullRequestEvent':
                        message = `${event.payload?.action} pull request #${event.payload?.pull_request?.number}`;
                        break;
                    case 'CreateEvent':
                        message = `Created ${event.payload?.ref_type} ${event.payload?.ref || ''}`;
                        break;
                    case 'WatchEvent':
                        message = `Starred repository`;
                        break;
                    case 'ForkEvent':
                        message = `Forked repository`;
                        break;
                    case 'IssuesEvent':
                        message = `${event.payload?.action} issue #${event.payload?.issue?.number}`;
                        break;
                    default:
                        message = event.type.replace('Event', '');
                }

                return {
                    type: event.type,
                    repo,
                    repoUrl,
                    message,
                    time: formatRelativeTime(event.created_at),
                };
            });
        }
    }

    // Fallback to mock data
    if (!activities) {
        await delay(1400);
        activities = MOCK_DATA.activity.map(item => ({
            ...item,
            repoUrl: `https://github.com/${CONFIG.github.username}/${item.repo}`,
        }));
    }

    container.innerHTML = activities.map(item => `
        <div class="activity-item">
            <div class="activity-icon">${iconMap[item.type] || ICONS.create}</div>
            <div class="activity-content">
                <p class="activity-text">
                    ${item.message} to
                    <a href="${item.repoUrl}"
                       target="_blank" rel="noopener">${item.repo}</a>
                </p>
                <span class="activity-time">${item.time}</span>
            </div>
        </div>
    `).join('');
}

async function renderBooks(tab = 'reading') {
    const container = $('#books-list');
    let books = null;

    // Try Open Library API first
    if (CONFIG.books.useOpenLibrary) {
        const bookList = CONFIG.books[tab] || [];
        if (bookList.length > 0) {
            books = await OpenLibraryAPI.getBooks(bookList);
        }
    }

    // Fallback to mock data
    if (!books || books.length === 0) {
        await delay(1000);
        books = MOCK_DATA.books[tab] || [];
    }

    if (books.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 20px;">No books yet</p>';
        return;
    }

    container.innerHTML = books.map(book => {
        const hasLink = !!book.link;
        return `
        <a href="${book.link || '#'}" target="_blank" rel="noopener" class="book-item ${hasLink ? 'has-link' : ''}">
            <img src="${book.cover}" alt="${book.title}" class="book-cover" loading="lazy"
                 onerror="this.src='https://via.placeholder.com/128x192/1a1a2e/8b5cf6?text=No+Cover'">
            <div class="book-info">
                <h4 class="book-title">${book.title}</h4>
                <p class="book-author">${book.author}</p>
                <div class="book-meta">
                    <span class="book-status ${tab}">${tab === 'reading' ? 'Reading' : 'Finished'}</span>
                    ${tab === 'reading' && book.progress
                        ? `<span class="book-progress">${book.progress}%</span>`
                        : ''}
                    ${tab === 'finished' && book.rating ? renderStars(book.rating) : ''}
                </div>
                ${hasLink ? '<span class="book-link-badge">Open ↗</span>' : ''}
            </div>
        </a>
    `}).join('');
}

function renderStars(rating) {
    if (!rating) return '';
    return `<div class="book-rating">
        ${Array(5).fill(0).map((_, i) =>
            `<svg class="star ${i < rating ? 'filled' : ''}" width="14" height="14" viewBox="0 0 24 24" fill="${i < rating ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>`
        ).join('')}
    </div>`;
}

async function renderMovies(tab = 'watching') {
    const container = $('#movies-list');
    let movies = null;

    // Try TMDB API first
    if (CONFIG.tmdb.useRealAPI) {
        try {
            if (tab === 'watching') {
                movies = await TMDB_API.getWatchingList();
            } else {
                movies = await TMDB_API.getWatchedList();
            }
        } catch (error) {
            console.error('TMDB fetch error:', error);
        }
    }

    // Fallback to mock data
    if (!movies || movies.length === 0) {
        await delay(1100);
        movies = MOCK_DATA.movies[tab] || [];
    }

    if (movies.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 20px;">No movies yet</p>';
        return;
    }

    // Limit to first 12 items for display
    const displayMovies = movies.slice(0, 12);

    container.innerHTML = displayMovies.map(movie => {
        // TMDB link (works for all movies from TMDB)
        const tmdbUrl = movie.id ? `https://www.themoviedb.org/${movie.type === 'series' ? 'tv' : 'movie'}/${movie.id}` : null;
        const imdbUrl = movie.imdb_id ? `https://www.imdb.com/title/${movie.imdb_id}/` : null;
        const linkUrl = imdbUrl || tmdbUrl;

        return `
        <a href="${linkUrl || '#'}" target="_blank" rel="noopener" class="movie-card ${linkUrl ? 'has-link' : ''}">
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" loading="lazy"
                 onerror="this.src='https://via.placeholder.com/500x750/1a1a2e/8b5cf6?text=No+Poster'">
            ${movie.rating ? `
            <span class="movie-rating">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                ${movie.rating}
            </span>
            ` : ''}
            <div class="movie-overlay">
                <h4 class="movie-title">${movie.title}</h4>
                <div class="movie-meta">
                    <span class="movie-type ${movie.type}">${movie.type}</span>
                    ${movie.year ? `<span>${movie.year}</span>` : ''}
                    ${movie.progress ? `<span>${movie.progress}</span>` : ''}
                </div>
                ${linkUrl ? `<span class="imdb-link">${imdbUrl ? 'IMDb' : 'TMDB'} ↗</span>` : ''}
            </div>
        </a>
    `}).join('');
}

async function renderServers() {
    await delay(900);

    const data = MOCK_DATA.servers;

    $('#servers-up').textContent = data.servers_up;
    $('#servers-total').textContent = data.servers_total;
    $('#processes-up').textContent = data.processes_up;
    $('#processes-total').textContent = data.processes_total;

    const container = $('#servers-list');
    container.innerHTML = data.items.map(server => `
        <div class="server-item">
            <div class="server-status ${server.status}"></div>
            <div class="server-info">
                <div class="server-name">${server.name}</div>
                <div class="server-meta">${server.uptime}% uptime</div>
            </div>
            <span class="server-latency">${server.latency}ms</span>
        </div>
    `).join('');
}

async function renderSpotify() {
    const container = $('#spotify-list');
    let tracks = null;

    if (CONFIG.lastfm.useRealAPI) {
        tracks = await LastFmAPI.getRecentTracks(10);
    }

    // Fallback to mock data
    if (!tracks || tracks.length === 0) {
        await delay(1300);
        tracks = MOCK_DATA.spotify.map(t => ({
            name: t.name,
            artist: t.artist,
            album: t.album,
            cover: t.cover,
            url: t.url,
            nowPlaying: false,
            playedAt: t.time,
        }));
    }

    container.innerHTML = tracks.map(track => `
        <div class="spotify-track ${track.nowPlaying ? 'now-playing' : ''}">
            <img src="${track.cover || 'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png'}"
                 alt="${track.album}" class="track-cover" loading="lazy">
            <div class="track-info">
                <div class="track-name">${track.nowPlaying ? '🎵 ' : ''}${track.name}</div>
                <div class="track-artist">${track.artist}</div>
            </div>
            <span class="track-time">${track.nowPlaying ? 'Now' : track.playedAt}</span>
            <a href="${track.url}" class="track-link" target="_blank" rel="noopener" title="Open on Spotify">
                ${ICONS.play}
            </a>
        </div>
    `).join('');
}

// ========================================
// Event Listeners
// ========================================
function setupTabs() {
    // Books tabs
    const booksTabs = $('#books-tabs');
    booksTabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab')) {
            booksTabs.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            renderBooks(e.target.dataset.tab);
        }
    });

    // Movies tabs
    const moviesTabs = $('#movies-tabs');
    moviesTabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab')) {
            moviesTabs.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            renderMovies(e.target.dataset.tab);
        }
    });
}

function setupRefreshButton() {
    const btn = $('#refresh-servers');
    btn.addEventListener('click', async () => {
        btn.classList.add('loading');
        await renderServers();
        btn.classList.remove('loading');
        showToast('Servers refreshed');
    });
}

// ========================================
// Skills
// ========================================
async function renderSkills() {
    await delay(600);

    const container = $('#skills-grid');
    if (!container) return;

    container.innerHTML = MOCK_DATA.skills.map(skill => `
        <div class="skill-item ${skill.icon ? '' : 'no-icon'}" title="${skill.name}">
            ${skill.icon
                ? `<img src="${skill.icon}" alt="${skill.name}" class="skill-icon" loading="lazy">`
                : `<span class="skill-icon-text">${skill.name.substring(0, 2).toUpperCase()}</span>`
            }
            <span class="skill-name">${skill.name}</span>
        </div>
    `).join('');
}

// ========================================
// Initialize
// ========================================
async function init() {
    renderProfile();
    setupTabs();
    setupRefreshButton();

    // Load all data
    await Promise.all([
        renderStats(),
        renderSkills(),
        renderPinnedRepos(),
        renderLanguages(),
        renderActivity(),
        renderBooks('reading'),
        renderMovies('watching'),
        renderServers(),
        renderSpotify(),
    ]);
}

// Start
document.addEventListener('DOMContentLoaded', init);
