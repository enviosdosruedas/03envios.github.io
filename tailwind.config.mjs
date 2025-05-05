/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import lineClamp from '@tailwindcss/line-clamp';
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],

  theme: {
    extend: {
      colors: {
        'royal-blue': '#00296b',
        'marian-blue': '#003f88',
        'polynesian-blue': '#00509d',
        'mikado-yellow': '#fdc500',
        'gold': '#ffd500',
      },
      fontFamily: {
        sans: [
          'Inter',
          'Roboto',
          'Helvetica Neue',
          'Arial Nova',
          'Nimbus Sans',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        hover: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        shine: 'shine 1.5s infinite linear',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },

  plugins: [
    forms,
    typography,
    lineClamp,
    aspectRatio,
  ],
};
