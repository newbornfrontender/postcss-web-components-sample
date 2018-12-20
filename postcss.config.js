module.exports = ({ isProd }) => ({
  syntax: 'postcss-html',
  plugins: {
    'postcss-preset-env': {
      stage: 0,
      features: {
        'nesting-rules': {},
      },
      autoprefixer: isProd && {},
    },
  },
});
