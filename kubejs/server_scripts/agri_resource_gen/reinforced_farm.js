ServerEvents.recipes(event => {
    [
        // Seeds for Plants
        {seed:'minecraft:wheat_seeds', output: 'minecraft:wheat', secoutput: 'minecraft:wheat_seeds', quant: 16},
        {seed:'minecraft:bamboo', output: 'minecraft:bamboo', secoutput: 'minecraft:bamboo', quant: 16},
        {seed:'minecraft:potato', output: 'minecraft:potato', secoutput: 'minecraft:potato', quant: 16},
        {seed:'minecraft:sugar_cane', output: 'minecraft:sugar_cane', secoutput: 'minecraft:sugar_cane', quant: 16}

    
    ].forEach(plant => {

    event.recipes.gtceu.reinforced_farm('basic_' + plant.seed + '_farm')
        .itemInputs(plant.seed)
        .itemOutputs(Item.of(plant.output, plant.quant))
        .chancedOutput(plant.secoutput, 5000, 0)
        .duration(20*20)

    }); 


    
});
    

