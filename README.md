## Angular Cressida
> Angular wrapper over [cressida](https://github.com/umayr/cressida) message generator library.

Since cressida is written for nodejs, so its quite pain in the ass to use it in browser applications yet alone within angular. So, `angular-cressida` serves this purpose.

##### Installation

``` bash
 # with npm
 $ npm install --save angular-cressida
 
 # with bower
 $ bower install --save angular-cressida
```

##### Usage

Inject `cressida` module in your application and then in your controller:

``` javascript
 angular
    .module('my-app', ['cressida'])
    .controller('ctrl', function($cressida){
        $scope.message = $cressida.create(/* options */);
    })
```
and then in your view:
``` html
  <p>
    {{ message('first name', '!empty') }} 
  </p>
  
  <!-- first name should not be empty. -->
```

For more information on cressida, read its [docs](https://github.com/umayr/cressida/blob/master/README.md).
