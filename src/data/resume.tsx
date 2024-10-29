import { Icons } from "@/components/icons";
import { HomeIcon, PencilLineIcon, CodeIcon } from "lucide-react";
export const DATA = {
  name: "Wildan Nursahidan",
  initials: "WNN",
  url: "https://wildan.me",
  location: "West Java, Indonesia",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "a Frontend Developers and Wordpress Enthusiast. I love building things and helping people. Very active on Telegram.",
  summary:
    "From 2019 until now, I have spent a lot of time and money learning web design. I am a creator of WordPress templates [marketpress themes](https://github.com/mywildancloud/marketpress), I also have a plugin library for elementor [mplibrary](https://github.com/mywildancloud/mplibrary), But don't worry if you are one of the users of Gutenberg or FSE based templates such as GeneratePress, I have created a ChildTheme [GP_Personaa](https://github.com/mywildancloud/GP_Personaa) it's free for you to use.",
  avatarUrl: "/me.png",
  skills: [
    "Node.js",
    "React",
    "Next.js",
    "Typescript",
    "TailwindCSS",
    "Git",
    "Figma",
    "PHP",
    "Wordpress",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: CodeIcon, label: "Projects" },
    { href: "/blog", icon: PencilLineIcon, label: "Blog" },
  ],
  contact: {
    email: "edpwildan@gmail.com",
    tel: "+6285186666941",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mywildancloud",
        icon: Icons.github,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: false,
      // },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/wildannrs",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@wildan.nrs_",
        icon: Icons.youtube,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:edpwildan@gmailcom",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Addons Sejoli Pro",
      href: "https://addonsejoli.pro/",
      badges: [],
      location: "Remote",
      title: "Freelance User Guides",
      logoUrl: "/addonspro.png",
      start: "January 2022",
      end: "Until Now",
      description:
        "Addons Pro is an agency that operates in the field of creating WordPress plugins to complete the functions of the Sejoli plugin. My job is to create product usage documentation related to plugins.",
    },
    {
      company: "PT Albany Corona Lestari",
      href: "https://mobile.acl.co.id/",
      badges: [],
      location: "Remote",
      title: "Maintenance",
      logoUrl: "/acl.png",
      start: "March 2018",
      end: "Until Now",
      description:
        "Tasked with building maintenance and repairs for Indomaret stores including CCTV, alarms and building facilities, both electrical and civil.",
    },
    {
      company: "PT Indomarco Prismatama",
      badges: [],
      href: "https://www.indomaret.co.id/",
      location: "Remote",
      title: "Electronic Data Processing",
      logoUrl: "/indomaret.png",
      start: "July 2015",
      end: "March 2018",
      description:
        "Actually, until now I am still working under the Indomaret group company. However, my current job is managing and monitoring the network interface from the Indomaret store to the branch server.",
    },
  ],
  education: [
    {
      school: "SMK MedikaCom",
      href: "#education",
      degree: "Computer and Network Engineering",
      logoUrl: "/dot.svg",
      start: "2009",
      end: "2012",
    },
    {
      school: "SMP Sebelas Maret",
      href: "#education",
      degree: "Junior high school",
      logoUrl: "/dot.svg",
      start: "2006",
      end: "2009",
    },
    {
      school: "SDN 1 Mengger Girang",
      href: "#education",
      degree: "Basic education",
      logoUrl: "/dot.svg",
      start: "2000",
      end: "2006",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  workdesk: [
    {
      tagline: "16GB Ram, 256GB SSD",
      title: "Macbook Pro i7 - 2015",
      description:
        "I'm used to using MacOS to complete every project, because what I need is all here and I feel comfortable.",
      image:
        "/apple.svg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      tagline: "design tools",
      title: "Figma",
      description:
        "I usually use Figma to create wireframes and to build UI-UX designs before applications or websites are created.",
      image:
        "/figma.svg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      tagline: "software development",
      title: "Visual Studio Code",
      description:
        "Until now, I have used the most comfortable text editor to write each code line by line.",
      image:
        "/visual.svg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      tagline: "software development",
      title: "LocalWP",
      description:
        "If I work on a WordPress-based project, of course I will make it in local development with this extraordinary software.",
      image:
        "/localwp.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      tagline: "software development",
      title: "Github",
      description:
        "I will share every open source project through an online repository and among the many gits, github is the one I like the most.",
      image:
        "/github.svg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      tagline: "terminal",
      title: "iTerm",
      description:
        "Even though macOS has a built-in terminal, I prefer iTerm when I write CLI commands.",
      image:
        "/iterm.svg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      tagline: "hosted",
      title: "Vercel",
      description:
        "I will deploy every project created using the Nextjs and tailwindCSS frameworks on vercel.",
      image:
        "/vercel.svg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
