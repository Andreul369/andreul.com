// While the flattenColorPalette function does indeed exist and can be used,
// you should be aware that relying on internal utilities like this can make
// your code less stable or harder to maintain, especially when upgrading
// TailwindCSS to newer versions. If you're comfortable with that risk, the
// custom .d.ts file will work. Otherwise, you might want to look for or create
//  alternative solutions that don't depend on internal utilities.

declare module 'tailwindcss/lib/util/flattenColorPalette' {
  const flattenColorPalette: (colors: any) => any;
  export default flattenColorPalette;
}
