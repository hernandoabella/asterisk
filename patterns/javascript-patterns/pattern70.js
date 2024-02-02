// Pattern 70: ...

// *****
// *   *
// *   *
// *   *
// *****

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if ((j === 1 || j === n) || (i === 1 || i === n)) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
