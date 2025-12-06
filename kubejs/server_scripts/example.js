ServerEvents.recipes(event => {
    event.recipes.gtceu.basic_sluice('sand_sluce')
        .inputFluids('minecraft:water', 1000)
        .itemInputs('4x minecraft:sand')
        .itemOutputs('minecraft:clay_ball', 0.5)
        .EUt(16)
        .duration(200);
});