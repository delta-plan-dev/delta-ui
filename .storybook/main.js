module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-typescript',
    '@storybook/preset-create-react-app',
  ],
  module: {
    rules: [
      {
        test: /\.(woff2|woff|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
};
