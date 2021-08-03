module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
    theme:{
        fontFamily:{
            "roboto": ["Roboto, sans-serif"],
        }
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        // ...
      ],
}