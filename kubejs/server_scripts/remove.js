ServerEvents.recipes(event => {
    
    // Remove all Ex Deorum recipes except for hammers, crooks, barrels, crucibles, and string mesh
    event.remove({
        mod: 'exdeorum',
        not: {output: [

            '#exdeorum:hammers', 
            '#exdeorum:crooks', 
            '#exdeorum:wooden_barrels',
            '#exdeorum:stone_barrels',
            'exdeorum:oak_crucible',
            'exdeorum:porcelain_clay_ball',
            'exdeorum:unfired_porcelain_crucible',
            'exdeorum:porcelain_crucible',
            'exdeorum:string_mesh'

        ]}
    })


    // LaserIO Removals
    event.remove('laserio:logic_chip_raw');


});