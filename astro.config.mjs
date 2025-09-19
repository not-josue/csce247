// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      customCss: ["./src/styles/global.css"],
      title: "CSCE 247",
      favicon: "/favicon.ico",
      logo: {
        light: "./src/assets/logos/logo-light.svg",
        dark: "./src/assets/logos/logo-dark.svg",
        alt: "CSCE 247 Logo",
      },
      head: [
        // Favicons
        {
          tag: "meta",
          attrs: {
            rel: "apple-touch-icon",
            href: "/favicons/apple-touch-icon.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            rel: "icon",
            sizes: "32x32",
            href: "/favicons/favicon-32x32.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            rel: "icon",
            sizes: "16x16",
            href: "/favicons/favicon-16x16.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            rel: "manifest",
            href: "/favicons/site.webmanifest",
          },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/not-josue/csce247",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting Started", slug: "getting-started/intro" },
          ],
        },
        {
          label: "Strategy Design",
          items: [{ label: "Strategy Intro", slug: "strategy/intro" }],
        },
        {
          label: "Observer Design",
          items: [
            { label: "Observer Intro", slug: "observer/intro" },
            { label: "Timer Example", slug: "observer/timer" },
          ],
        },
        {
          label: "Decorator Design",
          items: [{ label: "Decorator Intro", slug: "decorator/intro" }],
        },
        {
          label: "State Design",
          items: [
            { label: "State Intro", slug: "state/intro" },
            { label: "Puzzle Example", slug: "state/puzzle" },
            { label: "Game Example", slug: "state/game" },
          ],
        },
        {
          label: "Factory Design",
          items: [
            { label: "Factory Intro", slug: "factory/intro" },
            { label: "Item Example", slug: "factory/items" },
          ],
        },
        {
          label: "Singleton Design",
          items: [{ label: "Singleton Intro", slug: "singleton/intro" }],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});
