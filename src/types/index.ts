export type Article = {
  number: string
  eyebrow: string
  title: string
  body: string
  image: string
  alt: string
  tags?: string[]
}

export type NavLink = {
  label: string
  href: string
}

export type FooterLink = {
  label: string
  href: string
}

export type Stat = {
  value: string
  label: string
}
