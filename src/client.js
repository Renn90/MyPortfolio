import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "w2teyw6l",
    dataset: "production",
    useCdn: false
})