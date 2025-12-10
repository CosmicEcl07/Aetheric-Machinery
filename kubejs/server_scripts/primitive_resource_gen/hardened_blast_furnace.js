ServerEvents.recipes(event => {
    event.recipes.gtceu.hardened_blast_furnace('primitive_sand_to_glass_logs')
        .itemInputs('gtceu:glass_dust','#minecraft:logs')
        .itemOutputs('minecraft:glass')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('primitive_sand_to_glass_planks')
        .itemInputs('gtceu:glass_dust','4x #minecraft:planks')
        .itemOutputs('minecraft:glass')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('primitive_sand_to_glass_charcoal')
        .itemInputs('gtceu:glass_dust', 'minecraft:charcoal')
        .itemOutputs('minecraft:glass')
        .duration(60)

    event.recipes.gtceu.hardened_blast_furnace('primitive_iron_to_wrought_iron')
        .itemInputs('minecraft:iron_ingot','minecraft:charcoal')
        .itemOutputs('gtceu:wrought_iron_ingot')
        .duration(60)

    event.recipes.gtceu.hardened_blast_furnace('primitive_raw_rubber_ingot')
        .itemInputs('3x gtceu:raw_rubber_dust', "gtceu:sulfur_dust")
        .itemOutputs('gtceu:rubber_ingot')
        .duration(160)

    event.recipes.gtceu.hardened_blast_furnace('primitive_charcoal')
        .itemInputs('#minecraft:logs','#minecraft:planks')
        .itemOutputs('minecraft:charcoal')
        .duration(160)
    
    event.recipes.gtceu.hardened_blast_furnace('primitive_glass_tubes')
        .itemInputs('gtceu:glass_dust')
        .notConsumable('gtceu:ball_casting_mold',)
        .itemOutputs('gtceu:glass_tube')
        .duration(160)

    event.recipes.gtceu.hardened_blast_furnace('primitive_coke_bricks')
        .itemInputs('#minecraft:smelts_to_glass', 'minecraft:clay_ball')
        .itemOutputs('2x gtceu:coke_oven_brick')
        .duration(150)

});