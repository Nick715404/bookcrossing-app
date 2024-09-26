const webpack = require('webpack');
const dotenv = require('dotenv');

// Загружаем переменные из .env файла
const env = dotenv.config().parsed;

// Преобразуем переменные в формат, понятный Webpack DefinePlugin
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  // Ваша конфигурация Webpack...
  plugins: [
    new webpack.DefinePlugin(envKeys)
  ]
};
