export class ApiPresets {
  static URL: string;
  static setURL(url: string) {
    ApiPresets.URL = url;
  }

  static getURL() {
    return ApiPresets.URL;
  }

  static getErrorCodes() {
    return {
      tokenFail: 403,
      keyFail: 498,
      userError: 401,
      internalServer: 500,
      appTimeout: 604,
      noConnection: undefined,
    };
  }

  // not needed
  //   static getFullURL() {
  //     return ApiPresets.URL
  //   }
}
