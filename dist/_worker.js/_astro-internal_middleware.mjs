globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_C8CVFTMP.mjs';
import './chunks/astro/server_DPm4KS78.mjs';
import { s as sequence } from './chunks/index_CDW4ErBw.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
