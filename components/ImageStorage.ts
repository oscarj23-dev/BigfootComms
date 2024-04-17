
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
      ['blue-phone.png',
      require('../assets/app-images/blue-phone.png')
      ],
      ['blue-robe-woman.png',
      require('../assets/app-images/blue-robe-woman.png')
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
      ['handshake.png',
      require('../assets/app-images/handshake.png')
      ],
      ['hunting-license-image.png',
      require('../assets/app-images/hunting-license-image.png')
      ],
      ['lady-elder-pancho.png',
      require('../assets/app-images/lady-elder-pancho.png')
      ],
      ['native-horses.png',
      require('../assets/app-images/native-horses.png')
      ],
      ['orange-contact.png',
      require('../assets/app-images/orange-contact.png')
      ],
      ['suicide-crisis-lifeline.png',
      require('../assets/app-images/suicide-crisis-lifeline.png')
      ],
      ['stop-overdose.png',
      require('../assets/app-images/stop-overdose.png')
      ],
      ['shiba.png',
      require('../assets/app-images/shiba.png')
      ],
      ['noti-bell.png',
      require('../assets/app-images/noti-bell.png')
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