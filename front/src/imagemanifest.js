const TAGS = {
    villa: 'villa',
    outdoor: 'outdoor',
    cowork: 'cowork',
    social: 'social',
    bbq: 'bbq',
    garden: 'garden',
    pool: 'pool',
    kitchen: 'kitchen',
    rooms: 'rooms',
    room1: 'room-1',
    room2: 'room-2',
    room3: 'room-3',
    room4: 'room-4',
    room5: 'room-5',
    room6: 'room-6',
    events: 'events',
}

const images = {
    'BalconyGazebo.png': {
        alt: `A gazebo surrounded by plants`,
        tags: [TAGS.outdoor, TAGS.villa, TAGS.cowork],
        caption: `The upstairs gazebo, has a powerpoint to plug in laptop and phone and a light for working at night!`,
    },
    'bbq4.jpg':{
        alt: `people talking at bbq around a pool`,
        tags: [TAGS.outdoor, TAGS.villa, TAGS.social, TAGS.bbq, TAGS.events],
        caption: `One of the early BBQ's`,
    },
    'coworking2.jpg':{
        alt: `Man working on laptop`,
        tags: [TAGS.cowork],
        caption: `Jaden working hard in the early days of the coworking space.`,
    },
    'PoolLounger.png':{
        alt: `couch at the end of a pool`,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: `Downstairs couch, doors for the living area, room 3, room 2 and room 1.`,
    },
    'room2bed.jpg':{
        alt: `bed with white linens`,
        tags: [TAGS.room2, TAGS.villa],
        caption: `Room 2 looking pretty!`,
    },
    'room4desk.jpg':{
        alt: `a desk and wardrobe`,
        tags: [TAGS.room4, TAGS.rooms],
        caption: `A recently renovated room 4.`,
    },
    'room6couch.jpg':{
        alt: `couch with an orange cushion`,
        tags: [TAGS.rooms, TAGS.room6],
        caption: `Room 6 has its own seating area.`,
    },
    'work1.jpg':{
        alt: `people working on laptops`,
        tags: [TAGS.cowork, TAGS.social],
        caption: `Allison and Glenn building things, not at all staged xD`,
    },
    'bbq5.jpg':{
        alt: `a group of people socialize around a pool`,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor, TAGS.pool],
        caption: `The second ever BBQ, Henry deep in explanation mode.`,
    },
    'bbq10.jpg':{
        alt: `people socializing around a pool`,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor, TAGS.pool],
        caption: ``,
    },
    'coworking3.jpg':{
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    'fromgate.png':{
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    'lounge.jpg':{
        alt: ``,
        tags: [TAGS.villa, TAGS.cowork],
        caption: ``,
    },
    'PoolParkinglot.png':{
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    'Room2BedWardrobe.png':{
        alt: ``,
        tags: [TAGS.room2, TAGS.villa],
        caption: ``,
    },
    'room4full.jpg':{
        alt: ``,
        tags: [TAGS.room4, TAGS.rooms],
        caption: ``,
    },
    'social1.jpg':{
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    'work2.jpg':{
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    'bbq11.jpg':{
        alt: ``,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor],
        caption: ``,
    },
    'bbq6.jpg':{
        alt: ``,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor],
        caption: ``,
    },
    'coworking.jpg':{
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    'GazeboStairs.png':{
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    'LoungerLivingroom.png':{
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    'Room1BathroomBedroom.png':{
        alt: ``,
        tags: [TAGS.rooms, TAGS.room1],
        caption: ``,
    },
    'room3bathroom.jpg':{
        alt: ``,
        tags: [TAGS.cowork, TAGS.room3],
        caption: ``,
    },
    'room4wardrobe.jpg':{
        alt: ``,
        tags: [TAGS.rooms, TAGS.room4],
        caption: ``,
    },
    'social3.jpg':{
        alt: ``,
        tags: [TAGS.social, TAGS.social],
        caption: ``,
    },
    'work.jpg':{
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    'bbq12.jpg':{
        alt: ``,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor],
        caption: ``,
    },
    'bbq7.jpg':{
        alt: ``,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor],
        caption: ``,
    },
    'downstairscouch.jpg':{
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    'outdoorcouchandpool.jpg':{
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    'room1bathroomdoor.jpg':{
        alt: ``,
        tags: [TAGS.rooms, TAGS.room1],
        caption: ``,
    },
    'room4backwall.jpg':{
        alt: ``,
        tags: [TAGS.rooms, TAGS.room4],
        caption: ``,
    },
    'room5bedanddoor.jpg':{
        alt: ``,
        tags: [TAGS.rooms, TAGS.room5],
        caption: ``,
    },
    'social4.jpg':{
        alt: ``,
        tags: [TAGS.social, TAGS.cowork],
        caption: ``,
    },
    'bbq1.jpg':{
        alt: ``,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor],
        caption: ``,
    },
    'bbq8.jpg':{
        alt: ``,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor],
        caption: ``,
    },
    'downstairsgarden.jpg':{
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    'kitchen.jpg':{
        alt: ``,
        tags: [TAGS.villa, TAGS.kitchen],
        caption: ``,
    },
    'poolandcouch.jpg':{
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    'Room1BedPool.png':{
        alt: ``,
        tags: [TAGS.rooms, TAGS.room1],
        caption: ``,
    },
    'room4bed1.jpg':{
        alt: ``,
        tags: [TAGS.rooms, TAGS.room4],
        caption: ``,
    },
    'room5bed.jpg':{
        alt: ``,
        tags: [TAGS.rooms, TAGS.room5],
        caption: ``,
    },
    'social6.jpg':{
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    'bbq2.jpg':{
        alt: ``,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor],
        caption: ``,
    },
    'bbq9.jpg':{
        alt: ``,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor],
        caption: ``,
    },
    'downstairsgazebo.jpg':{
        alt: ``,
        tags: [TAGS.cowork, TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    'PoolGazebo.png':{
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    'room2bathroom.jpg':{
        alt: ``,
        tags: [TAGS.rooms, TAGS.room2],
        caption: ``,
    },
    'room4bedend.jpg':{
        alt: ``,
        tags: [TAGS.rooms, TAGS.room4],
        caption: ``,
    },
    'room6bed.jpg':{
        alt: ``,
        tags: [TAGS.rooms, TAGS.room6],
        caption: ``,
    },
    'social.jpg':{
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    'bbq3.jpg':{
        alt: ``,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor],
        caption: ``,
    },
    'coworking1.jpg':{
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    'downstairspool.jpg':{
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    'pool.jpg':{
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    'Room2BedVanity.png':{
        alt: ``,
        tags: [TAGS.rooms, TAGS.room2],
        caption: ``,
    },
    'room4bed.jpg':{
        alt: ``,
        tags: [TAGS.rooms, TAGS.room4],
        caption: ``,
    },
    'room6couchandbed.jpg':{
        alt: ``,
        tags: [TAGS.rooms, TAGS.room4],
        caption: ``,
    },
    'upstairsgazebo.jpg':{
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
}

const assets = {
    'logo-large-light.png':{
        alt: ``,
        tags: [],
        caption: ``,
    },
    'logo-large-dark.png':{
        alt: ``,
        tags: [],
        caption: ``,
    },
    'hero.jpg':{
        alt: ``,
        tags: [],
        caption: ``,
    },
    'footer.png':{
        alt: ``,
        tags: [],
        caption: ``,
    },
    'logo-small-dark.png':{
        alt: ``,
        tags: [],
        caption: ``,
    },
}

export default { images, TAGS, assets }

