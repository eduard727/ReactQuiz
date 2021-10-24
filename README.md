
## Instrucciones: 
Dentro de la carpeta src se encuentra el archivo data.ts el cual va ser los datos a consumir.

Crear un componente Plant en el cual visualmente vamos a mostrar un card en el cual se muestre los detalles de cada planta como nombre, foto, descripción, y cantidad. Cada card debe tener un botón para agregar o eliminar items en la cantidad de plantas disponibles.

Dentro del componente App se va a manejar el estado local para este y sus componentes hijos, el estado tiene que tener las siguientes propiedades, una lista (array) de todos los elementos que vamos a mostrar, el id del elemento seleccionado del array y la cantidad de plantas del elemento seleccionado.

Cuando se da click dentro de un componente de Plant, vamos a actualizar el id del estado y la cantidad, y si se realiza click sobre algun boton de agregar o eliminar plantas, se actualiza el valor de cantidad y se actualiza el UI.

Validar por medio de conditional render cuando mostrar  los datos dentro del card del component Planta,  si la cantidad de plantas es 0 se muestra solo un mensaje que dice "Planta no está dispoible".

Si todas las plantas dentro del estado tiene como cantidad 0 o menos de 0 debe de mostrar otro componente que muestre un mensaje que diga “No hay plantas disponibles”, este componente maneja el null state.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
