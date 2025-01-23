/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'android-blue': '#4285f4',
        'android-teal': '#3ddc84',
        'angular-red-light': '#dd0031',
        'angular-red-dark': '#c3002f',
        'aws-orange': '#ff9900',
        'bootstrap-purple-light': '#8b13fc',
        'bootstrap-purple-dark': '#6b10f4',
        'css-cyan-light': '#039be5',
        'css-cyan-dark': '#0277bd',
        'docker-blue': '#1d63ed',
        'gimp-brown-light': '#866c55',
        'gimp-brown-dark': '#77604c',
        'html-orange-light': '#f16529',
        'html-orange-dark': '#e44d26',
        'intellij-pink': '#fe315d',
        'intellij-orange': '#f97a12',
        'intellij-purple': '#98509e',
        'intellij-blue': '#0c7cf6',
        'invision-pink': '#dc395f',
        'java-orange': '#f5831f',
        'java-blue': '#507a98',
        'js-yellow-light': '#ffda3e',
        'js-yellow-dark': '#d6ba32',
        'mysql-blue': '#00618a',
        'mysql-orange': '#e48e00',
        'react-blue' : '#00d8ff',
        'spring-green': '#6db33f',
        'tailwind-blue': '#44a8b3',
        'vscode-blue-light': '#39a7f1',
        'vscode-blue-med': '#1886d0',
        'vscode-blue-dark': '#1772b0',
      }
    },
    fontFamily: {
      signature: ["Whisper"],
    }
  },
  plugins: [],
}

