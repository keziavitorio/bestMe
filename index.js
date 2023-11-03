const questions = [
    "o que aprendi hoje?",
    "o que me deixou frustrado? E o que eu poderia fazer para melhorar?",
    "o que me deixou feliz hoje?"
]


const ask = (index = 0) => {
    process.stdout.write( "\n\n" + questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    Bacana Kez!

    O que voce aprendeu hoje foi:
    ${answers[0]}

    o que te deixou frustrado e o que voce poderia melhorar foi:
    ${answers[1]}

    o que te deixou feliz hoje:
    ${answers[2]}

    Até amanha para mais reflexões!
    `)
})