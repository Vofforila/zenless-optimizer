import mydata from "./mydata.json"
import testDisks from "./diskTest.json"
import {UploadDatabase} from "../Utilities";

export default function Test()
{
    Archive()
    Disks()
}

function Archive()
{
    UploadDatabase(mydata,1);


}

function Disks()
{
}