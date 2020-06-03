// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import mockNavList from '../assets/json/nav-bar.json';


export const environment = {
  production: false,
  APP_CONFIG : {
    categoryAPI : {
      url: 'https://t2uovvf4ii.execute-api.us-east-2.amazonaws.com/develop/details'
    },
    productAPI : {
      url: 'https://t2uovvf4ii.execute-api.us-east-2.amazonaws.com/develop/details'
    },
    featureAPI : {
      url: 'https://t2uovvf4ii.execute-api.us-east-2.amazonaws.com/develop/details'
    },
    cartAPI : {
      url: 'https://560fkqcgt0.execute-api.us-east-2.amazonaws.com/develop/details'
    },
    orderAPI : {
      url: 'https://dafrh1lauk.execute-api.us-east-2.amazonaws.com/develop/userorder'
    }
  }
};
