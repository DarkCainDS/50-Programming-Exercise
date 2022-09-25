function searching(text){
    let map = {};
    let max_repeat= 0;
    let max_letter= "";
    for(let word of text){
        if(!map[word]){
            map[word]=1;
        }else{
            map[word]++;
        }
    }
    for(let word in map){
        if(  map[word] > max_repeat){
            max_repeat = map[word];
            max_letter = word;
        }

    }
    console.log(map);
    return max_letter;
}
console.log("La letra mas repetida es:",searching("a place you call home  "));



function mostUsed(text) {
    let result = ''
    let max = 0
    const map = {}
    text.split('').forEach(el => {
        map[el] = map[el] + 1 || 1
        if (max < map[el] && !el.includes(' ')) {
            result = el
            max = map[el]
        }
    })
    return `${result}: ${max}`
}
console.log(mostUsed("a place you call home"))