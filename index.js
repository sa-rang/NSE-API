
import NSEshareList from "./NSEshareDetailList.json" assert { type: "json" };
//import fs from "fs"

const getAllShareList = async () => {
    console.log("called")
    let res = structuredClone(NSEshareList)
    // let res = fs.readFileSync('./NSEshareDetailList.json', 'utf8')
    // return JSON.parse(res);
    return res
}

const searchShareData = async (iTerm) => {
    console.log("search called")
    let res = NSEshareList.filter((share) => {
        return (
            share.Name?.toLowerCase().includes(iTerm) ||
            share.Symbol?.toLowerCase().includes(iTerm)
        )
    })

    return res
}

const getBySymbol = async (iSymbol) => {
    console.log("getbysymbol called")
    let res = NSEshareList.find((share) => share.Symbol?.toLowerCase() === iSymbol)

    return res
}


export { getAllShareList, searchShareData, getBySymbol }
