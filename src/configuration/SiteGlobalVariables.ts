import { SiteGlobalVariableInterface } from "../interfaces/GlobalVariables";

const SiteGlobalVariables:SiteGlobalVariableInterface = {
    pageHeaders: {
        CHARACTERS: "CHARACTERS",
        NEWS: "NEWS",
        GAME: "GAME",
    },
    categories: [
        {
            tag: "All",
            color: "rgb(50, 50, 50)"
        },
        {
            tag: "Info",
            color: "rgb(255, 88, 92)"
        },
        {
            tag: "Live/Event",
            color: "rgb(158, 126, 184)"
        },
        {
            tag: "Campaign",
            color: "rgb(104, 194, 157)"
        },
        {
            tag: "Media",
            color: "rgb(255, 154, 75)"
        }
    ],
    gameButton: [
        "Story",
        "Revues",
        "Growth",
        "Vs.Revue",
        "My Theater",
        "Tips"
    ]
}

export default SiteGlobalVariables;
