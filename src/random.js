
export const push = "push"
export const pop = "pop"

export function randomreducer(random = [], action = {}) {
    const { type, val = Math.random() } = action;

    switch (type) {
        case push:
            return [...random, val];
        case pop:
            return random.pop();
        default:
            return random
    }
}