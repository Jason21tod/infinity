ServerEvents.recipes(event=> {
    event.custom({
        type: 'create:crushing',
        ingredients: [{
            tag: 'infinity:boron_font'
        }],
        processingTime: 800,
        results: [
            {
                chance: 0.3,
                item: "kubejs:borax",
                count: 2
            }
        ]
    })

    event.custom({
        type: 'create:crushing',
        ingredients: [{
            item: 'kubejs:borax'
        }],
        processingTime: 800,
        results: [
            {
                chance: 0.2,
                item: "kubejs:boron_acid",
                count: 1
            },
            {
                chance: 0.5,
                item: "kubejs:boron_salt",
                count: 1
            }
        ]
    })

    event.custom({
        type: 'create:splashing',
        ingredients: [{
            item: 'kubejs:boron_salt'
        }],
        results: [{
            item: "kubejs:boron_acid"
        }]
    })

    event.blasting('kubejs:boron_trioxide', 'kubejs:boron_acid')

    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                item: 'kubejs:boron_trioxide'
            },
            {
                item: 'chemlib:magnesium_dust',
                count: 3
            }
        ],
        results: [{
            item: 'chemlib:boron_dust',
        },
        {
            item: 'chemlib:magnesium_oxide_dust'        
        }
    ]
    })
})