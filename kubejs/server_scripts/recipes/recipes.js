ServerEvents.recipes(event=>{
        event.replaceInput({
                input: 'industrialforegoing:plastic',
            },
            'industrialforegoing:plastic',
            '#forge:ingots/plastic'
        )
        
            event.replaceInput({
                input: 'tfmg:coal_coke'
        },
                'tfmg:coal_coke',
                '#forge:coal_coke',
        )
        event.replaceInput({
                input: 'zoe:silicon'
        },
        'zoe:silicon',
        '#forge:dusts/silicon'
        )
    }
)

ServerEvents.recipes(event=>{
                event.remove(
                        [{type:'ad_astra:alloying'}, {output:'#forge:dusts/steel'}]
                )
                event.remove({
                        id: 'thermal_extra:machine/crucible/raw_gold_from_chunk'
                })
                event.remove({
                        id: 'thermal_extra:machine/crucible/raw_gold'
                })
                event.remove({
                        id: 'createdieselgenerators:distilation/crude_oil'
                })
                event.remove([{output:'#forge:ingots/lithium'}]
                )
                event.remove([{
                        output:'#forge:silicon'
                }])
                event.remove({
                        id: 'enderio:smelting/oc2r/silicon'
                })

        }
)
