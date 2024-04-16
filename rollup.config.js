import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'es',
    },
    external: ['react', 'react-dom'],
    plugins: [typescript({ tsconfig: 'tsconfig.json' }), terser()],
  },
];
