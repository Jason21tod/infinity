global.createMilling = function createMilling(ingredients, processing_time, results) {
    return {
        type: 'create:milling',
        ingredients: ingredients,
        processingTime: processing_time,
        results: results
    }
}

global.thermalSmelter = function (
    ingredients,
    results,
    exp,
    energy
) {
    return {
        "type": "thermal:smelter",
        "ingredients":
            ingredients,
        "result":
            results
        ,
        "experience": exp,
        "energy": energy
      }
}