# Translation

It is possible to perform translations on the labels of the dimensions. This is
done by passing a class which contains a `.tr` method. This class is injected
into the aurelia components that require translation. If the tr method is not
defined on the instance it will throw an error.

```js

  import {I18N} from 'aurelia-i18n';

  /* ... */

  .plugin('aurelia-charts', charts => {
    charts.configure({
      Translator: I18N
    })
  })

  /* ... */

```

If no Translator is provided in the config it will not perform translation.

In future more complex translation techniques will be provided to have a higher
level of control over the way label's text is calculated.
