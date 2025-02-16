ServerEvents.recipes(event => {
    event.remove({id: 'ad_astra:etrionic_capacitor'})
    event.shaped(Item.of('ad_astra:etrionic_capacitor', 2),
        [
            'SRS',
            'CCC',
            'SRS'
        ],
        {
            S: '#forge:plates/steel',
            R: '#forge:dusts/redstone',
            C: 'powah:crystal_niotic'
        }
    )
    event.shaped(Item.of('kubejs:induction_component', 1),
        [
            'SWS',
            'EBE',
            'SWS'
        ],
        {
            S: '#forge:ingots/steel',
            W: '#forge:wires/copper',
            B: 'minecraft:blast_furnace',
            E: 'ad_astra:etrionic_capacitor'
        }
    )
    event.remove({id: 'ad_astra:etrionic_blast_furnace'})
    event.shaped(Item.of('ad_astra:etrionic_blast_furnace', 1),
    [
        'TIT',
        'III',
        'TRT'
    ],
    {
        I: 'kubejs:induction_component',
        T: '#forge:plates/tungsten',
        R: '#forge:dusts/redstone'
    }
)
})