
  export class BackgroundImage {
    private static map = new Map<string, NodeRequire>([
      ['resources.png',
        require('../assets/app-images/resources.png'),
      ],
      ['splash.png',
        require('../assets/app-images/splash.png'),
      ],
      ['about-us.png',
      require('../assets/app-images/about-us.png')
      ],
      ['news.png',
      require('../assets/app-images/news.png')
      ],
      ['bigfoot-logo.png',
      require('../assets/app-images/bigfoot-logo.png')
      ],
      ['calendar.png',
      require('../assets/app-images/calendar.png')
      ],
      ['public-health.png',
      require('../assets/app-images/public-health.png')
      ],
      ['tribal.png',
      require('../assets/app-images/tribal.png')
      ],
      ['phone-ringing.png',
      require('../assets/app-images/phone-ringing.png')
      ],
      ['colville-hike.png',
      require('../assets/app-images/colville-hike.png')
      ],
      ['colville-map.png',
      require('../assets/app-images/colville-map.png')
      ],
      ['coulee-dam.png',
      require('../assets/app-images/coulee-dam.png')
      ],
      ['feedback-image.png',
      require('../assets/app-images/feedback-image.png')
      ],
      ['flo-dell.png',
      require('../assets/app-images/flo-dell.png')
      ],
      ['helping-hands.avif',
      require('../assets/app-images/helping-hands.avif')
      ],
      ['hunting-license-image.png',
      require('../assets/app-images/hunting-license-image.png')
      ],
      ['native-horses.png',
      require('../assets/app-images/native-horses.png')
      ],
      ['orange-contact.png',
      require('../assets/app-images/orange-contact.png')
      ],
      ['988-logo.png',
      require('../assets/app-images/988-logo.png')
      ],
      ['stop-overdose.jpg',
      require('../assets/app-images/stop-overdose.jpg')
      ],
      ['notification-alert.png',
      require('../assets/app-images/notification-alert.png')
      ],
      ['inchelium-meal-site.jpeg',
      require('../assets/app-images/inchelium-meal-site.jpeg')
      ],
      ['keller-meal-site.jpeg',
      require('../assets/app-images/keller-meal-site.jpeg')
      ],
      ['nespelem-meal-site.jpeg',
      require('../assets/app-images/nespelem-meal-site.jpeg')
      ],
      ['bhp-logo.png',
      require('../assets/app-images/bhp-logo.png')
      ],
      ['shiba-hd-logo.png',
      require('../assets/app-images/shiba-hd-logo.png')
      ],
      ['elder-resources.png',
      require('../assets/app-images/elder-resources.png')
      ],
    ]);

    static GetImage = (key:string):NodeRequire => {
      return this.map.get(key);
    }

    static AddImage = (key:string, path:NodeRequire) => {
      this.map.set(key, path);
    }
  }