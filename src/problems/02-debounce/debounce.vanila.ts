// bun test src/problems/02-debounce/test/debounce.test.ts

// export function debounce<T extends (...args: any[]) => any>(cb: T, delay: number) {
//     let timeoutFn: ReturnType<typeof setTimeout> | undefined;
//     return function (this: unknown, ...args: Parameters<T>) {
//         clearTimeout(timeoutFn);
//         timeoutFn = setTimeout(() => cb.apply(this, args), delay)
//     }
// }

export function debounce<A extends unknown[]>(cb: (...args: A) => void, delay: number) {
    let timeoutFn: ReturnType<typeof setTimeout> | undefined;
    return function (this: unknown, ...args: A) {
        clearTimeout(timeoutFn);
        timeoutFn = setTimeout(() => cb.apply(this, args), delay)
    }
}

// --- Examples ---
// Uncomment to test your implementation:

const log = debounce((msg: string) => console.log(msg), 300)
log('a')  // cancelled by next call
log('b')  // cancelled by next call
log('c')  // only this one fires after 300ms → "c"
