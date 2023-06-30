// https://stackoverflow.com/questions/58434389/typescript-deep-keyof-of-a-nested-object/58436959#58436959

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
];

/**
 * @example
 * type NestedObjectType = {
 *   a: string;
 *   b: string;
 *   nest: {
 *     c: string;
 *   };
 *   otherNest: {
 *     c: string;
 *   };
 * };
 * type NestedObjectPaths = Paths<NestedObjectType>;
 * // type NestedObjectPaths = "a" | "b" | "nest" | "otherNest" | "nest.c" | "otherNest.c"
 */
type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends Record<string, unknown>
  ? {
      [K in keyof T]-?: K extends string | number
        ? `${K}` | Join<K, Paths<T[K], Prev[D]>>
        : never;
    }[keyof T]
  : '';

/**
 * @example
 * type NestedObjectType = {
 *   a: string;
 *   b: string;
 *   nest: {
 *     c: string;
 *   };
 *   otherNest: {
 *     c: string;
 *   };
 * };
 * type NestedObjectLeaves = Leaves<NestedObjectType>
 * // type NestedObjectLeaves = "a" | "b" | "nest.c" | "otherNest.c"
 */
type Leaves<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends Record<string, unknown>
  ? { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T]
  : '';

export type { Paths, Leaves };
