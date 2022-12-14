/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (configuration) => {
    configuration.module.rules.push({
    //   test: /\.md$/,
    //   use: 'frontmatter-markdown-loader'
    // }, {
    //   test: /\.ya?ml$/,
    //   type: 'json',
    //   use: 'yaml-loader'
    // }, {
      test: /\.ya?ml$/,
      use: 'js-yaml-loader'
    })
    // configuration.module.rules.push({
    //   test: /\.ya?ml$/,
    //   type: 'json',
    //   use: 'yaml-loader'
    // })
    return configuration
  }
}

module.exports = nextConfig
