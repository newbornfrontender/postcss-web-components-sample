import { createFilter } from 'rollup-pluginutils';
import postcssLoadConfig from 'postcss-load-config';
import postcss from 'postcss';

export default ({ ctx = {}, options = {} }) => {
  if (!options.include) options.include = '**/*.html';

  const filter = createFilter(options.include, options.exclude);

  return {
    name: 'postcss',

    async transform(code, id) {
      if (!filter(id)) return;

      return await postcssLoadConfig(ctx).then(({ plugins, options }) => {
        options.from = id;

        return postcss(plugins)
          .process(code, options)
          .then(({ css }) => ({
            code: `export default ${JSON.stringify(css)}`,
          }));
      });
    },
  };
};
