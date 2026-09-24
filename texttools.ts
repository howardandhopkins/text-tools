//% weight=100 color=#7B3FE4 icon="\uf031"
namespace TextTools {
    /**
     * Converts text to uppercase.
     * @param text the text to convert, eg: "hello"
     */
    //% blockId=texttools_uppercase
    //% block="uppercase $text"
    //% text.defl="hello"
    export function uppercase(text: string): string {
        let result = ""
        for (let i = 0; i < text.length; i++) {
            let code = text.charCodeAt(i)
            if (code >= 97 && code <= 122) {
                code -= 32
            }
            result += String.fromCharCode(code)
        }
        return result
    }
    /**
     * Converts text to lowercase.
     * @param text the text to convert, eg: "HELLO"
     */
    //% blockId=texttools_lowercase
    //% block="lowercase $text"
    //% text.defl="HELLO"
    export function lowercase(text: string): string {
        let result = ""
        for (let i = 0; i < text.length; i++) {
            let code = text.charCodeAt(i)
            if (code >= 65 && code <= 90) {
                code += 32
            }
            result += String.fromCharCode(code)
        }
        return result
    }
}