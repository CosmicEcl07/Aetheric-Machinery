ServerEvents.recipes(event => {
    event.remove({
        mod: 'exdeorum',
        not: { output: '#exdeorum:hammers' },
        not: { output: '#exdeorum:crooks' }

    })
})
