/**
 * Creates an array of 300 element names: ["Element 1", "Element 2", ...]
 */
export const elements: string[] = Array.from(
  { length: 300 },
  (_, i) => `Element ${i + 1}`
);
