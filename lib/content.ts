import type { BadgeTone } from "@/components/ui/Badge";
import type { SelectOption } from "@/components/ui/Select";

export const navLinks = [
  { href: "#program", label: "Program" },
  { href: "#coach", label: "Coach" },
  { href: "#training", label: "Training" },
  { href: "#recovery", label: "Recovery" },
  { href: "#academics", label: "Academics" },
  { href: "#life-skills", label: "Life Skills" },
  { href: "#facilities", label: "Facilities" },
  { href: "#schedule", label: "Day" },
  { href: "#faq", label: "FAQ" },
];

export const programStats: {
  value: string;
  label: string;
  desc: string;
  color: string;
}[] = [
  {
    value: "2 HRS",
    label: "Sports Performance Training & Recovery",
    desc: "Strength, speed & conditioning, agility, and a dedicated recovery block",
    color: "var(--neon-1)",
  },
  {
    value: "2 HRS",
    label: "Academic Support",
    desc: "Dedicated study hall session and educational guidance",
    color: "var(--accent-blue)",
  },
  {
    value: "1 HR",
    label: "Athlete Mentorship",
    desc: "Focused on athlete mindset, discipline, nutrition, NIL, and more",
    color: "var(--accent-orange)",
  },
  {
    value: "PRO",
    label: "Level Coach",
    desc: "Former NFL professional athlete coach and mentor",
    color: "var(--text-primary)",
  },
];

export const coachFacts: { text: string; links?: { label: string; href: string }[] }[] = [
  { text: "Former NFL Athlete, Denver Broncos" },
  { text: "Former UCLA Bruins Student-Athlete" },
  {
    text: "#1 Fitness & Sports Performance Influencer in Sacramento — 1M+ followers @marcusriosofficial (Source: Feedspot)",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/marcusriosofficial/" },
      { label: "TikTok", href: "https://www.tiktok.com/@marcusriosofficial" },
      { label: "YouTube", href: "https://www.youtube.com/@marcusriosofficial" },
    ],
  },
  { text: "Sacramento native — Cosumnes Oaks High School" },
];

export const facilities: { id: string; label: string; placeholder: string; src?: string }[] = [
  { id: "fac-turf", label: "Turf Training Field", placeholder: "Drop a photo: turf field", src: "/facilities-turf.jpg" },
  { id: "fac-weight", label: "Weight Room", placeholder: "Drop a photo: weight room", src: "/facilities-weight.jpg" },
  { id: "fac-strength", label: "Strength & Conditioning Room", placeholder: "Drop a photo: strength room", src: "/facilities-strength-room.jpg" },
  { id: "fac-recovery", label: "Recovery & Mobility", placeholder: "Drop a photo: recovery area", src: "/facilities-recovery.jpg" },
  { id: "fac-recovery-lounge", label: "Recovery Lounge", placeholder: "Drop a photo: recovery lounge", src: "/facilities-recovery-lounge.jpg" },
  { id: "fac-recovery-boots", label: "Compression Recovery Boots", placeholder: "Drop a photo: recovery boots", src: "/facilities-recovery-boots.jpg" },
  { id: "fac-massage", label: "Percussion Massage Tools", placeholder: "Drop a photo: massage tools", src: "/facilities-massage-tools.jpg" },
  { id: "fac-study", label: "Study Hall", placeholder: "Drop a photo: study hall", src: "/classroom.png" },
];

export const scheduleBlocks: { t: string; name: string; dur: string; tone: BadgeTone }[] = [
  { t: "8:00 – 8:15 AM", name: "Morning Kickoff", dur: "15 min", tone: "neutral" },
  { t: "8:15 – 10:15 AM", name: "Academic Support / Study Hall", dur: "2 hrs", tone: "neutral" },
  { t: "10:15 – 11:45 AM", name: "Sports Performance Training", dur: "1 hr 30 min", tone: "neutral" },
  { t: "11:45 – 12:15 PM", name: "Recovery", dur: "30 min", tone: "neutral" },
  { t: "12:15 – 12:45 PM", name: "Lunch", dur: "30 min", tone: "neutral" },
  { t: "1:00 – 2:00 PM", name: "Athlete Mentorship Meeting", dur: "1 hr", tone: "neutral" },
];

export const faqData: { question: string; answer: string | string[] }[] = [
  {
    question: "Where are you located?",
    answer: [
      "Our private training facility is located at:",
      "193 Otto Circle\nSacramento, CA 95822",
      "Our facility is a private, high-performance training environment and is not open to the public. To preserve the experience for our athletes, we do not accommodate walk-ins, unscheduled drop-ins, or facility tours.",
      "If you're interested in training with us, we invite you to submit an application through our website. Applications are reviewed by our team, and qualified athletes will be contacted with next steps.",
      "For athletes outside the Sacramento area, Marcus Rios' online training programs provide access to expert coaching from anywhere: https://my.playbookapp.io/marcus-rios.",
    ],
  },
  { question: "What grades and ages do you serve?", answer: "Student-athletes in grades 6–12." },
  {
    question: "Which sports do you train?",
    answer:
      "All sports. Our training blocks build the strength, speed, and conditioning base every athlete needs — football, soccer, basketball, volleyball, track, and more.",
  },
  {
    question: "Is this a full homeschool curriculum?",
    answer:
      "No. The academic block is a supervised study hall and academic support session that works alongside your existing homeschool curriculum or independent study program — it doesn't replace it.",
  },
  {
    question: "Do you help with NCAA recruiting?",
    answer:
      "Yes. Athlete mentorship covers recruiting fundamentals, highlight reels, NIL basics, and direct guidance from a coach who's been recruited himself.",
  },
  {
    question: "Do I need to already be reclassed to apply?",
    answer:
      "No. We work with both currently homeschooled athletes and families considering reclassification — Coach Rios and staff can walk you through the options.",
  },
  {
    question: "What's the application deadline?",
    answer:
      "Applications for the 2026–27 year close August 17. Submit the form below and we'll follow up by email within 2 business days.",
  },
];

export const sportOptions: SelectOption[] = [
  { value: "", label: "Select a sport" },
  { value: "football", label: "Football" },
  { value: "soccer", label: "Soccer" },
  { value: "volleyball", label: "Volleyball" },
  { value: "basketball", label: "Basketball" },
  { value: "track", label: "Track & Field" },
  { value: "other", label: "Other" },
];

export const gradeOptions: SelectOption[] = [
  { value: "", label: "Select a grade" },
  ...["6", "7", "8", "9", "10", "11", "12"].map((g) => ({ value: g, label: g + "th" })),
];
