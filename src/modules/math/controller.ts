import Command from "../../command/command";
import { TextResponse } from "../../response";

export default function randomNumber(command: Command) {
    let regex = new RegExp("([0-9]+)-([0-9]+)")
    if (command.getTokenAt(1).content.match(regex)) {
        let match = regex.exec(command.getTokenAt(1).content)
        let min = parseInt(match[1])
        let max = parseInt(match[2])
        if (!min || !max) return new TextResponse(command.channel).send("Parsing went wrong.")
        return new TextResponse(command.channel).send("" + Math.floor(Math.random() * (max - min + 1) + min))
    }
    else {
        return new TextResponse(command.channel).send("Range not valid, example usage: 1-100.")
    }
}