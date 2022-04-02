// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  lib: {
    api: ["studentsUrl", "teachersUrl", "lessonsUrl", "groupsUrl"]
  },
  production: false,
  studentsUrl: "http://localhost:3000/getStudents",
  teachersUrl: "http://localhost:3000/getTeachers",
  lessonsUrl: "http://localhost:3000/getLessons",
  groupsUrl: "http://localhost:3000/getGroups",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
