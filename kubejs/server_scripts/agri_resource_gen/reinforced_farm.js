ServerEvents.recipes(event => {
    [
        // Seeds for Plants
        {seed:'minecraft:wheat_seeds', output: 'minecraft:wheat', secoutput: 'minecraft:wheat_seeds', quant: 16},
        {seed:'minecraft:bamboo', output: 'minecraft:bamboo', secoutput: 'minecraft:bamboo', quant: 16},
        {seed:'minecraft:potato', output: 'minecraft:potato', secoutput: 'minecraft:potato', quant: 16},
        {seed:'minecraft:sugar_cane', output: 'minecraft:sugar_cane', secoutput: 'minecraft:sugar_cane', quant: 16},

    ].forEach(plant => {
    
    event.recipes.gtceu.reinforced_farm('basic_' + plant.output + '_farm')
        .notConsumable(plant.seed)
        .itemOutputs(Item.of(plant.output, plant.quant))
        .chancedOutput(plant.secoutput, 5000, 0)
        .duration(20*20)

    }); 

    [
        // Tree Seeds
        {seed:'minecraft:oak_sapling', output: 'minecraft:oak_log', secoutput: 'minecraft:stick', quant: 8},
        {seed:'minecraft:spruce_sapling', output: 'minecraft:spruce_log', secoutput: 'minecraft:stick', quant: 8},
        {seed:'minecraft:dark_oak_sapling', output: 'minecraft:dark_oak_log', secoutput: 'minecraft:stick', quant: 8},
        {seed:'minecraft:acacia_sapling', output: 'minecraft:acacia_log', secoutput: 'minecraft:stick', quant: 8},
        {seed:'minecraft:cherry_sapling', output: 'minecraft:cherry_log', secoutput: 'minecraft:stick', quant: 8},
        {seed:'minecraft:jungle_sapling', output: 'minecraft:jungle_log', secoutput: 'minecraft:stick', quant: 8},
        {seed:'gtceu:rubber_sapling', output: 'gtceu:rubber_log', secoutput: 'gtceu:sticky_resin', quant: 8}

    ].forEach(tree => {
        event.recipes.gtceu.reinforced_farm('basic_' + tree.output + '_farm')
        .notConsumable(tree.seed)
        .itemOutputs(Item.of(tree.output, tree.quant))
        .itemOutputsRanged(tree.secoutput, 1,4)
        .duration(20*20)

    });
});
    

