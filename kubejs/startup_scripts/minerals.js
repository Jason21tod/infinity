StartupEvents.registry('block', event=> {
    event.create('wolframite_ore')
    .soundType('stone')
    .hardness(1.0)
    .resistance(1.0)
    .tagBlock('forge:ores_in_ground/wolframite')
})

StartupEvents.registry('block', event=> {
    event.create('deepslate_wolframite_ore')
    .soundType('stone')
    .hardness(1.0)
    .resistance(1.0)
    .tagBlock('forge:ores_in_ground/wolframite')
})


StartupEvents.registry('item', event=>{
    event.create('raw_wolframite').tag('forge:ores/wolframite')
})