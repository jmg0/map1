
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "DarkMatter_1": {
            "type": "raster",
            "tiles": ["http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "b1_2": {
            "type": "geojson",
            "data": json_b1_2
        }
                    ,
        "b1_3": {
            "type": "geojson",
            "data": json_b1_3
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "OpenStreetMap_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "DarkMatter_1",
            "type": "raster",
            "source": "DarkMatter_1"
        },
        {
            "id": "lyr_b1_2_0",
            "type": "circle",
            "source": "b1_2",
            "layout": {},
            "paint": {'circle-radius': ['case', ['all', ['>=', ['get', 'Contribution Total'], ['-', 0, 200.0]], ['<=', ['get', 'Contribution Total'], 150.0]], ['/', 3.7795275591, 2], ['all', ['>', ['get', 'Contribution Total'], 150.0], ['<=', ['get', 'Contribution Total'], 350.0]], ['/', 3.7795275591, 2], ['all', ['>', ['get', 'Contribution Total'], 350.0], ['<=', ['get', 'Contribution Total'], 600.0]], ['/', 3.7795275591, 2], ['all', ['>', ['get', 'Contribution Total'], 600.0], ['<=', ['get', 'Contribution Total'], 1000.0]], ['/', 3.7795275591, 2], ['all', ['>', ['get', 'Contribution Total'], 1000.0], ['<=', ['get', 'Contribution Total'], 2800.0]], ['/', 3.7795275591, 2], 1], 'circle-color': ['case', ['all', ['>=', ['get', 'Contribution Total'], ['-', 0, 200.0]], ['<=', ['get', 'Contribution Total'], 150.0]], '#8b978a', ['all', ['>', ['get', 'Contribution Total'], 150.0], ['<=', ['get', 'Contribution Total'], 350.0]], '#6eb167', ['all', ['>', ['get', 'Contribution Total'], 350.0], ['<=', ['get', 'Contribution Total'], 600.0]], '#52cb45', ['all', ['>', ['get', 'Contribution Total'], 600.0], ['<=', ['get', 'Contribution Total'], 1000.0]], '#35e522', ['all', ['>', ['get', 'Contribution Total'], 1000.0], ['<=', ['get', 'Contribution Total'], 2800.0]], '#19fe00', '#ffffff'], 'circle-opacity': ['case', ['all', ['>=', ['get', 'Contribution Total'], ['-', 0, 200.0]], ['<=', ['get', 'Contribution Total'], 150.0]], 1.0, ['all', ['>', ['get', 'Contribution Total'], 150.0], ['<=', ['get', 'Contribution Total'], 350.0]], 1.0, ['all', ['>', ['get', 'Contribution Total'], 350.0], ['<=', ['get', 'Contribution Total'], 600.0]], 1.0, ['all', ['>', ['get', 'Contribution Total'], 600.0], ['<=', ['get', 'Contribution Total'], 1000.0]], 1.0, ['all', ['>', ['get', 'Contribution Total'], 1000.0], ['<=', ['get', 'Contribution Total'], 2800.0]], 1.0, 1], 'circle-stroke-width': ['case', ['all', ['>=', ['get', 'Contribution Total'], ['-', 0, 200.0]], ['<=', ['get', 'Contribution Total'], 150.0]], 0, ['all', ['>', ['get', 'Contribution Total'], 150.0], ['<=', ['get', 'Contribution Total'], 350.0]], 0, ['all', ['>', ['get', 'Contribution Total'], 350.0], ['<=', ['get', 'Contribution Total'], 600.0]], 0, ['all', ['>', ['get', 'Contribution Total'], 600.0], ['<=', ['get', 'Contribution Total'], 1000.0]], 0, ['all', ['>', ['get', 'Contribution Total'], 1000.0], ['<=', ['get', 'Contribution Total'], 2800.0]], 0, 1], 'circle-stroke-color': ['case', ['all', ['>=', ['get', 'Contribution Total'], ['-', 0, 200.0]], ['<=', ['get', 'Contribution Total'], 150.0]], '#3d8035', ['all', ['>', ['get', 'Contribution Total'], 150.0], ['<=', ['get', 'Contribution Total'], 350.0]], '#3d8035', ['all', ['>', ['get', 'Contribution Total'], 350.0], ['<=', ['get', 'Contribution Total'], 600.0]], '#3d8035', ['all', ['>', ['get', 'Contribution Total'], 600.0], ['<=', ['get', 'Contribution Total'], 1000.0]], '#3d8035', ['all', ['>', ['get', 'Contribution Total'], 1000.0], ['<=', ['get', 'Contribution Total'], 2800.0]], '#3d8035', '#000000']}
        }
,
        {
            "id": "lyr_b1_3_0",
            "type": "circle",
            "source": "b1_3",
            "layout": {},
            "paint": {'circle-radius': ['case', ['all', ['>=', ['get', 'Contribution Total'], ['-', 0, 200.0]], ['<=', ['get', 'Contribution Total'], 150.0]], ['/', 3.7795275591, 2], ['all', ['>', ['get', 'Contribution Total'], 150.0], ['<=', ['get', 'Contribution Total'], 350.0]], ['/', 3.7795275591, 2], ['all', ['>', ['get', 'Contribution Total'], 350.0], ['<=', ['get', 'Contribution Total'], 600.0]], ['/', 3.7795275591, 2], ['all', ['>', ['get', 'Contribution Total'], 600.0], ['<=', ['get', 'Contribution Total'], 1000.0]], ['/', 3.7795275591, 2], ['all', ['>', ['get', 'Contribution Total'], 1000.0], ['<=', ['get', 'Contribution Total'], 2800.0]], ['/', 3.7795275591, 2], 1], 'circle-color': ['case', ['all', ['>=', ['get', 'Contribution Total'], ['-', 0, 200.0]], ['<=', ['get', 'Contribution Total'], 150.0]], '#8b978a', ['all', ['>', ['get', 'Contribution Total'], 150.0], ['<=', ['get', 'Contribution Total'], 350.0]], '#6eb167', ['all', ['>', ['get', 'Contribution Total'], 350.0], ['<=', ['get', 'Contribution Total'], 600.0]], '#52cb45', ['all', ['>', ['get', 'Contribution Total'], 600.0], ['<=', ['get', 'Contribution Total'], 1000.0]], '#35e522', ['all', ['>', ['get', 'Contribution Total'], 1000.0], ['<=', ['get', 'Contribution Total'], 2800.0]], '#19fe00', '#ffffff'], 'circle-opacity': ['case', ['all', ['>=', ['get', 'Contribution Total'], ['-', 0, 200.0]], ['<=', ['get', 'Contribution Total'], 150.0]], 1.0, ['all', ['>', ['get', 'Contribution Total'], 150.0], ['<=', ['get', 'Contribution Total'], 350.0]], 1.0, ['all', ['>', ['get', 'Contribution Total'], 350.0], ['<=', ['get', 'Contribution Total'], 600.0]], 1.0, ['all', ['>', ['get', 'Contribution Total'], 600.0], ['<=', ['get', 'Contribution Total'], 1000.0]], 1.0, ['all', ['>', ['get', 'Contribution Total'], 1000.0], ['<=', ['get', 'Contribution Total'], 2800.0]], 1.0, 1], 'circle-stroke-width': ['case', ['all', ['>=', ['get', 'Contribution Total'], ['-', 0, 200.0]], ['<=', ['get', 'Contribution Total'], 150.0]], 0, ['all', ['>', ['get', 'Contribution Total'], 150.0], ['<=', ['get', 'Contribution Total'], 350.0]], 0, ['all', ['>', ['get', 'Contribution Total'], 350.0], ['<=', ['get', 'Contribution Total'], 600.0]], 0, ['all', ['>', ['get', 'Contribution Total'], 600.0], ['<=', ['get', 'Contribution Total'], 1000.0]], 0, ['all', ['>', ['get', 'Contribution Total'], 1000.0], ['<=', ['get', 'Contribution Total'], 2800.0]], 0, 1], 'circle-stroke-color': ['case', ['all', ['>=', ['get', 'Contribution Total'], ['-', 0, 200.0]], ['<=', ['get', 'Contribution Total'], 150.0]], '#3d8035', ['all', ['>', ['get', 'Contribution Total'], 150.0], ['<=', ['get', 'Contribution Total'], 350.0]], '#3d8035', ['all', ['>', ['get', 'Contribution Total'], 350.0], ['<=', ['get', 'Contribution Total'], 600.0]], '#3d8035', ['all', ['>', ['get', 'Contribution Total'], 600.0], ['<=', ['get', 'Contribution Total'], 1000.0]], '#3d8035', ['all', ['>', ['get', 'Contribution Total'], 1000.0], ['<=', ['get', 'Contribution Total'], 2800.0]], '#3d8035', '#000000']}
        }
],
}