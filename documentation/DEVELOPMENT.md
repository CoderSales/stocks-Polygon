# DEVELOPMENT

## Take User Input

### Code

Search String:

- How to take user input in the Command Line in JavaScript?

Result Reference:

- [How to Get User Input from Command Line With JavaScript](https://linuxhint.com/get-user-input-from-command-line-with-javascript/#:~:text=Conclusion-,To%20get%20the%20user%20input%20from%20the%20command%20line%20with,prompts%20the%20user%20for%20input.)

_______________________________________________________;

Further detail:

```text
path to / link to
file
in repository:
```

```text
insert file path / link here
```

Pseudocode:

[Detail.md](/Detail.md)

_______________________________________________________;

### Debugging

prompt not defined javascript
See
@CoderSales/stocks-Polygon/@CoderSales's Stocks Polygon io project/Issue #21

``` bash
stocks-Polygon / Issue #21
```

#### steps

``` bash
npm install prompt-sync
```

**STEP:** (repeated from above)

``` JavaScript
var name = prompt("What's Your name?");
```

**Reference:**

- [prompt()](https://linuxhint.com/get-user-input-from-command-line-with-javascript/#:~:text=Conclusion-,To%20get%20the%20user%20input%20from%20the%20command%20line%20with,prompts%20the%20user%20for%20input.)

**STEP:**

``` text
- npm install prompt-sync
- Open the js file (name.js) in which you want to use prompt and import the prompt-sync
```

**Search:** `prompt not defined javascript``
**Result** [StackOverflow](https://stackoverflow.com/questions/54486307/referenceerror-prompt-is-undefined-how-would-i-fix-this-in-javascript)

``` text
asdf
```

- Use Flow instead of inbuilt TypeScript / JavaScript parser: [StackOverflow](https://stackoverflow.com/questions/48859169/error-types-can-only-be-used-in-a-ts-file-visual-studio-code-using-ts-che)

**STEP:** update package.json per [itsjavascript.com](https://itsjavascript.com/cannot-use-import-statement-outside-a-module#:~:text=Conclusion-,The%20Uncaught%20SyntaxError%3A%20cannot%20use%20import%20statement%20outside%20a%20module,%E2%80%9Cmodule%E2%80%9D%20inside%20the%20package.)

add:

``` json
   {
        // ...
        "type": "module",
        // ...
    }
```

**STEP:**

**Search:**

``` text
javascript import prompt-sync
```

**Substeps:**

Use code block from [StackOverflow](https://stackoverflow.com/questions/65852175/convert-prompt-sync-require-into-import-method)
to refactor import
as follows:

``` javascript
import promptSync from 'prompt-sync';

const prompt = promptSync();

// example usage:
// const result = prompt(message);
```

[Issue #21](https://github.com/CoderSales/stocks-Polygon/issues/21)
