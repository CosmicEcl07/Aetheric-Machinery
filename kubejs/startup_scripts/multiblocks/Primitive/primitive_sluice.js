GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('basic_sluice')
        .category('primitive')
        .setEUIO('in')
        .setMaxIOSize(1, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT , FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('primitive_sluice', 'primitive')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('basic_sluice')
        .appearanceBlock(GTBlocks.TREATED_WOOD_PLANK)
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('PPPPPPP', 'EEEDDDD')
            .aisle('PPPPPPP', 'EC####D')
            .aisle('PPPPPPP', 'EAEDDDD')
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks('minecraft:stone_bricks'))      
            .where('#', Predicates.any())   
            .where('C', Predicates.fluids('minecraft:water')) 
            .where('B', Predicates.blocks('gtceu:treated_wood_slab'))
            .where('D', Predicates.blocks('minecraft:stone_slab'))
            .where('E', Predicates.blocks('minecraft:stone'))
            .build())
        .workableCasingRenderer('minecraft:block/stone',
        'gtceu:block/machines/sifter', false)
        .editableUI(
            global.ui_builder({
                group: 'primitive',
                name: 'primitive_sluice',
                size: [174, 54],
                background: GuiTextures.PRIMITIVE_BACKGROUND,
                progress: {
                    pos: [67, 14],
                    size: [25, 25],
                    texture: GuiTextures.PROGRESS_BAR_SIFT
                },
                inputs: [
                    
                        {type: 'item', index: 0, pos: [19, 30], texture: GuiTextures.PRIMITIVE_SLOT },
                        {type: 'fluid', index: 0, pos: [19, 8], texture: GuiTextureGroup(GuiTextures.PRIMITIVE_SLOT, GuiTextures.PRIMITIVE_LARGE_FLUID_TANK_OVERLAY.getSubTexture(0, 0.04, 1, 0.22)) },
				],
                outputs: [
                    
                        {type: 'item', index: 0, pos: [120, 10], texture: GuiTextures.PRIMITIVE_SLOT },
                        {type: 'item', index: 1, pos: [138, 10], texture: GuiTextures.PRIMITIVE_SLOT },
                        {type: 'item', index: 2, pos: [120, 28], texture: GuiTextures.PRIMITIVE_SLOT },
                        {type: 'item', index: 3, pos: [138, 28], texture: GuiTextures.PRIMITIVE_SLOT },
                        
                ]

        }))
});