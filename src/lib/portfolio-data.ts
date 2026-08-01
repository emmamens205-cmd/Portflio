/**
 * All content on this site comes from Emmanuel Nana Akyerefi Mensah's
 * portfolio document. Nothing here is invented.
 */

import portraitAsset from "@/assets/pdf/portrait.png.asset.json";
import aboutAsset from "@/assets/pdf/about.png.asset.json";
import canvaBefore from "@/assets/pdf/canva_before.jpg.asset.json";
import canvaAfter from "@/assets/pdf/canva_after.jpg.asset.json";
import seoShot from "@/assets/pdf/seo.jpg.asset.json";
import emailCampaign from "@/assets/pdf/email_campaign.jpg.asset.json";
import emailAnalytics from "@/assets/pdf/email_analytics.jpg.asset.json";
import storyboard from "@/assets/pdf/storyboard.jpg.asset.json";
import toolCanva from "@/assets/pdf/tool_canva.png.asset.json";
import toolWordpress from "@/assets/pdf/tool_wordpress.png.asset.json";
import toolFacebook from "@/assets/pdf/tool_facebook.png.asset.json";
import toolInstagram from "@/assets/pdf/tool_instagram.png.asset.json";
import toolMailchimp from "@/assets/pdf/tool_mailchimp.png.asset.json";

export const profile = {
  name: "Emmanuel Nana Akyerefi Mensah",
  role: "Digital Marketing & Data Analytics Specialist",
  email: "emmamens205@gmail.com",
  phone: "+233 559-078-515",
  whatsapp: "233559078515",
  linkedin: "https://www.linkedin.com/in/emmanuel-nana-akyerefi-mensah",
  portrait: portraitAsset.url,
  aboutPhoto: aboutAsset.url,
};

export const about = {
  opening: "Emmanuel Nana Akyerefi Mensah is my name.",
  paragraphs: [
    "I help brands grow smarter by combining data-driven digital marketing and creative storytelling.",
    "With a background in Environmental studies and expertise in data analysis, content strategy and social media management. I transform insights into marketing strategies that drive engagement, improve campaign performance, and support business growth.",
    "I am passionate about creating impactful digital experiences and continuously learning to stay ahead in the ever-evolving marketing landscape.",
  ],
};

export const skills = [
  "Graphic Designs(canva flyers and posters)",
  "Website auditing and seo optimisation(Blog post)",
  "Email Marketing",
  "Social Media Marketing(Facebook, Instagram)",
];

export const tools = [
  { name: "Canva", src: toolCanva.url },
  { name: "WordPress", src: toolWordpress.url },
  { name: "Facebook", src: toolFacebook.url },
  { name: "Instagram", src: toolInstagram.url },
  { name: "Mailchimp", src: toolMailchimp.url },
];

export type Project = {
  title: string;
  images: { src: string; alt: string; tall?: boolean }[];
};

export const projects: Project[] = [
  {
    title: "CANVAS AI FEATURES(MAGIC ERASER)",
    images: [
      { src: canvaBefore.url, alt: "Original photograph before Canva Magic Eraser editing", tall: true },
      { src: canvaAfter.url, alt: "Same photograph after Canva Magic Eraser editing", tall: true },
    ],
  },
  {
    title: "Website auditing and seo optimisation(Blog post)",
    images: [
      {
        src: seoShot.url,
        alt: "WordPress editor showing a blog post about buying quality handmade leather shoes in Ghana with the Yoast SEO panel open",
      },
    ],
  },
  {
    title: "Mailchimp email marketing campaign",
    images: [
      {
        src: emailCampaign.url,
        alt: "Mailchimp email campaign titled The TikTok King of Remixing",
        tall: true,
      },
    ],
  },
  {
    title: "Email campaign analytics(Mailchimp)",
    images: [
      {
        src: emailAnalytics.url,
        alt: "Mailchimp campaign report showing 2 unique opens at 66.7 percent and first 24 hour performance",
        tall: true,
      },
    ],
  },
  {
    title: "Storyboard",
    images: [
      {
        src: storyboard.url,
        alt: "Sustainability campaign storyboard by Cadbury Oreo with six scenes",
      },
    ],
  },
];

export const contact = {
  heading: "Contact me",
  lead: "Let’s talk about how I can help grow your brands",
};

export const navLinks = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "tools", label: "Tools" },
  { id: "projects", label: "Recent Projects" },
  { id: "contact", label: "Contact" },
];
