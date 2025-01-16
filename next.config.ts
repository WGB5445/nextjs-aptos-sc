import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: '/nextjs-aptos-sc',  // 设置你的 GitHub 仓库名称
  assetPrefix: '/nextjs-aptos-sc',  // 同上
  trailingSlash: true,
};

export default nextConfig;
