// src/Database/imageImports.ts

// This uses Vite's glob import feature
const images = import.meta.glob('./Img/*.{png,jpg,jpeg,svg}', {
    eager: true,
    as: 'url'
});

// Create a type from the image names
type ImageKeys = keyof typeof images;

// Create an object with image names as keys
const imageMap = Object.entries(images).reduce((acc, [path, url]) =>
{
    // Extract filename without extension
    const filename = path.split('/').pop()?.split('.')[0] || '';
    return { ...acc, [filename]: url };
}, {} as Record<string, string>);

export type ImageName = keyof typeof imageMap;
export { imageMap };