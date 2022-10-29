# react-native-custom-components
custom and reusable components for react-native
## Installation

```sh
npm install khaled-salem-custom-components
```

## Usage

```js
import { BackGround } from 'khaled-salem-custom-components';

export default function App() {
  const image = 'link your source';
  return (
    <BackGround image={image} opacity={0.1}>
      <Text style={styles.text}>Test custom image BG</Text>
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

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
