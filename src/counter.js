
export const inc = "increment"
export const dec = "decrement"
export const res = "reset"

export function counter(count = 0, action = {}) {
    const { type, val = 1 } = action;

    // if (type === inc) return count + val
    // if (type === dec) return count - val
    // if (type === res) return 0

    //return count

    switch (type) {
        case inc:
            return count + val;
        case dec:
            return count - val;
        case res:
            return 0
        default:
            return count
    }
}
