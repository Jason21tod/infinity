ServerEvents.tags('item', event=> {
    event.add('forge:ingots/plastic', 'pneumaticcraft:plastic')
    event.add('forge:ingots', 'pneumaticcraft:plastic')
    event.add('balm:ingots', 'pneumaticcraft:plastic')
    event.add('forge:coal_coke', 'tfmg:coal_coke')
    event.add('infinity:silicon_font', 'what_is_stone:white_granite')

    event.add('infinity:boron_font', 'minecraft:basalt')
    event.add('infinity:boron_font', 'minecraft:tuff')
    event.add('infinity:boron_font', 'what_is_stone:marble')
    event.add('infinity:boron_font', 'what_is_stone:black_marble')
    
    event.add('infinity:magnesium_font/low', 'what_is_stone:serpentinite')
    event.add('infinity:magnesium_font/high', 'what_is_stone:dolomite')


})


let what_is_stone_rocks = ['what_is_stone:white_granite','what_is_stone:breccia', 'what_is_stone:limestone', 'what_is_stone:gabbro', 'what_is_stone:dacite', 'what_is_stone:conglomerate', 'what_is_stone:marble', 'what_is_stone:gneiss', 'what_is_stone:pumice', 'what_is_stone:black_marble', 'what_is_stone:scoria', 'what_is_stone:schist', 'what_is_stone:white_limestone', 'what_is_stone:slate', 'what_is_stone:pegmatite', 'what_is_stone:shale', 'what_is_stone:rhyolite', 'what_is_stone:dolomite', 'what_is_stone:grey_limestone', 'what_is_stone:peridotite', 'what_is_stone:mudstone', 'what_is_stone:arkosic_sandstone', 'what_is_stone:soapstone', 'what_is_stone:anthracite', 'what_is_stone:serpentinite']
let chemicals = ['chemlib:hydrogen_bucket', 'chemlib:helium_bucket', 'chemlib:nitrogen_bucket', 'chemlib:oxygen_bucket', 'chemlib:fluorine_bucket', 'chemlib:neon_bucket', 'chemlib:chlorine_bucket', 'chemlib:argon_bucket', 'chemlib:krypton_bucket', 'chemlib:xenon_bucket', 'chemlib:radon_bucket', 'chemlib:carbon_dioxide_bucket', 'chemlib:ethylene_bucket', 'chemlib:ammonium_bucket', 'chemlib:methane_bucket', 'chemlib:ethane_bucket', 'chemlib:propane_bucket', 'chemlib:butane_bucket', 'chemlib:sulfur_dioxide_bucket', 'chemlib:nitrogen_dioxide_bucket', 'chemlib:ammonia_bucket', 'chemlib:hydrogen_sulfide_bucket', 'chemlib:acetylene_bucket', 'chemlib:carbon_monoxide_bucket', 'chemlib:nitric_oxide_bucket']

chemicals.map(item=> {
    applyTag(item, 'mekanism:chemical', 'item')
})
// what_is_stone_rocks.map(item=> {
//     applyTag(item, 'minecraft:base_stone_overworld', 'block')
// })
// what_is_stone_rocks.map(item=> {
//     applyTag(item, 'minecraft:stone_ore_replaceables', 'block')
// })

function applyTag(item, tag, type){
        ServerEvents.tags(type, event=> {
        event.add(tag, item)
        }
    )
}