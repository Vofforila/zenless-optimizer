import { UISubstatMap} from "../Classes/Disk.tsx";

export default function PerfectSubstatUIConverter(substat: string) {
    let result = substat.toLowerCase().replace("/", " / ");

    for (const [key, value] of Object.entries(UISubstatMap)) {
        result = result.replace(key, value);
    }

    return result;
}