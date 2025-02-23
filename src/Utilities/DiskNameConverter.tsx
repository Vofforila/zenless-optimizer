export default function DiskNameConverter(diskName: string)
{
    const noApostrophe:string = diskName.replace(/'/g, '');
    return noApostrophe.toLowerCase().replace(/&/g, '').replace(/\s+/g, '_');
}