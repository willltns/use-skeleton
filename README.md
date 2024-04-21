`@ltns/use-skeleton` is a React hook used to display skeleton placeholders where content needs to wait for loading.

## Install

```shell
npm i @ltns/use-skeleton
# or
yarn add @ltns/use-skeleton
```

## Usage

```tsx
import useSkeleton from '@ltns/use-skeleton';

const [ref, setAnimate, animate] = useSkeleton('& > div');

return (
	<div ref={ref}>
		{animate ? 'Loading...' : null}
		<div>Set the width of the element.</div>
		<span style={{ display: 'inline-flex' }}>Or use mocking text to expand the width of the element.</span>
	</div>
);
```

> [!IMPORTANT]
>
> `CSS Modules` should be enabled.
>
> The skeleton inline element's `display` type should not be `inline`(the default for inline elements.), set it to `inline-flex` or `inline-block`.
>
> Use the `CSS Variables` feature for custom styling: `--ltns-skeleton-bg-color`, `--ltns-skeleton-sk-color`, `--ltns-skeleton-anim-str`.
>
> `transform` animation is better than `background-position` animation in rendering performance.

> This package distributed with ESNext language level and ES modules system.
> It means that depending on your browser target you might need to transpile it. Every major
> bundler provides a way to transpile `node_modules` fully or partially.
> Address your bundler documentation for more details.
