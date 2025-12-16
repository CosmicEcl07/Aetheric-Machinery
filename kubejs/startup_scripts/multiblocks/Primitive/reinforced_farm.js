GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('hardened_farm')
        .category('primitive')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 1, 0)
        .setSound(GTSoundEntries.BATH);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('reinforced_farm', 'primitive')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('hardened_farm')
        .appearanceBlock(() => Block.getBlock('minecraft:stone'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("ABBBBBBBABBBBBBBA", "CDDDDDDDCDDDDDDDC", "#################", "#################", "#################", "#################", "#################", "#################", "#################") 
            .aisle("B###############B", "DABBBBBBBABBBBBAD", "#AAAAAAAAAAAAAAA#", "#########C#####C#", "#################", "#################", "#################", "##########CCCCC##", "#################") 
            .aisle("B###############B", "DBBBBBBBBBBBBBBBD", "#AEEEEEEEABBBBBA#", "##########ABBBA##", "##########ABBBA##", "##########F###F##", "##########F###F##", "#########CAAAAAC#", "#################") 
            .aisle("B###############B", "DBBBBBBBBBBBBBBBD", "#AEEEEEEEABBBBBA#", "##########B###B##", "##########BBBBB##", "###########BGB###", "###########BGB###", "#########CAABAAC#", "############C####") 
            .aisle("B###############B", "DBBBBBBBBBBBBBBBD", "#AHHHHHHHABBBBBA#", "##########B###B##", "##########BBBBB##", "###########G#G###", "###########G#G###", "#########CABBBAC#", "###########CCC###") 
            .aisle("B###############B", "DBBBBBBBBBBBBBBBD", "#AEEEEEEEABBBBBA#", "##########B###B##", "##########BBBBB##", "###########BGB###", "###########BGB###", "#########CAABAAC#", "############C####") 
            .aisle("B###############B", "DBBBBBBBBBBBBBBBD", "#AEEEEEEEABBBBBA#", "##########ABBBA##", "##########AB@BA##", "##########F###F##", "##########F###F##", "#########CAAAAAC#", "#################") 
            .aisle("B###############B", "DABBBBBBBABBBBBAD", "#AAAAAAAAAAAAAAA#", "#########C#####C#", "#################", "#################", "#################", "##########CCCCC##", "#################") 
            .aisle("ABBBBBBBABBBBBBBA", "CDDDDDDDCDDDDDDDC", "#################", "#################", "#################", "#################", "#################", "#################", "#################") 
            .where("A", Predicates.blocks("minecraft:stone_bricks"))
            .where("B", Predicates.blocks("minecraft:stone")
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setPreviewCount(1)))
            .where("C", Predicates.blocks("minecraft:stone_brick_slab"))
            .where("D", Predicates.blocks("minecraft:stone_slab"))
            .where("#", Predicates.any())
            .where("E", Predicates.blocks("minecraft:farmland"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .where("F", Predicates.blocks("minecraft:stone_brick_wall"))
            .where("G", Predicates.blocks("minecraft:glass"))
            .where("H", Predicates.blocks("minecraft:water"))
            .build())

        .workableCasingRenderer('minecraft:block/stone', 'gtceu:block/multiblock/primitive_blast_furnace', false)
});

