const images: Record<string, { default: string }> = import.meta.glob(
    '../Database/Img/*.{png,jpg,jpeg,svg}',
    {
        eager: true,
        import: 'default'
    }
);
export type ImageName = keyof typeof ImageImport;

// Then adjust your reduce slightly to handle the new structure
const ImageImport = Object.entries(images).reduce((
    acc,
    [path, module]
) =>
{
    const filename = path.split('/').pop()?.split('.')[0] || '';
    return {...acc, [filename]: module.default};
}, {} as Record<string, string>);

export default ImageImport;