(function(){
    var script = {
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -36.41,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_56E4C16A_4F7B_EE4E_41A3_D3AF485D9AB9",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_423853DF_4F17_9247_41C5_B741034420F7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_423853DF_4F17_9247_41C5_B741034420F7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_424E678C_4F16_92CA_41CD_C1732243E2AB",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_420A5873_4F16_FE5E_41C4_2031C34D743C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5",
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -103.91,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_552E1254_4F7B_F25A_41C5_830934F90CF4",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -84.68,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_560910CE_4F7B_EE49_41A7_C76258B02E13",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 94.91,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_567EE0AE_4F7B_EEC6_41A0_32312FACDF94",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -1.23,
   "backwardYaw": -160.77,
   "distance": 1,
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  }
 ],
 "hfovMin": "110%",
 "hfov": 360,
 "label": "SAM_100_0071",
 "id": "panorama_423853DF_4F17_9247_41C5_B741034420F7",
 "thumbnailUrl": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5CF9F3A3_4F0B_F2FE_41BE_14BF28155A85"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 101.05,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_555D71F7_4F7B_EE47_41C3_53C7A8CA7CC8",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 77.73,
   "backwardYaw": -86.32,
   "distance": 1,
   "panorama": "this.panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -78.95,
   "backwardYaw": 76.09,
   "distance": 1,
   "panorama": "this.panorama_420A5873_4F16_FE5E_41C4_2031C34D743C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "SAM_100_0076",
 "id": "panorama_424E678C_4F16_92CA_41CD_C1732243E2AB",
 "thumbnailUrl": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5BBF8F4E_4F37_9249_41C3_1C2EBA75532A",
  "this.overlay_59FE9A89_4F37_B2CA_41C4_6F1A36F17F29"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_camera",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_rotation"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_40E056F0_4F17_9259_41CF_07D928B0A263_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 150.14,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_56F7317A_4F7B_EE49_41C8_B33B9FCB92F9",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 86.73,
   "backwardYaw": -29.86,
   "distance": 1,
   "panorama": "this.panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -85.09,
   "backwardYaw": -87.14,
   "distance": 1,
   "panorama": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -160.77,
   "backwardYaw": -1.23,
   "distance": 1,
   "panorama": "this.panorama_423853DF_4F17_9247_41C5_B741034420F7"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "SAM_100_0072",
 "id": "panorama_40E056F0_4F17_9259_41CF_07D928B0A263",
 "thumbnailUrl": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5B08338A_4F0A_72CE_41AB_155DA02A1257",
  "this.overlay_5CC1C64A_4F0A_7249_41AC_66AD0772DF11",
  "this.overlay_5EEEC5CC_4F0E_B64A_41D2_97BA900BF390"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 150.14,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_56DAC15A_4F7B_EE4E_41D1_5A0F4D7829FB",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 87.55,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_565CD080_4F7B_EEB9_4191_0488E9682DC4",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 94.91,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_554371D7_4F7B_EE46_41D3_762AC2A752A0",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 94.91,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_56B0D1C8_4F7B_EE49_41D1_C1B50426F349",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 6.55,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_5552C1E7_4F7B_EE46_41C9_6D1F272D7BB2",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 96.55,
   "backwardYaw": -97.77,
   "distance": 1,
   "panorama": "this.panorama_420A5873_4F16_FE5E_41C4_2031C34D743C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -90,
   "backwardYaw": 171.82,
   "distance": 1,
   "panorama": "this.panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "SAM_100_0078",
 "id": "panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF",
 "thumbnailUrl": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5CC651FE_4F3A_AE49_41B7_E71D08ACD1CE",
  "this.overlay_5CEF2C4F_4F3A_B647_41CA_B780CB42A811"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -99,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_5635211C_4F7B_EFC9_41D0_552EB0BF602C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -84.68,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_562B510C_4F7B_EFCA_41B2_DA393F1C7BD4",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -84.68,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_561B10ED_4F7B_EE4A_41BB_828F13B55DF2",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 90,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_56C5713B_4F7B_EFCE_41C3_02DFAFC086E1",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 143.59,
   "backwardYaw": -92.45,
   "distance": 1,
   "panorama": "this.panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -86.32,
   "backwardYaw": 77.73,
   "distance": 1,
   "panorama": "this.panorama_424E678C_4F16_92CA_41CD_C1732243E2AB"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "SAM_100_0075",
 "id": "panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F",
 "thumbnailUrl": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5DBE5441_4F0A_75BB_41CE_D88178A05DD1",
  "this.overlay_5D8E9141_4F0A_6FBA_41B0_C92167C16DE5"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -29.86,
   "backwardYaw": 86.73,
   "distance": 1,
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 160.77,
   "backwardYaw": 86.73,
   "distance": 1,
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 160.77,
   "backwardYaw": 86.73,
   "distance": 1,
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -29.86,
   "backwardYaw": 166.09,
   "distance": 1,
   "panorama": "this.panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "SAM_100_0073",
 "id": "panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3",
 "thumbnailUrl": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5A6654B1_4F0E_B6DB_41C0_2D4AA1826F46",
  "this.overlay_5D1E61E0_4F0E_AE7A_41CC_7BFDDCFF9E6B"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -93.27,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_579CCFF3_4F7B_925F_4183_B91BF5EB6A01",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -87.14,
   "backwardYaw": -85.09,
   "distance": 1,
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -87.14,
   "backwardYaw": -85.09,
   "distance": 1,
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 95.32,
   "backwardYaw": -85.09,
   "distance": 1,
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 95.32,
   "backwardYaw": -173.45,
   "distance": 1,
   "panorama": "this.panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "SAM_100_0081",
 "id": "panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5",
 "thumbnailUrl": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5A2D3477_4F3E_9646_41D1_E470537BF04A",
  "this.overlay_5BD3D09D_4F3E_EECB_41CA_14E8D71E653D"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -13.91,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_56428041_4F7B_EDBA_419C_8DB1BF57EB22",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 94.91,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_56A0E1B8_4F7B_EECA_41C5_969E2BE45FFD",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -93.27,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_57B02022_4F7B_EDF9_41C0_B002FC67BC75",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 76.09,
   "backwardYaw": -78.95,
   "distance": 1,
   "panorama": "this.panorama_424E678C_4F16_92CA_41CD_C1732243E2AB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -97.77,
   "backwardYaw": 96.55,
   "distance": 1,
   "panorama": "this.panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "SAM_100_0077",
 "id": "panorama_420A5873_4F16_FE5E_41C4_2031C34D743C",
 "thumbnailUrl": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5C57D6CB_4F36_724F_41D0_E17AEA1D81FD",
  "this.overlay_5C59B14A_4F36_6E4E_41CE_F22379ED3DF4"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_423853DF_4F17_9247_41C5_B741034420F7_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetHfov": 130,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ],
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -93.27,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_57ABF012_4F7B_EDDE_41C8_EBA467F439F9",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 178.77,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_56913199_4F7B_EECB_41C8_12027E0AE35C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -102.27,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_566F309F_4F7B_EEC7_4179_96C6D433B9B0",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -83.45,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_556F2206_4F7B_EDC6_41AC_21048AE4351D",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_56BE8BFD_4F36_B24B_41B9_9A9B50D4B80A.mp3",
  "oggUrl": "media/audio_56BE8BFD_4F36_B24B_41B9_9A9B50D4B80A.ogg"
 },
 "id": "audio_56BE8BFD_4F36_B24B_41B9_9A9B50D4B80A",
 "data": {
  "label": "Casting Crowns - Nobody feat. Matthew West (Visual(MP3_128K)"
 }
},
{
 "class": "PlayList",
 "id": "playList_575D7C4A_4F39_964E_4197_DB5873F66E6A",
 "items": [
  {
   "media": "this.panorama_423853DF_4F17_9247_41C5_B741034420F7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_423853DF_4F17_9247_41C5_B741034420F7_camera",
   "begin": "this.setEndToItemIndex(this.playList_575D7C4A_4F39_964E_4197_DB5873F66E6A, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263_camera",
   "begin": "this.setEndToItemIndex(this.playList_575D7C4A_4F39_964E_4197_DB5873F66E6A, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_camera",
   "begin": "this.setEndToItemIndex(this.playList_575D7C4A_4F39_964E_4197_DB5873F66E6A, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_camera",
   "begin": "this.setEndToItemIndex(this.playList_575D7C4A_4F39_964E_4197_DB5873F66E6A, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_camera",
   "begin": "this.setEndToItemIndex(this.playList_575D7C4A_4F39_964E_4197_DB5873F66E6A, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_424E678C_4F16_92CA_41CD_C1732243E2AB",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_camera",
   "begin": "this.setEndToItemIndex(this.playList_575D7C4A_4F39_964E_4197_DB5873F66E6A, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_420A5873_4F16_FE5E_41C4_2031C34D743C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_camera",
   "begin": "this.setEndToItemIndex(this.playList_575D7C4A_4F39_964E_4197_DB5873F66E6A, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_camera",
   "begin": "this.setEndToItemIndex(this.playList_575D7C4A_4F39_964E_4197_DB5873F66E6A, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_camera",
   "begin": "this.setEndToItemIndex(this.playList_575D7C4A_4F39_964E_4197_DB5873F66E6A, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_camera",
   "begin": "this.setEndToItemIndex(this.playList_575D7C4A_4F39_964E_4197_DB5873F66E6A, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_camera",
   "begin": "this.setEndToItemIndex(this.playList_575D7C4A_4F39_964E_4197_DB5873F66E6A, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -8.18,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_550E8235_4F7B_EDDA_41CA_CA37A7FE003E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -85.09,
   "backwardYaw": 81,
   "distance": 1,
   "panorama": "this.panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 171.82,
   "backwardYaw": -90,
   "distance": 1,
   "panorama": "this.panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "SAM_100_0079",
 "id": "panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32",
 "thumbnailUrl": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_57644900_4F3A_BFB9_41B5_E21A90F2B410",
  "this.overlay_5B1384B8_4F3A_96CA_41CB_163EB41C9357"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 82.23,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_557F0226_4F7B_EDF9_41D2_79F2E9BCC8C0",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 166.09,
   "backwardYaw": -29.86,
   "distance": 1,
   "panorama": "this.panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -92.45,
   "backwardYaw": 143.59,
   "distance": 1,
   "panorama": "this.panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "SAM_100_0074",
 "id": "panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03",
 "thumbnailUrl": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5CF7C5F9_4F0A_964A_41AE_D495E15F0DAF",
  "this.overlay_5A679617_4F0A_75C7_41BF_348C8CC5119E"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 93.68,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_551E6245_4F7B_EDBB_41C7_11DEDF4EBB4E",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 81,
   "backwardYaw": -85.09,
   "distance": 1,
   "panorama": "this.panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -173.45,
   "backwardYaw": 95.32,
   "distance": 1,
   "panorama": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -173.45,
   "backwardYaw": 95.32,
   "distance": 1,
   "panorama": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 81,
   "backwardYaw": 95.32,
   "distance": 1,
   "panorama": "this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "SAM_100_0080",
 "id": "panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A",
 "thumbnailUrl": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5AE902E9_4F3E_924A_41B1_AFE93CB9427E",
  "this.overlay_5B8DCEB1_4F3E_92DA_41B7_FBA349FA0DD7"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 92.86,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_5686E189_4F7B_EECA_41CA_44BBA673AF1D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 19.23,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_564CC060_4F7B_EE7A_41D0_2F5D4DE2CF87",
 "automaticZoomSpeed": 10
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipOpacity": 1,
 "minWidth": 100,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderRadius": 0,
 "minHeight": 50,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "shadow": false,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "borderRadius": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "class": "ViewerArea"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263, this.camera_564CC060_4F7B_EE7A_41D0_2F5D4DE2CF87); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.91,
   "image": "this.AnimatedImageResource_57A7BC4A_4F39_964E_41C7_E178984E179B",
   "pitch": -0.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.23,
   "distance": 100
  }
 ],
 "id": "overlay_5CF9F3A3_4F0B_F2FE_41BE_14BF28155A85",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.84,
   "image": "this.AnimatedImageResource_57A1BC5A_4F39_9649_41A4_480F08FAD459",
   "pitch": -5.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -78.95,
   "distance": 100
  }
 ],
 "id": "overlay_5BBF8F4E_4F37_9249_41C3_1C2EBA75532A",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -78.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.79,
   "image": "this.AnimatedImageResource_57A10C5A_4F39_9649_419E_F491B4F48A3A",
   "pitch": -7.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 77.73,
   "distance": 100
  }
 ],
 "id": "overlay_59FE9A89_4F37_B2CA_41C4_6F1A36F17F29",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 77.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_1_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3, this.camera_56F7317A_4F7B_EE49_41C8_B33B9FCB92F9); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.78,
   "image": "this.AnimatedImageResource_57A51C5A_4F39_9649_41CE_878451226F03",
   "pitch": -7.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 86.73,
   "distance": 100
  }
 ],
 "id": "overlay_5B08338A_4F0A_72CE_41AB_155DA02A1257",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5, this.camera_5686E189_4F7B_EECA_41CA_44BBA673AF1D); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.88,
   "image": "this.AnimatedImageResource_57A4EC5A_4F39_9649_41CC_4607E78B0DF5",
   "pitch": -3.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -85.09,
   "distance": 100
  }
 ],
 "id": "overlay_5CC1C64A_4F0A_7249_41AC_66AD0772DF11",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_1_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_423853DF_4F17_9247_41C5_B741034420F7, this.camera_56913199_4F7B_EECB_41C8_12027E0AE35C); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.43,
   "image": "this.AnimatedImageResource_57A44C5A_4F39_9649_41D2_751CD0DF4B05",
   "pitch": -15.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -160.77,
   "distance": 100
  }
 ],
 "id": "overlay_5EEEC5CC_4F0E_B64A_41D2_97BA900BF390",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_1_HS_2_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.74,
   "image": "this.AnimatedImageResource_57A16C5A_4F39_9649_41D3_131BB868448F",
   "pitch": -9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -90,
   "distance": 100
  }
 ],
 "id": "overlay_5CC651FE_4F3A_AE49_41B7_E71D08ACD1CE",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.74,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.75,
   "image": "this.AnimatedImageResource_57A0FC5A_4F39_9649_41D1_1F693B50CC58",
   "pitch": -8.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 96.55,
   "distance": 100
  }
 ],
 "id": "overlay_5CEF2C4F_4F3A_B647_41CA_B780CB42A811",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.75,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 96.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_1_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_424E678C_4F16_92CA_41CD_C1732243E2AB, this.camera_566F309F_4F7B_EEC7_4179_96C6D433B9B0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.69,
   "image": "this.AnimatedImageResource_57A2BC5A_4F39_9649_41C2_C1576F5A5C68",
   "pitch": -10.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -86.32,
   "distance": 100
  }
 ],
 "id": "overlay_5DBE5441_4F0A_75BB_41CE_D88178A05DD1",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.69,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03, this.camera_565CD080_4F7B_EEB9_4191_0488E9682DC4); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.78,
   "image": "this.AnimatedImageResource_57A1DC5A_4F39_9649_4193_2C565115B5AB",
   "pitch": -7.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 143.59,
   "distance": 100
  }
 ],
 "id": "overlay_5D8E9141_4F0A_6FBA_41B0_C92167C16DE5",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 143.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_1_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03, this.camera_56428041_4F7B_EDBA_419C_8DB1BF57EB22); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.84,
   "image": "this.AnimatedImageResource_57A41C5A_4F39_9649_41C2_CFEA7C115527",
   "pitch": -5.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -29.86,
   "distance": 100
  }
 ],
 "id": "overlay_5A6654B1_4F0E_B6DB_41C0_2D4AA1826F46",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.84,
   "image": "this.AnimatedImageResource_57A3EC5A_4F39_9649_41B5_1FFDB8521BEF",
   "pitch": -5.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 160.77,
   "distance": 100
  }
 ],
 "id": "overlay_5D1E61E0_4F0E_AE7A_41CC_7BFDDCFF9E6B",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 160.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_1_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_40E056F0_4F17_9259_41CF_07D928B0A263, this.camera_56B0D1C8_4F7B_EE49_41D1_C1B50426F349); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.72,
   "image": "this.AnimatedImageResource_57AE8C5A_4F39_9649_41CF_4740B7B40C7C",
   "pitch": -9.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -87.14,
   "distance": 100
  }
 ],
 "id": "overlay_5A2D3477_4F3E_9646_41D1_E470537BF04A",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.72,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A, this.camera_5552C1E7_4F7B_EE46_41C9_6D1F272D7BB2); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.89,
   "image": "this.AnimatedImageResource_57AE1C5A_4F39_9649_41D0_CAD1822E769A",
   "pitch": -3.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 95.32,
   "distance": 100
  }
 ],
 "id": "overlay_5BD3D09D_4F3E_EECB_41CA_14E8D71E653D",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.89,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_1_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.81,
   "image": "this.AnimatedImageResource_57A09C5A_4F39_9649_41BC_D2FC86C33AB0",
   "pitch": -6.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -97.77,
   "distance": 100
  }
 ],
 "id": "overlay_5C57D6CB_4F36_724F_41D0_E17AEA1D81FD",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -97.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.85,
   "image": "this.AnimatedImageResource_57A19C5A_4F39_9649_41CE_652852EAB075",
   "pitch": -5.32,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 76.09,
   "distance": 100
  }
 ],
 "id": "overlay_5C59B14A_4F36_6E4E_41CE_F22379ED3DF4",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_1_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.88,
   "image": "this.AnimatedImageResource_57A05C5A_4F39_9649_41D2_C553E6899925",
   "pitch": -3.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -85.09,
   "distance": 100
  }
 ],
 "id": "overlay_57644900_4F3A_BFB9_41B5_E21A90F2B410",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.84,
   "image": "this.AnimatedImageResource_57A02C5A_4F39_9649_419E_3451907D7180",
   "pitch": -5.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 171.82,
   "distance": 100
  }
 ],
 "id": "overlay_5B1384B8_4F3A_96CA_41CB_163EB41C9357",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.84,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_1_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.77,
   "image": "this.AnimatedImageResource_57A36C5A_4F39_9649_41AE_95A601B29D3B",
   "pitch": -8.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -92.45,
   "distance": 100
  }
 ],
 "id": "overlay_5CF7C5F9_4F0A_964A_41AE_D495E15F0DAF",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.72,
   "image": "this.AnimatedImageResource_57A2DC5A_4F39_9649_41BD_33BF53C70DAB",
   "pitch": -9.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 166.09,
   "distance": 100
  }
 ],
 "id": "overlay_5A679617_4F0A_75C7_41BF_348C8CC5119E",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.72,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_1_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5, this.camera_561B10ED_4F7B_EE4A_41BB_828F13B55DF2); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.83,
   "image": "this.AnimatedImageResource_57AFBC5A_4F39_9649_41C4_CD3403E65748",
   "pitch": -6.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -173.45,
   "distance": 100
  }
 ],
 "id": "overlay_5AE902E9_4F3E_924A_41B1_AFE93CB9427E",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5, this.camera_562B510C_4F7B_EFCA_41B2_DA393F1C7BD4); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.91,
   "image": "this.AnimatedImageResource_57AF3C5A_4F39_9649_41BD_A19D8494AFE3",
   "pitch": 0.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 81,
   "distance": 100
  }
 ],
 "id": "overlay_5B8DCEB1_4F3E_92DA_41B7_FBA349FA0DD7",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_1_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.41
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57A7BC4A_4F39_964E_41C7_E178984E179B",
 "levels": [
  {
   "url": "media/panorama_423853DF_4F17_9247_41C5_B741034420F7_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57A1BC5A_4F39_9649_41A4_480F08FAD459",
 "levels": [
  {
   "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57A10C5A_4F39_9649_419E_F491B4F48A3A",
 "levels": [
  {
   "url": "media/panorama_424E678C_4F16_92CA_41CD_C1732243E2AB_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57A51C5A_4F39_9649_41CE_878451226F03",
 "levels": [
  {
   "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57A4EC5A_4F39_9649_41CC_4607E78B0DF5",
 "levels": [
  {
   "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57A44C5A_4F39_9649_41D2_751CD0DF4B05",
 "levels": [
  {
   "url": "media/panorama_40E056F0_4F17_9259_41CF_07D928B0A263_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57A16C5A_4F39_9649_41D3_131BB868448F",
 "levels": [
  {
   "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57A0FC5A_4F39_9649_41D1_1F693B50CC58",
 "levels": [
  {
   "url": "media/panorama_42382A37_4F16_9DC7_41C9_3B0139B21EEF_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57A2BC5A_4F39_9649_41C2_C1576F5A5C68",
 "levels": [
  {
   "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57A1DC5A_4F39_9649_4193_2C565115B5AB",
 "levels": [
  {
   "url": "media/panorama_4208D693_4F16_B2DF_41D1_4784D4135F8F_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57A41C5A_4F39_9649_41C2_CFEA7C115527",
 "levels": [
  {
   "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57A3EC5A_4F39_9649_41B5_1FFDB8521BEF",
 "levels": [
  {
   "url": "media/panorama_5F8AB6D6_4F16_7259_41B0_5BCAA33625A3_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57AE8C5A_4F39_9649_41CF_4740B7B40C7C",
 "levels": [
  {
   "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57AE1C5A_4F39_9649_41D0_CAD1822E769A",
 "levels": [
  {
   "url": "media/panorama_5F4DC969_4F16_7E4A_41CE_2DEBC07F88A5_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57A09C5A_4F39_9649_41BC_D2FC86C33AB0",
 "levels": [
  {
   "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57A19C5A_4F39_9649_41CE_652852EAB075",
 "levels": [
  {
   "url": "media/panorama_420A5873_4F16_FE5E_41C4_2031C34D743C_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57A05C5A_4F39_9649_41D2_C553E6899925",
 "levels": [
  {
   "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57A02C5A_4F39_9649_419E_3451907D7180",
 "levels": [
  {
   "url": "media/panorama_4238AAD1_4F16_B25A_41B9_76EFD8D8FF32_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57A36C5A_4F39_9649_41AE_95A601B29D3B",
 "levels": [
  {
   "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57A2DC5A_4F39_9649_41BD_33BF53C70DAB",
 "levels": [
  {
   "url": "media/panorama_42A4368B_4F16_92CF_41C2_9CC9C2681B03_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57AFBC5A_4F39_9649_41C4_CD3403E65748",
 "levels": [
  {
   "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_57AF3C5A_4F39_9649_41BD_A19D8494AFE3",
 "levels": [
  {
   "url": "media/panorama_5F997A33_4F16_9DDE_41C3_9F8DF4BCEC8A_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ]
}],
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "vrPolyfillScale": 0.7,
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "children": [
  "this.MainViewer",
  {
   "layout": "horizontal",
   "children": [
    {
     "layout": "horizontal",
     "horizontalAlign": "left",
     "scrollBarOpacity": 0.5,
     "scrollBarColor": "#FFFFFF",
     "scrollBarVisible": "rollOver",
     "minWidth": 0,
     "backgroundColorDirection": "vertical",
     "itemMode": "normal",
     "itemLabelFontStyle": "normal",
     "itemLabelHorizontalAlign": "center",
     "borderSize": 0,
     "itemThumbnailShadowColor": "#000000",
     "itemPaddingRight": 3,
     "maxWidth": 800,
     "itemLabelTextDecoration": "none",
     "itemLabelFontFamily": "Arial",
     "itemLabelGap": 5,
     "itemLabelFontWeight": "normal",
     "verticalAlign": "top",
     "class": "ThumbnailList",
     "playList": "this.playList_575D7C4A_4F39_964E_4197_DB5873F66E6A",
     "itemThumbnailShadowOpacity": 0.8,
     "itemOpacity": 1,
     "scrollBarMargin": 2,
     "paddingRight": 20,
     "minHeight": 0,
     "itemVerticalAlign": "middle",
     "itemLabelFontSize": 14,
     "selectedItemLabelFontWeight": "bold",
     "backgroundColor": [
      "#000000"
     ],
     "backgroundColorRatios": [
      0
     ],
     "itemThumbnailShadowBlurRadius": 4,
     "itemBorderRadius": 0,
     "itemPaddingLeft": 3,
     "itemLabelPosition": "bottom",
     "itemThumbnailScaleMode": "fit_outside",
     "backgroundOpacity": 0.2,
     "itemHorizontalAlign": "center",
     "itemLabelFontColor": "#FFFFFF",
     "gap": 10,
     "itemThumbnailHeight": 75,
     "itemBackgroundOpacity": 0,
     "itemThumbnailShadowSpread": 1,
     "maxHeight": 600,
     "itemBackgroundColorDirection": "vertical",
     "paddingTop": 10,
     "paddingLeft": 20,
     "itemThumbnailOpacity": 1,
     "itemThumbnailShadowHorizontalLength": 3,
     "itemThumbnailShadow": true,
     "itemThumbnailBorderRadius": 5,
     "itemPaddingTop": 3,
     "data": {
      "name": "ThumbnailList5930"
     },
     "itemThumbnailShadowVerticalLength": 3,
     "itemBackgroundColor": [],
     "itemPaddingBottom": 3,
     "scrollBarWidth": 10,
     "paddingBottom": 10,
     "itemThumbnailWidth": 100,
     "itemBackgroundColorRatios": [],
     "propagateClick": false,
     "shadow": false,
     "borderRadius": 5
    }
   ],
   "scrollBarOpacity": 0.5,
   "left": 0,
   "minWidth": 20,
   "scrollBarColor": "#000000",
   "right": 0,
   "borderSize": 0,
   "scrollBarVisible": "rollOver",
   "verticalAlign": "bottom",
   "scrollBarMargin": 2,
   "contentOpaque": false,
   "paddingRight": 0,
   "bottom": 0,
   "height": 200,
   "minHeight": 20,
   "backgroundOpacity": 0,
   "gap": 10,
   "paddingTop": 0,
   "paddingLeft": 0,
   "paddingBottom": 0,
   "shadow": false,
   "data": {
    "name": "Container5929"
   },
   "scrollBarWidth": 10,
   "borderRadius": 0,
   "overflow": "visible",
   "horizontalAlign": "center",
   "propagateClick": false,
   "class": "Container"
  }
 ],
 "borderSize": 0,
 "start": "this.init(); this.syncPlaylists([this.playList_575D7C4A_4F39_964E_4197_DB5873F66E6A,this.mainPlayList]); this.playAudioList([this.audio_56BE8BFD_4F36_B24B_41B9_9A9B50D4B80A])",
 "scrollBarVisible": "rollOver",
 "mobileMipmappingEnabled": false,
 "layout": "absolute",
 "scripts": {
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "existsKey": function(key){  return key in window; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "unregisterKey": function(key){  delete window[key]; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "defaultVRPointer": "laser",
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "downloadEnabled": false,
 "width": "100%",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "height": "100%",
 "gap": 10,
 "mouseWheelEnabled": true,
 "shadow": false,
 "data": {
  "name": "Player5927"
 },
 "desktopMipmappingEnabled": false,
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Player"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
