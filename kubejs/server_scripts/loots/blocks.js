LootJS.modifiers(event => {
    event.addBlockLootModifier('kubejs:wolframite_ore').removeLoot('kubejs:wolframite_ore')
    event.addBlockLootModifier('kubejs:wolframite_ore').addLoot('kubejs:raw_wolframite')

    event.addBlockLootModifier('kubejs:deepslate_wolframite_ore').removeLoot('kubejs:deepslate_wolframite_ore')
    event.addBlockLootModifier('kubejs:deepslate_wolframite_ore').addLoot('kubejs:raw_wolframite')
})