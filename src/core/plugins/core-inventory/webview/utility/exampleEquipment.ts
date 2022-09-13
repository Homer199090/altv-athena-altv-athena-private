import { Item } from '../../../../shared/interfaces/inventory';
import { ClothingComponent } from '../../../../shared/interfaces/clothing';

export const exampleEquipment: Array<Item<Partial<ClothingComponent>>> = [
    {
        name: 'Bottoms',
        base: 'pants',
        flags: 13,
        version: 1,
        weight: 1,
        icon: 'bottoms',
        slot: 3,
        quantity: 1,
        data: {
            startValue: 14,
            drawables: [15],
            ids: [4],
            textures: [2],
            isProp: false,
            sex: 1,
            dlcHashes: [0],
        },
    },
    {
        name: 'Wrist Bracelet',
        base: 'bracelet',
        flags: 13,
        version: 1,
        weight: 1,
        icon: 'bracelet',
        slot: 10,
        quantity: 1,
        data: {
            startValue: -1,
            drawables: [2],
            ids: [7],
            textures: [0],
            isProp: true,
            sex: 1,
            dlcHashes: [2939825043],
        },
    },
    {
        name: 'Glasses',
        base: 'glasses',
        flags: 13,
        version: 1,
        weight: 1,
        icon: 'glasses',
        slot: 5,
        quantity: 1,
        data: {
            startValue: -1,
            drawables: [1],
            ids: [1],
            textures: [255],
            isProp: true,
            sex: 1,
            dlcHashes: [0],
        },
    },
    {
        name: 'stupid shirt',
        base: 'shirt',
        flags: 13,
        version: 1,
        weight: 1,
        icon: 'shirt',
        slot: 2,
        quantity: 1,
        data: {
            startValue: 392,
            drawables: [19, 2, 2],
            ids: [11, 8, 3],
            textures: [1, 0, 0],
            isProp: false,
            sex: 1,
            dlcHashes: [618336290, 2398078303, 0],
        },
    },
    {
        name: 'dunce',
        base: 'hat',
        flags: 13,
        version: 1,
        weight: 1,
        icon: 'hat',
        slot: 0,
        quantity: 1,
        data: {
            startValue: 0,
            drawables: [1],
            ids: [0],
            textures: [0],
            isProp: true,
            sex: 1,
            dlcHashes: [0],
        },
    },
    {
        name: 'loafers',
        base: 'shoes',
        flags: 13,
        version: 1,
        weight: 1,
        icon: 'shoes',
        slot: 4,
        quantity: 1,
        data: {
            startValue: 34,
            drawables: [3],
            ids: [6],
            textures: [0],
            isProp: false,
            sex: 1,
            dlcHashes: [228479499],
        },
    },
];
