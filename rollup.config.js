import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      exports: 'named'
    },
    {
      file: 'dist/esm/index.js',
      format: 'esm',
      exports: 'named'
    }
  ],
  plugins: [
    peerDepsExternal(),
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true
    })
  ]
};
