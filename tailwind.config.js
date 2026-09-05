/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aboreto: ['Aboreto', 'cursive'],
        inika: ['Inika', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/face_react.png')",
        'gt-maisacao': "url('/src/assets/mais_acao.jpeg')",
        'preco-banana': "url('/src/assets/preco_banana.jpeg')",
        'blog-compass': "url('/src/assets/blog_compass.jpeg')",
        'portifolio': "url('/src/assets/portifolio.jpeg')",
        'udemy': "url('/src/assets/udemy.png')",
        'rocketseat': "url('/src/assets/rocketseat.jfif')",
        'ada': "url('/src/assets/ada.png')",
        'avenir': "url('/src/assets/avenir.png')",
        'compass': "url('/src/assets/compass.png')",
      },
    },
     animation: {
        'orbit-mobile': 'orbitMobile 10s linear infinite',
        'orbit-desktop': 'orbitDesktop 10s linear infinite',
        'slideInRight': 'slideInRight 1s ease-out forwards',
        'slideInLeft': 'slideInLeft 1s ease-out forwards',
        'jump-x': 'jumpHorizontal 1s infinite',
        'shake': 'shake 0.2s ease-in-out',
        'dribbleInRight': 'dribbleInRight 1.5s ease-out forwards',
        'dribbleInLeft': 'dribbleInLeft 1.5s ease-out forwards',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' },
        },
       orbitMobile: {
        '0%': { transform: 'rotate(0deg) translateX(130px) rotate(0deg)' },
        '100%': { transform: 'rotate(360deg) translateX(130px) rotate(-360deg)' },
        },
        orbitDesktop: {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
        },
        slideInRight: {
         '0%': { transform: 'translateX(100%)', opacity: '0', visibility: 'hidden' },
         '100%': { transform: 'translateX(0)', opacity: '1', visibility: 'visible' },
        },
        slideInLeft: {
         '0%': { transform: 'translateX(-100%)', opacity: '0', visibility: 'hidden' },
         '100%': { transform: 'translateX(0)', opacity: '1', visibility: 'visible' },
        },
        jumpHorizontal: {
          '0%, 100%': { 
            transform: 'translateX(0%)', 
            animationTimingFunction: 'cubic-bezier(0.5, 0, 1, 1)' 
          },
          '50%': { 
            transform: 'translateX(4%)', 
            animationTimingFunction: 'cubic-bezier(0, 0, 0.1, 1)' 
          },
        },
        dribbleInLeft: {
          '0%': { 
            transform: 'translateX(-100%) translateY(0px)',
            opacity: '0' 
          },
                 
          '100%': { 
            transform: 'translateX(0) translateY(0)',
            opacity: '1' 
          },
        },
        dribbleInRight: {
          '0%': { 
            transform: 'translateX(100%) translateY(0px)',
            opacity: '0' 
          },
                 
          '100%': { 
            transform: 'translateX(0) translateY(0)',
            opacity: '1' 
          },
        },
      },
  },
  plugins: [],
}

