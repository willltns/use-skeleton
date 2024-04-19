`@ltns/use-skeleton` is a React hook used to display skeleton placeholders where content needs to wait for loading.


## Install

```shell
npm i @ltns/use-skeleton
# or
yarn add @ltns/use-skeleton
```


## Usage

> This package distributed with ESNext language level and ES modules system.
> It means that depending on your browser target you might need to transpile it. Every major
> bundler provides a way to transpile `node_modules` fully or partially.
> Address your bundler documentation for more details.


```tsx
import useSkeleton from '@ltns/use-skeleton';

const [ref, setAnimate] = useSkeleton('*')

return (
	<div ref={ref}>
		<div>Set the width of the element.</div>
		<div>Or use mocking text to expand the width of the element.</div>
	</div>
)
```


* You should enable **CSS Modules** in your project.
* In case your bundler supports tree-shaking (most of modern does) - both variants are equal and only
necessary code will get into your bundle. Direct hook imports should be considered otherwise.
