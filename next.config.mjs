import nextPwa from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 他の設定をここに追加
};

export default nextPwa({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})(nextConfig);