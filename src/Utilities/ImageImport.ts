const images: Record<string, { default: string }> = import.meta.glob(
    '../Database/Img/**/*.{png,jpg,jpeg,svg,webp}',
    {
        eager: true,
        import: '*'
    }
);
export type ImageName = keyof typeof ImageImport;
const ImageImport = Object.entries(images).reduce(
    (
        acc,
        [path, module]
    ) =>
    {
        const filename = path.split('/').pop()?.split('.')[0] || '';
        return {...acc, [filename]: module.default};  // Ensure it's a string
    },
    {} as Record<string, string>  // Ensure TypeScript knows it's a string-only object
);
export default ImageImport;