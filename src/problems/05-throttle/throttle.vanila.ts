// bun test src/problems/05-throttle/test/throttle.test.ts

export function throttle<T extends (...args: any[]) => void>(cb: T, delay: number) {
    let timeStamp: ReturnType<typeof Date.now> | undefined;

    return function (this: unknown, ...args: any[]) {
        const canFire = timeStamp === undefined || (Date.now() - timeStamp >= delay)

        if (canFire) {
            cb.apply(this, [...args])
            timeStamp = Date.now();
        }
    }
}
// --- Examples ---
// Uncomment to test your implementation:

const log = throttle((msg: string) => console.log(msg), 300)
log('a')  // fires immediately → "a"
log('b')  // ignored (within 300ms)
log('c')  // ignored (within 300ms)
setTimeout(() => log('d'), 400)  // fires → "d" (300ms passed)
