const englishJson = {
    "A": "10", "B": "11", "C": "12", "D": "13", "E": "14", "F": "15", "G": "16", "H": "17",
    "I": "34", "J": "18", "K": "19", "L": "20", "M": "21", "N": "22", "O": "35", "P": "23",
    "Q": "24", "R": "25", "S": "26", "T": "27", "U": "28", "V": "29", "W": "30", "X": "31",
    "Y": "32", "Z": "33"
};

function checkPeopleId(peopleId) {
    //基本檢誤
    if(peopleId == null || typeof peopleId === "undefined" || typeof peopleId !== "string" || peopleId.length != 10) {
        return false;
    }

    peopleId = peopleId.toLocaleUpperCase();
    let sum = 0;
    for(let i = 0; i < peopleId.length; i++) {
        let value = peopleId.charAt(i);
        //英文字母
        if(i == 0) {
            //必須在englishJson中
            if(!englishJson.hasOwnProperty(value)) {
                return false;
            }
            let englishCode = englishJson[value];
            sum += parseInt(englishCode.charAt(0))+parseInt(englishCode.charAt(1)*9);
        //第一~九碼數字
        }else {
            //第一碼數字只能是1 or 2
            if(i == 1 && value !== "1" && value !== "2") {
                return false;
            }
            if(i == 9) {
                sum += parseInt(value);
            }else {
                sum += parseInt(value)*(9-i);
            }
        }
    }

    if(sum % 10 != 0) {
        return false;
    }
    return true;
}