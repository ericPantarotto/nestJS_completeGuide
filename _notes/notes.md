<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD024 -->
# **<span style='color: #6e7a73'>NestJS: The complete developer's guide**

## **<span style='color: #6e7a73'>Generic Comments**

### **<span style='color: #6e7a73'>Eslint**

**<span style='color: #ffc5a6'>Eslint - getting started:** [https://eslint.org/docs/latest/use/getting-started]

`npm init @eslint/config@latest`

### VSCode Editor - fold level

`CTRL + SHIFT + P: Fold level 2`

## **<span style='color: #6e7a73'>[Bonus] Appendix: TypeScript**

### **<span style='color: #6e7a73'>TypeScript Overview**

#### overview

Typescript = Javascript + **a type system**

![image info](./0_sc1.png)

- The only way to see a bug in Javascript is to execute the code
- once the app is deployed or before that run in a browser in a development environment/server, the entire *type system* goes away, the browser and Node.js don't know what Typescript is
- so all the extra syntax added to our code never makes it to the browser nor Node.js
- the typescript compiler compiles the typescript code and produces javascript code, which is what is executed
- unlike other strongly typed languages,  typescript compiler doesn't do any performance optimization

![image info](./0_sc2.png)

### **<span style='color: #6e7a73'>Environment Setup**

`npm i -g typescript ts-node`

`ts-node` is a command-line tool that allows to compile and execute typescript with a single command

**<span style='color: #f3b4ff'> Copilot** In the terminal, type the following command to check if TypeScript is installed: `tsc --version` If TypeScript is installed, this command will display the installed version of TypeScript.

`tsc --help`

![image info](./0_sc3.png)

from a terminal, in any location, you can open vscode with `code .` once you added *code* to path

![image info](./0_sc4.png)

from Settings / prettier: single quote + Settings / Editor: Tab Size

### **<span style='color: #6e7a73'>Important Update About ts-node and Axios**

In the upcoming lecture, we will be installing axios to use in our demo project. To use the latest versions of axios, we need to install the **@types/node** library:

`npm install --save-dev @types/node`

Also, Typescript 5.6 introduced some breaking changes related to imports. ts-node is currently not in sync with this since it has not seen an update since 2023.

In place of ts-node, you will need to use a different library to execute TS code throughout this course.

Instead of running the command as shown in the videos:

`ts-node index.ts`

Use npx tsx instead by running the following command:

`npx tsx index.ts`

### **<span style='color: #6e7a73'>A first app**

- `npm init -y`: to record a project's dependencies inside of a json file
- `npm i axios`

**<span style='color: #ffdf90'>IMPORTANT:** we cannot run typescript code inside the browser or with node.js, we have to first compile the file(s) into plain javascript.

- `tsc index.ts` to compile our typescript file
- `node index.js` to run the created `.js` file

**<span style='color: #bbffff'> Note:** to avoid running `tsc` command all the time, you can use this alternative

- `npm install --save-dev @types/node` & `npm install --save-dev tsx`
- `npx tsx index.ts`

### **<span style='color: #6e7a73'>Catching Errors with TypeScript**

in an `interface` you can ignore properties

As soon as we apply our interface to our response object, **Typescript detects error, during development**, inside the code editor, well before we compiled our code, or tested/ran it. That's the power of typescript and what it's all about!

![image info](./0_sc5.png)

### **<span style='color: #6e7a73'>Types**

Type:  easy way to refer to the different properties and functions that a value has

"red":

- it is a string
- it is a value that has all the properties + methods that we assume a string has

### **<span style='color: #6e7a73'>More on Types**

- string
- date
- boolean
- number
- other types defined in an interface, or built-in the language itself

![image info](./0_sc6.png)

### **<span style='color: #6e7a73'>Examples of Types**

the whole point of types: it is a shortcut to say here are the different properties and methods that this value right here has.

### **<span style='color: #6e7a73'>Type Annotations and Inference**

![image info](./0_sc7.png)

### **<span style='color: #6e7a73'> Annotations around Functions**

`(i: number) => void`, even though it looks like a function, there is no code invoked, it is a description of a function, we are not calling a function.

```typescript
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
```

**<span style='color: #ffdf90'>IMPORTANT:** if we go to our `variables.ts` and delete all the annotations for each value, our code editor will not show any error, this is because of *type inference*, where Typescript guesses the type itself.

### **<span style='color: #6e7a73'> Understanding Inference**
  
![image info](./0_sc8.png)

![image info](./0_sc9.png)

### **<span style='color: #6e7a73'>The Any type**

`JSON.parse(...);` is a function that returns `any`

![image info](./0_sc10.png)

**<span style='color: #bbffff'> Note:**

- TypeScript doesn't know what we're going to get out of `json.parse()` because it depends entirely on the string that we put into that function.
- in the code editor and we call Json.parse(), TypeScript just can't predict what we get back from the function because it will be entirely different based upon the string that we put in.
- So as a shortcut, TypeScript instead decides to simply say, it's not possible to guess all these different types and you get back back the `any` type.
- The `any` type essentially means that TypeScript has no idea what type of value is being returned from a function.

![image info](./0_sc11.png)

**<span style='color: #ffdf90'>IMPORTANT:** in general, that is a very bad thing to have `any` inside of our application. Remember the entire idea behind TypeScript is that we are using TypeScript to catch errors inside of our code editor and we're able to do that because of types.

**any time we have a variable of type, any, it is generally a bad thing because TypeScript can't do its job.**

### **<span style='color: #6e7a73'>More annotations around functions**

```typescript
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
```

The above annotation is an annotation for the variable. We were telling TypeScript, we're going to assign a value to this variable that's going to have this type.

### **<span style='color: #6e7a73'>Inference around functions**

![image info](./0_sc12.png)

**<span style='color: #bbffff'> Note:** If I now hover over the function, we see an annotation on the variable itself that says the function returns a number. So that's type inference in play. We did not add in a type return annotation, but TypeScript read the body of our function and it knows that we are going to return a number.

So just like we saw with inference before, with variable declarations, we have type inference around only the return value from a function.

![image info](./0_sc13.png)

**<span style='color: #ffdf90'>IMPORTANT:** So we don't have to add in that return annotation if we don't want to. However, you and I **always will**.

**<span style='color: #ffb3b3'>Error:** we are always going to use return annotations. It's because we could very easily make a mistake inside of a function and forget to return a value or even return an incorrect type.

we only annotate a function with the type `never` when we really truly never expect a function to return anything ever, if we at least expect it to return something eventually and only possibly throw an error, that's totally fine, We're still going to annotate it with whatever we expect it to eventually return.

### **<span style='color: #6e7a73'>Destructuring with Annotations**

The destructuring portion and the annotation are always going to be the two separate statements separated by that colon `:`

```typescript
const logWeatherDestruct = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
```

### **<span style='color: #6e7a73'>Arrays in Typescript**

`const carsByMake = [['f150'], ['corolla'], ['camaro']];`

**<span style='color: #bbffff'> Note:** you only need the `string[][]` syntax to initialize an empty nested array `const carsByMake: string[][] = [];`

### **<span style='color: #6e7a73'>Why typed arrays**

![image info](./0_sc14.png)

### **<span style='color: #6e7a73'>Multiple types in arrays**

**<span style='color: #ffdf90'>IMPORTANT:** we want as much as possible to avoid the `any` type, that's also the case for arrays, hence `const myDates: [] = []` yielding a type `any` should be avoided.

### **<span style='color: #6e7a73'>Tuples in Typescript**

**<span style='color: #bbffff'> Note:** A tuple: Array-like structure where each element represents some property of a record.

Remember that the order of the elements inside of a tuple has a specific meaning

### **<span style='color: #6e7a73'>Why Tuples**

Most notably, if you're ever working with a CSV file and you want to represent a single row, you might reach out to a tuple.

**<span style='color: #ffdf90'>IMPORTANT:**

- if we use a tuple to represent some meaningful data, it's really hard to look at tuple values and understand what they are describing. However, in an **object format, because we are forced to put in a key, it is immediately obvious what we are working with.**
- anytime we want to model a record or record it in our application, somehow we're going to stick with a JavaScript convention of reaching for an object as opposed to a tuple.

### **<span style='color: #6e7a73'>Long Type Annotations**

```typescript
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};
```

**<span style='color: #bbffff'> Note:** this type annotation is really long and hard to read. and if we another function that would take the same parameter, we would then have to duplicate the whole annotation.

### **<span style='color: #6e7a73'>Syntax Around Interfaces**

**<span style='color: #bbffff'> Note:** We are not only limited to expressing primitive values inside of an interface, we can instead express any different type we want to inside of an interface,

- like for example replacing a number by an instance of a date,
- or a function

### **<span style='color: #6e7a73'>Functions In Interfaces**

**<span style='color: #bbffff'> Note:** In Typescript you can pass additional properties / functions than what the interface requires

### **<span style='color: #6e7a73'>Code Reuse with Interfaces**

The two objects `civic` and `drink` represent very different things inside of our application, but they both have a `summary` function that returns a *string*. That means that they are both considered to be of `reportable` type. Because they are both of type reportable, we can use both old civic and drink with the function.

**<span style='color: #ffdf90'>IMPORTANT:** The point is that we can use a single interface to describe the shape or the different properties of very different objects. we can make these very different objects, interact with different functions that we create, like `printSummary`.

**So this encourages us to write somewhat generic looking functions.**

### **<span style='color: #6e7a73'>General plan with Interfaces**

![image info](./0_sc15.png)

### **<span style='color: #6e7a73'>Classes**

Classes: Blueprint to create an object with some fields (values) and methods (functions) to represent something

### **<span style='color: #6e7a73'>Basic Inheritance**

When we have a class that extends another, we can optionally choose to override different methods.

### **<span style='color: #6e7a73'>Class Method modifiers**

modifiers restrict access to different functions & variables, the default value is `public`

![image info](./0_sc16.png)

#### private

**<span style='color: #ffb3b3'>Error:**

![image info](./0_sc17.png)

when you assign `private` this function can only be called inside the class by other functions of the class itself.

**<span style='color: #ffb3b3'>Error:** f the child class has a different modifier than its parent class, if in a child class you override a method, you're not authorized to change its modifier.

### **<span style='color: #6e7a73'>Field in Classes**

`constructor(public color: string) {}` is a short version for below:

```typescript
class abc {
  color: string;
  constructor(color: string){
    this.color = color;
  }
}
```

**<span style='color: #bbffff'> Note:** Modifiers apply to class variable just as they do for methods.

### **<span style='color: #6e7a73'>Fields with inheritance**

If a child class has no constructor, then Typescript will execute the constructor of the parent.

### **<span style='color: #6e7a73'>Setting up Maps project**

- `npm init -y`
- `npm init @eslint/config@latest`
- `npm install --save-dev @types/node`
- `npm install --save-dev tsx`
- remove from `package.json` `"main": "index.js",` and then `npx parcel index.html`

### **<span style='color: #6e7a73'>Important Info about Faker**

IMPORTANT Info About Faker Installation

In the upcoming lecture, we will be installing the Faker library. You may notice that the GitHub repository for Faker is empty or is displaying some confusing messaging. The library currently no longer exists and is not being maintained.

A community fork of Faker was made to save the project: <https://github.com/faker-js/faker>

To use this library, you can install it by running: `npm i @faker-js/faker`

You'll then need to update all of your imports: `import { faker } from "@faker-js/faker";`

As of their v6 release, TS support is now native and does not require installing the @types declarations: <https://github.com/faker-js/faker#typescript-support>

### **<span style='color: #6e7a73'>Type Definition Files**

**<span style='color: #ffb3b3'>Error:** *Could not find a declaration file for module faker*

A type definition file is going to tell the TypeScript compiler all the different functions that are available inside this JavaScript library, what type of argument they take and what type of value those functions return.

you can think of these type definition files as like an adapter layer.

Sometimes **type definition files** will be installed automatically when you install a JavaScript library. That was the case for Axios.

`definitelyTypedProject`: type definition files for JavaScript libraries.

### **<span style='color: #6e7a73'>Using Type Definition Files**

`index.d.ts` is the typical type definition file, which only contains typescript syntax, its only goal is to describe the different types of values, object functions that exist inside the library

### **<span style='color: #6e7a73'>Google Maps Integration with TypeScript**

to check that the google maps api has been correctly installed you can enter `google` in the devtools console, and it should return an object.

Usually when we make use of TypeScript, we install dependencies using NPM and we import them with normal import statement.

However, this time we have added in a script directly to our HTML file `index.html`, and so that script is going to be added into our project as a **global variable**. It means that essentially inside of our devtools console,you can type `google`; this is a global variable, that is available everywhere inside of our project **without import statements**.

The only issue is that if we flip back over to our editor and inside of our `index.ts`, if just write out `google` by itself. we'll see an error message here that says cannot find any name *google*.

**<span style='color: #ffb3b3'>Error:** So the reason we are seeing this is that TypeScript just doesn't understand that there is a global variable available inside of our project.

**<span style='color: #bbffff'> Note:** We need to help TypeScript understand that there will be a global variable available inside of our project and we need to help it understand the different methods that are available on this google object, we need to install another type definition file: `npm install @types/google.maps`

**<span style='color: #ffdf90'>IMPORTANT:** The goal of a type definition file is to help TypeScript understand how a third party JavaScript library works.

![image info](./0_sc18.png)

### **<span style='color: #6e7a73'>Exploring Type Definition Files**

**<span style='color: #ffb3b3'>Error:**  If map is not showing change 100% to **100vh**

`<div id="map" style="height: 100vh"></div>`

**<span style='color: #ffb3b3'>Error:** Add a Reference to the Global Type

If the above doesn't work, you can explicitly reference the type definitions in your index.ts file by adding this at the top: `/// <reference types="google.maps" />`

**<span style='color: #ffb3b3'>Error:** Exposing Google Maps API key to Github / HTML:

Go to this address: <https://console.developers.google.com/apis>  
Click on "Credentials" > "Edit Key"  
Under "Application restrictions", select "HTTP referrers (web sites)"  
Under "Website restrictions", Click on "ADD AN ITEM"  
Type your website address (or "localhost", "127.0.0.1", "localhost:port" etc for local tests) in the text field and press ENTER to add it to the list  
SAVE and Use your key in your project

We can use a wrapping class, `CustomMap` to hide some methods exposed by the Google Maps Api, and only expose the one we want.

### **<span style='color: #6e7a73'>Adding Markers**

**<span style='color: #ffb3b3'>Error:** The map is initialized without a valid Map ID, which will prevent use of Advanced Markers.

Pass the Map ID to the `google.maps.Map` constructor  
Update the CustomMap class to include the mapId in the map options:

```javascript
constructor(divId: string) {
  this.googleMap = new google.maps.Map(
    document.getElementById(divId) as HTMLElement,
    {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
      mapId: 'YOUR_MAP_ID', // Add your Map ID here
    }
  );
}
```

<!---
[comment]: it works with text, you can rename it how you want

![image info](./1_sc1.png)

**<span style='color: #ffdf90'>IMPORTANT:**
**<span style='color: #bbffff'> Note:**
**<span style='color: #ffc5a6'>Link:**
**<span style='color: #ffb3b3'>Error:**
**<span style='color: #b0ffb6'> TabButton.jsx**
**<span style='color: #f3b4ff'> Copilot**

**<span style='color: #6e7a73'> Section**

<ins>text to underline</ins>

--- : horizontal line

| Property    | Description | Default |
| -------- | ------- | ------- |
| view engine  | The default engine extension to use when omitted. NOTE: Sub-apps will inherit the value of this setting.    | |
| views |  A directory or an array of directories for the application's views. If an array, the views are looked up in the order they occur in the array. | `process.cwd() + '/views'` |

-->

<!-- markdownlint-enable MD033 -->
<!-- markdownlint-enable MD024 -->