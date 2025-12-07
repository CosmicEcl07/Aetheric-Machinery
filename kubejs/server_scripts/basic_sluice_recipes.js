ServerEvents.recipes(event => {

    event.recipes.gtceu.basic_sluice('basic_gravel_sluice')
        .itemInputs('4x minecraft:gravel')
        .itemOutputs('4x minecraft:sand')
        .duration(200);

});
