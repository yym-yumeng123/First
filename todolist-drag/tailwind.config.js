/** @type {import('tailwindcss').Config} */
export default {
  // 从哪里提取 className
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 内置的 className 没有, 需要加到这里面
      width: {
        1000: "1000px",
      },
      height: {
        600: "600px",
      },
      margin: {
        100: "100px",
        10: "10px",
      },
      padding: {
        10: "10px",
      },
      flex: {
        2: 2
      }
    },
  },
  plugins: [],
}
