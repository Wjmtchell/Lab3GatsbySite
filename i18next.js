const i18next = require('i18next');
const Backend = require('i18next-locize-backend');

i18next
    .use(Backend)
    .init({
        lng:'en',
        fallbackLng: 'en',
        debug: true,
        beackend:{
            projectId: '3cc31e1c-db80-4280-a832-13111693710a',
            apiKey: '640ced37-c6a4-49ce-8d31-4be7f1879971',
            referenceLng: 'en',
            version:'latest'
        },
        
    });
i18next.loadLanguages(['en','zh'], (err,t)=> {
    if (err) return console.log('Error loading languages:', err);
});