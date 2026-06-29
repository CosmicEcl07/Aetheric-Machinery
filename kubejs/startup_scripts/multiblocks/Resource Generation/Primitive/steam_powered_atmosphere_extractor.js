GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('basic_atmospheric_extraction')
        .setEUIO('in')
        .setMaxIOSize(1, 2, 0, 0)
        // .setSound(GTSoundEntries.BATH)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW , FillDirection.LEFT_TO_RIGHT);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('steam_powered_atmosphere_extractor', 'multiblock')
        .recipeType('basic_atmospheric_extraction')
        .rotationState(RotationState.NON_Y_AXIS)
        .machine((holder) => new $SteamMulti(holder, 4))
        .recipeModifier((machine, recipe) => $SteamMulti.recipeModifier(machine, recipe), true)
        .appearanceBlock(() => Block.getBlock('gtceu:industrial_steam_casing'))
        .pattern(definition => FactoryBlockPattern.start()
        	.aisle('   B   ', '   B   ', '       ', '       ', '       ', '       ', '       ', '       ') 
        	.aisle('       ', '   B   ', '   B   ', '   B   ', '       ', '       ', '       ', '       ') 
        	.aisle('       ', '       ', '  BBB  ', '  CCC  ', '   C   ', '   C   ', '   C   ', '       ') 
        	.aisle('B  D  B', 'BB D BB', ' BBDBB ', ' BCDCB ', '  CDC  ', '  CDC  ', '  CCC  ', '   C   ') 
        	.aisle('       ', '       ', '  BBB  ', '  CCC  ', '   C   ', '   C   ', '   C   ', '       ') 
        	.aisle('       ', '   B   ', '   B   ', '   B   ', '       ', '       ', '       ', '       ') 
        	.aisle('   B   ', '   @   ', '       ', '       ', '       ', '       ', '       ', '       ') 
        	.where(' ', Predicates.any())
        	.where('B', Predicates.blocks('gtceu:industrial_steam_casing')
                .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(4))
                .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS).setPreviewCount(1).setMaxGlobalLimited(4))
                .or(Predicates.abilities(PartAbility.STEAM).setExactLimit(1)))
        	.where('C', Predicates.blocks('gtceu:steam_machine_casing'))
        	.where('D', Predicates.blocks('gtceu:bronze_pipe_casing'))
        	.where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingModel('gtceu:block/casings/gcym/industrial_steam_casing', 'gtceu:block/machines/cutter')
    
});