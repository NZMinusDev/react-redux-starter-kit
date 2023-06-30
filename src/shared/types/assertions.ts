/**
 * Ensure generic component is React.FC
 * @param component - component to be asserted
 * @see https://medium.com/weekly-webtips/typescript-generic-react-components-17c71a64150e
 * @example
 * function Select<T>(props: SelectProps<T>): React.ReactElement | null {
 *   return null;
 * }
 * assertFC(Select);
 */
const assertFC: <P>(
  component: React.FC<P>
) => asserts component is React.FC<P> = <P>(
  component: React.FC<P>
): asserts component is React.FC<P> => {};

export { assertFC };
