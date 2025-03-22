import testDisks from "./diskTest.json"
import {UploadDatabase} from "../Utilities";

export default function Test()
{
    Archive()
    Disks()
}

function Archive()
{
    UploadDatabase(testDisks,1);


}

function Disks()
{
}