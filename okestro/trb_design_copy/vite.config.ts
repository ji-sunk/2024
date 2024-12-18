import { defineConfig, loadEnv, UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { fileURLToPath } from 'node:url';

type ModeType = 'localhost' | 'development' | 'staging';

// https://vitejs.dev/config/
export default ({ mode }: { mode: ModeType }): UserConfigExport => {
  // 기존 env + mode env + process.cwd() 현재 작업디렉토리
  // 환경변수 모두 가져옴
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const port = parseInt(process.env.VITE_PORT || '3000'); // 기본값 3000

  return defineConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@ui': path.resolve(__dirname, './src/ui'),
        '@apis': path.resolve(__dirname, './src/apis'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@layouts': path.resolve(__dirname, './src/layouts'),
        '@locale': path.resolve(__dirname, './src/locale'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@router': path.resolve(__dirname, './src/router'),
        '@store': path.resolve(__dirname, './src/store'),
        '@stories': path.resolve(__dirname, './src/stories'),
      },
    },
    plugins: [react()],
    build: {
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        external: [
          fileURLToPath(new URL('src/pages/UiMng.tsx', import.meta.url)),
        ],
        output: {
          entryFileNames: 'assets/[name].js',
          chunkFileNames: 'assets/[name].js',
          assetFileNames: 'assets/[name].[ext]',
          manualChunks: (id) => {
            if (id.includes('/.yarn/cache')) {
              return id
                .toString()
                .split('/.yarn/cache/')[1]
                .split('/')[0]
                .toString();
            }
          },
        },
      },
    },
    server: {
      port: port,
      watch: {
        usePolling: true,
      },
    },
  });
};
