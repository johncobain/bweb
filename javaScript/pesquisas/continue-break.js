let jonas = [
    'jonas',
    'smith',
    45,
    'married',
    true
]

for(let i = 0; i < jonas.length; i++){
    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- ONLY STRINGS ---');
for(let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for(let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}