/// <reference types="astro/client" />

export interface Directors {
  directors: Director[]
}

export interface Director {
  id: string
  name: string
  charge: string
  description: string
  avatar: Avatar
  social: Social
}

export interface Avatar {
  id: string
  img: string
}

export interface Social {
  twitter: string
  linkedin: string
}
