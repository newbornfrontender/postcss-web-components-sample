import nodeResolve from 'rollup-plugin-node-resolve';

import del from './plugins/del';
import postcss from './plugins/postcss';

const isProd = !process.env.ROLLUP_WATCH;

export default () => {
  const file = 'index';

  return {
    input: `input/${file}.js`,
    output: {
      format: 'esm',
      file: `output/${file}.js`,
    },
    plugins: [
      del(['output/*.js']),
      nodeResolve({
        jsnext: true,
        browser: true,
        modulesOnly: true,
      }),
      postcss({
        ctx: {
          isProd,
        },
      }),
    ],
  };
};
