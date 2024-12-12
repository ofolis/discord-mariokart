import * as fs from "fs";
import {
  Constants,
} from "./constants";
import {
  Saveable,
} from "./types";

export class IO {
  public static loadData<DataType extends Saveable>(id: string): DataType | null {
    const jsonFilePath: string = `${Constants.dataPath}/${id}.json`;
    if (!fs.existsSync(jsonFilePath)) {
      return null;
    }
    const jsonString: string = fs.readFileSync(
      jsonFilePath,
      "utf8",
    );
    const data: DataType = JSON.parse(jsonString) as DataType;
    return data;
  }

  public static saveData(id: string, data: Saveable): void {
    if (!fs.existsSync(Constants.dataPath)) {
      fs.mkdirSync(Constants.dataPath);
    }
    const jsonString: string = JSON.stringify(data);
    const jsonFilePath: string = `${Constants.dataPath}/${id}.json`;
    fs.writeFileSync(
      jsonFilePath,
      jsonString,
      {
        "encoding": "utf8",
      },
    );
  }
}
