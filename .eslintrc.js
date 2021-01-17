/*
 * @Author: 廉恒凯
 * @Date: 2021-01-10 12:14:37
 * @LastEditors: 廉恒凯
 * @LastEditTime: 2021-01-17 16:14:00
 * @Description: file content
 */
module.exports = {
    extends: ["airbnb-typescript-prettier"],
    settings: {
        "import/resolver": {
            "alias": {
                "map": [
                    ["@dataStructure", "./src/dataStructure/"],
                ],
                extensions: ['.ts', '.js', '.tsx', '.json']
            }
        },
        "react": {
            "version": "detect"
        }
    }
};