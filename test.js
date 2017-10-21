


console.log(removeDuplicates('cheese') === 'ches');
console.log(removeDuplicates('waterloo') === 'waterlo');
console.log(removeDuplicates('pizza') === 'piza');
console.log(removeDuplicates('orange juice') === 'orange juic');
console.log(removeDuplicates('elephant') === 'elphant');
console.log(removeDuplicates('mississippi') === 'misp');

function removeDuplicates(str) {
    var letters = {};
    var newWord = '';
    for (var i in str) {
        if (!letters[str.charAt(i)]) {
            letters[str.charAt(i)] = true;
        }
    }
    return Object.keys(letters).join('');
}
