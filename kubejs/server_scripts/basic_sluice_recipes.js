ServerEvents.recipes(event => {

    event.recipes.gtceu.basic_sluice('basic_gravel_sluice')
        .itemInputs('minecraft:gravel')
        .inputFluids('minecraft:water 100')
        .chancedOutput('minecraft:sand', 4000, 0)
        .duration(15);

});
