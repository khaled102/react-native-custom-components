# React Native Custom Components

A collection of custom and reusable components for React Native.

## Installation

To use these custom components in your React Native project, simply install the package using npm:

```sh
npm install khaled-salem-custom-components
```

## Usage

Import the desired components from the package and integrate them into your app:

```js
import { BackGround } from 'khaled-salem-custom-components';

export default function App() {
  const imageSource = 'link to your image';
  return (
    <BackGround image={imageSource} opacity={0.1}>
      <Text style={styles.text}>Testing custom image background</Text>
    </BackGround>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    alignSelf: 'center',
    fontSize: 14,
  },
});

// ...
```

## Contributing

If you're interested in contributing to the project, please refer to the [contributing guide](CONTRIBUTING.md) for details on how to contribute and the development workflow.

## License

This project is licensed under the MIT License.
