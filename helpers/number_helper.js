const numberFormatter = function(number){
    // delete char except number
    let formatted = number.replace(/\D/g,'');

    // delete zero on front, replaced with 62
    if(formatted.startsWith('0')){
        formatted = '62' + formatted.substr(1);
    }

    if (!formatted.endsWith('@c.us')){
        formatted += '@c.us';
    }
    return formatted;
};

module.exports = {
    numberFormatter
}