GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('hardened_blast_furnace')
        .category('primitive')
        .setMaxIOSize(2, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE)

});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('hardened_blast_furnace', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('minecraft:stone_bricks'))
        .recipeType('hardened_blast_furnace')
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('BBB','AAA','AAA','AAA')
            .aisle('BBB','ACA','A#A','A#A')
            .aisle('BBB','A@A','AAA','AAA')
            .where('A', Predicates.blocks('minecraft:stone_bricks')
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('#', Predicates.any())
            .where('B', Predicates.blocks('minecraft:smooth_stone'))
            .where('C', Predicates.blocks('minecraft:campfire'))
            .where('D', Predicates.blocks('gtceu:tempered_glass'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())


        .workableCasingRenderer(
        'minecraft:block/stone_bricks', "gtceu:block/machines/furnace", false)
        .editableUI(
            global.ui_builder({
                group: 'primitive',
                name: 'hardened_blast_furnace',
                size: [128, 78],
                background: GuiTextures.PRIMITIVE_BACKGROUND,
                progress: {
                    pos: [54, 3],
                    size: [20, 20],
                    texture: GuiTextures.PROGRESS_BAR_SIFT
                },
                inputs: [
                    
                        {type: 'item', index: 0, pos: [4, 4], texture: GuiTextures.PRIMITIVE_SLOT },
                        {type: 'item', index: 1, pos: [22, 4], texture: GuiTextures.PRIMITIVE_SLOT },
                ],
                outputs: [
                    
                        {type: 'item', index: 0, pos: [97, 4], texture: GuiTextures.PRIMITIVE_SLOT }
                        
                ]

        }))
});