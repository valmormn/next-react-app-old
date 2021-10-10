module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    'next/babel',
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: true
      }
    ]
  ],
  env: {
    test: {
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            ssr: true,
            displayName: true
          }
        ]
      ]
    }
  }
}
