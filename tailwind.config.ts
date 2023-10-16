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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "invite-text-dark":" hsla(0, 0%, 88%, 1)",
        "invite-text-light": "hsla(0, 0%, 20%, 1)",
        "profile-text-main-light": "hsla(0, 0%, 0%, 1)",
        "profile-text-label-light": "hsla(0, 0%, 74%, 1)",
        "label-copy": "hsla(0, 0%, 51%, 1)",
        "register-btn": "hsla(214, 84%, 56%, 1)",
        "register-btn-txt": "hsla(0, 0%, 100%, 1)",
        "foreground-dark": "hsl(260, 8%, 15%)",
        "foreground-light": "hsla(0, 0%, 100%, 1)",
          "custom-ash":       "hsl(0, 0%, 74%)",
      }
    },
  },
  
}
export default config
