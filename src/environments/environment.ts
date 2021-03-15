// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  s3Url: '',
  twitchLink: 'https://player.twitch.tv/?channel={{channel}}&parent=localhost&muted=true',
  templates: [
    [
      {
        id: 'o-s',
        src: '../../assets/images/one_screen.png',
        url: 'main'
      },
      {
        id: 't-s',
        src: '../../assets/images/two_screens.png',
        url: 'split'
      }
    ],
    [
      {
        id: 'f-s',
        src: '../../assets/images/four_screens.png',
        url: 'multi'
      },
      {
        id: 'f-s-m',
        src: '../../assets/images/four_with_main.png',
        url: 'multi-main'
      }
    ]
  ],
  twitchId: "hmmpxx824ypngoxd8ouqs6f98ltym4",
  twitchSecret: "izhy9ko997p6fgy4fecjavfcr0x6k4"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
