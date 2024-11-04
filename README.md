# Error Notifier

A TypeScript library for displaying error pop-ups when console errors or unhandled exceptions occur. This is useful for testing and debugging applications by ensuring that errors are visually noticeable.

## Installation

To use this library, first clone the repository or download the source code. Then install TypeScript if you haven't already:

```bash
npm i js-error-notifier
```

## Usage

```typescript
import { errorNotifier } from 'js-error-notifier';

// Enable error notifications
errorNotifier.enable();
```

## How It Works

The `Index` class overrides `console.error` and listens for window-level errors and unhandled promise rejections.  
When an error occurs, a pop-up notification appears in the bottom-right corner of the screen, displaying the error message.  
The notification disappears after 5 seconds.

## Example

Here's a simple example of how to use the library in your project:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Error Notifier Example</title>
</head>
<body>
  <script src="dist/Index.js"></script>
  <script>
    // Import and enable the error notifier
    errorNotifier.enable();

    // Example errors
    console.error("This is a test error!");
  </script>
</body>
</html>
```

## Customization

The current version of the library has a fixed style for error pop-ups.  
Future updates may include customizable styles, positions, and more.

## License

This library is open-source and distributed under the [MIT License](LICENSE).
