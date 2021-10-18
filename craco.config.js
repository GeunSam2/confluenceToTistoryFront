const CracoLessPlugin = require("craco-less");
const CracoAntDesignPlugin = require("craco-antd");

process.env.BROWSER = "none";

module.exports = {
  jest: {
    configure(config) {
      config.transformIgnorePatterns = [
        "/node_modules/(?!antd|rc-pagination|rc-calendar|rc-tooltip)/.+\\.js$"
      ];
      return config;
    }
  },
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")]
    }
  },
  plugins: [
    { plugin: CracoAntDesignPlugin },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
