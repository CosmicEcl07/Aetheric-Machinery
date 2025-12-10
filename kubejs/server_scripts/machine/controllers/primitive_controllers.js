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
});