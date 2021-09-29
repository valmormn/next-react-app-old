module.exports = {
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true
      }
    ]
  ],
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    'next/babel',
    '@babel/preset-typescript'
  ]
}
