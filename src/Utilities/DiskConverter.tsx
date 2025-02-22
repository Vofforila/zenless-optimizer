export default function DiskConverter(diskName: string)
{
    const noApostrophe = diskName.replace(/'/g, '');

    // Replace & with _ and spaces with _
    const formatted = noApostrophe
        .toLowerCase()
        .replace(/&/g, '_')
        .replace(/\s+/g, '_');

    return formatted;
}