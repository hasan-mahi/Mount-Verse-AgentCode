import type { Article, NavLink, FooterLink, Stat } from "../types"

export const navLinks: NavLink[] = [
  { label: "Journal", href: "#journal" },
  { label: "Gear", href: "#gear" },
  { label: "Community", href: "#community" },
]

export const articles: Article[] = [
  {
    number: "01",
    eyebrow: "Get Started",
    title: "What level of hiker are you?",
    body: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
    image: "/images/article-1-trail.jpg",
    alt: "Hiker walking on a narrow grassy ridge trail above an alpine lake",
    tags: ["Beginner", "Trail Tips"],
  },
  {
    number: "02",
    eyebrow: "Hiking Essentials",
    title: "Picking the right Hiking Gear!",
    body: "The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have. Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe when they get sweaty or wet.",
    image: "/images/article-2-peak.jpg",
    alt: "Aerial view of jagged mountain ridges with dramatic clouds",
    tags: ["Gear", "Essentials"],
  },
  {
    number: "03",
    eyebrow: "Where you go is the key",
    title: "Understand Your Map & Timing",
    body: "To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the junction…",
    image: "/images/article-3-compass.jpg",
    alt: "A hand holding a vintage compass with mountains in the background",
    tags: ["Navigation", "Planning"],
  },
]

export const footerLinks: FooterLink[] = [
  { label: "About Mount Verse", href: "#" },
  { label: "Contributors & Writers", href: "#" },
  { label: "Write For Us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
]

export const stats: Stat[] = [
  { value: "2,400+", label: "Trails Explored" },
  { value: "180+", label: "Mountains Covered" },
  { value: "52K+", label: "Community Members" },
  { value: "98%", label: "Trail Accuracy" },
]
