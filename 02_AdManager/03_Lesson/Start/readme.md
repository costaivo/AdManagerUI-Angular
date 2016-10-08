# Lesson 02 -- Building your first Component and Module
----------
## Lesson Contents
1. Adding the root component - AppComponent
2. Adding the root module    - AppModule
3. Bootstrapping the application
4. Call the `am-app` selector in `index.html` file
5. Running the application

> Tip: To grasp the concepts properly, It is **strongly** recommended that you type out all the code instead of copy + pasting it. 


## 1.  Adding the root component - AppComponent
 * Add `app.component.ts` file in the app folder
``` typescript
//import Component from angular core
import {Component} from '@angular/core';
            
//define the metadata for the component using decorator
@Component({
    selector:'am-app',
    template:`<div ><h1> {{pageTitle}} : Ad Manager</h1>
    </div>`
})
            
//create class for the component
export class AppComponent{
    pageTitle:string = "Digital Ads ";
}
```
----------
### Explanations 

**Import**

`import {Component} from '@angular2/core';`
> when we need something from a module or library, it has to be imported using the import statement.
> In the current example we have imported the **Angular 2 core** so that our component code can have access to the @Component  decorator. 

**@Component**
``` typescript
 @Component({
      selector:'am-app',
      template:`<div >
      <h1> {{pageTitle}} : Ad Manager</h1>
       </div>`
     })
```  
> Component is a decorator function that takes metadata object as argument. The main objective of it is to add meta-data to the application that will tell **Angular 2** how to process a class. 

> **selector :** defines the name of the HTML tag. whenever Angular encouters a `am-app` it will create and display an instance of AppComponent.

> **template :** this part defines the html template. It tells Angular how to render the component view. 

**Component Class**
``` typescript
export class AppComponent{
  pageTitle:string = "Digital Ads ";
}
```

## 2. Adding the root module - AppModule
 * Add `app.module.ts` file in the app folder
``` typescript
//import the NgModule decorator function.
import { NgModule }      from '@angular/core';

//import the  BrowsesrModule.This is an web application that will run in a browser, hence this module is required.
import { BrowserModule } from '@angular/platform-browser';

//import our root component
import { AppComponent }   from './app.component';

//@NgModule takes a metadata object that tells Angular how to compile and run module code. 
//It identifies the module's own components, directives and pipes, making some of them public 
//so external components can use them. It may add service providers to the application dependency injectors.
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent],
    bootstrap:    [AppComponent]
})

//create class for the module
export class AppModule { }
```

----------
### Explanations 
Every application has minimum one module,the root module is usually named as AppModule. 
Modules allow organizing the application, they contain related components,directives and pipes which work togther.

An Angular Module is a class decorated with @NgModule metadata. 
- list the components,directives and pipes contained in the module.
- provide services at the application level that any component can use. 
- import external modules which might be needed by components in this module.
- make some of those classes public so that other components templates can use them. 


#### 2. Bootstrapping the application
* Add `main.ts` file in the app folder.
```typescript
// import bootstrap 
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
        
// import our root module
import {AppModule} from './app.module';
        
//bootstrap the component
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
```
----------
### Explanations 
The code in main.ts file initializes the platform that the application runs in, then it uses the platform to 
bootstrap the AppModule.

#### 4. Call the `am-app` selector in `index.html` file
* Call the `am-app` selector in html page
```html
<body>
    <!--TODO: Add your component here-->
    <am-app>Loading...</am-app>
</body>
```


### 5. Running the application
Open a command prompt in the project's root directory 
* Type: `npm install` This installs the dependencies as defined in the package.json file.

* Type: `npm start` This launches the TypeScript compiler (tsc) to compile the application and wait for changes. It also starts the lite-server and launches the browser to run the application.

Open the browser and navigate to port http://localhost:3000/
![Digital Ads Splash](https://snag.gy/QJHSW9.jpg "Final Output Screen")

