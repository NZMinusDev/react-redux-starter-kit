/**
 * @example
 * interface SomeType {
 *   required: string;
 *   optional?: number;
 *   requiredButPossiblyUndefined: boolean | undefined;
 *   [k: string]: unknown; // index signature
 * }
 * type SomeTypeRequiredKeys = RequiredKeys<SomeType>;
 * // type SomeTypeRequiredKeys = "required" | "requiredButPossiblyUndefined" 🙂
 *
 * type SomeTypeOptionalKeys = OptionalKeys<SomeType>;
 * // type SomeTypeOptionalKeys = "optional" 🙂
 *
 * type SomeTypeIndexKeys = IndexKeyType<SomeType>;
 * // type SomeTypeIndexKeys = string 🙂
 */
type RequiredKeys<TObject> = {
  [TKey in keyof TObject]-?: string extends TKey
    ? never
    : number extends TKey
    ? never
    : {} extends Pick<TObject, TKey>
    ? never
    : TKey;
} extends { [_ in keyof TObject]-?: infer TInfer }
  ? TInfer extends keyof TObject
    ? TInfer
    : never
  : never;

type OptionalKeys<TObject> = {
  [TKey in keyof TObject]-?: string extends TKey
    ? never
    : number extends TKey
    ? never
    : {} extends Pick<TObject, TKey>
    ? TKey
    : never;
} extends { [_ in keyof TObject]-?: infer TInfer }
  ? TInfer extends keyof TObject
    ? TInfer
    : never
  : never;
type IndexKeyType<TObject> = string extends keyof TObject
  ? string
  : number extends keyof TObject
  ? number
  : never;

type PickRequired<T> = Pick<T, OptionalKeys<T>>;
type PickOptional<T> = Pick<T, OptionalKeys<T>>;

export type {
  RequiredKeys,
  OptionalKeys,
  IndexKeyType,
  PickRequired,
  PickOptional,
};
