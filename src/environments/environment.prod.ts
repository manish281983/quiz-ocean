import mockNavList from '../assets/json/nav-bar.json';


export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyAdIuaCryG7BYKl9W72Rq6LNHNlAU7OGrk',
    authDomain: 'ecommerce-app-cef4a.firebaseapp.com',
    databaseURL: 'https://ecommerce-app-cef4a.firebaseio.com',
    projectId: 'ecommerce-app-cef4a',
    storageBucket: 'ecommerce-app-cef4a.appspot.com',
    messagingSenderId: '551765696453',
    appId: '1:551765696453:web:bf903e93e7deb07cf6f5ac'
  },
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