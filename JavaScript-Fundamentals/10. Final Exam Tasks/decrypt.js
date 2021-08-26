function decrypt(input) {
    const n = Number(input.shift());
    const pattern = /^(\$|%)(?<name>[A-Z][a-z]{2,})\1:\s\[(?<a>\d+)]\|\[(?<b>\d+)]\|\[(?<c>\d+)]\|$/m;
    for (let j = 0; j < n; j++) {
        let current = input.shift();
        if (pattern.test(current)) {
            let match = pattern.exec(current)
            const tag = match.groups.name;
            const a = match.groups.a;
            const b = match.groups.b;
            const c = match.groups.c;
            const n1 = String.fromCharCode(a);
            const n2 = String.fromCharCode(b);
            const n3 = String.fromCharCode(c);
            console.log(`${tag}: ${n1}${n2}${n3}`);
        }
        else console.log(`Valid message not found!`);
    }
}
 
// solve(["4", "$Request$: [73]|[115]|[105]|", "%Taggy$: [73]|[73]|[73]|", "%Taggy%: [118]|[97]|[108]|", "$Request$: [73]|[115]|[105]|[32]|[75]|"]);
solve(["3", "This shouldnt be valid%Taggy%: [118]|[97]|[108]|", "$tAGged$: [97][97][97]|", "$Request$: [73]|[115]|[105]|true"])