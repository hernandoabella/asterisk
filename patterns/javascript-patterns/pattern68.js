// Pattern 68: ...

// *   *
//  * *
//   *
//  * *
// *   *

const n = 5;

for (let i = 1; i <= n; i++) {
    let row = '';

    for (let j = 1; j <= n; j++) {
        if (i === j || i + j === n + 1) {
            row += '*';
        } else {
            row += ' ';
        }
    }

    console.log(row);
}
