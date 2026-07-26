GTCEuStartupEvents.registry('gtceu:material', (event) => {
  

    //Autofilled, Needs Color Tweaks.
    let runoff = [
        {name: 'ruby', color: 0xFF2B00},
        {name: 'sapphire', color: 0x00A2FF},
        {name: 'emerald', color: 0x00FF00},
        {name: 'certus_quartz', color: 0xFF00FF},
        {name: 'quartzite', color: 0xFF00FF}
    ];

    let slurry = [
        {name: 'nickel', color: 0xB5C7C9},
        {name: 'redstone', color: 0xFF0000},
        {name: 'aluminum', color: 0xFFB84D} 
    ];

    let sludge = [
        {name: 'lead', color: 0xA9A9A9},
        {name: 'antimony', color: 0xC0C0C0},
        {name: 'sodalite', color: 0xC0C0C0}
    ];

    runoff.forEach((runoff) => {
        event.create(runoff.name + '_runoff')
            .liquid()
            .color(runoff.color)
    });

    slurry.forEach((slurry) => {
        event.create(slurry.name + '_slurry')
            .liquid()
            .color(slurry.color)
    });

    sludge.forEach((sludge) => {
        event.create(sludge.name + '_sludge')
            .liquid()
            .color(sludge.color)
    });

});