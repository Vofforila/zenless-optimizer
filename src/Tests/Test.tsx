import diskTest from "./mydata.json"
import {dbManager} from "../Classes/DatabaseManager.tsx";

export default function Test()
{
    Archive()
    Disks()
}

function Archive()
{
    dbManager.UploadDatabase(diskTest,1);


}

function Disks()
{
}