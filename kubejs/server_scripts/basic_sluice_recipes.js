ServerEvents.recipes(event => {

    event.recipes.gtceu.basic_sluice('basic_gravel_sluice')
        .itemInputs('minecraft:gravel')
        .inputFluids('minecraft:water 100')
        .chancedOutput('minecraft:raw_iron', 4000, 0)
        .chancedOutput('minecraft:raw_copper', 3500, 0)
        .chancedOutput('gtceu:raw_tin', 3000, 0)
        .chancedOutput('gtceu:raw_nickel', 2500, 0)
        .duration(5*20);


    event.recipes.gtceu.basic_sluice('basic_sand_sluice')
        .itemInputs('minecraft:sand')
        .inputFluids('minecraft:water 100')
        .chancedOutput('minecraft:raw_gold', 2500, 0)
        .chancedOutput('minecraft:amethyst_shard', 4000, 0)
        .chancedOutput('minecraft:prismarine_crystals', 3500, 0)
        .chancedOutput('minecraft:prismarine_shard', 3000, 0)
        .duration(5*20);

    event.recipes.gtceu.basic_sluice('basic_dust_sluice')
        .itemInputs('exdeorum:dust')
        .inputFluids('minecraft:water 100')
        .chancedOutput('minecraft:redstone', 5000, 0)
        .chancedOutput('minecraft:diamond', 1000, 0)
        .chancedOutput('minecraft:emerald', 1000, 0)
        .chancedOutput('minecraft:lapis_lazuli', 4000, 0)
        .duration(5*20);
    
});
