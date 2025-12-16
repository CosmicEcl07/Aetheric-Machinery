ServerEvents.recipes(event => {

    const time = 0.5*20

    event.recipes.gtceu.basic_sluice('basic_gravel_sluice')
        .itemInputs('16x minecraft:gravel')
        .inputFluids('minecraft:water 1600')
        .itemOutputsRanged('minecraft:raw_iron', 3, 6)
        .itemOutputsRanged('minecraft:raw_copper', 2, 4)
        .itemOutputsRanged('gtceu:raw_tin', 2, 3)
        .itemOutputsRanged('gtceu:raw_nickel', 2, 3)
        .duration(time);

    event.recipes.gtceu.basic_sluice('basic_sand_sluice')
        .itemInputs('16x minecraft:sand')
        .inputFluids('minecraft:water 1600')
        .itemOutputsRanged('minecraft:raw_gold', 2, 4)
        .itemOutputsRanged('minecraft:amethyst_shard', 2, 3)
        .itemOutputsRanged('minecraft:prismarine_crystals', 2, 4)
        .itemOutputsRanged('minecraft:prismarine_shard', 2, 4)
        .duration(time);

    event.recipes.gtceu.basic_sluice('basic_dust_sluice')
        .itemInputs('16x exdeorum:dust')
        .inputFluids('minecraft:water 1600')
        .itemOutputsRanged('minecraft:diamond', 1, 2)
        .itemOutputsRanged('minecraft:emerald', 1, 2)
        .itemOutputsRanged('minecraft:redstone', 2, 5)
        .itemOutputsRanged('minecraft:lapis_lazuli', 3, 6)
        .duration(time);

    event.recipes.gtceu.basic_sluice('basic_dirt_sluice')
        .itemInputs('4x minecraft:dirt')
        .inputFluids('minecraft:water 100')
        .itemOutputsRanged('gtceu:rubber_sapling', 1, 2)
        .itemOutputsRanged('minecraft:wheat_seeds', 1, 2)
        .itemOutputsRanged('minecraft:potato', 1, 2)
        .itemOutputsRanged('minecraft:sugar_cane',1, 2)
        .itemOutputsRanged('minecraft:rooted_dirt', 1, 3)
        .itemOutputsRanged('minecraft:bamboo',1 , 2)
        .duration(time/2)

    event.recipes.gtceu.basic_sluice('basic_coarse_dirt_sluice')
        .itemInputs('4x minecraft:coarse_dirt')
        .itemOutputsRanged('minecraft:dirt', 1, 4)
        .itemOutputsRanged('minecraft:gravel', 1, 4)
        .duration(time)
});
