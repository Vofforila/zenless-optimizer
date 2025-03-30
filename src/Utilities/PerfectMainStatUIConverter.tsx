import { UIMainStatMap} from "../Classes/Disk.tsx";

export default function PerfectMainStatUIConverter(mainStat: string) {
    let result = mainStat.toLowerCase().replace("/", " / ");

    for (const [key, value] of Object.entries(UIMainStatMap)) {
        result = result.replace(key, value);
    }

    return result;
}