// Replaces `{expr}` tokens in a feature description with the value of the
// expression evaluated against the given `level`. Descriptions live in our own
// source, so `new Function` here is a templating tool, not user input.
export function formatDescription(description: string | undefined, level: number): string {
    if (!description) return "";
    return description.replace(/\{([^}]+)\}/g, (_, expr) => {
        try {
            const fn = new Function("level", `return (${expr})`);
            return String(fn(level));
        } catch {
            return `{${expr}}`;
        }
    });
}
