ServerEvents.recipes(event => {
    [
        {type:'minecraft:iron_ingot', time: 20, output: 'gtceu:steel_ingot'},
        {type:'gtceu:wrought_iron_ingot', time: 15, output: 'gtceu:steel_ingot'},
        {type:'gtceu:glass_dust', time: 8, output: 'minecraft:glass'}
    ].forEach(ingot => {

    event.recipes.gtceu.sturdy_kiln('basic_' + ingot.type + '_kiln')

        .itemInputs(ingot.type, '2x minecraft:charcoal')
        .itemOutputs(ingot.output)
        .duration(ingot.time*20);

    }); 

});
    

