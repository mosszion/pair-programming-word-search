//Pair programming-Wordseach done by Mussie,Patrick and Monica.

const wordSearch = (letters, word) => { 
    //Return false for empty array
    
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    return false;
}

module.exports = wordSearch;