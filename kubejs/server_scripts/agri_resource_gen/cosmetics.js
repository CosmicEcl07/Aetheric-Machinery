ServerEvents.recipes(event => {

   event.recipes.gtceu.wild_garden('bone_meal')
        .notConsumable('minecraft:bone_meal')
        .chancedOutput('minecraft:dandelion', 800, 0)
        .chancedOutput('minecraft:poppy', 800, 0)
        .chancedOutput('minecraft:blue_orchid', 800, 0)
        .chancedOutput('minecraft:allium', 800, 0)
        .chancedOutput('minecraft:azure_bluet', 800, 0)
        .chancedOutput('minecraft:red_tulip', 800, 0)
        .chancedOutput('minecraft:orange_tulip', 800, 0)
        .chancedOutput('minecraft:white_tulip', 800, 0)
        .chancedOutput('minecraft:pink_tulip', 800, 0)
        .chancedOutput('minecraft:oxeye_daisy', 800, 0)
        .duration(400); 

});
