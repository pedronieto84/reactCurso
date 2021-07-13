const data = [
    {
        id: 1,
        title: 'Pedro Nieto',
        info: [
            'Nascut el 1984 a Terrassa llicenciat en ADE (Universitat Autònoma)',
            'Desenvolupador FullStack JS, freelance (x ex: CRM d’SKODA España…), mentor a Barcelona Activa',
            'Director de l’empresa www.worktocloud.com (SASS per facilitar teletreball)',
            'Experiència en: Javascript, Typescript, Angular, React, Vue, Capacitor, Ionic, Node, Firebase, Google Cloud,  AWS,  SQL, NoSQL, Express, Electronjs',
            'En resum… “un pringat mes”',
            'Projectes, Startups, consells,  opinió, dubtes… , escriviu-me privat'
        ],
        tags: ['profe', 'tutor', 'mentor', 'pedro.nieto.sanchez@gmail.com', 'pedronieto@worktocloud.es', 'sanchezpedronieto'],
        img: ''
    },
        {
        id: 2,
        title: 'Que és reactjs?',
        info: [
            'Javascript Library for Building UI (no arriba a framework pero casi)',
            'Declaratiu (decimos que hay que hacer). (no es imperativo)',

            'Basat en componentes',
            'Learn Once Write Everywhere (React Native) permet també construir aplicacions natives para Adroid y IOS',
            'Está “maintained” per Facebook y el fan servir empreses com Facebook, Netflix, Uber…'

        ],
        tags: ['que és reactjs', 'framework', 'declaratiu'],
        img: ''
    },  {
        id: 3,
        title: 'Eines: nodejs',
        info: [
            'instalar nodejs',
            'npm install nodejs'
           
        ],
        tags: ['nodejs'],
        img: ''
    },
    {
        id: 4,
        title: 'Comprobar si tinc nodejs',
        info: [
            'Obrir terminal o CMD, i escriute “node –v”, si apareix un número, es que tot esta correcte'
           
        ],
        tags: ['nodejs', 'node-v'],
        img: ''
    }, {
        id: 5,
        title: 'Eines: Ide ->  visual studio code',
        info: [
            'Instalar Visual Studio Code  https://code.visualstudio.com/'
           
        ],
        tags: ['visual studio code', 'https://code.visualstudio.com/'],
        img: ''
    }, {
        id: 6,
        title: 'Eines: Navegador i extensions -> Chrome: react developer tools',
        info: [
            'Farem servir Chrome i instalarem la Extensió React Developer Tools'
        ],
        tags: ['chrome', 'react developer tools', 'chrome extensions'],
        img: ''
    }, {
        id: 7,
        title: 'Eines: comprobar react devtools',
        info: [
            'Obrir Chrome  -> Click dret -> Inspeccionar Elemento -> Obrir web que sabem usa React (x exemple “Instagram”). –  Si apareix “Components y Profiler” . Tot bé'
        ],
        tags: ['comprobar react devtools', 'inspeccionar elemento'],
        img: ''
    }, {
        id: 8,
        title: 'Eines: Visual studio code -> Plugins/Extensions',
        info: [
            'Obrir VS Code i començar a instalar aquestes extensions (no es obligatori), però us anirà millor a la vida, feu-me cas'
        ],
        tags: ['visual studio plugins', 'extensions'],
        img: ''
    },{
        id: 9,
        title: 'Eines: Vs code extensions / plugins',
        info: [
            'Terminal', 'React Native Tools', 'ES7/ React/Redux/Graphql/React', 
            'HTML Snippets', 'HTML Support', 
            'Javascript (ES6) code snippets', 'Babel Javascript'
        ],
        tags: ['Terminal', 'React Native Tools', 'ES7/ React/Redux/Graphql/React', 
            'HTML Snippets', 'HTML Support', 
            'Javascript (ES6) code snippets', 'Babel Javascript'],
        img: ''
    }, {
        id: 10,
        title: 'Creació primer projecte react',
        info: [
            'Obrim VS Code, i al Terminal escribim:  npx create-react-app yourProjectName'
        ],
        tags: ['npx create-react-app', 'Creació primer projecte'],
        img: ''
    },
     {
        id: 11,
        title: 'Obrir i iniciar projecte',
        info: [
            'Escribim al terminal integrat:  cd yourProjectName',
            'Això ens mou al directori on es el projecte de React que acabem de crear',
            'Ara escribim al terminal:     npm start',
            'Obrim Chrome i escribim:    localhost:3000'
        ],
        tags: ['npm start', 'localhost:3000', 'iniciar projecte'],
        img: ''
    }, {
        id: 12,
        title: 'File structure (Estructura d’arxius)',
        info: [
            'Al arxiu “app.js” canvia la paraula  “editar” y guarda, obre localhost:3000 i veuràs el canvi automàticament'
        ],
        tags: ['file structure', 'folder structure'],
        img: ''
    },{
        id: 13,
        title: 'Comandaments basics',
        info: [
            'npm start: Per iniciar el server en local amb auto reload, podem veure els canvis a localhost:3000',

            'npm build: Compila el projecte i crea els arxius necessaris per poder fer un “deploy” en producció. Tot apareixerà a la carpeta “build”', 'HTML Support', 
            'npm test: Fa tots els tests'
            ,
            'npm install: Instala/ reinstala/ actualitza totes les dependencias definides al package.json'
        ],
        tags: ['npm install', 'npm start', 'npm build'],
        img: ''
    }, {
        id: 14,
        title: 'Jsx',
        info: [
            'Es una extensió de la sintaxis de Javascript (conjunt de normes). (Javasctipt XML)',
            'JS (JavaScriptXml) tags tenen: noms, atributs i fills',
            'import React from "react"; -> per poder fer-ho servir',
            'Es la sintaxis que farem servir amb react, no es obligatori, però si aconsellable',
            'Mescla HTML y Javascript, permet unir lógica i presentación',
            'Es javascript que visualment sembla/recorda  HTML'


        ],
        tags: ['jsx', 'xml'],
        img: ''
    },
    {
        id: 15,
        title: 'Jsx: expresions',
        info: [
            'Per interpolar javascript, hem de fer servir els “curly braces”: {  “js”  }'


        ],
        tags: ['curly braces', 'jsx expresions'],
        img: ''
    },
    {
        id: 16,
        title: 'Jsx DIFERENCIA AMB HTML',
        info: [
            'HTML atributes i events han de ser camelCase a JSX i totes les etiquetes han d’estar tancades',

        ],
        tags: ['jsx vs html', 'className'],
        img: ''
    },
    {
        id: 17,
        title: 'Jsx exemple inline styles',
        info: [
        ],
        tags: ['jsx inline styles'],
        img: ''
    },
     {
        id: 18,
        title: 'Control d’events classics',
        info: [
        ],
        tags: ['onClick', 'onKeyDown', 'onMouseOver'],
        img: ''
    }, {
        id: 19,
        title: 'Passar parametres',
        info: ['Fem servir arrow functions dins de JSX. Cuidado de no possar directament la funció(“parametre”)'
        ],
        tags: ['passar parametres'],
        img: ''
    }, {
        id: 20,
        title: 'Components',
        info: [
            'Els components permeten separar la UI (Interfaç d’Usuari) en peces independents reutilitzables i pensar en cada component de forma aillada',
            'Els 3 bigs frameworks / libraries de JS (Angular,  Vue i React ) están basats en components'
        ],
        tags: ['components'],
        img: ''
    }, {
        id: 21,
        title: 'Components exemple visual',
        info: [
        ],
        tags: ['components'],
        img: ''
    }, {
        id: 22,
        title: 'Tipus de components ',
        info: [
        ],
        tags: ['stateless', 'statefull', 'functional', 'class', 'pure', 'impure', 'container', 'presentational'],
        img: ''
    }, {
        id: 23,
        title: 'Components funcionals: creació',
        info: [

        ],
        tags: ['components funcionals creacio'],
        img: ''
    }, {
        id: 24,
        title: 'Components funcionals us',
        info: [
        ],
        tags: ['Components funcionals us'],
        img: ''
    },
 {
        id: 25,
        title: 'Components de clase vs components funcionals',
        info: [

        ],
        tags: ['clase vs funcionals'],
        img: ''
    }, {
        id: 26,
        title: 'Components: afegir styling',
        info: [
        ],
        tags: ['Components styling', 'components css'],
        img: ''
    },
     {
        id: 27,
        title: 'Components importar arxiu d’estils locals',
        info: [

        ],
        tags: ['css locals'],
        img: ''
    }, {
        id: 28,
        title: 'Importar css framework',
        info: [
            'El més còmode/habitual es fer servir un css framework per augmentar la productivitat. (Material, Bootstrap…)',
            'https://getbootstrap.com/',
            'https://material.io/design',
            'https://geekflare.com/es/best-css-frameworks/'

        ],
        tags: ['bootstrap', 'material design', 'css framework'],
        img: ''
    }, {
        id: 29,
        title: 'Instalar Bootstrap a react',
        info: [
            'A terminal:   npm i bootstrap'
        ],
        tags: ['components de clase creacio'],
        img: ''
    }, {
        id: 30,
        title: 'Implementar Bootstrap a react',
        info: [
            'Importem al index.js la ruta on son els arxius de Bootstrap'
        ],
        tags: ['Components de clase us'],
        img: ''
    }, {
        id: 31,
        title: 'Com passar data entre components',
        info: [

        ],
        tags: ['pare a fill', 'fill a pare', 'props', 'callback function props'],
        img: ''
    }, {
        id: 32,
        title: 'PROPS EXEMPLE pasar props a COMPONENT FUNCIONAL',
        info: [
        ],
        tags: ['props component funcional'],
        img: ''
    }, {
        id: 33,
        title: 'PROPS EXEMPLE rebre props a COMPONENT FUNCIONAL',
        info: [

        ],
        tags: ['rebre props component funcional'],
        img: ''
    }, {
        id: 34,
        title: 'PROPS EXEMPLE pasar props a COMPONENT de clase',
        info: [
        ],
        tags: ['passar props component de clase'],
        img: ''
    }, {
        id: 35,
        title: 'PROPS EXEMPLE rebre props a COMPONENT de clase',
        info: [

        ],
        tags: ['rebre props component de clase'],
        img: ''
    }, {
        id: 36,
        title: 'De fill a pare: component pare',
        info: [
        ],
        tags: ['de fill a pare'],
        img: ''
    },
     {
        id: 37,
        title: 'De fill a pare: component fill',
        info: [
        ],
        tags: ['de fill a pare', 'component fill'],
        img: ''
    },
     {
        id: 38,
        title: 'state',
        info: [
            'Hi ha 2 tipus de dades que controlen un Component: props (les hem vist) i state'
        ],
        tags: ['state'],
        img: ''
    },
     {
        id: 39,
        title: 'State i setstate',
        info: [
        ],
        tags: ['state', 'setState'],
        img: ''
    }, {
        id: 40,
        title: 'Components lifecycle (nomes class components)',
        info: [
        ],
        tags: ['lifecycle', 'mounting', 'unmounting', 'updating'],
        img: ''
    },
     {
        id: 41,
        title: 'Components lifecycle:  mounting',
        info: [
        ],
        tags: ['mounting', 'constructor', 'getDerivedStateFromProps', 'componentDidMount', 'render'],
        img: ''
    }, {
        id: 42,
        title: 'Components lifecycle: mounting',
        info: [
        ],
        tags: ['mounting example', 'mounting', 'constructor', 'getDerivedStateFromProps', 'componentDidMount', 'render'],
        img: ''
    }
    , {
        id: 43,
        title: 'Components lifecycle: updating',
        info: [
        ],
        tags: ['updating',  'getDerivedStateFromProps',  'render', 'shouldComponentUpdate', 'getSnapshotBeforeUpdate', 'componentDidUpdate'],
        img: ''
    } , {
        id: 44,
        title: 'Components lifecycle: updating example',
        info: [
        ],
        tags: ['updating',  'getDerivedStateFromProps',  'render', 'shouldComponentUpdate', 'getSnapshotBeforeUpdate', 'componentDidUpdate'],
        img: ''
    } , {
        id: 45,
        title: 'Components lifecycle: unmounting',
        info: [
            'componentWillUnmount:  Quan el component es apunt de ser destruit del DOM',
            
        ],
        tags: ['unmounting', 'componentWillUnmount'],
        img: ''
    }, {
        id: 46,
        title: 'Components lifecycle: updating example',
        info: [
        ],
        tags: ['updating',  'getDerivedStateFromProps',  'render', 'shouldComponentUpdate', 'getSnapshotBeforeUpdate', 'componentDidUpdate'],
        img: ''
    } , {
        id: 47,
        title: 'Components lifecycle: unmounting',
        info: [
            'componentWillUnmount:  Quan el component es apunt de ser destruit del DOM',
            
        ],
        tags: ['unmounting', 'componentWillUnmount'],
        img: ''
    }, {
        id: 48,
        title: 'Components lifecycle: unmounting example',
        info: [
        ],
        tags: ['unmounting',  'componentWillUnmount'],
        img: ''
    } , {
        id: 49,
        title: 'React-router-dom per rutes i pàgines',
        info: [
            'Per les pàgines i les rutes farem servir:    “react-router-dom” ',
            'npm install react-router-dom'
        ],
        tags: ['react-router'],
        img: ''
    }, {
        id: 50,
        title: 'Rutes estàtiques',
        info: [
        ],
        tags: [  'rutes estàtiques'],
        img: ''
    } , {
        id: 51,
        title: 'rutes dinàmiques',
        info: [
        ],
        tags: ['rutes dinàmiques'],
        img: ''
    }, {
        id: 52,
        title: 'Rutes dinàmiques consultar el param a la página',
        info: [
        ],
        tags: [  'rutes dinàmiques params'],
        img: ''
    } , {
        id: 53,
        title: 'errors',
        info: [
            
        ],
        tags: ['errors'],
        img: ''
    }, {
        id: 54,
        title: 'Errors, que fer?',
        info: [
            'Llegir, normalmente a l’explicación ja et dona la solución.', 'Si no ho entenc, tallar la part del text del error i possar-lo a Google, la millor resposta normalmente es a una web que es diu stackoverflow'
        ],
        tags: ['errors que fer'],
        img: ''
    }, {
        id: 55,
        title: 'Rutes dinàmiques consultar el param a la página',
        info: [
        ],
        tags: [  'rutes dinàmiques params'],
        img: ''
    } , {
        id: 56,
        title: 'Hooks: usestate',
        info: [
            'Es una feature que ens permet tenir estat a components funcionals.'

        ],
        tags: ['hooks', 'useState'],
        img: ''
    }, {
        id: 57,
        title: 'Hooks: useeffect',
        info: [
            'Si, useState substitueix a state en functional components, useEffect ve a fer les tasques del componentDidMount. Es un métode que s’executa cada vegada que el component es renderitza i/o s’actualitza'
        ],
        tags: ['Hooks useeffect'],
        img: ''
    }, {
        id: 58,
        title: 'Hooks: altres',
        info: [
            'Hi ha més hooks, però no podem cobrir-los tots per falta de temps, adjunto link amb info de la resta de hooks i un petit tutorial que crec es molt útil.'
        ],
        tags: [  'Hooks: altres'],
        img: ''
    } , {
        id: 59,
        title: 'Hooks: Custom hooks',
        info: [
            'També podem fer hooks personalitzats',
            'Farem un hook que s’encarrega de fer un get de les dades. En aquest cas les dades les guardarem a un arxiu anomenat jsonData, però lo més habitual es que la consulta es fes fen una http request call.'

        ],
        tags: ['Hooks: Custom hooks'],
        img: ''
    },
    {
          id: 60,
        title: 'Temes que no he pogut cobrir pero que son importants',
        info: [
            'Forms    https://es.reactjs.org/docs/forms.html',
            'Redux  (per tenir l’estat centralitzat)  https://es.redux.js.org/',
            'Context api:   https://es.reactjs.org/docs/context.html',
            'Api Calls   https://es.reactjs.org/docs/faq-ajax.html'


        ],
        tags: ['api calls', 'redux', 'context api', 'http calls', 'get', 'post', 'forms'],
        img: ''
    },
    {
          id: 61,
        title: 'Fonts que he fet servir pel curs i on continuar aprenent',
        info: [
           'https://es.reactjs.org/docs/context.html',
           'https://es.reactjs.org/',
           'Cursos més avançats:    www.udemy.com',
           'https://www.youtube.com/watch?v=yFAIMEupsuo&list=PLIddmSRJEJ0vEBB6ECegg35IQ-sWjSDdo',
           'https://www.youtube.com/watch?v=yFAIMEupsuo&list=PLIddmSRJEJ0vEBB6ECegg35IQ-sWjSDdo'


        ],
        tags: ['react avançat'],
        img: ''
    }

    
]

export default data