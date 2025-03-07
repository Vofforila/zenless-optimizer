import perfectDisks from "../Database/perfectdisks.json";
import {PerfectCharacter} from "../Classes";
import {dbManager} from "../Classes/DatabaseManager.tsx";
import {archive} from "../Classes/Database.tsx";
import {UploadDatabase} from "../Utilities";

export default function Server()
{
    dbManager.InitLocalDb()
    InitArchive();
}

function InitArchive()
{
    const fileContent = `{
  "characters": [
    {
      "name": "Jane",
      "faction": "Criminal Investigation Special Response Team"
    },
    {
      "name": "Soldier 11",
      "faction": "Obol Squad"
    }
  ],
  "disks": [
    {
      "setKey": "Swing Jazz",
      "slotKey": 4,
      "level": 15,
      "mainStatKey": "atk_",
      "id": 1,
      "substats": [
        {
          "key": "atk_",
          "value": 234.0
        },
        {
          "key": "atk_",
          "value": 23.0
        },
        {
          "key": "anomaly_pro",
          "value": 40.0
        }
      ]
    },
    {
      "setKey": "Astral Voice",
      "slotKey": 4,
      "level": 15,
      "mainStatKey": "hp_",
      "id": 2,
      "substats": [
        {
          "key": "atk_",
          "value": 234.0
        },
        {
          "key": "atk_",
          "value": 23.0
        },
        {
          "key": "anomaly_pro",
          "value": 40.0
        }
      ]
    },
    {
      "setKey": "Freedom Blues",
      "slotKey": 4,
      "level": 15,
      "mainStatKey": "anomaly_pro",
      "id": 2,
      "substats": [
        {
          "key": "anomaly_pro",
          "value": 234.0
        },
        {
          "key": "atk_",
          "value": 23.0
        },
        {
          "key": "atk",
          "value": 40.0
        }
      ]
    }
  ]
}


`
// Parse the JSON and upload the database
    const jsonObject: unknown = JSON.parse(fileContent);
    UploadDatabase(jsonObject);
    while (perfectDisks.length > 0)
    {
        const perfectCharacter: PerfectCharacter = perfectDisks.pop() as PerfectCharacter
        archive.perfectCharacters.push(perfectCharacter)
    }
}

/*

function AddDisk(disk: DiskProps)
{
    db.disks.addDisk(disk);
    db.UpdateLocalDatabase();
}

function RemoveDisk(id: number)
{
    db.disks.remove(id);
}*/
