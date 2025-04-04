// Create and call a function that tests your update route handler [2 pts]
// Make sure that the function takes the name of the potion as a parameter
// There are already potion's with the label polyjuice or amortentia

let base = "https://glorious-guacamole-jjqj9q7xx55q25gxx-3000.app.github.dev"

async function patchColor(name) {
    try {
        // fill in the path
        const response = await fetch( base + "/update/" + name, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                color: color,
            })

        });
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}