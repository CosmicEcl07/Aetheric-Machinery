ServerEvents.recipes(event => {

    const time = .5*20

    event.recipes.gtceu.basic_sluice('basic_gravel_sluice')
        .itemInputs('minecraft:gravel')
        .inputFluids('minecraft:water 100')
        .chancedOutput('minecraft:raw_iron', 3000, 0)
        .chancedOutput('minecraft:raw_copper', 2000, 0)
        .chancedOutput('gtceu:raw_tin', 1500, 0)
        .chancedOutput('gtceu:raw_nickel', 1000, 0)
        .duration(time);


    event.recipes.gtceu.basic_sluice('basic_sand_sluice')
        .itemInputs('minecraft:sand')
        .inputFluids('minecraft:water 100')
        .chancedOutput('minecraft:raw_gold', 1500, 0)
        .chancedOutput('minecraft:amethyst_shard', 2000, 0)
        .chancedOutput('minecraft:prismarine_crystals', 2000, 0)
        .chancedOutput('minecraft:prismarine_shard', 2000, 0)
        .duration(time);

    event.recipes.gtceu.basic_sluice('basic_dust_sluice')
        .itemInputs('exdeorum:dust')
        .inputFluids('minecraft:water 100')
        .chancedOutput('minecraft:redstone', 3000, 0)
        .chancedOutput('minecraft:diamond', 500, 0)
        .chancedOutput('minecraft:emerald', 750, 0)
        .chancedOutput('minecraft:lapis_lazuli', 2000, 0)
        .duration(time);
    
});
