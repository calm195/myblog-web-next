/*
 * @Author: chrissy wx2048@protonmail.com
 * @Date: 2025-07-24 14:08:37
 * @LastEditors: chrissy wx2048@protonmail.com
 * @LastEditTime: 2025-08-13 17:48:20
 * @Description: to be added
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    webpack(config) {
    // 添加 SVG 处理规则
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
