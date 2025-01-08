const repeatString = function(s, num) {
    let text = "";

    if (num == 0)
        return '';

    else if(num > 0)
    {
        for(let i = 0; i < num; ++i)
            {
                text += s;
            }
    }

    else
        return "ERROR";
    return text;
};

// Do not edit below this line
module.exports = repeatString;
