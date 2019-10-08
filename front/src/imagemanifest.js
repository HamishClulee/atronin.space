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

const images = [
    {   
        path: 'BalconyGazebo.png',
        alt: `A gazebo surrounded by plants`,
        tags: [TAGS.outdoor, TAGS.villa, TAGS.cowork],
        caption: `The upstairs gazebo, has a powerpoint to plug in laptop and phone and a light for working at night!`,
    },
    {   
        path: 'bbq4.jpg',
        alt: `people talking at bbq around a pool`,
        tags: [TAGS.outdoor, TAGS.villa, TAGS.social, TAGS.bbq, TAGS.events],
        caption: `One of the early BBQ's`,
    },
    {   
        path: 'coworking2.jpg',
        alt: `Man working on laptop`,
        tags: [TAGS.cowork],
        caption: `Jaden working hard in the early days of the coworking space.`,
    },
    {   
        path: 'PoolLounger.png',
        alt: `couch at the end of a pool`,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: `Downstairs couch, doors for the living area, room 3, room 2 and room 1.`,
    },
    {   
        path: 'room2bed.jpg',
        alt: `bed with white linens`,
        tags: [TAGS.room2, TAGS.villa],
        caption: `Room 2 looking pretty!`,
    },
    {   
        path: 'room4desk.jpg',
        alt: `a desk and wardrobe`,
        tags: [TAGS.room4, TAGS.rooms],
        caption: `A recently renovated room 4.`,
    },
    {   
        path: 'room6couch.jpg',
        alt: `couch with an orange cushion`,
        tags: [TAGS.rooms, TAGS.room6],
        caption: `Room 6 has its own seating area.`,
    },
    {   
        path: 'work1.jpg',
        alt: `people working on laptops`,
        tags: [TAGS.cowork, TAGS.social],
        caption: `Allison and Glenn building things, not at all staged xD`,
    },
    {   
        path: 'bbq5.jpg',
        alt: `a group of people socialize around a pool`,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor, TAGS.pool],
        caption: `The second ever BBQ, Henry deep in explanation mode.`,
    },
    {   
        path: 'bbq10.jpg',
        alt: `people socializing around a pool`,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor, TAGS.pool],
        caption: ``,
    },
    {   
        path: 'coworking3.jpg',
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    {   
        path: 'fromgate.png',
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    {   
        path: 'lounge.jpg',
        alt: ``,
        tags: [TAGS.villa, TAGS.cowork],
        caption: ``,
    },
    {   
        path: 'PoolParkinglot.png',
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    {   
        path: 'Room2BedWardrobe.png',
        alt: ``,
        tags: [TAGS.room2, TAGS.villa],
        caption: ``,
    },
    {   
        path: 'room4full.jpg',
        alt: ``,
        tags: [TAGS.room4, TAGS.rooms],
        caption: ``,
    },
    {   
        path: 'social1.jpg',
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    {   
        path: 'work2.jpg',
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    {   
        path: 'bbq11.jpg',
        alt: ``,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor],
        caption: ``,
    },
    {   
        path: 'bbq6.jpg',
        alt: ``,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor],
        caption: ``,
    },
    {   
        path: 'coworking.jpg',
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    {   
        path: 'GazeboStairs.png',
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    {   
        path: 'LoungerLivingroom.png',
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    {   
        path: 'Room1BathroomBedroom.png',
        alt: ``,
        tags: [TAGS.rooms, TAGS.room1],
        caption: ``,
    },
    {   
        path: 'room3bathroom.jpg',
        alt: ``,
        tags: [TAGS.cowork, TAGS.room3],
        caption: ``,
    },
    {   
        path: 'room4wardrobe.jpg',
        alt: ``,
        tags: [TAGS.rooms, TAGS.room4],
        caption: ``,
    },
    {   
        path: 'social3.jpg',
        alt: ``,
        tags: [TAGS.social, TAGS.social],
        caption: ``,
    },
    {   
        path: 'work.jpg',
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    {   
        path: 'bbq12.jpg',
        alt: ``,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor],
        caption: ``,
    },
    {   
        path: 'bbq7.jpg',
        alt: ``,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor],
        caption: ``,
    },
    {   
        path: 'downstairscouch.jpg',
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    {   
        path: 'outdoorcouchandpool.jpg',
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    {   
        path: 'room1bathroomdoor.jpg',
        alt: ``,
        tags: [TAGS.rooms, TAGS.room1],
        caption: ``,
    },
    {   
        path: 'room4backwall.jpg',
        alt: ``,
        tags: [TAGS.rooms, TAGS.room4],
        caption: ``,
    },
    {   
        path: 'room5bedanddoor.jpg',
        alt: ``,
        tags: [TAGS.rooms, TAGS.room5],
        caption: ``,
    },
    {   
        path: 'social4.jpg',
        alt: ``,
        tags: [TAGS.social, TAGS.cowork],
        caption: ``,
    },
    {   
        path: 'bbq1.jpg',
        alt: ``,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor],
        caption: ``,
    },
    {   
        path: 'bbq8.jpg',
        alt: ``,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor],
        caption: ``,
    },
    {   
        path: 'downstairsgarden.jpg',
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    {   
        path: 'kitchen.jpg',
        alt: ``,
        tags: [TAGS.villa, TAGS.kitchen],
        caption: ``,
    },
    {   
        path: 'poolandcouch.jpg',
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    {   
        path: 'Room1BedPool.png',
        alt: ``,
        tags: [TAGS.rooms, TAGS.room1],
        caption: ``,
    },
    {   
        path: 'room4bed1.jpg',
        alt: ``,
        tags: [TAGS.rooms, TAGS.room4],
        caption: ``,
    },
    {   
        path: 'room5bed.jpg',
        alt: ``,
        tags: [TAGS.rooms, TAGS.room5],
        caption: ``,
    },
    {   
        path: 'social6.jpg',
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    {   
        path: 'bbq2.jpg',
        alt: ``,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor],
        caption: ``,
    },
    {   
        path: 'bbq9.jpg',
        alt: ``,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor],
        caption: ``,
    },
    {   
        path: 'downstairsgazebo.jpg',
        alt: ``,
        tags: [TAGS.cowork, TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    {   
        path: 'PoolGazebo.png',
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    {   
        path: 'room2bathroom.jpg',
        alt: ``,
        tags: [TAGS.rooms, TAGS.room2],
        caption: ``,
    },
    {   
        path: 'room4bedend.jpg',
        alt: ``,
        tags: [TAGS.rooms, TAGS.room4],
        caption: ``,
    },
    {   
        path: 'room6bed.jpg',
        alt: ``,
        tags: [TAGS.rooms, TAGS.room6],
        caption: ``,
    },
    {   
        path: 'social.jpg',
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    {   
        path: 'bbq3.jpg',
        alt: ``,
        tags: [TAGS.events, TAGS.bbq, TAGS.outdoor],
        caption: ``,
    },
    {   
        path: 'coworking1.jpg',
        alt: ``,
        tags: [TAGS.cowork],
        caption: ``,
    },
    {   
        path: 'downstairspool.jpg',
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    {   
        path: 'pool.jpg',
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
    {   
        path: 'Room2BedVanity.png',
        alt: ``,
        tags: [TAGS.rooms, TAGS.room2],
        caption: ``,
    },
    {   
        path: 'room4bed.jpg',
        alt: ``,
        tags: [TAGS.rooms, TAGS.room4],
        caption: ``,
    },
    {   
        path: 'room6couchandbed.jpg',
        alt: ``,
        tags: [TAGS.rooms, TAGS.room4],
        caption: ``,
    },
    {   
        path: 'upstairsgazebo.jpg',
        alt: ``,
        tags: [TAGS.villa, TAGS.outdoor],
        caption: ``,
    },
]

// const assets = [
//     'logo-large-light.png':{
//         alt: ``,
//         tags: [],
//         caption: ``,
//     },
//     'logo-large-dark.png':{
//         alt: ``,
//         tags: [],
//         caption: ``,
//     },
//     'hero.jpg':{
//         alt: ``,
//         tags: [],
//         caption: ``,
//     },
//     'footer.png':{
//         alt: ``,
//         tags: [],
//         caption: ``,
//     },
//     'logo-small-dark.png':{
//         alt: ``,
//         tags: [],
//         caption: ``,
//     },
// ]

export default { images, TAGS }

