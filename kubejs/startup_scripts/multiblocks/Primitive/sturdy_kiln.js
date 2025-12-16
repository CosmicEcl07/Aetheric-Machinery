GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('sturdy_kiln')
        .category('primitive')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 0 ,0)
        .setSound(GTSoundEntries.FURNACE)
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('sturdy_kiln', 'primitive')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('sturdy_kiln')
        .appearanceBlock(() => Block.getBlock('minecraft:stone'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AAA', 'BBB', 'BBB', 'CCC')
            .aisle('AAA', 'BDB', 'B#B', 'C#C')
            .aisle('AAA', 'BEB', 'BBB', 'CCC')
            .where('A', Predicates.blocks('minecraft:stone_bricks'))
            .where('B', Predicates.blocks('minecraft:stone'))
            .where('C', Predicates.blocks('minecraft:stone_slab'))
            .where('D', Predicates.blocks('minecraft:campfire'))
            .where('E', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer('minecraft:block/stone', 'gtceu:block/multiblock/primitive_blast_furnace', false)
        
        .editableUI(    
            global.ui_builder({
                group: 'primitive',
                name: 'sturdy_kiln',
                size: [125, 80],
                background: GuiTextures.PRIMITIVE_BACKGROUND,
                progress: {
                    pos: [58, 30],
                    size: [20, 20],
                    texture: GuiTextures.PROGRESS_BAR_ARC_FURNACE
                },
                inputs: [
                    { type: 'item', index: 0, pos: [16, 30], texture: GuiTextures.PRIMITIVE_SLOT },
                    { type: 'item', index: 1, pos: [34, 30], texture: GuiTextures.PRIMITIVE_SLOT }
                ],
                outputs: [
                    { type: 'item', index: 0, pos: [84, 30], texture: GuiTextures.PRIMITIVE_SLOT }
                ]
        }))
});
