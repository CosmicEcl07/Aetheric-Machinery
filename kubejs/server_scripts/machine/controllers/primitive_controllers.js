ServerEvents.recipes(event => {

    event.shaped('gtceu:primitive_sluice',[

        'ADA',
        'BEB',
        'CCC'], {

        A: 'minecraft:stone_slab',
        B: 'minecraft:stone',
        C: 'minecraft:stone_bricks',
        D: 'exdeorum:string_mesh',
        E: Item.of('woodenbucket:wooden_bucket', '{Damage:0}')

        });

    event.shaped('gtceu:sturdy_kiln',[

        'ABA',
        'CDC',
        'ABA'], {

        A: 'minecraft:stone',
        B: 'gtceu:iron_gear',
        C: 'gtceu:iron_rotor',
        D: 'minecraft:campfire'

        });
    
});