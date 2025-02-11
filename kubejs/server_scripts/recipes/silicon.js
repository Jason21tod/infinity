ServerEvents.recipes(event => {
    event.remove({
        id: 'oc2r:silicon_blend'
    })
    event.remove({
        id: 'enderio:smelting/ae2/smelting/silicon_from_certus_quartz_dust'
    })
    event.remove({
        id: 'oc2r:raw_silicon_wafer'
    })
    event.remove({
        id: 'oc2r:silicon_wafer'
    })
    event.remove({
        id: 'zoe:silicon_mix'
    })
    event.remove({
        id: 'enderio:smelting/oc2r/silicon_wafer'
    })
    event.replaceInput({
        input: 'zoe.silicon_mix'
    }, 'zoe:silicon_mix', 'oc2r:silicon')
    event.replaceOutput({
        output: 'enderio:silicon'
    }, 'enderio:silicon', 'oc2r:silicon_blend')

    siliconCrushingProcessing(event, 300, 1, 'forge:gems/quartz', 2)
    siliconCrushingProcessing(event, 300, 0.6, 'forge:sand', 1)
    siliconCrushingProcessing(event, 400, 0.7, 'infinity:silicon_font', 2)

    event.smelting('enderio:silicon', 'oc2r:silicon_blend')

    event.custom({
        type:"create:sequenced_assembly",
        ingredient: {
            tag: 'forge:silicon'
        },
        loops: 1,
        results:[{
            chance: 62.0,
            count: 6,
            item: 'oc2r:raw_silicon_wafer'
        },{
            chance: 26.0,
            item: 'enderio:silicon'
        },{
            chance: 14.0,
            item: 'mekanism:dust_quartz'
        }],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        'item': 'kubejs:incomplete_raw_silicon_wafer'
                    },
                    {
                        'item': 'scguns:phosphor_dust'
                    }
                ],
                results:[{
                    item: 'kubejs:incomplete_raw_silicon_wafer'
                }]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {
                        item: 'kubejs:incomplete_raw_silicon_wafer'
                    }
                ],
                results: [
                    {
                        item: 'kubejs:incomplete_raw_silicon_wafer'
                    }
                ]
            },
            {
                type: 'create:cutting',
                ingredients: [
                    {
                        item: 'kubejs:incomplete_raw_silicon_wafer'
                    }
                ],
                results: [
                    {
                        item: 'kubejs:incomplete_raw_silicon_wafer'
                    }
                ]
            }
        ],
        transitionalItem: {
            item: 'kubejs:incomplete_raw_silicon_wafer'
        }
    })

    event.custom({
        type: 'ad_astra:alloying',
        cookingtime: 400,
        energy: 250,
        ingredients: [
            {
                item: 'oc2r:raw_silicon_wafer'
            },
            {
                tag: 'forge:dusts/boron'
            }
        ],
        result: {
            count: 1,
            id: 'oc2r:silicon_wafer'
        }
    })
})


function siliconCrushingProcessing(event, time, chance, item, silicon_count) {
    event.custom({
        type: "create:crushing",
        ingredients: [{
            tag: item
        }],
        processingTime: time,
        results: [
            {
                chance: chance,
                item: "oc2r:silicon_blend",
                count: silicon_count
            }
        ]
    })
}