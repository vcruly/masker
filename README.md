# masker - PHP and JavaScript library for add a mask of character or patterns to an input String.
Bring your String to the masquerade

## Installation
Small library, just import the file and you're ready to go. Or copy and paste the code. :construction_worker:

## PHP
```
include 'path to the masker.php file';
```
## Javascript / HTML
```
<script> src='path to the masker.js file' </script>
```
or 

```
import { masker, custom_masker } from 'path to masker.js file';
```

## Usage

### simple masker
`masker (String string, int lenght, int mask, String side);`

`Parameters`:
- `String` (obligatory) - `String` to `mask`
- `lenght` (optional) - `lenght` of the `mask`, default 7
- `mask` (optional) - type of the `mask`, default 0
  * 0 - abcdefghijklmnopqrstuvwxyz
  * 1 - ABCDEFGHIJKLMNOPQRSTUVWXYZ
  * 2 - 0123456789abcdefghijklmnopqrstuvwxyz
  * 3 - 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ
  * 4 - 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
- side (optional): side of the string to put the `mask`, default left
  * left
  * right
  * both
 
### custom masker

`custom_masker (String string, int lenght, String mask, side)`

`Parameters`:
- `String` (obligatory) - `String` to `mask`
- `lenght` (obligatory) - `lenght` of the `mask`
- `mask` (obligatory) - the `mask` to put in the `String`
- side (optional): side of the string to put the `mask`, default left
  * left
  * right
  * both


## Example
  ```
  masker('Hakuna matata');

  output: pgdfbiihakuna matata
  ```
```
custom_masker('Hakuna matata', 7, 'abcd453gh', 'right' );

output: `Hakuna matatab5gdccc`
```












