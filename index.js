// Code your solution here

const heyJude = function() {
    let verse = "Na na na na na na na, na na na na, hey Jude."
    return verse.repeat(16)
}

const prohibitedLanguage = function(string) {
    let bannedWords = /candycorn|brusselssprouts/;
    return string.search(bannedWords)
}
