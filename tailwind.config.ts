import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  theme: {
    extend: {
      animation: {
        'move-background': 'moveBackground 4s linear infinite',
      },
      keyframes: {
        moveBackground: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100% 100%' },
        },
      },
      width:{
        "input-w":"clamp(200px, 200px + 12vw, 450px)",
      },
      
      fontSize:{
        "fluid-text":"clamp(12px, 2vw + 4px, 14px)",
        "invitation":"clamp(0.85rem, 4vw + 0.85rem, 1.25rem)",
        "head-text":"clamp(1rem, 1rem + 5vw, 2rem)",
        "small":"clamp(0.65rem, 0.65rem + 1vw, 1.5rem)",
        "custom-medium":"clamp(0.5rem, 0.5rem + 1vw, 1rem)",
      },
      padding: {
        "form-padding":"clamp(0.5rem, 0.5rem + 2vw, 2rem)",
        "page-padding":"clamp(0.5rem, 0.5rem + 2vw, 2rem)",
        "btn-padding-x":"clamp(0.75rem, 0.75rem + 1vw, 1rem)",
        "btn-padding-y":"clamp(0.3rem, 0.3rem + 1vw, 0.5rem)",

      },
      lineHeight:{
          "invitation-lh":"clamp(0.75rem, 0.75rem + 4vw, 1.25rem)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "invite-text-dark":" hsla(0, 0%, 88%, 1)",
        "link-color":"hsla(202, 71%, 52%, 1)",
        "border-color":"hsla(0, 0%, 88%, 1)",
        "form-label-col": "hsla(0, 0%, 31%, 1)",
        "form-placeholder":"hsla(0, 0%, 74%, 1)",
        "save-btn":"hsla(214, 84%, 56%, 1)",
        "logout-red":"hsla(0, 79%, 63%, 1)",
        "hover-bg":"hsla(0, 0%, 95%, 1)",
        "invite-text-light": "hsla(0, 0%, 20%, 1)",
        "profile-text-main-light": "hsla(0, 0%, 0%, 1)",
        "profile-text-label-light": "hsla(0, 0%, 74%, 1)",
        "label-copy": "hsla(0, 0%, 51%, 1)",
        "register-btn": "hsla(214, 84%, 56%, 1)",
        "register-btn-txt": "hsla(0, 0%, 100%, 1)",
        "foreground-dark": "hsl(260, 8%, 15%)",
        "foreground-light": "hsl(240, 11%, 98%)",
        "custom-ash":       "hsl(0, 0%, 74%)",  
      },
      screens:{
        "tablet":"400px"
      }
    },
  },
  
}
export default config
