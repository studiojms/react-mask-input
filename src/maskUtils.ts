import { toPattern } from 'vanilla-masker';

export const unMask = (value: string): string => value.replace(/\W/g, '');

const masker = (value: string | number, pattern: string, options: Record<string, string>): string =>
  toPattern(value, { pattern, ...options });

const multimasker = (value: string, patterns: [string], options: Record<string, string>): string =>
  masker(
    value,
    patterns?.reduce((memo, pattern) => (value.length <= unMask(memo).length ? memo : pattern), patterns[0]),
    options,
  );

export const mask = (value: string, pattern: string, options: Record<string, string>): string =>
  typeof pattern === 'string' ? masker(value, pattern || '', options) : multimasker(value, pattern, options);
