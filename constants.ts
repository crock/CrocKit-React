
export const isBrowser = typeof window !== "undefined"
export const isLocal = isBrowser && window.location.host.split(":").shift() === "localhost"