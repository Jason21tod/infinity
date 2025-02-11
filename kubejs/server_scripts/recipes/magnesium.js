ServerEvents.recipes(event => {
    event.custom(createMilling(
        [{
            tag: 'infinity:magnesium_font/high'
        }],
        180, [{
            item: 'chemlib:magnesium_oxide_dust',
            count: 8
        }]
    ))
    event.custom(createMilling(
        [{
            tag: 'infinity:magnesium_font/low'
        }],
        180, [{
            item: 'chemlib:magnesium_oxide_dust',
            count: 3
        }]
    ))

    event.custom({
        type: 'create_new_age:energising',
        energy_needed: 800,
        ingredients: [{
            item: 'chemlib:magnesium_oxide_dust'
        }],
        results: [
            {
                item: 'chemlib:magnesium_dust'
            }
        ]
    })
})

function createMilling(ingredients, processing_time, results) {
    return {
        type: 'create:milling',
        ingredients: ingredients,
        processingTime: processing_time,
        results: results
    }
}

