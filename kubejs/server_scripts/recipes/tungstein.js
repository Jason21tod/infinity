ServerEvents.recipes(event => {
    event.custom(global.createMilling(
        [{
            item: 'kubejs:raw_wolframite'
        }],
        300, [{
            item: 'kubejs:tungsten_oxide',
            count: 2
        },
        {
            item: 'minecraft:tuff',
            count: 1
        }
    ]
    ))

    event.custom(global.thermalSmelter(
        [
        {
          "value": [
            {
              "item": "kubejs:tungsten_oxide"
            }
          ],
          "count": 1
        },
        {
          "value": [
            {
              "tag": "forge:dusts/coal"
            }
          ],
          "count": 1
        }
      ],
      [
        {
          "item": "chemlib:tungsten_dust",
          "count": 2
        }
      ],
      0.4,
      4200
    ))

    event.remove({output: 'tconstruct:smeltery/melting/melting/metal/tungsten/dust'})
    event.remove({output: '#forge:ingots/tungsten'})
    event.remove({id: 'enderio:smelting/chemlib/tungsten_ingot_from_smelting_tungsten_dust'})
    event.remove({id: 'enderio:smelting/moremekanismprocessing/processing/tungsten/ingot/from_dust_smelting'})
    event.remove({id: 'jaopca:thermal_expansion.dust_to_material.tungsten'})

})