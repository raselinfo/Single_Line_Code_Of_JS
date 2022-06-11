<h1 align="center">Cast a value as an array</h1>
<h5 align="center">Single Line Of Code In Javascript</h5>

### Cast a value as an array

```
function castArray(value) {
  if (Array.isArray(value)) return value;
  return [value];
}
castArray([10, 20]);

```
