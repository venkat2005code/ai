export type NavigationLink = {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
};

export const navigationLinks: NavigationLink[] = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Home 1", href: "/" },
      { label: "Home 2", href: "/home2" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const navCta = {
  label: "Get Started",
  href: "/contact",
};
