module.exports = {
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
    fontSize: {
      xs: "14px",
      sm: "16px",
      base: "18px",
      lg: "20px",
      xl: "22px",
      xxl: "28px"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
