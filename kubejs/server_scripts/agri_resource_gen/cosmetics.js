ServerEvents.recipes(event => {


    event.recipes.gtceu.wild_garden('bone_meal')
        .notConsumable('minecraft:bone_meal')
        .itemOutputs('minecraft:poppy','minecraft:dandelion','minecraft:blue_orchid','minecraft:allium','minecraft:azure_bluet','minecraft:red_tulip','minecraft:orange_tulip','minecraft:white_tulip','minecraft:pink_tulip','minecraft:oxeye_daisy')
        .duration(20*20)
});
