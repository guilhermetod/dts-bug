import dts from 'rollup-plugin-dts'

export default {
  input: 'src/normal.ts',
  output: {
    dir: 'dist',
    format: 'es',
    preserveModules: true,
  },
  plugins: [dts()]
}
