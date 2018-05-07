const tests = new Map();

tests.set(()=>2*2,4);
tests.set(()=>2*2,1);
tests.set(()=>2+2,4);
tests.set(()=>2+2,5);
tests.set(()=>2/2,1);
tests.set(()=>2/2,5);

for(const test of tests){
    console.log((test[0]()===test[1])? 'TRUE' : 'FALSE');
}

const s = new Set([0, 1, 2, 3]);
s.add(3); // не будет добавлено
console.log(s.size); // 4
s.delete(0);
console.log(s.has(0)); // false
for (const entry of s) {
    console.log(entry);
}