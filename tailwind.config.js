module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    screens: {
      'tb_big':  {'min': '1024px', 'max': '1439px'},//1,280pxで確認
  
      'tb': {'min': '600px', 'max': '1023px'},//768pxで確認
  
      'sp': {'max': '320px', 'max': '700px'},//375pxで確認
    }
  },
  plugins: [],
}
