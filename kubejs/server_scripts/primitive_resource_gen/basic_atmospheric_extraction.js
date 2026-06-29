ServerEvents.recipes(event => {
    
    event.recipes.gtceu.basic_atmospheric_extraction('test')
        .itemInputs('minecraft:stone')
        .itemOutputs('2x minecraft:stone','4x minecraft:dirt')
        .duration(80)
        .EUt(24);
        
});
    

