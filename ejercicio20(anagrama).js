function clean_text(text){
    return text
    .replace(/[^\w]/gi,'')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}
function anagram(text,text2){
    return clean_text(text) === clean_text(text2);
}
console.log(anagram("debit card", "bacredit"));