
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
    ]);

    static GetImage = (key:string):NodeRequire => {
      return this.map.get(key);
    }

    static AddImage = (key:string, path:NodeRequire) => {
      this.map.set(key, path);
    }
  }