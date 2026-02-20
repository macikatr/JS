
let languages = ['JavaScript', 'HTML', 'CSS'];
console.log(languages);
//(3) ['JavaScript', 'HTML', 'CSS']

let indexofJS = languages.indexOf('JavaScript');
console.log(indexofJS);
// 0
let allLanguages = languages.join('- ');
console.log(allLanguages);
// JavaScript- HTML- CSS

allLanguages = languages.concat('TypeScript', 'Python');
console.log(allLanguages);
// ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'Python']

allLanguages = languages.push('TypeScript','Python');
console.log(allLanguages);
// 5 return the new length and alters the original array (languages)
console.log(languages);
// ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'Python']

allLanguages = languages.pop();
console.log(allLanguages);
// Python
console.log(languages, languages.length);
// ['JavaScript', 'HTML', 'CSS', 'TypeScript']


//overwriting
languages[1] = 'Java';
console.log(languages);
// ['JavaScript', 'Java', 'CSS', 'TypeScript']

//undefined and null
let languageCount;
console.log(languageCount, languageCount +1, `I know ${languageCount} languages`);
// undefined NaN 'I know undefined languages'
languageCount = null;
console.log(languageCount, languageCount +1, `I know ${languageCount} languages`);
// null 1 'I know null languages'