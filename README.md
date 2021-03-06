[![Netlify Status](https://api.netlify.com/api/v1/badges/e293b067-528a-484a-b230-72debd15ade0/deploy-status)](https://app.netlify.com/sites/react-awesome-mask-input/deploys)

# react-mask-input

An input component build to be used with custom masks

## Docs

[https://react-awesome-mask-input.netlify.app/](https://react-awesome-mask-input.netlify.app/)

## Installing

```
npm i react-awesome-mask-input
```

or

```
yarn add react-awesome-mask-input
```

## Using

To use it, you will need to import the component and use it like:

```js
import MaskInput from 'react-awesome-mask-input';
```

```js
<MaskInput type="text" mask="(99) 9999-9999" />
```

### Example

```js
<MaskInput type="text" mask={['(99) 9999-9999', '(99) 9 9999-9999']} placeholder="Phone number" />
```
