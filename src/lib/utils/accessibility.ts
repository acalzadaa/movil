export function triggerOnEnterOrSpace(
    e: KeyboardEvent,
    callback: (() => void) | undefined | null
): void {
    if (!callback) return;

    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        callback();
        e.preventDefault();
        e.stopPropagation(); // Optional: prevent event bubbling
    }
}